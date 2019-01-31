import { AMBIL_DATA, AMBIL_SAPI, ADD_DATA, DELETE_DATA } from './types';
import axios from 'axios';

const apiUrl = 'https://reduxblog.herokuapp.com/api/posts';
const apiSapi = 'https://learn-rest.herokuapp.com/api/products'


export const ambilSapi = (sapis) => {
  return {
    type: AMBIL_SAPI,
    sapis
  }
}

export const ambilSemuaSapi = () => {
  return (dispatch) => {
    return axios.get(apiSapi)
    .then(response => {
      dispatch(ambilSapi(response.data))
    })
    .catch(err => {
      throw(err)
    })
  }
};

export const createPost = ({ title, categories, content }) => {
  return (dispatch) => {
    return axios.post(apiUrl + '?key=didik', { title, categories, content })
    .then(res => {
      dispatch(createPostSuccess(res.data))
    })
  }
};

export const createPostSuccess = (data) => {
  return{
    type: ADD_DATA,
    payload: {
      id: data.id,
      title: data.title,
      categories: data.categories,
      content: data.content
    }
  }
}


// DELETE DATA ID

export const deleteDataSuccess = id => {
  return {
    type: DELETE_DATA,
    payload: {
      id
    }
  }
}

export const deleteData = id => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}?key=didik`)
      .then(res => {
        dispatch(deleteDataSuccess(res.data));
        console.log('coba', res.data)
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const ambilData = (posts) => {
  return {
    type: AMBIL_DATA,
    posts
  }
};


export const ambilSemuaData = () => {
  return (dispatch) => {
    return axios.get(apiUrl + '?key=didik')
      .then(res => {
        dispatch(ambilData(res.data))
      })
      .catch(error => {
        throw(error)
      });
  };
};
