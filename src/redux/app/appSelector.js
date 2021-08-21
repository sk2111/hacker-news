import { createSelector } from 'reselect';

const selectAppSlice = (state) => state.app;

export const selectStories = createSelector(
  [selectAppSlice],
  (app) => app.stories
);
export const selectAllStoryIds = createSelector(
  [selectStories],
  (stories) => stories.allIds
);
export const selectStoryById = createSelector(
  selectStories,
  (_, id) => id,
  (stories, id) => {
    return stories.byId[id];
  }
);
