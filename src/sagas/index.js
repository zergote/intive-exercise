import { all } from 'redux-saga/effects';
import { getCountriesWatcher } from './personalDataFormSagas';
import { saveWatcher, loadWatcher } from './tableSagas';

export default function* IndexSaga() {
  yield all([getCountriesWatcher(), saveWatcher(), loadWatcher()]);
}
