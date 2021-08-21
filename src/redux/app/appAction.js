import { appActionTypes } from './appActionTypes';

export const fetchAllStoriesStart = (payload) => {
  return {
    type: appActionTypes.FETCH_ALL_STORIES_START,
    payload,
  };
};

export const fetchAllStoriesSuccess = (payload) => {
  return {
    type: appActionTypes.FETCH_ALL_STORIES_SUCCESS,
    payload,
  };
};

export const fetchAllStoriesFailure = (payload) => {
  return {
    type: appActionTypes.FETCH_ALL_STORIES_FAILURE,
    payload,
  };
};
