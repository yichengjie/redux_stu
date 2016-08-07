export const ADD_BRANDGROUP = 'ADD_BRANDGROUP' ;
export const HANDLE_INPUTCHANGE = 'HANDLE_INPUTCHANGE' ;// handleInputChange
export const HANDLE_LISTINPUTCHANGE = 'HANDLE_LISTINPUTCHANGE' ;//handleListInputChange

export function handleInputChange(param){
    return {type:HANDLE_INPUTCHANGE,param} ;
}

export function handleListInputChange(param) {
  return {type:HANDLE_LISTINPUTCHANGE,param};
}

export function addBrandGroup(param) {
  return {type:ADD_BRANDGROUP,param} ;
}
