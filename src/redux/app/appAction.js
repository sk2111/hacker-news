import { appActionTypes } from './appActionTypes';

//fecth all stry ids
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

//fetch individual stiries based on id
export const fetchStoryByIdStart = (payload) => {
  return {
    type: appActionTypes.FETCH_STORY_BY_ID_START,
    payload,
  };
};

export const fetchStoryByIdSuccess = (payload) => {
  return {
    type: appActionTypes.FETCH_STORY_BY_ID_SUCCESS,
    payload,
  };
};

export const fetchStoryByIdFailure = (payload) => {
  return {
    type: appActionTypes.FETCH_STORY_BY_ID_FAILURE,
    payload,
  };
};


//search story
export const searchStory = (payload)=>{
  return {
    type: appActionTypes.SEARCH_STORY,
    payload,
  };
};

//sorting add
export const sortStories = (payload)=>{
  return {
    type: appActionTypes.SORT_STORIES,
    payload,
  };
}