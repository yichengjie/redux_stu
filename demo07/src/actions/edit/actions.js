export const ADD_BRANDGROUP = 'ADD_BRANDGROUP' ;
export const HANDLE_INPUTCHANGE = 'HANDLE_INPUTCHANGE' ;// handleInputChange
export const HANDLE_LISTINPUTCHANGE = 'HANDLE_LISTINPUTCHANGE' ;//handleListInputChange
export const HANDLE_CLICKTR =  'HANDLE_CLICKTR' ;
export const ADD_TABLELINE = 'ADD_TABLELINE'  ;//addTableLine
export const DELETE_TABLELINE = 'DELETE_TABLELINE' ;
export const SUBMIT_FORM = 'SUBMIT_FORM' ;
export const VALIDATION_INPUT = 'VALIDATION_INPUT' ;


export function handleInputChange(param){
    return {type:HANDLE_INPUTCHANGE,param} ;
}

export function handleListInputChange(param) {
  return {type:HANDLE_LISTINPUTCHANGE,param};
}

export function addBrandGroup(param) {
  return {type:ADD_BRANDGROUP,param} ;
}

export function handleClickTr (param){
  return {type:HANDLE_CLICKTR,param} ;
}

export function addTableLine (param){
  return {type:ADD_TABLELINE,param} ;
}

export function deleteTableLine (param){
  return {type:DELETE_TABLELINE,listName:param} ;
}

export function submitForm(flag){
  return {type:SUBMIT_FORM,flag} ;
}

export function handleValidateInput(param){
  return {type:VALIDATION_INPUT,param} ;
}
