import { ADD_A_PERSON, SAVE_PERSONS_LS_REQUESTING, LOAD_PERSONS_LS_REQUESTING } from '../actionTypes';

export const addAPerson = values => {
  return {
    type: ADD_A_PERSON,
    values
  };
};

export const savePersonsRequesting = values => {
  console.log(values)
  return {
    type: SAVE_PERSONS_LS_REQUESTING,
    values
  };
};

export const loadPersonsRequesting = () => {
  return {
    type: LOAD_PERSONS_LS_REQUESTING
  };
};
