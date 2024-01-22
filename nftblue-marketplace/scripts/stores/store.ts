
// import { createWrapper } from 'next-redux-wrapper';
// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import rootReducer from '../reducers/reducers';
// import rootSaga from '../redux-saga/saga';

// const sagaMiddleware = createSagaMiddleware();

// const makeStore = () => {
// 	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// 	sagaMiddleware.run(rootSaga);
// 	return store;
// };

// export const Wrapper = createWrapper(makeStore, { debug: false });


import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducers/reducers";

const middleware = [ thunk ]
const myStore = createStore(
    rootReducer,
//    applyMiddleware(...middleware)
)

export default myStore