import axios from 'axios';


export function Fiction() {

    return (dispatch) => { 

        return new Promise((resolve,reject)=>{
            axios.get('https://data.mypustak.com/api/v1/get/category/fiction-non-fiction/non-fiction/1/').then(resp => {
               // console.log(resp.data);
               dispatch(FictionData( resolve(resp.data)));
            }).catch(err=>{
                reject(err)
            })
        })  
    }
}

export const FictionData = (FictionData) => ({

    type: "FICTION_DATA",

    FictionData: FictionData
});

