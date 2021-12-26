import "../styles/ProductCard.css"

const ProductCard = ({ name, brand, _id, thumbs, price, offer }) => {
	return (
		<a className="product-card-container" href={`/product/${_id}`} >
			<img alt={name} className="product-card-thumb" src={thumbs[0]} />
			<div className="product-card-info" >
				<p className="product-card-mrp" >{price - ((offer*price)/100)}₹</p>
				{ (offer > 0) && <span className="product-card-price-info" >
					<span className="product-card-offer" >  {offer}% off  </span>
					•
					<span className="product-card-price" >{price}₹</span>
				</span>}
				<h3 className="product-card-title" >{name}</h3>
				<p className="product-card-description" >{brand}</p>
			</div>
		</a>
	)
}

export default ProductCard