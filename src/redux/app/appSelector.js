import { createSelector } from 'reselect';

const selectAppSlice = (state) => state.app;

const storyTitleSearch = ({ allIds, byId }, searchTerm) => {
  if (!searchTerm.length) return allIds;
  return allIds.filter((id) => {
    const title = byId[id]?.title.toLowerCase() ?? '';
    return title.includes(searchTerm.toLowerCase());
  });
};

export const selectStories = createSelector(
  [selectAppSlice],
  (app) => app.stories
);

export const selectSearchStory = createSelector(
  [selectAppSlice],
  (app) => app.searchStory
);

export const selectAllStoryIds = createSelector(
  [selectStories, selectSearchStory],
  (stories, searchTerm) => {
    //handle Search
    const storyIds = storyTitleSearch(stories, searchTerm);
    return { storyIds, searchTerm };
  }
);

export const selectStoryById = createSelector(
  selectStories,
  (_, id) => id,
  (stories, id) => {
    return stories.byId[id];
  }
);
