import React ,{Component} from 'react';

class OperNavBar extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div className="pull-right clearfix" style={{"marginBottom": "8px"}}>
          <button type="button" className="btn btn-sm btn-success" >新建品牌集</button>
          <button className="btn btn-info btn-sm">发布</button>
          <button className="btn btn-warning btn-sm">截止</button>
          <button className="btn btn-danger btn-sm">删除</button>
      </div>
    ) ;
  }
}
export default OperNavBar ;
