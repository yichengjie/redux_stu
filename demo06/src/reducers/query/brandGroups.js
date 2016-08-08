import {QUERY_BRANDGROUPS,DELETE_BRAND,DELETE_BRANDGROUP,
  ADD_BRANDGROUP,ADD_BRANDG} from '../../actions/query/actions.js' ;
import _ from 'underscore' ;
export default function brandGroups(state = [], action) {
  switch (action.type) {
    case QUERY_BRANDGROUPS:
      return action.brandGroups;
    case DELETE_BRAND :
      return state.map((item) => {
        if(item.id ===action.param.groupId){
           let list2 = item.list.filter((item) => {
              if(item.id !== action.param.id){
                return true ;
              }
           });
           item.list = list2 ;
        }
        return item ;
      });
    case DELETE_BRANDGROUP :
      return state.filter((item) => {
        if(_.contains(action.param,item.id)){
          return false;
        }
        return true;
      }) ;
    case ADD_BRANDGROUP:
      return [...state,action.param];
    case ADD_BRANDG:
      return state.map((item) => {
        if(item.id === action.param.groupId){
          item.list = [...item.list,action.param.brandObj] ;
        }
        return item ;
      });
    default:
      return state;
  }
}
