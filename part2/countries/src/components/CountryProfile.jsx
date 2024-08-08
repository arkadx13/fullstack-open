import Weather from "./Weather";

const CountryProfile = ({ country }) => {
	return (
		<div>
			<h1>{country.name.common}</h1>
			<p>capital {country.capital?.[0] || "No information"}</p>
			<p>area {country.area}</p>
			<h3>languages:</h3>
			<ul>
				{Object.values(country.languages).map((language) => (
					<li key={language}>{language}</li>
				))}
			</ul>
			<div>
				<img src={country.flags.svg} alt={country.flags.alt} />
			</div>
			<Weather city={country.capital?.[0] || null} />
		</div>
	);
};

export default CountryProfile;
