import store from './store.js' ;


store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
});

var info1 = store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});

console.info(JSON.stringify(info1)) ;