import {createStore, applyMiddleware} from 'redux';

import reducer from '../Reducers';
import apiMiddleware from '../Middlewares/apiMiddleware';

const store =  createStore(reducer, applyMiddleware(apiMiddleware));
window.store = store;
export default store;
