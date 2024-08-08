import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const Weather = ({ city }) => {
	const [data, setData] = useState({});
	let imageSrc = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`;

	// country has no city
	if (!city) return;

	useEffect(() => {
		weatherService
			.getForecast(city)
			.then((weatherData) => setData(weatherData));
	}, [city]);

	return (
		<div>
			<h1>Weather in {city}</h1>
			<p>temperature {data?.main?.temp} Celsius</p>
			<img src={imageSrc} alt={data?.weather?.[0]?.description} />
			<p>wind {data?.wind?.speed} m/s</p>
		</div>
	);
};

export default Weather;
