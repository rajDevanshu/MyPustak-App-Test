import axios from 'axios';

export const Fiction = () => {
    return new Promise((resolve,reject)=>{
        axios.get('https://data.mypustak.com/api/v1/get/category/fiction-non-fiction/non-fiction/1/').then(resp => {
           // console.log(resp.data);
            resolve(resp.data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export const competitive = () => {
    return new Promise((resolve,reject)=>{
        axios.get('https://data.mypustak.com/api/v1/get/category/competitive-exams/engineering/1/').then(resp => {
           // console.log(resp.data);
            resolve(resp.data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export const school = () => {
    return new Promise((resolve,reject)=>{
        axios.get('https://data.mypustak.com/api/v1/get/category/school-children-books/dictionary-level-/1/').then(resp => {
           // console.log(resp.data);
            resolve(resp.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
/*import { ArticlesUrl, Sources, api_Key } from '../config/restConfig';


export async function getArticlese() {
 
    try {
        let articles = await fetch(`${ArticlesUrl}?sources=${Sources}&apiKey=${api_Key}`);

        let result = await articles.json();
        articles=null;

        return result.articles;
    }

    catch(error) {
        throw error;
    }

}*/
