import { useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import ProductList from "../components/ProductList"
import axios from 'axios'
import ProductCard from "../components/ProductCard"
import "../styles/SearchPage.css"

const SearchPage = () => {
	
	const [result, setResult] = useState([])
	const [sort, setSort] = useState('asc')

	const onSortOptionChange = (event) => setSort(event.target.value)

	useEffect(() => {
		// const url = new URLSearchParams(window.location.search)
		// const query = url.get('query')
		axios.get(`/api/v1/search${window.location.search}&sort=${sort}`).then(res => setResult(res.data))
		return () => setResult([])
	}, [sort])

	const query = (new URLSearchParams(window.location.search)).get('query')

	return (
		<>
			<AppBar />
			<div className="search-page-main" >
				<div className="search-page-container" >
					{ result.length > 0 && <div className="search-page-header" >
						<h3 className="search-page-header-title">Results for "{query}"</h3>
						<select onChange={onSortOptionChange} className="search-page-sort-options" >
							<option value="asc" >Price low to high</option>
							<option value="desc" >Price high to low</option>
						</select>
					</div>}
					{ result.length > 0 ? 
					<ProductList>
						{result.map((data, index) =><ProductCard key={index} {...data} />)}
					</ProductList> : <p className="empty-result-placeholder" >No result found for "{query}"</p>}
				</div>
			</div>
		</>
	)
}

export default SearchPage