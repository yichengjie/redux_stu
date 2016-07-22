import React from 'react';

var Note = React.createClass({
	render:function(){
		var {children,name} = this.props ;
		//var children = this.props.children ;
		return (
			<div>
			   {children}
			</div>
		) ;
	}
}) ;
export default Note ;


/*export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);*/


