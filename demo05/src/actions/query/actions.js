import API from '../../api/api.js' ;
export const QUERY_BRANDGROUPS = 'QUERY_BRANDGROUPS' ;
export const DELETE_BRAND = 'DELETE_BRAND' ;

export function queryBrandGroups(param) {
  //console.info('query brandgroup param is ',JSON.stringify(param)) ;
  let list =  new API().queryBrandGroup(param) ;
  return { type: QUERY_BRANDGROUPS,brandGroups:list} ;
}
export function deleteBrand(param){
  return {type:DELETE_BRAND,param} ;
}
