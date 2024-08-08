import CountryProfile from "./CountryProfile";

const Countries = ({ countries }) => {
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
				<div key={country.name.common}>{country.name.common}</div>
			))}
		</div>
	);
};

export default Countries;
