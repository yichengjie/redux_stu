import React ,{Component} from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import EditForm from './EditForm.jsx' ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      fields:{
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
        listPubObjVo:[
          {type:'',code:''}
        ]
      }
    } ;
  }
  handleInputChange(name,value){
     var obj = {} ;
     obj[name] = value ;
     var tmp = Object.assign({},this.state.fields, obj) ;
     this.setState({"fields":tmp}) ;
  }
  handleSubmit(){
    console.info(JSON.stringify(this.state.fields)) ;
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
           <EditForm  {... this.state.fields}
            handleInputChange ={this.handleInputChange.bind(this)}
            />
         </div>
      </div>
    ) ;
  }
}

export default AppLayout;
