import React from 'react';
import ReactDOM from 'react-dom' ;
import {createStore} from 'redux' ;
import Counter from './components/Counter.jsx' ;
import counter from './reducers/index.js' ;

const store  = createStore(counter) ;
const rootEl = document.getElementById('root') ;


function render(){
	ReactDOM.render(
		<Counter
	      value={store.getState()}
	      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
	      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
	    />,
		document.getElementById('root')
	);
}

render() ;

store.subscribe(render) ;
