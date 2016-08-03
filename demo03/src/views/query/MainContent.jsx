import React, { Component, PropTypes } from 'react';
import OperNavBar from './OperNavBar.jsx' ;
import BrandTitle from './BrandTitle.jsx' ;
import BrandItem from './BrandItem.jsx' ;

class MainContent extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div className="container-fluid main_content" id="main_content" >
          <OperNavBar/>
          <span className="clearfix"></span>
          <div id="brand_group_list">
              <div className="panel panel-default brand_group" >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <BrandTitle/>
                    </div>
                  </div>
                  <div className="panel-body">
                      <ul>
                        <BrandItem/>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
    ) ;
  }
}

export default MainContent ;
