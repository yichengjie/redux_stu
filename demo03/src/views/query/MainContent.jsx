import React, { Component, PropTypes } from 'react';

class MainContent extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div className="container-fluid main_content" id="main_content" >
        <div className="pull-right clearfix" style={{"marginBottom": "8px"}}>
            <button type="button" className="btn btn-sm btn-success" >新建品牌集</button>
            <button className="btn btn-info btn-sm">发布</button>
            <button className="btn btn-warning btn-sm">截止</button>
            <button className="btn btn-danger btn-sm">删除</button>
        </div>
        <span className="clearfix"></span>


        <div id="brand_group_list">
            <div className="panel panel-default brand_group" >
              <div className="panel-heading">
                <div className="panel-title">
                    <div className="panel-title">
                        <div className="brand_title">
                            <span className="left text-info">
                                <input name ="checkAll" type="checkbox"/>
                                <i className="glyphicon glyphicon-upload marginL10" data-name="showHideBody"></i>
                                asgui_ca test
                                <i className="glyphicon glyphicon-info-sign pull-right descrImg" data-toggle="tooltip"
                                   data-placement="top"  title="描述信息为空"></i>
                            </span>
                            <span className="right">
                                <i className="glyphicon glyphicon-pencil marginR10 myhand"></i>
                                <button type="button" className="btn btn-success btn-sm">新建品牌</button>
                            </span>
                            <span className="center">
                               <span>序列号：8776559</span>
                               <span className="marginL10">城市对：<span className="bold">1 → 2</span></span>
                               <span className="marginL10">生效日期对：<span className="bold">2016-06-30 — 9999-12-31</span></span>
                               <span className="marginL10">旅行日期对：<span className="bold">2016-06-30 — 9999-12-31</span></span>
                               <span className="marginL10">发布对象：状态：<span className="text-danger">未发布</span></span>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel-body">
                    <ul></ul>
                </div>
               </div>
            </div>
        </div>
    ) ;
  }
}

export default MainContent ;
