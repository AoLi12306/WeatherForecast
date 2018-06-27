import axios from 'axios';

const API_KEY  = 'YOUR_API_KET';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

 

// Middle ware is used for this place
// this payload is a promise, middle will hold the action, patch it out after promise resolved

export function fetchWeather(city) {
  const url =  `${ROOT_URL}&q=${city},us`;   
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}