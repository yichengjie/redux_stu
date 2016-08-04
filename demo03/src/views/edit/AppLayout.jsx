import React ,{Component} from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import EditForm from './EditForm.jsx' ;
import Immutable,{Map} from 'immutable';

var formData = {
    seqNum:"111",
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
    locDefine:"",
    listPubObjVo:
    {
      
    }
    [
      {id:'001',type:'I',code:'testcode'}
    ]
  } ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      fields:Immutable.fromJS(formData)
    } ;
  }
  handleInputChange(name,value){
    //uniquid('user_');
    var newFields = this.state.fields.setIn([name],value) ;
    this.setState({"fields":newFields});
  }
  handleListInputChange({listName,id ,name ,value}){

  }
  handleSubmit(){
    console.info("准备保存数据到后台 : " + JSON.stringify(this.state.fields)) ;
    console.info('操作中...') ;
    setTimeout(function(){
      console.info('保存数据成功!') ;
    },1000) ;
  }
  render (){
    return (
      <div className="app">
         <div className="navbar-fixed-top">
            <HeaderNav curNavItem = "2"/>
            <QuerySection
              handleSubmit = {this.handleSubmit.bind(this)}
            />
         </div>
         <div className="container-fluid main_content" id="main_content" >
           <EditForm  fields = {this.state.fields}
            handleInputChange ={this.handleInputChange.bind(this)}
            handleListInputChange={this.handleListInputChange.bind(this)}
            />
         </div>
      </div>
    ) ;
  }
}

export default AppLayout;
