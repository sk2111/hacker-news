import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from '@redux-saga/core/effects';
//actions
import { appActionTypes } from './appActionTypes';
import * as appActions from './appAction';
//network
import { axios, TOP_STORIES } from 'utilities/network/network';

function* fetchAllStories() {
  try {
    const { data: storyIds } = yield axios.get(TOP_STORIES);
    yield put(appActions.fetchAllStoriesSuccess(storyIds));
  } catch (e) {
    console.log(e.message);
    yield put(appActions.fetchAllStoriesFailure({ error: e.message }));
  }
}

function* onFetchAllStoriesStart() {
  yield takeLatest(appActionTypes.FETCH_ALL_STORIES_START, fetchAllStories);
}

//export all sagas
export function* appSagas() {
  yield all([call(onFetchAllStoriesStart)]);
}
