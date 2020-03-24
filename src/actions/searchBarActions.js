import { SEARCH_ANIME } from './types';
import services from '../services';

const {
  searchBarService: { searchAnime: searchAnimeService },
} = services;

const searchAnime = query => async dispatch => {
  try {
    const payload = await searchAnimeService(query);
    return dispatch({
      type: SEARCH_ANIME,
      payload,
    });
  } catch (error) {
    return error;
  }
};

export default {
  searchAnime,
};
