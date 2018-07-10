import {
  SAVE_PERSONS_LS_REQUESTING,
  SAVE_PERSONS_LS_SUCCESS,
  SAVE_PERSONS_LS_ERROR,
  LOAD_PERSONS_LS_REQUESTING,
  LOAD_PERSONS_LS_SUCCESS,
  LOAD_PERSONS_LS_ERROR
} from '../actionTypes';

import { takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function loadPersons(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-5')) || false;
    } catch (e) {
      /*Ignore*/
    }
  }
  if (ls) {
    return ls[key];
  } else {
    return false;
  }
}

function savePersonsToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-5',
      JSON.stringify({
        [key]: value
      })
    );
  }
}

function* savePersonsFlow(action) {
  try {
    const { key, value } = action;
    // Empuja la "llamada" a nuestro signupApi con el correo electrónico y la contraseña
    // contenida en la acción, luego se envia y se PAUSA aquí hasta que la función API
    // asyncronica sea completada!
    const response = yield call(savePersonsToLS, key, value);

    if (response) {
      yield put({ type: SAVE_PERSONS_LS_SUCCESS, response });
    }
  } catch (error) {
    // Si la llamada a la API para el registro falla, se despachara SIGNUP_ERROR junto con el mensaje de error
    yield put({ type: SAVE_PERSONS_LS_ERROR, error });
  }
}

function* loadPersonsFlow(action) {
  try {
    const { key } = action;
    // Empuja la "llamada" a nuestro signupApi con el correo electrónico y la contraseña
    // contenida en la acción, luego se envia y se PAUSA aquí hasta que la función API
    // asyncronica sea completada!
    const response = yield call(loadPersons, key);

    if (response) {
      yield put({ type: LOAD_PERSONS_LS_SUCCESS, response });
    }
  } catch (error) {
    // Si la llamada a la API para el registro falla, se despachara SIGNUP_ERROR junto con el mensaje de error
    yield put({ type: LOAD_PERSONS_LS_ERROR, error });
  }
}

// Nuestra Watchers de la saga estaran pendiente de la solicitud de ejecutar procesos
function* saveWatcher() {
  yield takeLatest(SAVE_PERSONS_LS_REQUESTING, savePersonsFlow);
}

function* loadWatcher() {
  yield takeLatest(LOAD_PERSONS_LS_REQUESTING, loadPersonsFlow);
}

export { saveWatcher, loadWatcher };
