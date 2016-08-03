import React, { Component, PropTypes } from 'react';

class QuerySection extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
        <div className ="query_section">
            <div className="query_row">
                <span className="query_title">发布状态 | 生效状态</span>
                <input id ="c1" type="checkbox"/> <label htmlFor="c1" className="query_item">未发布</label>
                <input id ="c2" type="checkbox" className="query_item"/><label htmlFor="c2">已发布</label>
                <span className="marginLR5">|</span>
                <input  id ="c3" type="checkbox"/><label htmlFor="c3"> 未生效</label>
                <input  id ="c4" type="checkbox"/> <label htmlFor="c4">已生效</label>
                <input  id ="c5" type="checkbox"/> <label htmlFor="c5">已过期</label>
                <span className="marginL10 marginR5">品牌集名称</span>
                <input type="text" className="common_input" style={{"width": "120px"}}/>
                <span className="marginL10 marginR5">品牌集名称</span>
                <input type="text" className="common_input" style={{"width": "120px"}}/>
                <span className="pull-right marginR15">
                    <button type="button" className="btn btn-sm btn-primary" >查询</button>
                </span>
            </div>
            <div className="query_row">
                <span className="marginL10 marginR5">城市对</span>
                <input type="text" className="common_input" style={{"width": "60px"}}/>
                <span style={{"margin": "0 2px"}}>-</span>
                <input type="text" className="common_input" style={{"width": "60px"}}/>
                <span className="marginL10 marginR5">发布对象</span>
                <input type="text" className="common_input" style={{"width": "120px"}} placeholder="office号/IATA号" />
                <span className="marginL10 marginR5">销售日期</span>
                <input type="text" className="common_input" style={{"width": "100px"}} placeholder="范围" />
                <span style={{"margin": "0 2px"}}>-</span>
                <input type="text" className="common_input" style={{"width": "100px"}} placeholder="范围" />
            </div>
        </div>
    ) ;
  }
}

export default QuerySection ;
