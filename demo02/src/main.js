import {store} from './store.js' ;

store.subscribe(() =>
	console.log('当前status的值为 : ' + JSON.stringify(store.getState()))
);

var info1 = store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
});

var info2 = store.dispatch({
  type: 'ADD_TODO',
  text: 'hello world1'
});


var info4 = store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
}) ;

