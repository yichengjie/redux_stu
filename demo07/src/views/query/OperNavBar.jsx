import React ,{Component} from 'react';
import _ from 'lodash' ;
import uniquid from 'uniquid' ;
import jsonData  from '../../api/jsonData.js' ;

class OperNavBar extends Component {
  constructor(props) {
    super(props) ;
  }
  handleAddBrandGroup(){
    let id = uniquid('group_');
    let param = _.cloneDeep(jsonData.brandGroupModel);
    _.assign(param,{id}) ;
    this.props.handleAddBrandGroup(param) ;
  }
  handleDeleteBrandGroup(){
    let param = this.props.brandGroupIds ;
    this.props.handleDeleteBrandGroup(param) ;
  }
  render(){
    return (
      <div className="pull-right clearfix" style={{"marginBottom": "8px"}}>
          <button type="button"
            onClick = {this.handleAddBrandGroup.bind(this)}
            className="btn btn-sm btn-success" >新建品牌集</button>
          <button className="btn btn-info btn-sm">发布</button>
          <button className="btn btn-warning btn-sm">截止</button>
          <button
            onClick = {this.handleDeleteBrandGroup.bind(this)}
            className="btn btn-danger btn-sm">删除</button>
      </div>
    ) ;
  }
}
export default OperNavBar ;
