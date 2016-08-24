import React,{Component} from 'react' ;
var {Form,FormControl,FormSubmit,RadioGroup} = require('./lib/rctui') ;
export default class App extends Component{
    constructor(props){
        super(props) ;
        this.state ={layout:"aligned"} ;
    }
    handleChangeLayout(value){
      this.setState({"layout":value});
    }
    render(){
      return (
        <Form layout={this.state.layout}>
          <FormControl required={true} grid={{width: 1/4}} type="text" min={2} max={10} />
          <FormControl grid={{width: 1/4}} type="url" />
          <FormControl grid={{width: 1/4}} type="date" />
          <FormControl grid={{width: 1/4}} type="time" />
          <FormControl grid={{width: 1/4}} type="datetime" />
        </Form>
      ) ;
    }
}
