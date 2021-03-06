import React, {Component} from 'react' ;
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
  handleInputChange2(value){
    let name = this.props.name ;
    if(this.props.handleInputChange){
      this.props.handleInputChange({name,value}) ;
    }
    this.setState({value}) ;
  }

  handleValidateInput(){
    if(this.props.handleValidateInput){
      console.info('validate .....') ;
      this.props.handleValidateInput(this.props.name);
    }
  }

  handleInputChange(event){
    let value = event.target.value ;
    console.info(value) ;
    this.handleInputChange2(value) ;
  }

  componentDidMount(){
    let _self = this ;
    let input = ReactDOM.findDOMNode(this) ;
    var currDate = new Date();
    $(input).datepicker({
       minDate:currDate,
       showButtonPanel:true,
       onSelect:function(dateText,picker){
          _self.handleInputChange2(dateText) ;
          if(_self.props.handleValidateInput){
             _self.props.handleValidateInput(_self.props.name);
          }
       }
     }) ;
  }
  render (){
    let value = this.props.value || this.state.value ;
    let name = this.props.name ;
    return (
      <input type="text"
        id = {this.props.id}
        className="form-control"
        name = {this.props.name}
        value = {value}
        onChange = {this.handleInputChange.bind(this)}
        placeholder={this.props.placeholder}
        onBlur = {this.handleValidateInput.bind(this)}
        />
    ) ;
  }
}
export default  DatePickerInput ;
