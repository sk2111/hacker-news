//libs
import produce, { original } from 'immer';
//action types
import { appActionTypes } from './appActionTypes';

const INITIAL_STATE = {
  stories: {
    byId: {},
    allIds: [],
  },
  error: null,
};

const appReducer = produce((draft, action) => {
  switch (action.type) {
    case appActionTypes.FETCH_ALL_STORIES_SUCCESS:
      draft.stories.allIds = action.payload;
      break;
    case appActionTypes.FETCH_STORY_BY_ID_SUCCESS:
      draft.stories.byId[action.payload.id] = action.payload;
      break;
    case appActionTypes.FETCH_ALL_STORIES_FAILURE:
    case appActionTypes.FETCH_STORY_BY_ID_FAILURE:
      draft.stories.error = action.payload.error;
      break;
    default:
      break;
  }
}, INITIAL_STATE);

export default appReducer;
