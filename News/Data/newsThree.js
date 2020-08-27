import { ArticlesUrl, Sources, api_Key } from '../config/reactConfigTh';

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

}