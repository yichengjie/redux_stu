import {UPDATE_FIELDERRORS} from '../../actions/edit/actions.js' ;

export default function fieldErrors(state = {}, action) {
  switch (action.type) {
    case UPDATE_FIELDERRORS:
      return  Object.assign({},state,action.param);
    default:
      return state ;
  }
}
