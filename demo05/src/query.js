import React,{Component} from 'react';
import {render} from 'react-dom';
import AppLayout from './containers/query/AppLayout.js' ;
import store from './stores/query/store.js' ;
import { Provider } from 'react-redux' ;
render(
	<Provider store={store}>
		<AppLayout/>
	</Provider>,
	document.getElementById('app')
) ;
