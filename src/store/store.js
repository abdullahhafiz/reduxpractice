import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore } from 'redux';
import rootReducer from './rootReducer';

const enhancer = composeWithDevTools();

const store = createStore(rootReducer,enhancer);
export default store;