const initialState = {
  students: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_STUDENTS':
      return {
        ...state,
        students: action.payload
      };
    case 'CREATE_STUDENT':
      return {
        ...state,
        students: [...state.students, action.payload]
      };
    default:
      return state;
  }
}
