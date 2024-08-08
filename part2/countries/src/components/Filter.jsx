const Filter = ({ country, setCountry, allCountries }) => {
	return (
		<div>
			find countries
			<input
				value={country}
				onChange={(e) => setCountry(e.target.value)}
				disabled={!allCountries.length ? true : false}
			/>
		</div>
	);
};

export default Filter;
