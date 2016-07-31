'use strict' ;
import { combineReducers, createStore } from 'redux' ;
import visibilityFilter from './reducers/visibilityFilter.js' ;
import todos from './reducers/todos.js' ;
let reducer = combineReducers({
	 visibilityFilter,
	 todos 
	}) ;

let store = createStore(reducer) ;

export {store} ;

//export default createStore(reducer) ; 