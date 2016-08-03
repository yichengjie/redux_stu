import React ,{Component} from 'react';

class RecordS7Item extends Component {
  constructor(props) {
    super(props) ;
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
              <p><i className="glyphicon glyphicon-pencil myhand"></i></p>
              <p><i className="glyphicon glyphicon-trash myhand"></i></p>
          </div>
      </li>
    ) ;
  }
}
export default RecordS7Item ;
