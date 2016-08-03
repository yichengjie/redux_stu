import React ,{Component} from 'react';

class QuerySection extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div className ="query_section">
        <div className="query_row">
            <span className="query_title">新建品牌集</span>
            <span className="marginLR5">品牌集</span>
            <span className="pull-right marginR15">
                <button type="button" className="btn btn-sm btn-default">返回</button>
                <button type="button" className="btn btn-sm btn-success" >保存</button>
            </span>
        </div>
      </div>
    ) ;
  }
}

export default QuerySection;
