//libs
import produce from 'immer';
//action types
import { appActionTypes } from './appActionTypes';

const INITIAL_STATE = {
  stories: {
    byId: {},
    allIds: [],
    allFetched: false,
  },
  comments: {},
  searchBy: '',
  sortBy: '',
  error: null,
};

const appReducer = produce((draft, action) => {
  switch (action.type) {
    case appActionTypes.FETCH_ALL_STORIES_SUCCESS:
      draft.stories.allIds = action.payload;
      break;
    case appActionTypes.FETCH_STORY_BY_ID_SUCCESS:
      draft.stories.byId[action.payload.story.id] = action.payload.story;
      draft.stories.allFetched =
        draft.stories.allFetched || action.payload.allFetched;
      break;
    case appActionTypes.FETCH_COMMENTS_BY_ID_SUCCESS:
      draft.comments[action.payload.id] = action.payload;
      break;
    case appActionTypes.SEARCH_STORY:
      draft.searchBy = action.payload;
      break;
    case appActionTypes.SORT_STORIES:
      draft.sortBy = action.payload;
      break;
    case appActionTypes.FETCH_ALL_STORIES_FAILURE:
    case appActionTypes.FETCH_STORY_BY_ID_FAILURE:
    case appActionTypes.FETCH_COMMENTS_BY_ID_FAILURE:
      draft.stories.error = action.payload.error;
      break;
    default:
      break;
  }
}, INITIAL_STATE);

export default appReducer;
