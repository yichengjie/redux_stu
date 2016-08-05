import React, { Component, PropTypes } from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import OperNavBar from './OperNavBar.jsx' ;
import BrandGroupPanel from './BrandGroupPanel.jsx' ;
import _ from 'underscore';
import $ from 'jquery' ;

let listData = [{
    id:'001',title:'asgui_ca test',seqNum:'8776559',startCity:'1',endCity:'2',
    startDate:'2016-06-30',endDate:'9999-12-31',travelStart:'2016-06-30',
    travelEnd:'2016-06-30',pubObj:'001',stateDesc:'未发布',list:[{
        id:"001",
        name:'xx001',
        levelNum:'10011',
        desc:'测试一下啊这里的描述信息'
      },
      {
        id:"002",
        name:'xx002',
        levelNum:'10013',
        desc:'测试一下啊这里的描述信息'
      },{
        id:"003",
        name:'xx003',
        levelNum:'10013',
        desc:'测试一下啊这里的描述信息'
      }
    ]
  }
];

class AppLayout extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      list:[],
      checkedS5List:[]
    };
  }
  handleQueryBrand(param){
    console.info(JSON.stringify(param)) ;
    //setTimeout(function(){
    this.setState({list:listData}) ;
    //}.bind(this),300) ;
  }
  handleSelectS5(id,checkFlag){
    //console.info("id : " +id,"checkFlag : "+ checkFlag) ;
    if(checkFlag){
      this.setState({checkedS5List:[...this.state.checkedS5List,id]}) ;
    }else{
      this.setState({checkedS5List:_.without(this.state.checkedS5List,id)}) ;
    }
  }
  handleDeleteBrand (s5Id,id){
    console.info("s5Id : " + s5Id,"id : "+ id) ;
    //1。找到s5
    //2.删除s5中的s7
    var tmpList = $.extend(true,{},this.state).list  ;
    for(let item of tmpList){
      if(item.id == s5Id){
        let list2 = item.list ;
        let list2_temp = _.filter(list2,function(i){
          if(i.id!=id ){
            return true ;
          }
        }) ;
        item.list = list2_temp ;
      }
    }
    this.setState({"list":tmpList}) ;
  }
  render(){
    return (
      <div>
          <div className="navbar-fixed-top" id = "myheader">
              <HeaderNav/>
              <QuerySection handleQueryBrand = {this.handleQueryBrand.bind(this)}/>
          </div>
          <div className="container-fluid main_content" id="main_content" >
              <OperNavBar/>
              <span className="clearfix"></span>
              <div id="brand_group_list">
                  {
                    this.state.list.map((item) => {
                      let checkFlag = _.contains(this.state.checkedS5List,item.id) ;
                      return  (
                        <BrandGroupPanel
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
