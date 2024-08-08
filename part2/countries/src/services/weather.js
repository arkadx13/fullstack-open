import axios from "axios";

const baseUrl = `https://api.openweathermap.org/data/2.5/`;
const apiKey = import.meta.env.VITE_WEATHER_KEY;

const getForecast = (city) => {
	return axios
		.get(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`)
		.then((response) => response.data);
};

export default {
	getForecast,
};
