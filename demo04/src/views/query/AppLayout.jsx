import React, { Component, PropTypes } from 'react';
import HeaderNav from '../../components/HeaderNav.jsx' ;
import QuerySection from './QuerySection.jsx';
import OperNavBar from './OperNavBar.jsx' ;
import BrandGroupPanel from './BrandGroupPanel.jsx' ;

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
    this.state = {list:[] };
  }
  handleQueryBrand(param){
    console.info(JSON.stringify(param)) ;
    setTimeout(function(){
      this.setState({list:listData}) ;
    }.bind(this),300) ;
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
                      return  (
                        <BrandGroupPanel
                          s5 = {item}
                          key ={item.id}
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
