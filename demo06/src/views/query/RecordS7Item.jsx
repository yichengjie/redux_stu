import React ,{Component} from 'react';


class RecordS7Item extends Component {
  constructor(props) {
    super(props) ;
  }
  handleEditBrand(){
    let id = this.props.s7.id ;
    let s5Id = this.props.s5Id ;
    console.info('修改的s7 的id : '+ id," s5Id : " +s5Id) ;
  }
  handleDeleteBrand(){
    let id = this.props.s7.id ;
    let groupId = this.props.s5Id ;
    this.props.deleteBrand({groupId,id}) ;
  }
  render (){
    let {id,name,levelNum,desc} = this.props.s7 ;
    let index  = this.props.index;
    return (
      <li className="brand_list">
          <div className="brand_list_item item1">
            {index}
          </div>
          <div className="brand_list_item">
              <span className="brand_img brand_img_ca"></span>
          </div>
          <div className="brand_list_item">
              <p className="brand_name">{name}</p>
              <p>层级序号：{levelNum}</p>
              <p>{desc}</p>
          </div>
          <div className="brand_list_item pull-right">
              <p><i className="glyphicon glyphicon-search myhand"></i></p>
              <p><i className="glyphicon glyphicon-pencil myhand" onClick ={this.handleEditBrand.bind(this)}></i></p>
              <p><i className="glyphicon glyphicon-trash myhand"
                onClick = {this.handleDeleteBrand.bind(this)}></i></p>
          </div>
      </li>
    ) ;
  }
}
export default RecordS7Item ;
