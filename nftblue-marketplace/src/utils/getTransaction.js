import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

const data = await alchemy.core.getAssetTransfers({
  fromBlock: "0x0",
  fromAddress: "0xA447A6494E75569AE68fe4F0c261C4121f29B49a",
  category: ["external", "internal", "erc20", "erc721", "erc1155"],
});

console.log('data achemy', data);