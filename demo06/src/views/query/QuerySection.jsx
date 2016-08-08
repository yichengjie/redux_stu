import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import util  from 'util_lib' ;
class QuerySection extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      stateDesc:["1"],
      brandName:"",
      brandGroupName:"",
      startCity:"",
      endCity:"",
      pubObj:"",
      startDate:"",
      endDate:""
    };
  }
  componentDidMount(){
    this.handleQueryBrand() ;
  }
  handleQueryBrand(){
    let params = this.state ;
    util.showLoading() ;
    setTimeout(function(){
      this.props.queryBrandGroups(params) ;
      util.hideLoading() ;
    }.bind(this),1000) ;
  }
  handleInputChange(name,event){
    let value = event.target.value ;
    this.setState({[name]:value}) ;
  }
  handleCheckBoxChange(name,event){
    let value = event.target.value ;
    let checked = event.target.checked ;
    var list = this.state[name] ;
    var newList = [] ;
    if(checked){//选中
      newList = [...list,value] ;
    }else{//不选中
      newList = _.without(list,value) ;
    }
    this.setState({[name]:newList}) ;
  }
  render(){
    return (
        <div className ="query_section">
            <div className="query_row">
                <span className="query_title">发布状态 | 生效状态</span>
                <input id ="c1" type="checkbox" name = "stateDesc"
                  checked ={_.contains(this.state.stateDesc,"1")}
                  onChange = {this.handleCheckBoxChange.bind(this,'stateDesc')}
                  value ="1"/>
                <label htmlFor="c1" className="query_item">未发布</label>
                <input id ="c2" type="checkbox" name = "stateDesc"
                  checked ={_.contains(this.state.stateDesc,"2")}
                  onChange = {this.handleCheckBoxChange.bind(this,'stateDesc')}
                  value ="2"/>
                <label htmlFor="c2">已发布</label>
                <span className="marginLR5">|</span>
                <input  id ="c3" type="checkbox" name = "stateDesc"
                  checked ={_.contains(this.state.stateDesc,"3")}
                  onChange = {this.handleCheckBoxChange.bind(this,'stateDesc')}
                  value ="3"/>
                <label htmlFor="c3"> 未生效</label>
                <input  id ="c4" type="checkbox" name = "stateDesc"
                  checked ={_.contains(this.state.stateDesc,"4")}
                  onChange = {this.handleCheckBoxChange.bind(this,'stateDesc')}
                  value ="4"/>
                <label htmlFor="c4">已生效</label>
                <input  id ="c5" type="checkbox" name = "stateDesc"
                  checked ={_.contains(this.state.stateDesc,"5")}
                  onChange = {this.handleCheckBoxChange.bind(this,'stateDesc')}
                  value ="5"/>
                <label htmlFor="c5">已过期</label>

                <span className="marginL10 marginR5">品牌集名称</span>
                <input type="text" className="common_input"
                  onChange = {this.handleInputChange.bind(this,"brandName")}
                  style={{"width": "120px"}}/>
                <span className="marginL10 marginR5">品牌集名称</span>
                <input type="text" className="common_input"
                  onChange = {this.handleInputChange.bind(this,"brandGroupName")}
                  style={{"width": "120px"}}/>
                <span className="pull-right marginR15">
                    <button type="button"
                      onClick ={this.handleQueryBrand.bind(this)}
                      className="btn btn-sm btn-primary" >查询</button>
                </span>
            </div>
            <div className="query_row">
                <span className="marginL10 marginR5">城市对</span>
                <input type="text" className="common_input"
                  onChange = {this.handleInputChange.bind(this,"startCity")}
                  style={{"width": "60px"}}/>
                <span style={{"margin": "0 2px"}}>-</span>
                <input type="text" className="common_input"
                  onChange = {this.handleInputChange.bind(this,"endCity")}
                  style={{"width": "60px"}}/>
                <span className="marginL10 marginR5">发布对象</span>
                <input type="text" className="common_input"
                  onChange = {this.handleInputChange.bind(this,"pubObj")}
                  style={{"width": "120px"}} placeholder="office号/IATA号" />
                <span className="marginL10 marginR5">销售日期</span>
                <input type="text" className="common_input"
                  onChange = {this.handleInputChange.bind(this,"startDate")}
                  style={{"width": "100px"}} placeholder="范围" />
                <span style={{"margin": "0 2px"}}>-</span>
                <input type="text" className="common_input"
                  onChange = {this.handleInputChange.bind(this,"endDate")}
                  style={{"width": "100px"}} placeholder="范围" />
            </div>
        </div>
    ) ;
  }
}

export default QuerySection ;
