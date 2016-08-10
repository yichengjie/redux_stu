import {VALIDATION_INPUT} from '../../actions/edit/actions.js' ;


export default function fieldErrors(state = {}, action) {
  switch (action.type) {
    case VALIDATION_INPUT:
    
      return state ;
    default:
      return state ;
  }
}
