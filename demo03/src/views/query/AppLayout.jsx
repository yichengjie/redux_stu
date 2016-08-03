import React, { Component, PropTypes } from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import MainContent from './MainContent.jsx';

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div>
        <div className="navbar-fixed-top" id = "myheader">
            <HeaderNav/>
            <QuerySection/>
        </div>
        <MainContent/>
      </div>
    ) ;
  }
}

export default AppLayout ;
