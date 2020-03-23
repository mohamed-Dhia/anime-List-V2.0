import axios from 'axios';

export default {
  searchAnime: async query => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${query}/bizzare=1`,
      );
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
};
