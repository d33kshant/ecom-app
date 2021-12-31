// import { useState } from "react"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AppBar from "../components/AppBar"
import axios from "axios"
import "../styles/ProductPage.css"
import { CartContext } from "../contexts/CartContext"

const ProductPage = () => {

	const { id: productID } = useParams() 

	const [currentImage, setCurrentImage] = useState(0)
	const [currentOption, setCurrentOption] = useState(0)
	const { dispatch } = useContext(CartContext)
	const [product, setProduct] = useState(null)

	useEffect(() => {
		axios.get(`/api/v1/product/${productID}`).then(res => setProduct(res.data))
		return ()=>setProduct(null)
	}, [])

	return (
		<>
			<AppBar />
			{ product && <div className="product-page-main" >
				<div className="product-page-container">
					<div className="product-image-section" >
						<img alt={product.name} className="product-current-image" src={product.thumbs[currentImage]} />
						<div className="product-image-list" >
							{ product.thumbs.map((image, index)=><img alt={`${product.name} ${index}`} onClick={()=>setCurrentImage(index)} key={index} className={index === currentImage ? "product-image-small selected-image-small" : "product-image-small"} height="64" src={image} />) }
						</div>
					</div>
					<div className="product-info-section" >
						<p className="product-info-name" >{product.name}</p>
						<p className="product-info-brand" >{product.brand}</p>
						<span className="product-price-info">
							<span className="product-price-mrp">{product.rate}₹</span>
							{product.price !== product.rate && 
							<>
							• <span className="product-price-offer">{Math.trunc((product.rate / product.price) * 100)}% off</span> •
							<span className="product-price-original">{product.price}₹</span>
							</>}
						</span>
						<div className="product-option-list" >
							{ product.options.map((option, index)=> <button key={index} onClick={() => setCurrentOption(index)} className={index === currentOption ? "product-option-button selected-product-option" : "product-option-button"} >{option}</button> ) }
						</div>
						<button className="product-add-to-cart" onClick={()=>{dispatch({ type: 'ADD_ITEM', payload: { id: productID, option: product.options[currentOption] } })}} >Add To Cart</button>
						<p className="product-info-description">{product.description}</p>
					</div>
				</div>
			</div>}
		</>
	)
}

export default ProductPage