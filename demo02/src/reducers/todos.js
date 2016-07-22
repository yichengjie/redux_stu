export default function todos(state = [], action) {

  //console.info('json --- >: ' + JSON.stringify(state)) ;

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
    case 'GETALL_TODO':
      return state;
    default:
      return state;
  }
}
