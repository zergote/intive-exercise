import { GET_DERIVATE_DATA, DISABLE_NOTIFICATION } from '../actionTypes';

const initialState = {
  notificationState: false,
  currentPerson: {
    name: '',
    surname: '',
    country: '',
    birthday: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DERIVATE_DATA:
      let person = {
        name: action.values.name,
        surname: action.values.surname,
        country: action.values.country,
        birthday: action.values.birthday
      };
      return { ...state, notificationState: true, currentPerson: person };
    case DISABLE_NOTIFICATION:
      return { ...state, notificationState: false };
    default:
      return state;
  }
}
