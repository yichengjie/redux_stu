import React,{Component} from 'react' ;
var {Form,FormControl,FormSubmit,RadioGroup} = require('./lib/rctui') ;
export default class App extends Component{
    constructor(props){
        super(props) ;
        this.state ={layout:"inline"} ;
    }
    handleChangeLayout(value){
      this.setState({"layout":value});
    }
    render(){
      return (
        <Form layout={this.state.layout}>
          <FormControl name="text" label="text" type="text" grid={{width:6/24}} responsive="sm" min={2} max={6} />
          <FormControl name="email" label="email" type="email" />
          <FormControl name="select" label="select" data={["中国", "美国", "俄罗斯", "德国", "日本", "法国", "英格兰"]} type="select" />
          <RadioGroup inline={true}
            value={this.state.layout}
            data={[{ "id": "inline", "text": "inline" },
                   { "id": "aligned", "text": "aligned" },
                   { "id": "stacked", "text": "stacked" }]}
            onChange={this.handleChangeLayout.bind(this)}
          />
          <FormSubmit>
            <span>提交</span>
          </FormSubmit>
        </Form>


      ) ;
    }
}
