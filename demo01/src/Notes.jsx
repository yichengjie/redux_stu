import React from 'react';
import Note from './Note.jsx';
import Editable  from './Editable.jsx' ;

var notes = [{id:1,task:'task001',editing:false},{id:2,task:'task002',editing:true},{id:3,task:'task003',editing:false}] ;

var Notes = React.createClass({
  onDelete:function(id){
      console.info('hello world' + id) ;
  },
  onEdit:function(id){
     console.info('onEdit : ' + id) ;
  },
  onNoteClick:function(id){
    console.info('onNoteClick : ' + id) ;
  },
  render:function(){
    var arr = notes.map(({id,editing,task})=>{
       return (
          <li className ="list-group-item" key={id}>
            <Note name ="hello" onClick ="{this.onNoteClick.bind(null, id)}">
              <Editable
                 editing={editing}
                 value={task}
                 onEdit={this.onEdit.bind(null, id)} />
              <button className ="btn btn-success btn-small pull-right" onClick= {this.onDelete.bind(null,id)}>&times;</button>
            </Note>
         </li>
       ) ;
    }) ;
    return (
      <ul className ="list-group">{arr}</ul>
    ) ;
  }
}) ;

export default Notes ;