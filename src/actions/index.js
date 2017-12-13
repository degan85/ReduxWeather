import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    // AJAX
    const request = axios.get(url);

    console.log('Request: ',request);

    // 미들웨어 때문에 request를 기다리고 payload로 리턴
    // 비동기식 함수를 따로 코딩할 필요가 없어짐
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}