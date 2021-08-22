import { default as axiosPkg } from 'axios';

export const TOP_STORIES = '/v0/topstories.json';
export const getItemIdPath = (id) => `/v0/item/${id}.json`;

const API_BASE_PATH = 'https://hacker-news.firebaseio.com';

export const axios = axiosPkg.create({
  baseURL: API_BASE_PATH,
  headers: { 'Content-Type': 'application/json' },
});
