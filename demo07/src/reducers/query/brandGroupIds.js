import {ADD_SELECTBRANDGROUPID,CLEAR_SELECTBRANDGROUPID} from '../../actions/query/actions.js' ;
import _ from 'underscore' ;
export default function brandGroups(state = [], action) {
  switch (action.type) {
    case ADD_SELECTBRANDGROUPID:
      if(action.param.selectFlag){
        return [...state,action.param.groupId] ;
      }else{
        return _.without(state,action.param.groupId) ;
      }
    case CLEAR_SELECTBRANDGROUPID:
      return [] ;
    default:
      return state;
  }
}
