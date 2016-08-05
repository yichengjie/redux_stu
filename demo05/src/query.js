import React,{Component} from 'react';
import {render} from 'react-dom';
import AppLayout from './views/query/AppLayout.jsx' ;
import store from './stores/query/store.js' ;

console.info(store.getState()) ;

render(
	<AppLayout/>,
	document.getElementById('app')
) ;
