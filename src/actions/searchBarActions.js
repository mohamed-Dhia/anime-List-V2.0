import types from './types';
import services from '../services';

const {
  searchBarService: { searchAnime: searchAnimeService },
} = services;
const { SEARCH_ANIME, SEARCH_TERM } = types;

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

const setSearchTerm = event => dispatch =>
  dispatch({
    type: SEARCH_TERM,
    payload: event.target.value,
  });

export default {
  searchAnime,
  setSearchTerm,
};
