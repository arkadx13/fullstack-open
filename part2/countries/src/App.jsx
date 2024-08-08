import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

const App = () => {
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [allCountries, setAllCountries] = useState([]);
	const [country, setCountry] = useState("");

	useEffect(() => {
		axios
			.get("https://studies.cs.helsinki.fi/restcountries/api/all")
			.then((response) => setAllCountries(response.data));
	}, []);

	useEffect(() => {
		const searchResult = allCountries.filter((item) =>
			item.name.common.toLowerCase().includes(country.toLowerCase())
		);
		setFilteredCountries(searchResult);
	}, [country]);

	return (
		<div>
			<Filter country={country} setCountry={setCountry} />
			{!country ? null : <Countries countries={filteredCountries} />}
		</div>
	);
};

export default App;
