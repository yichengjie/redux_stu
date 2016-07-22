import React from 'react' ;

var Edit = React.createClass({
	render:function(){
		return (
		  <span onClick={this.props.onEdit}>
		    <span>edit: {this.props.value}</span>
		  </span>
		) ;
	}
}) ;


var Editable = React.createClass({
	render:function(){
		var {editing, value, onEdit} = this.props ;
		if(editing) {
		   return <Edit value={value} onEdit={onEdit} />;
		}
		return <span>value: {value}</span>;
	}
}) ;



export default Editable ;