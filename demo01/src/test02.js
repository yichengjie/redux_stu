'use strict' ;

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

import { combineReducers, createStore } from 'redux' ;
let reducer = combineReducers({ visibilityFilter, todos }) ;

let store = createStore(reducer) ;

store.subscribe(() =>console.log('test2 中当前state的值为 : ' ,store.getState())) ;

store.dispatch({type:'ADD_TODO',text:'hello world'}) ;
//store.dispatch({type:'ADD_TODO',text:'hello world 2'}) ;
//store.dispatch({type:'ADD_TODO',text:'hello world 3'}) ;
//store.dispatch({type:'COMPLETE_TODO',index:2}) ;
store.dispatch({type:'SET_VISIBILITY_FILTER',filter:'show_one'}) ;
store.dispatch({type:'COMPLETE_TODO',index:0}) ;


export {store}  ;


