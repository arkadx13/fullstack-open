const Filter = ({ keyword, handleFilter }) => {
	return (
		<div>
			filter shown with <input value={keyword} onChange={handleFilter} />
		</div>
	);
};

export default Filter;
