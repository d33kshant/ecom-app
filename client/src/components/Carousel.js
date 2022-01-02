import { useState } from 'react'
import '../styles/Carousel.css'

const Carousel = () => {

	const [index, setIndex] = useState(0)
	
	const images = [
		"https://rukminim1.flixcart.com/flap/1688/280/image/407d75473a8dac3a.jpg?q=50",
		"https://rukminim1.flixcart.com/flap/3376/560/image/0cf3cc3e7cbf6531.jpg?q=50",
		"https://rukminim1.flixcart.com/flap/3376/560/image/50e618be0ce51fef.jpg?q=50"
	]
	
	const onNextClick = () => {
		if (index === images.length - 1) {
			setIndex(0)
		} else { setIndex(index+1) }
	}

	const onPreviousClick = () => {
		if (index === 0) {
			setIndex(images.length-1)
		} else { setIndex(index-1) }
	}

	return (
		<div className="carousel-main">
			<div className="carousel-container" >
				<button className="carousel-button-left" onClick={onPreviousClick} >
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
					</svg>
				</button>
				{ images.map((image, key) => <img key={key} style={{ transform: `translateX(-${index*100}%)` }} alt="ecom-app offers-banner" className="carousel-image" src={image} />) }
				<button className="carousel-button-right" onClick={onNextClick} >
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
					</svg>
				</button>
				<div className="carousel-image-indicators" >
					{ images.map((item, i)=><div onClick={()=>setIndex(i)} className={ i === index ? "carousel-current-indicator" : "carousel-image-indicator" } />) }
				</div>
			</div>
		</div>
	)
}

export default Carousel