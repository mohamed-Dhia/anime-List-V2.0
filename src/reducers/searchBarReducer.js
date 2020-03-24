import { SEARCH_ANIME } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_ANIME:
      return action.payload;
    default:
      return state;
  }
}
