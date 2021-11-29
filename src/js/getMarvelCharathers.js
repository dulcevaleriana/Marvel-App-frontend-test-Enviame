import axios from 'axios';
import {conections} from './url-apikey';

export const getMarvelCharathers = async () => {
    try{
        const {data} = await axios.get(conections.baseUrl + "?apikey=" + conections.apiKey);
        console.log(data)
        return data.data.results;
    }catch(error){
        throw error;
    }
}