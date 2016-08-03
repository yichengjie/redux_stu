import React ,{Component} from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import EditForm from './EditForm.jsx' ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
  }
  render (){
    return (
      <div className="app">
        <div className="navbar-fixed-top">
            <HeaderNav/>
            <QuerySection/>
        </div>
        <div className="container-fluid main_content" id="main_content" >
          <EditForm/>
        </div>
      </div>
    ) ;
  }
}

export default AppLayout;
