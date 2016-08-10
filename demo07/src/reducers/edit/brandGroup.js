import {ADD_BRANDGROUP,HANDLE_INPUTCHANGE,
  HANDLE_LISTINPUTCHANGE,HANDLE_CLICKTR,ADD_TABLELINE,DELETE_TABLELINE,
  SUBMIT_FORM}from '../../actions/edit/actions.js' ;
import _ from 'lodash' ;
let initState = {
  seqNum:"123",
  title:"",
  startDate:"",
  endDate:"",
  loc1:"",
  startCity:"",
  loc2:"",
  endCity:"",
  travelStart:"",
  travelEnd:"",
  desc:"",
  locDefine:"1",
  listPubObjVo:
  [
    {id:'001',type:'I',code:'',checked:true}
  ]
};

export default function brandGroup(state = initState, action) {
  switch (action.type) {
    case HANDLE_INPUTCHANGE:
      //return _.assign(state,tmpObj);
      return Object.assign({}, state, {[action.param.name]:action.param.value});
    case HANDLE_LISTINPUTCHANGE:
      let list1 = state[action.param.listName].map((item) => {
        if(item.id === action.param.id){
          item[action.param.name] = action.param.value ;
        }
        return item ;
      }) ;
      return _.assign({},state,{[action.param.listName]:list1}) ;
    case HANDLE_CLICKTR:
      var list2 = state[action.param.listName].map((item) => {
        if(item.id ==action.param.id){
          item.checked = true ;
        }else{
          item.checked = false ;
        }
        return item ;
      }) ;
      return _.assign({},state,{[action.param.listName]:list2}) ;
    case ADD_TABLELINE:
      var list3  = [...state[action.param.listName],action.param.addObj] ;
      return _.assign({},state,{[action.param.listName]:list3}) ;
    case DELETE_TABLELINE:
      var list4  = state[action.listName] ;
      var obj = null ;
      var evens = _.filter(list4, function(item){
        return item.checked !== true;
      });
      if(evens.length==list4.length){
        obj = {[action.listName]:list4.slice(0,list4.length-1) } ;
      }else{
        obj = {[action.listName]:evens} ;
      }
      return _.assign({},state,obj);
    case SUBMIT_FORM:
      if(action.flag){
        return initState ;
      }
      return state ;
    case VALIDATION_INPUT:

      break;
    case ADD_BRANDGROUP:
      return {};
    default:
      return state ;
  }
}
