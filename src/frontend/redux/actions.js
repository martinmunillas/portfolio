import axios from 'axios';

export const sendMessage = (payload) => {
  return async (dispatch) => {
    try {
      console.log(process.env.API_URL);
      const message = axios({
        method: 'post',
        url: `/sendMessage`,
        data: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
