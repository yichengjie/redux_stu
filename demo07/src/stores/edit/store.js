import { combineReducers, createStore } from 'redux' ;
import brandGroup from '../../reducers/edit/brandGroup.js' ;
import fieldErrors from '../../reducers/edit/fieldErrors.js' ;
let reducer = combineReducers({
	 brandGroup,
	 fieldErrors
}) ;
let store = createStore(reducer) ;
export default store;
