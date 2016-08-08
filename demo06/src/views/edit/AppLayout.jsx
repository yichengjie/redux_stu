import React ,{Component} from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from '../../containers/edit/QuerySection.js';
import EditForm from '../../containers/edit/EditForm.js' ;
import _ from 'underscore' ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
  }
  render (){
    return (
      <div className="app">
         <div className="navbar-fixed-top">
            <HeaderNav curNavItem = "2"/>
            <QuerySection />
         </div>
         <div className="container-fluid main_content" id="main_content" >
           <EditForm />
         </div>
      </div>
    ) ;
  }
}

export default AppLayout;
