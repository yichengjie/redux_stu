import API from '../../api/api.js' ;
export const QUERY_BRANDGROUPS = 'QUERY_BRANDGROUPS' ;

export function queryBrandGroups() {
  let list =  new API().queryBrandGroup() ;
  return { type: QUERY_BRANDGROUPS,brandGroups:list} ;
}
