import React ,{Component} from 'react';
import RecordS5Item from '../../containers/query/RecordS5Item.js' ;
import RecordS7Item from '../../containers/query/RecordS7Item.js' ;

class BrandGroupPanel extends Component {
  constructor(props) {
    super(props) ;
    this.state ={
      showS7Flag:false
    } ;
  }
  static defaultProps () {
     return{
       showS7Flag: false
     };
  }
  componentDidMount(){
    if(this.props.showS7Flag){
       this.setState({showS7Flag:true}) ;
    }
  }
  handleChangeShowHide(){
    this.setState({showS7Flag:!this.state.showS7Flag}) ;
  }
  render (){
    let {id} = this.props.s5 ;
    return (
      <div className="panel panel-default brand_group" >
          <div className="panel-heading">
            <div className="panel-title">
              <RecordS5Item
                s5 = {this.props.s5}
                checkFlag = {this.props.checkFlag}
                handleSelectS5 = {this.props.handleSelectS5}
                handleChangeShowHide ={this.handleChangeShowHide.bind(this)}
              />
            </div>
          </div>
          <div className= {this.state.showS7Flag ?"panel-body":"panel-body hidden"} >
              <ul>
              {
                this.props.s5.list.map((item,index) => {
                  return (
                    <RecordS7Item
                      s7 = {item}
                      key ={item.id}
                      index = {index+1}
                      s5Id = {id}
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
export default BrandGroupPanel ;
