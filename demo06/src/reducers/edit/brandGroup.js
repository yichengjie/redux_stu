import {ADD_BRANDGROUP,HANDLE_INPUTCHANGE,HANDLE_LISTINPUTCHANGE} from '../../actions/edit/actions.js' ;
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
    {id:'001',type:'I',code:'testcode',checked:true}
  ]
};

export default function brandGroup(state = initState, action) {
  switch (action.type) {
    case HANDLE_INPUTCHANGE:
      let tmpObj = {[action.param.name]:action.param.value} ;
      console.info(_.assign(state,tmpObj)) ;
      return _.assign(state,tmpObj);
    case HANDLE_LISTINPUTCHANGE:
      let list1 = state[action.param.listName].map((item) => {
        if(item.id === action.param.id){
          item[action.param.name] = action.param.value ;
        }
        return item ;
      }) ;
      return _.assign(state,{[action.param.listName]:list1}) ;
    case ADD_BRANDGROUP:
      return {};
    default:
      return state ;
  }
}
