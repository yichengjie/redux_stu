import {QUERY_BRANDGROUPS,DELETE_BRAND,DELETE_BRANDGROUP} from '../../actions/query/actions.js' ;
import _ from 'underscore' ;
export default function brandGroups(state = [], action) {
  switch (action.type) {
    case QUERY_BRANDGROUPS:
      return action.brandGroups;
    case DELETE_BRAND :
      let {groupId,id} = action.param ;
      return state.map((item) => {
        if(item.id ===groupId){
           let list2 = item.list.filter((item) => {
              if(item.id !== id){
                return true ;
              }
           });
           item.list = list2 ;
        }
        return item ;
      });
    case DELETE_BRANDGROUP :
      let idArr = action.param ;
      return state.filter((item) => {
        if(_.contains(idArr,item.id)){
          return false;
        }
        return true;
      }) ;
    default:
      return state;
  }
}
