import {QUERY_BRANDGROUPS} from '../../actions/query/actions.js' ;
export default function brandGroups(state = [], action) {
  switch (action.type) {
    case QUERY_BRANDGROUPS:
      return action.brandGroups;
    default:
      return state;
  }
}
