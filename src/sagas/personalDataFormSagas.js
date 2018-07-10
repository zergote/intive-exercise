import {
  GET_COUNTRIES_REQUESTING,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_ERROR
} from '../actionTypes';
import { URL_COUNTRIES } from '../constants';
import { takeLatest, call, put } from 'redux-saga/effects';

// Conect to web service for get json with countries
async function getCountriesAPI() {
  return fetch(URL_COUNTRIES, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

// Flow that manages the connection with the api, receives the answers and sends them to the reducer
function* getCountriesFlow(action) {
  try {
    let countries = yield call(getCountriesAPI);
    countries = Object.keys(countries).map(function(country, index, array) {
      return countries[index].name;
    });
    // It is sent by reducing the action of success with the list of countries
    if (countries) {
      yield put({ type: GET_COUNTRIES_SUCCESS, countries });
    }
  } catch (error) {
    // Error responses are issued but not assigned an action
    yield put({ type: GET_COUNTRIES_ERROR, error });
  }
}

// watch for required action
function* getCountriesWatcher() {
  yield takeLatest(GET_COUNTRIES_REQUESTING, getCountriesFlow);
}

export { getCountriesWatcher };
