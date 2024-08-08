import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import countryService from "./services/countries.js";

const App = () => {
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [allCountries, setAllCountries] = useState([]);
	const [country, setCountry] = useState("");

	useEffect(() => {
		countryService.getAll().then((data) => setAllCountries(data));
	}, []);

	useEffect(() => {
		const searchResult = allCountries.filter((item) =>
			item.name.common.toLowerCase().includes(country.toLowerCase())
		);
		setFilteredCountries(searchResult);
	}, [country]);

	const handleShow = (name) => {
		countryService
			.getCountry(name)
			.then((data) => setFilteredCountries([data]));
	};

	return (
		<div>
			<Filter country={country} setCountry={setCountry} />
			{!country ? null : (
				<Countries
					countries={filteredCountries}
					handleShow={handleShow}
				/>
			)}
		</div>
	);
};

export default App;
