import axios from "axios";
import { Config } from "../config";
//import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";

export class TVShowAPI {

    static async fetchPopulars(){
        const response = await axios.get(`${Config.BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`);
        console.info(response.data.results); 
        return response.data.results;
        //return FAKE_POPULARS;
    };

    static async fetchRecommendations(tvShowID){
        const response = await axios.get(`${Config.BASE_URL}/tv/${tvShowID}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
        console.info(response.data.results);
        return response.data.results;
        //return FAKE_RECOMMENDATIONS;
    };

    static async fetchByTitle(title){
        const response = await axios.get(`${Config.BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`);
        console.info(response.data.results);
        return response.data.results;
        //return FAKE_RECOMMENDATIONS;
    };
}