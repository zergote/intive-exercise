import { GET_DERIVATE_DATA, DISABLE_NOTIFICATION } from '../actionTypes';

export const getDerivateDataRequesting = values => {
  return {
    type: GET_DERIVATE_DATA,
    values
  };
};

export const disableNotification = value => {
  return {
    type: DISABLE_NOTIFICATION
  };
};
