import React,{Component} from 'react';
import {render} from 'react-dom';
import AppLayout from './containers/edit/AppLayout.js' ;
import store from './stores/edit/store.js' ;
import {Provider} from 'react-redux' ;

render(
	<Provider store={store}>
		<AppLayout/>
	</Provider>,
	document.getElementById('app')
) ;
