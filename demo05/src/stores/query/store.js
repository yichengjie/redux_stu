'use strict' ;
import { combineReducers, createStore } from 'redux' ;
import brandGroups from '../../reducers/query/brandGroups.js' ;
let reducer = combineReducers({
	 brandGroups
}) ;
let store = createStore(reducer) ;
export default store;
//export default createStore(reducer) ;
