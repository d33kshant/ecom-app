import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import AppBar from "../components/AppBar"
import Carousel from "../components/Carousel"
import Categories from "../components/Categories"
import ProductCard from "../components/ProductCard"
import ProductList from "../components/ProductList"
import { AuthContext } from "../contexts/AuthContext"
import axios from 'axios'
import "../styles/HomePage.css"

const HomePage = () => {

	const { user } = useContext(AuthContext)
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios.get('/api/v1/products').then(response => setProducts(response.data))
		return () => {
			setProducts([])
		}
	}, [])

	if (!user) {
		return <Navigate to="/login" />
	}

	return (
		<>
			<AppBar />
			<Categories />
			<div className="home-page-main" >
				<div className="home-page-container" >
					<Carousel />
					<ProductList>
						{products.map((product, index) => <ProductCard key={index} {...product} />)}
					</ProductList>
				</div>
			</div>
		</>
	)
}

export default HomePage