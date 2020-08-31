import axios from 'axios';
import {GET_CATEGORY, GET_CATEGORYS, GET_CATEGORYSS} from './actionTypes';
//import {GET_CATEGORYS} from './actionTypes';


export const getCategory = () => (dispatch) => {
    let new_url = 
    'https://data.mypustak.com/api/v1/get/category/competitive-exams/1/';

    let new_urls = 
    'https://data.mypustak.com/api/v1/get/category/school-children-books/dictionary-level-/1/';

    axios
    .get(new_urls).then((res) => {
        console.log({res});

        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        });
    })
    .catch((err) => {
        console.log(err);
    });

    axios
    .get(new_url).then((resp) => {
        
        console.log({resp});       
        dispatch({
            type: GET_CATEGORYS,
            payloads: resp.data
        });
    })
    .catch((err) => {
        console.log(err);
    });

    axios
    .get(new_url).then((respo) => {
             
        dispatch({
            type: GET_CATEGORYSS,
            payloads: respo.data
        });
    })
    .catch((err) => {
        console.log(err);
    });
    
};



