import { combineReducers, createStore } from 'redux' ;
import brandGroup from '../../reducers/edit/brandGroup.js' ;
let reducer = combineReducers({
	 brandGroup
}) ;
let store = createStore(reducer) ;
export default store;
