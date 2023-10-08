// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./nft.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Marketplace is ReentrancyGuard {
    using Counters for Counters.Counter;

    Counters.Counter private _marketItemIds;
    Counters.Counter private _tokensSold;
    Counters.Counter private _tokensCanceled;

    address payable private owner;

    // Challenge: make this price dynamic according to the current currency price
    uint256 private listingFee = 0.045 ether;

    mapping(uint256 => MarketItem) private marketItemIdToMarketItem;

    struct MarketItem {
        uint256 marketItemId;
        address nftContractAddress;
        uint256 tokenId;
        address payable creator;
        address payable seller;
        address payable owner;
        string name;
        uint256 price;
        uint256 _type;
        bool sold;
        bool canceled;
    }

    event MarketItemCreated(
        uint256 indexed marketItemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address creator,
        address seller,
        address owner,
        string name,
        uint256 price,
        uint256 _type,
        bool sold,
        bool canceled
    );

    constructor() {
        owner = payable(msg.sender);
    }

    function getListingFee() public view returns (uint256) {
        return listingFee;
    }

    /**
     * @dev Creates a market item listing, requiring a listing fee and transfering the NFT token from
     * msg.sender to the marketplace contract.
     */
    function createMarketItem(
        address nftContractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 _type
    ) public payable nonReentrant returns (uint256) {
        require(price > 0, "Price must be at least 1 wei");
        // require(
        //     msg.value == listingFee,
        //     "Price must be equal to listing price"
        // );
        _marketItemIds.increment();
        uint256 marketItemId = _marketItemIds.current();

        address creator = NFT(nftContractAddress).getTokenCreatorById(tokenId);
        string memory nameNFT = NFT(nftContractAddress).tokenURI(tokenId);

        marketItemIdToMarketItem[marketItemId] = MarketItem(
            marketItemId,
            nftContractAddress,
            tokenId,
            payable(creator),
            payable(msg.sender),
            payable(address(0)),
            nameNFT,
            price,
            _type,
            false,
            false
        );

        IERC721(nftContractAddress).transferFrom(
            msg.sender,
            address(this),
            tokenId
        );

        emit MarketItemCreated(
            marketItemId,
            nftContractAddress,
            tokenId,
            payable(creator),
            payable(msg.sender),
            payable(address(0)),
            nameNFT,
            price,
            _type,
            false,
            false
        );

        return marketItemId;
    }

    function getAddressOwnerTokenid(
        address nftContractAddress,
        uint256 _tokenid
    ) public view returns (address) {
        return NFT(nftContractAddress).getTokenCreatorById(_tokenid);
    }

    /**
     * @dev Cancel a market item
     */
    function cancelMarketItem(
        address nftContractAddress,
        uint256 marketItemId
    ) public payable nonReentrant {
        uint256 tokenId = marketItemIdToMarketItem[marketItemId].tokenId;
        require(tokenId > 0, "Market item has to exist");

        require(
            marketItemIdToMarketItem[marketItemId].seller == msg.sender,
            "You are not the seller"
        );

        IERC721(nftContractAddress).transferFrom(
            address(this),
            msg.sender,
            tokenId
        );

        marketItemIdToMarketItem[marketItemId].owner = payable(msg.sender);
        marketItemIdToMarketItem[marketItemId].canceled = true;

        _tokensCanceled.increment();
    }

    /**
     * @dev Get Latest Market Item by the token id
     */
    function getLatestMarketItemByTokenId(
        uint256 tokenId
    ) public view returns (MarketItem memory, bool) {
        uint256 itemsCount = _marketItemIds.current();

        for (uint256 i = itemsCount; i > 0; i--) {
            MarketItem memory item = marketItemIdToMarketItem[i];
            if (item.tokenId != tokenId) continue;
            return (item, true);
        }

        // What is the best practice for returning a "null" value in solidity?
        // Reverting does't seem to be the best approach as it would throw an error on frontend
        MarketItem memory emptyMarketItem;
        return (emptyMarketItem, false);
    }

    /**
     * @dev Creates a market sale by transfering msg.sender money to the seller and NFT token from the
     * marketplace to the msg.sender. It also sends the listingFee to the marketplace owner.
     */
    function createMarketSale(
        address nftContractAddress,
        uint256 marketItemId
    ) public payable nonReentrant {
        uint256 price = marketItemIdToMarketItem[marketItemId].price;
        uint256 tokenId = marketItemIdToMarketItem[marketItemId].tokenId;
        require(
            msg.value == price,
            "Please submit the asking price in order to continue"
        );

        marketItemIdToMarketItem[marketItemId].owner = payable(msg.sender);
        marketItemIdToMarketItem[marketItemId].sold = true;

        marketItemIdToMarketItem[marketItemId].seller.transfer(msg.value);
        IERC721(nftContractAddress).transferFrom(
            address(this),
            msg.sender,
            tokenId
        );

        _tokensSold.increment();

        payable(owner).transfer(listingFee);
    }

    /**
     * @dev Fetch non sold and non canceled market items
     */
    function fetchAvailableMarketItems()
        public
        view
        returns (MarketItem[] memory)
    {
        uint256 itemsCount = _marketItemIds.current();
        uint256 soldItemsCount = _tokensSold.current();
        uint256 canceledItemsCount = _tokensCanceled.current();
        uint256 availableItemsCount = itemsCount -
            soldItemsCount -
            canceledItemsCount;
        MarketItem[] memory marketItems = new MarketItem[](availableItemsCount);

        uint256 currentIndex = 0;
        for (uint256 i = 0; i < itemsCount; i++) {
            // Is this refactor better than the original implementation?
            // https://github.com/dabit3/polygon-ethereum-nextjs-marketplace/blob/main/contracts/Market.sol#L111
            // If so, is it better to use memory or storage here?
            MarketItem memory item = marketItemIdToMarketItem[i + 1];
            if (item.owner != address(0)) continue;
            marketItems[currentIndex] = item;
            currentIndex += 1;
        }

        return marketItems;
    }

    // Fetch NFT List according to type
    function fetchMarketItemsByType(
        uint256 Type
    ) public view returns (MarketItem[] memory) {
        uint256 NumberOfMarketItem = _marketItemIds.current();
        uint256 numberofTypeItem = 0;

        uint256 indexType = 0;
        for (uint256 i = 0; i < NumberOfMarketItem; i++) {
            MarketItem memory item = marketItemIdToMarketItem[i + 1];
            if (item._type != Type) continue;
            numberofTypeItem++;
        }
        MarketItem[] memory marketTypeitems = new MarketItem[](
            numberofTypeItem
        );

        for (uint256 index = 0; index < NumberOfMarketItem; index++) {
            MarketItem memory data = marketItemIdToMarketItem[index + 1];
            if (data._type != Type) continue;
            marketTypeitems[indexType] = data;
            indexType += 1;
        }

        return marketTypeitems;
    }

    /**
     * @dev This seems to be the best way to compare strings in Solidity
     */
    function compareStrings(
        string memory a,
        string memory b
    ) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    /**
     * @dev Since we can't access structs properties dinamically, this function selects the address
     * we're looking for between "owner" and "seller"
     */
    function getMarketItemAddressByProperty(
        MarketItem memory item,
        string memory property
    ) private pure returns (address) {
        require(
            compareStrings(property, "seller") ||
                compareStrings(property, "owner"),
            "Parameter must be 'seller' or 'owner'"
        );

        return compareStrings(property, "seller") ? item.seller : item.owner;
    }

    /**
     * @dev Fetch market items that are being listed by the msg.sender
     */
    function fetchSellingMarketItems()
        public
        view
        returns (MarketItem[] memory)
    {
        return fetchMarketItemsByAddressProperty("seller");
    }

    /**
     * @dev Fetch market items that are owned by the msg.sender
     */
    function fetchOwnedMarketItems() public view returns (MarketItem[] memory) {
        return fetchMarketItemsByAddressProperty("owner");
    }

    /**
     * @dev Fetches market items according to the its requested address property that
     * can be "owner" or "seller". The original implementations were two functions that were
     * almost the same, changing only a property access. This refactored version requires an
     * addional auxiliary function, but avoids repeating code.
     * See original: https://github.com/dabit3/polygon-ethereum-nextjs-marketplace/blob/main/contracts/Market.sol#L121
     */
    function fetchMarketItemsByAddressProperty(
        string memory _addressProperty
    ) public view returns (MarketItem[] memory) {
        require(
            compareStrings(_addressProperty, "seller") ||
                compareStrings(_addressProperty, "owner"),
            "Parameter must be 'seller' or 'owner'"
        );
        uint256 totalItemsCount = _marketItemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemsCount; i++) {
            // Is it ok to assign this variable for better code legbility?
            // Is it better to use memory or storage in this case?
            MarketItem storage item = marketItemIdToMarketItem[i + 1];
            address addressPropertyValue = getMarketItemAddressByProperty(
                item,
                _addressProperty
            );
            if (addressPropertyValue != msg.sender) continue;
            itemCount += 1;
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint256 i = 0; i < totalItemsCount; i++) {
            // Is it ok to assign this variable for better code legbility?
            // Is it better to use memory or storage in this case?
            MarketItem storage item = marketItemIdToMarketItem[i + 1];
            address addressPropertyValue = getMarketItemAddressByProperty(
                item,
                _addressProperty
            );
            if (addressPropertyValue != msg.sender) continue;
            items[currentIndex] = item;
            currentIndex += 1;
        }

        return items;
    }
}
