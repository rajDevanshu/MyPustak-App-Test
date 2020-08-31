import axios from 'axios';
import {GET_CATEGORY} from './actionTypes';

export const getCategory = () => (dispatch) => {
  let new_url =
    'https://data.mypustak.com/api/v1/get/category/competitive-exams/1/';
  axios
    .get(new_url)
    .then((res) => {
      console.log({res});

      dispatch({
        type: GET_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};