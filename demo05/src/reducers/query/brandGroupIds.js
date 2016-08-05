import {ADD_SELECTBRANDGROUPID,CLEAR_SELECTBRANDGROUPID} from '../../actions/query/actions.js' ;
import _ from 'underscore' ;
export default function brandGroups(state = [], action) {
  switch (action.type) {
    case ADD_SELECTBRANDGROUPID:
      let {groupId,selectFlag} = action.param ;
      if(selectFlag){
        return [...state,groupId] ;
      }else{
        return _.without(state,groupId) ;
      }
    case CLEAR_SELECTBRANDGROUPID:
      return [] ;
    default:
      return state;
  }
}
