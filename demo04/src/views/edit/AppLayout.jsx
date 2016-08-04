import React ,{Component} from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import EditForm from './EditForm.jsx' ;
import _ from 'underscore' ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
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
      [
        {id:'001',type:'I',code:'testcode'}
      ]
    } ;
  }
  handleInputChange(name,value){
    //uniquid('user_');
    var obj = {} ;
    obj[name] = value ;
    //var newState = Object.assign({},this.state.fields,obj) ;
    //this.setState({"fields":newState});
    this.setState(obj) ;
  }
  handleListInputChange({listName,id ,name ,value}){

    console.info('listName : ' +listName , "id : " + id, "name : " + name ,"value : " + value) ;
    var listVo = this.state[listName] ;
    for(let item of listVo){
      if(item.id === id){
        item[name] = value ;
      }
    }

    console.info(listVo) ;

    var obj =  {} ;
    obj[listName] = listVo ;
    this.setState(obj) ;
  }
  handleSubmit(){
    console.info("准备保存数据到后台 : " + JSON.stringify(this.state)) ;
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
           <EditForm  {...this.state}
            handleInputChange ={this.handleInputChange.bind(this)}
            handleListInputChange={this.handleListInputChange.bind(this)}
            />
         </div>
      </div>
    ) ;
  }
}

export default AppLayout;
