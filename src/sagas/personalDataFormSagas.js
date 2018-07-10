import {
  GET_COUNTRIES_REQUESTING,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_ERROR
} from '../actionTypes';
import { URL_COUNTRIES } from '../constants';
import { takeLatest, call, put } from 'redux-saga/effects';

function getCountriesAPI() {
  return fetch(URL_COUNTRIES, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

function* getCountriesFlow(action) {
  try {
    // Empuja la "llamada" a nuestro signupApi con el correo electrónico y la contraseña
    // contenida en la acción, luego se envia y se PAUSA aquí hasta que la función API
    // asyncronica sea completada!

    let countries = yield call(getCountriesAPI);
    countries = Object.keys(countries).map(function(country, index, array) {
      return countries[index].name;
    });
    if (countries) {
      yield put({ type: GET_COUNTRIES_SUCCESS, countries });
    }
  } catch (error) {
    // Si la llamada a la API para el registro falla, se despachara SIGNUP_ERROR junto con el mensaje de error
    yield put({ type: GET_COUNTRIES_ERROR, error });
  }
}

function* getCountriesWatcher() {
  yield takeLatest(GET_COUNTRIES_REQUESTING, getCountriesFlow);
}

export { getCountriesWatcher };
