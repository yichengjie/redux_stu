import React, { Component, PropTypes } from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import OperNavBar from './OperNavBar.jsx' ;
import BrandGroupPanel from './BrandGroupPanel.jsx' ;
var _ = require('lodash');
import uniquid from 'uniquid' ;
import jsonData  from '../../api/jsonData.js' ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
  }
  handleQueryBrand(param){
    this.props.queryBrandGroups(param) ;
  }
  handleSelectS5(groupId,selectFlag){
    console.info(groupId,selectFlag) ;
    this.props.addSelectBrandGroupId({groupId,selectFlag}) ;
  }
  handleDeleteBrand (groupId,id){
    this.props.deleteBrand({groupId,id}) ;
  }
  handleDeleteBrandGroup(){
    let s5IdArr = this.props.brandGroupIds ;
    this.props.deleteBrandGroup(s5IdArr);
  }
  handleAddBrandGroup(){
    let id = uniquid('group_');
    let param = _.cloneDeep(jsonData.brandGroupModel);
    _.assign(param,{id}) ;
    this.props.addBrandGroup(param) ;
  }
  handleAddBrand(groupId){
    let id = uniquid('brand_') ;
    let brandObj = _.cloneDeep(jsonData.brandModel);
    _.assign(brandObj,{id}) ;
    let param = {groupId,brandObj} ;
    this.props.addBrand(param) ;
  }
  render(){
    return (
      <div>
          <div className="navbar-fixed-top" id = "myheader">
              <HeaderNav/>
              <QuerySection
                handleQueryBrand = {this.handleQueryBrand.bind(this)}
              />
          </div>
          <div className="container-fluid main_content" id="main_content" >
              <OperNavBar
                handleDeleteBrandGroup = {this.handleDeleteBrandGroup.bind(this)}
                handleAddBrandGroup = {this.handleAddBrandGroup.bind(this)}
              />
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
                          handleSelectS5 = {this.handleSelectS5.bind(this)}
                          handleDeleteBrand = {this.handleDeleteBrand.bind(this)}
                          handleAddBrand = {this.handleAddBrand.bind(this)}
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
