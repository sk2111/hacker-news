//libs
import produce, { original } from 'immer';
//action types
import { appActionTypes } from './appActionTypes';

const INITIAL_STATE = {
  stories: {
    byId: {},
    allIds: [],
  },
};

const appReducer = produce((draft, action) => {
  switch (action.type) {
    case appActionTypes.FETCH_ALL_STORIES_SUCCESS:
      draft.stories.allIds = action.payload;
      break;
    case appActionTypes.ADD_NEW_STORY:
      draft.stories.byId[action.payload.id] = action.payload;
      break;
    default:
      break;
  }
}, INITIAL_STATE);

export default appReducer;
