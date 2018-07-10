import { SAVE_PERSON_LS, GET_COUNTRIES_SUCCESS } from '../actionTypes';

const initialState = {
  countries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.countries };
    case SAVE_PERSON_LS:
      return { ...state };
    default:
      return state;
  }
}
