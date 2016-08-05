export default function brandGroups(state = [], action) {
  switch (action.type) {
    case 'ADD_BRANDGROUP':
      return [
        ...state,
        {
          ...action.obj
        }
      ];
    case 'GETALL_BRANDGROUP':
      return state;
    default:
      return state;
  }
}
