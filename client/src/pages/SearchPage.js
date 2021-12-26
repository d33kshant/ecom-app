import { useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import ProductList from "../components/ProductList"
import axios from 'axios'
import ProductCard from "../components/ProductCard"
import "../styles/SearchPage.css"

const SearchPage = () => {
	
	const [result, setResult] = useState([])

	useEffect(() => {
		// const url = new URLSearchParams(window.location.search)
		// const query = url.get('query')
		axios.get(`/api/v1/search${window.location.search}`).then(res => setResult(res.data))
		return () => setResult([])
	}, [])

	return (
		<>
			<AppBar />
			<div className="search-page-main" >
				<div className="search-page-container" >
					<ProductList>
						{result.map(data =><ProductCard {...data} />)}
					</ProductList>
				</div>
			</div>
		</>
	)
}

export default SearchPage