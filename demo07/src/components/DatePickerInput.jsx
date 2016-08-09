import {Component} from 'react' ;
import ReactDOM from 'react-dom' ;

class DatePickerInput extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      value:''
    } ;
  }
  static defaultProps (){
    return {
      placeholder:'范围'
    };
  }
  handleInputChange(value){
    let name = this.props.name ;
    if(this.props.handleInputChange){
      this.props.handleInputChange({name,value}) ;
    }
    this.setState({value}) ;
  }
  componentDidMount(){
    let _self = this ;
    let input = ReactDOM.findDOMNode(this) ;
    var currDate = new Date();
    $(input).datepicker({
       minDate:currDate,
       showButtonPanel:true,
       onSelect:function(dateText,picker){
          _self.handleInputChange(dateText) ;
       }
     }) ;
  }
  render (){
    let value = this.props.value || this.state.value ;
    return (
      <input type="text"
        id = {this.props.id}
        className="form-control"
        name = {this.props.name}
        value = {value}
        placeholder={this.props.placeholder} />
    ) ;
  }
}
export default  DatePickerInput ;
