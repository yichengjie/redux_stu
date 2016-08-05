import API from '../../api/api.js' ;
export const QUERY_BRANDGROUPS = 'QUERY_BRANDGROUPS' ;
export const DELETE_BRAND = 'DELETE_BRAND' ;
export const DELETE_BRANDGROUP = 'DELETE_BRANDGROUP' ;
export const ADD_SELECTBRANDGROUPID = 'ADD_SELECTBRANDGROUPID' ;//selectBrandGroup
export const CLEAR_SELECTBRANDGROUPID = 'CLEAR_SELECTBRANDGROUPID' ;

export function queryBrandGroups(param) {
  //console.info('query brandgroup param is ',JSON.stringify(param)) ;
  let list =  new API().queryBrandGroup(param) ;
  return { type: QUERY_BRANDGROUPS,brandGroups:list} ;
}
export function deleteBrand(param){
  return {type:DELETE_BRAND,param} ;
}
export function deleteBrandGroup(param){
  return {type:DELETE_BRANDGROUP,param} ;
}

export function addSelectBrandGroupId(param){
  return {type:ADD_SELECTBRANDGROUPID,param} ;
}
export function clearSelectBrandGroupId(){
  return {type:CLEAR_SELECTBRANDGROUPID} ;
}
