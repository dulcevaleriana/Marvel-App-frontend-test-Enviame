import axios from 'axios';

const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=';
const apiKey = '41856bc3c17a7aa0ff2b0d73add02362';

export const getMarvelCharathers = async () => {
    try{
        const {data} = await axios.get(baseUrl + apiKey);
        console.log(data)
        return data.data.results;
    }catch(error){
        throw error;
    }
}