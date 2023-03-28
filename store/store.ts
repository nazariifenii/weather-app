import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let store: Store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
