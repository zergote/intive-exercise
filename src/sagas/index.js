// Root Sagas
// Import Sagas, configure and prepare for run all
import { all } from 'redux-saga/effects';
import { getCountriesWatcher } from './personalDataFormSagas';
import { saveWatcher, loadWatcher } from './tableSagas';

export default function* IndexSaga() {
  yield all([getCountriesWatcher(), saveWatcher(), loadWatcher()]);
}
