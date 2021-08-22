import { createSelector } from 'reselect';
import { sortByWrapper } from 'utilities/configs/storySort';

const selectAppSlice = (state) => state.app;

const searchStoryByTitle = (storyIds, { byId }, searchTerm) => {
  if (!searchTerm.length) return storyIds;
  return storyIds.filter((id) => {
    const title = byId[id]?.title.toLowerCase() ?? '';
    return title.includes(searchTerm.toLowerCase());
  });
};

const sortStoryIds = (sortBy, { allIds, byId }) => {
  if (!sortBy.length) return allIds;
  const sortFunc = sortByWrapper(sortBy, byId);
  return [...allIds].sort(sortFunc);
};

export const selectStories = createSelector(
  [selectAppSlice],
  (app) => app.stories
);
export const selectStoriesAllFetched = createSelector(
  [selectAppSlice],
  (app) => app.stories.allFetched
);

export const selectSearchStory = createSelector(
  [selectAppSlice],
  (app) => app.searchBy
);

export const selectSortStory = createSelector(
  [selectAppSlice],
  (app) => app.sortBy
);

export const selectAllStoryIds = createSelector(
  [selectStories, selectSearchStory, selectSortStory],
  (stories, searchTerm, sortBy) => {
    const sortIds = sortStoryIds(sortBy, stories);
    const searchIds = searchStoryByTitle(sortIds, stories, searchTerm);
    const storyIds = searchIds ?? [];
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
