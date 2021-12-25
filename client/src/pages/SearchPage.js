import { useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import ProductList from "../components/ProductList"
import axios from 'axios'
import ProductCard from "../components/ProductCard"

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
			<ProductList>
				{result.map(data =><ProductCard {...data} />)}
			</ProductList>
		</>
	)
}

export default SearchPage