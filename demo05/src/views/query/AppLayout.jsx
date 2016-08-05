import React, { Component, PropTypes } from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import OperNavBar from './OperNavBar.jsx' ;
import BrandGroupPanel from './BrandGroupPanel.jsx' ;
import _ from 'underscore';
import $ from 'jquery' ;

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      checkedS5List:[]
    };
  }
  handleQueryBrand(param){
    this.props.queryBrandGroups(param) ;
  }
  handleSelectS5(id,checkFlag){
    if(checkFlag){
      this.setState({checkedS5List:[...this.state.checkedS5List,id]}) ;
    }else{
      this.setState({checkedS5List:_.without(this.state.checkedS5List,id)}) ;
    }
  }
  handleDeleteBrand (groupId,id){
    this.props.deleteBrand({groupId,id}) ;
  }
  handleDeleteBrandGroup(){
    console.info('delete brand group btn is click ...') ;
    let s5IdArr = this.state .checkedS5List;
    let newList =  _.filter(this.state.list,function(item){
      if(!_.contains(s5IdArr,item.id)){
        return true ;
      }
    }) ;
    this.setState({list:newList,checkedS5List:[]}) ;
  }
  render(){
    return (
      <div>
          <div className="navbar-fixed-top" id = "myheader">
              <HeaderNav/>
              <QuerySection handleQueryBrand = {this.handleQueryBrand.bind(this)}/>
          </div>
          <div className="container-fluid main_content" id="main_content" >
              <OperNavBar handleDeleteBrandGroup = {this.handleDeleteBrandGroup.bind(this)}/>
              <span className="clearfix"></span>
              <div id="brand_group_list">
                  {
                    this.props.brandGroups.map((item,index) => {
                      let checkFlag = _.contains(this.state.checkedS5List,item.id) ;
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
