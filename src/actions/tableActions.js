import { ADD_A_PERSON, SAVE_PERSONS_LS_REQUESTING } from '../actionTypes';

export const addAPerson = values => {
  return {
    type: ADD_A_PERSON,
    values
  };
};

export const savePersonsRequesting = values => {
  return {
    type: SAVE_PERSONS_LS_REQUESTING,
    values
  };
};
