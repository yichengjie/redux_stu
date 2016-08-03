import React ,{Component} from 'react';
import RecordS5Item from './RecordS5Item.jsx' ;
import RecordS7Item from './RecordS7Item.jsx' ;

class BrandGroupItem extends Component {
  constructor(props) {
    super(props) ;
  }
  render (){
    return (
      <div className="panel panel-default brand_group" >
          <div className="panel-heading">
            <div className="panel-title">
              <RecordS5Item s5 = {this.props.s5}/>
            </div>
          </div>
          <div className="panel-body">
              <ul>
              {
                this.props.s5.list.map((item,index) => {
                  return (
                    <RecordS7Item
                      s7 = {item}
                      key ={index}
                      index = {index+1}
                    />
                  ) ;
                })
              }
              </ul>
          </div>
      </div>
    ) ;
  }
}
export default BrandGroupItem ;
