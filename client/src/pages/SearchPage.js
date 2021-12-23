const SearchPage = () => {
	
	const url = new URLSearchParams(window.location.search)
	const query = url.get('query')

	return (
		<div>
			{query}
		</div>
	)
}

export default SearchPage