import React, { Component, PropTypes } from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import OperNavBar from './OperNavBar.jsx' ;
import BrandGroupPanel from './BrandGroupPanel.jsx' ;
import _ from 'underscore';
import uniquid from 'uniquid' ;
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
    let title = 'asgui_ca test' ;
    let seqNum ='8776559' ;
    let startCity ='1' ;
    let endCity= '2' ;
    let startDate = '2016-06-30';
    let endDate = '9999-12-31' ;
    let travelStart = '2016-06-30' ;
    let travelEnd = '2016-06-30' ;
    let pubObj = '001' ;
    let stateDesc ='未发布' ;
    let list = [] ;
    var param = {id,title,seqNum,startCity,endCity,
        startDate,endDate,travelStart,travelEnd,pubObj,stateDesc,list} ;
    this.props.addBrandGroup(param) ;
  }
  render(){
    return (
      <div>
          <div className="navbar-fixed-top" id = "myheader">
              <HeaderNav/>
              <QuerySection handleQueryBrand = {this.handleQueryBrand.bind(this)}/>
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
                      //let checkFlag = _.contains(this.state.checkedS5List,item.id) ;
                      let checkFlag =  _.contains(this.props.brandGroupIds,item.id) ;
                      return  (
                        <BrandGroupPanel
                          showS7Flag = {index===0}
                          s5 = {item}
                          key ={item.id}
                          handleSelectS5 = {this.handleSelectS5.bind(this)}
                          handleDeleteBrand = {this.handleDeleteBrand.bind(this)}
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
