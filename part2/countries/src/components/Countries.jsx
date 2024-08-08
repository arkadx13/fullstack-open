import CountryProfile from "./CountryProfile";

const Countries = ({ countries, handleShow }) => {
	if (countries.length <= 0) {
		return <div>Not found.</div>;
	}

	if (countries.length === 1) {
		return <CountryProfile country={countries[0]} />;
	}

	if (countries.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	}

	return (
		<div>
			{countries.map((country) => (
				<div key={country.name.common}>
					{country.name.common}
					<button onClick={() => handleShow(country.name.common)}>
						show
					</button>
				</div>
			))}
		</div>
	);
};

export default Countries;
