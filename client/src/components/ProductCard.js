import "../styles/ProductCard.css"

const ProductCard = ({ name, brand, description, thumbs, price, offer }) => {
	return (
		<a className="product-card-container" href="/product" >
			<img className="product-card-thumb" src={thumbs[0]} />
			<div className="product-card-info" >
				<span className="product-card-price-info" >
					<span className="product-card-mrp" >{price - ((offer*price)/100)}₹</span>
					<span className="product-card-offer" >• {offer}% off •</span>
					<span className="product-card-price" >{price}₹</span>
				</span>
				<h3 className="product-card-title" >{name}</h3>
				<p className="product-card-description" >{brand}</p>
			</div>
		</a>
	)
}

export default ProductCard