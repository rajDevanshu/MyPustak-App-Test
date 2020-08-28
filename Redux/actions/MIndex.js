import axios from 'axios';

export const Fiction = () => (dispatch) => {

    return (dispatch) => {
        let new_Url="https://data.mypustak.com/api/v1/get/category/fiction-non-fiction/non-fiction/1/";

        axios.get(new_Url).then((res) => {
            console.log(res.data);

            dispatch({
                type: 'FICTION_DATA',
                
                payLoad: {
                    res: res.data
                },
            });
        }).catch((err) => console.log(err));
    };

};