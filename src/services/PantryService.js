import axios from 'axios';
import pantry from '../utilities/pantry.config';

const defaultObject = {
  games: [],
  anime: [],
  movies: [],
  tvShows: [],
};

const PantryService = {
  getList: async () => {
    try {
      const response = await axios.get(
        `${pantry.config.baseUrl}${pantry.config.key}/basket/ressMoxieList`
      );
      return await response.data;
    } catch (error) {
      console.error(error);
      return defaultObject;
    }
  },

  updateList: async (data) => {
    try {
      const response = await axios.post(
        `${pantry.config.baseUrl}${pantry.config.key}/basket/ressMoxieList`,
        data
      );
      return await response.data;
    } catch (error) {
      console.error(error);
      return defaultObject;
    }
  },
};

export default PantryService;
