import React,{Component} from 'react';
import {render} from 'react-dom';
import AppLayout from './views/edit/AppLayout.jsx' ;
import store from './stores/edit/store.js' ;
import {Provider} from 'react-redux' ;
require('jq_validate_lib') ;
require('jq_datepicker_lib') ;

render(
	<Provider store={store}>
		<AppLayout/>
	</Provider>,
	document.getElementById('app')
) ;
