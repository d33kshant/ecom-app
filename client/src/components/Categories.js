import '../styles/Categories.css'

const Categories = () => {
	const categories = ['Electronics', 'Mobiles', 'Fashion', 'Appliances', 'Toys', 'Books']
	return (
		<div className="categories-main" >
			<div className='categories-container' >
				{ categories.map((category, index) => <a key={index} className="category-item" href={`/search?query=${category.replace(' ', '%20').toLowerCase()}`} >{category}</a>) }
			</div>
		</div>
	)
}

export default Categories