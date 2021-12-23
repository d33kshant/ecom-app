import '../styles/ProductList.css'

const ProductList = ({children}) => {
	return (
		<div className="product-list">
			<div className="product-container" >
				{children}
			</div>
		</div>
	)
}

export default ProductList