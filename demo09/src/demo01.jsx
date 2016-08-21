import React,{Component} from 'react' ;
//var ReactUI = require('rctui') ;
//import ReactUI,{Grid} from 'rctui' ;
//var Grid = require('rctui/Grid.js')
var ReactUI = require('./lib/rctui') ;
var Grid = ReactUI.Grid ;
var Button = ReactUI.Button ;


export default class App extends Component{
    constructor(props){
        super(props) ;
    }
    render(){
      return (
        <div>
          <Button status="primary">Primary</Button>
          <Button status="success">Success</Button>
          <Button status="warning">Warning</Button>
          <Button status="error">Error</Button>
          <Button status="info">Info</Button>
          <Button>Normal Button</Button>
        </div>
      ) ;
    }
}
