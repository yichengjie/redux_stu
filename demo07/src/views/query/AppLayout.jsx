import React, { Component, PropTypes } from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from '../../containers/query/QuerySection.js';
import OperNavBar from '../../containers/query/OperNavBar.js' ;
import BrandGroupPanel from './BrandGroupPanel.jsx' ;
var _ = require('lodash');

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
          <div className="container-fluid main_content" id="main_content" >
              <OperNavBar/>
              <span className="clearfix"></span>
              <div id="brand_group_list">
                  {
                    this.props.brandGroups.map((item,index) => {
                      //let checkFlag =  _.contains(this.props.brandGroupIds,item.id) ;
                      let checkFlag = (_.indexOf(this.props.brandGroupIds,item.id) != -1) ;
                      return  (
                        <BrandGroupPanel
                          showS7Flag = {index===0}
                          s5 = {item}
                          key ={item.id}
                          checkFlag = {checkFlag}
                        />
                      ) ;
                    })
                  }
              </div>
          </div>
      </div>
    ) ;
  }
}
export default AppLayout ;
