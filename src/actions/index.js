import { AMBIL_DATA } from './types';
import axios from 'axios';

const apiUrl = 'https://reduxblog.herokuapp.com/api/posts?key=didik';

export const ambilData = (posts) => {
  return {
    type: AMBIL_DATA,
    posts
  }
};

export const ambilSemuaData = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(res => {
        dispatch(ambilData(res.data))
      })
      .catch(error => {
        throw(error)
      });
  };
};
