import { createSelector } from 'reselect';

const selectAppSlice = (state) => state.app;

export const selectAllStoryIds = createSelector(
  [selectAppSlice],
  (app) => app.stories.allIds
);
