'use strict' ;
import { combineReducers, createStore } from 'redux' ;
import brandGroups from '../../reducers/query/brandGroups.js' ;
import brandGroupIds from '../../reducers/query/brandGroupIds.js' ;
let reducer = combineReducers({
	 brandGroups,
	 brandGroupIds
}) ;
//let store = createStore(reducer) ;
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
export default store;
//export default createStore(reducer) ;
