import { appActionTypes } from './appActionTypes';

export const fetchAllStories = (payload) => {
  return {
    type: appActionTypes.FETCH_ALL_STORIES,
    payload,
  };
};
