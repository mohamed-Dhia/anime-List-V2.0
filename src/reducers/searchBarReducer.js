import types from '../actions/types';

const { SEARCH_ANIME, SEARCH_TERM } = types;
const initialState = {
  searchTerm: '',
  animeList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ANIME:
      return {
        ...state,
        animeList: action.payload,
      };
    case SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}
