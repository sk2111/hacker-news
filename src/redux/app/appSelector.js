import { createSelector } from 'reselect';

const selectAppSlice = (state) => state.app;

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
    const storyIds = stories.allIds;
    const allStories = stories.byId;
    const searchIds = storyIds.filter((id) => {
      const title = allStories[id]?.title.toLowerCase() ?? '';
      return title.includes(searchTerm.toLowerCase());
    });
    return searchIds;
  }
);

export const selectStoryById = createSelector(
  selectStories,
  (_, id) => id,
  (stories, id) => {
    return stories.byId[id];
  }
);
