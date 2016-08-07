import React ,{Component} from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import EditForm from './EditForm.jsx' ;
import _ from 'underscore' ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
  }
  handleInputChange(param){
    this.props.handleInputChange(param) ;
  }
  handleListInputChange(param){
    this.props.handleListInputChange(param) ;
  }
  handleTableAddLine({listName,addObj}){
    var listVo  = [...this.state[listName],addObj] ;
    //listVo.push(addObj) ;
    var obj =  {[listName]:listVo} ;
    this.setState(obj) ;
  }
  handleTableDeleteLine(listName){
    var listVo  = this.state[listName] ;
    var obj = null ;
    var evens = _.filter(listVo, function(item){
      return item.checked !== true;
    });
    if(evens.length==listVo.length){
      obj = {[listName]:listVo.slice(0,listVo.length-1) } ;
    }else{
      obj = {[listName]:evens} ;
    }
    this.setState(obj) ;
  }
  handleTableTrClick(listName,id){
      var listVo  = this.state[listName] ;
      var retList = listVo.map((item) => {
        if(item.id ==id){
          item.checked = true ;
        }else{
            item.checked = false ;
        }
        return item ;
      }) ;
      var obj = {[listName]:retList} ;
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
    console.info( '-----> ' + this.props.brandGroup.seqNum) ;
    return (
      <div className="app">
         <div className="navbar-fixed-top">
            <HeaderNav curNavItem = "2"/>
            <QuerySection
              handleSubmit = {this.handleSubmit.bind(this)}
            />
         </div>
         <div className="container-fluid main_content" id="main_content" >
           <EditForm  {...this.props.brandGroup}
              handleInputChange ={this.handleInputChange.bind(this)}
              handleListInputChange={this.handleListInputChange.bind(this)}
              handleTableAddLine = {this.handleTableAddLine.bind(this)}
              handleTableDeleteLine = {this.handleTableDeleteLine.bind(this)}
              handleTableTrClick = {this.handleTableTrClick.bind(this)}
            />
         </div>
      </div>
    ) ;
  }
}

export default AppLayout;
