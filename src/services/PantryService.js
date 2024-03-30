import axios from 'axios';
import pantry from '../utilities/pantry.config';

const PantryService = {
  getList: async () => {
    try {
      const response = await axios.get(
        `${pantry.config.baseUrl}${pantry.config.key}/basket/ressMoxieList`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  addItem: async (data) => {
    try {
      const response = await axios.put(
        `${pantry.config.baseUrl}${pantry.config.key}/basket/ressMoxieList`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default PantryService;
