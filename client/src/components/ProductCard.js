import "../styles/ProductCard.css"

const ProductCard = ({ name, brand, _id, thumbs, price, rate }) => {
	return (
		<a className="product-card-container" href={`/product/${_id}`} >
			<img alt={name} className="product-card-thumb" src={thumbs[0]} />
			<div className="product-card-info" >
				<p className="product-card-mrp" >{rate}₹</p>
				{ price !== rate && <span className="product-card-price-info" >
					<span className="product-card-offer" >  {Math.trunc(((price - rate) / price) * 100)}% off  </span>
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