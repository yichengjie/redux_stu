import React ,{Component} from 'react';

 class TableFooter extends Component {
   constructor(props) {
     super(props) ;
   }
   render (){
     return (
       <div className="table_footer">
           <button type="button"
              onClick = {this.props.addTableLine.bind(this)}
              className="btn btn-success btn-sm" >增加一行</button>
           <button type="button"
              onClick = {this.props.deleteTableLine.bind(this)}
              className="btn btn-default btn-sm">删除一行</button>
       </div>
     ) ;
   }
 }
 export default TableFooter;
