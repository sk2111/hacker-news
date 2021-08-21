import { all, call } from 'redux-saga/effects';
//sagas
import { appSagas } from 'redux/app/appSaga';

export default function* rootSaga() {
  yield all([call(appSagas)]);
}
