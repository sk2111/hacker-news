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
//selectors
import { selectStories } from './appSelector';
//network
import { axios, getItemIdPath, TOP_STORIES } from 'utilities/network/network';
//helpers
import { getFormattedDate } from 'utilities/helpers/helpers';

//fetch comments by Id
function* fetchCommentById({ payload: { id } }) {
  try {
    const { data: comment } = yield axios.get(getItemIdPath(id));
    if (!(comment.deleted && comment.dead)) {
      comment.date = yield call(getFormattedDate, comment.time);
      yield put(appActions.fetchCommentsByIdSuccess(comment));
    }
  } catch (e) {
    console.log(e.message);
    yield put(appActions.fetchCommentsByIdFailure({ error: e.message }));
  }
}

function* onFetchCommentByIdStart() {
  yield takeEvery(appActionTypes.FETCH_COMMENTS_BY_ID_START, fetchCommentById);
}

//fetch individual story by id
function* fetchStoryById({ payload: { id } }) {
  try {
    const { allIds } = yield select(selectStories);
    const { data: story } = yield axios.get(getItemIdPath(id));
    const totalStories = allIds.length;
    const allFetched = allIds[totalStories - 1] === id;
    story.date = yield call(getFormattedDate, story.time);
    yield put(appActions.fetchStoryByIdSuccess({ story, allFetched }));
  } catch (e) {
    console.log(e.message);
    yield put(appActions.fetchAllStoriesFailure({ error: e.message }));
  }
}

function* onFetchStoryByIdStart() {
  yield takeEvery(appActionTypes.FETCH_STORY_BY_ID_START, fetchStoryById);
}

//fetch all stories ids
function* fetchAllStories() {
  try {
    const { data: storyIds } = yield axios.get(TOP_STORIES);
    yield put(appActions.fetchAllStoriesSuccess(storyIds.slice(0, 100)));
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
  yield all([
    call(onFetchAllStoriesStart),
    call(onFetchStoryByIdStart),
    call(onFetchCommentByIdStart),
  ]);
}
