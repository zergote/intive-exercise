import {
  SAVE_PERSONS_LS_REQUESTING,
  SAVE_PERSONS_LS_SUCCESS,
  SAVE_PERSONS_LS_ERROR,
  LOAD_PERSONS_LS_REQUESTING,
  LOAD_PERSONS_LS_SUCCESS,
  LOAD_PERSONS_LS_ERROR
} from '../actionTypes';
import { takeLatest, call, put } from 'redux-saga/effects';

// Functions for localstorage management
function loadPersons(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-5')) || false;
    } catch (e) {
      throw e;
    }
  }
  if (ls) {
    return ls[key];
  } else {
    return false;
  }
}

function savePersonsToLS(key, values) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-5',
      JSON.stringify({
        [key]: values
      })
    );
  }
}

function* savePersonsFlow(action) {
  try {
    const { values } = action;
    // key to organize how data is saved and retrieved
    const key = 'personsList';
    const response = yield call(savePersonsToLS, key, values);
    // It is sent by reducing the action of success with the list of countries
    if (response) {
      yield put({ type: SAVE_PERSONS_LS_SUCCESS, response });
    }
  } catch (error) {
    // Error responses are issued but not assigned an action
    yield put({ type: SAVE_PERSONS_LS_ERROR, error });
  }
}

// Flow to manage the load of the list of people and send them to the reducer
function* loadPersonsFlow() {
  try {
    // key to organize how data is saved and retrieved
    const key = 'personsList';
    const response = yield call(loadPersons, key);
    // It is sent by reducing the action of success with the list of persons
    if (response) {
      yield put({ type: LOAD_PERSONS_LS_SUCCESS, response });
    }
  } catch (error) {
    // Error responses are issued but not assigned an action
    yield put({ type: LOAD_PERSONS_LS_ERROR, error });
  }
}

// watch for required action
function* saveWatcher() {
  yield takeLatest(SAVE_PERSONS_LS_REQUESTING, savePersonsFlow);
}

function* loadWatcher() {
  yield takeLatest(LOAD_PERSONS_LS_REQUESTING, loadPersonsFlow);
}

export { saveWatcher, loadWatcher };
