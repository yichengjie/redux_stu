import {QUERY_BRANDGROUPS,DELETE_BRAND} from '../../actions/query/actions.js' ;
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
    default:
      return state;
  }
}
