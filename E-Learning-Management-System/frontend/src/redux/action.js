import axios from 'axios';

export const getStudents = () => async dispatch => {
  const response = await axios.get('/api/students');
  dispatch({ type: 'GET_STUDENTS', payload: response.data });
};

export const createStudent = student => async dispatch => {
  const response = await axios.post('/api/students', student);
  dispatch({ type: 'CREATE_STUDENT', payload: response.data });
};
