import { ArticlesUrl, CountryCode, Category, api_Key } from '../config/restConfigTwo';

export async function getArticless() {
 
    try {
        let articles = await fetch(`${ArticlesUrl}?country=${CountryCode}&category=${Category}&apiKey=${api_Key}`);

        let result = await articles.json();
        articles=null;

        return result.articles;
    }

    catch(error) {
        throw error;
    }

}