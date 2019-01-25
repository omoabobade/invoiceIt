import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index.jsx';
import thunk from 'redux-thunk';
import StateLoader from "./stateLoader.jsx";

const stateLoader = new StateLoader();
const persistedState = stateLoader.loadState();


export default function configureStore() {
  const store = createStore(
    rootReducer,
    persistedState,
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    */ applyMiddleware(thunk)
  );
  store.subscribe(() => {
    stateLoader.saveState(store.getState());
  });
  return store;
}