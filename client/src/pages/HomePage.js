import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AppBar from "../components/AppBar"
import Carousel from "../components/Carousel"
import Categories from "../components/Categories"
import ProductCard from "../components/ProductCard"
import ProductList from "../components/ProductList"
import { AuthContext } from "../contexts/AuthContext"

const HomePage = () => {

	const { user } = useContext(AuthContext)

	if (!user) {
		return <Navigate to="/login" />
	}

	const products = [
		{
			thumbs: [
				"https://i.imgur.com/Z6Q0NNl.jpg",
				"https://i.imgur.com/lFSZbCF.jpg"
			],
			options: ["7", "8", "9", "10", "11"],
			tags: ["shoes", "fashion", "puma"],
			name: "Unisex Navy Blue Wired Cage Sneakers",
			category: "Fashion",
			brand: "Puma",
			price: 3499,
			offer: 45,
			description: "PRODUCT STORY\nWith its wavy IMEVA outsole and breathable air mesh upper, the PUMA Wired Cage shoes are just the right mix of performance and style. The elastic gore across the forefoot and bold PUMA branding ensure a stylish and snug fit, and the SoftFoam+ sockliner provides superior cushioning\n\nFEATURES + BENEFITS\nIMEVA: PUMA's midsole for a lightweight and comfortable feel\nSoftFoam+: PUMA's comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your day\nDETAILS\nLow boot\nMesh and synthetic leather upper\nRubber outsole\nPUMA Wordmark across toe\nPUMA Cat Logo on tongue tape\nCushioned footbed\nTextured and patterned outsole\nWarranty: 3 months\nWarranty provided by brand/manufacturer\n\nSize & Fit\nRegular\n\nMaterial & Care\nMesh\nWipe with a clean, dry cloth to remove dust"
		},{
			thumbs: [
				"https://i.imgur.com/Z6Q0NNl.jpg",
				"https://i.imgur.com/lFSZbCF.jpg"
			],
			options: ["7", "8", "9", "10", "11"],
			tags: ["shoes", "fashion", "puma"],
			name: "Unisex Navy Blue Wired Cage Sneakers",
			category: "Fashion",
			brand: "Puma",
			price: 3499,
			offer: 45,
			description: "PRODUCT STORY\nWith its wavy IMEVA outsole and breathable air mesh upper, the PUMA Wired Cage shoes are just the right mix of performance and style. The elastic gore across the forefoot and bold PUMA branding ensure a stylish and snug fit, and the SoftFoam+ sockliner provides superior cushioning\n\nFEATURES + BENEFITS\nIMEVA: PUMA's midsole for a lightweight and comfortable feel\nSoftFoam+: PUMA's comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your day\nDETAILS\nLow boot\nMesh and synthetic leather upper\nRubber outsole\nPUMA Wordmark across toe\nPUMA Cat Logo on tongue tape\nCushioned footbed\nTextured and patterned outsole\nWarranty: 3 months\nWarranty provided by brand/manufacturer\n\nSize & Fit\nRegular\n\nMaterial & Care\nMesh\nWipe with a clean, dry cloth to remove dust"
		},{
			thumbs: [
				"https://i.imgur.com/Z6Q0NNl.jpg",
				"https://i.imgur.com/lFSZbCF.jpg"
			],
			options: ["7", "8", "9", "10", "11"],
			tags: ["shoes", "fashion", "puma"],
			name: "Unisex Navy Blue Wired Cage Sneakers",
			category: "Fashion",
			brand: "Puma",
			price: 3499,
			offer: 45,
			description: "PRODUCT STORY\nWith its wavy IMEVA outsole and breathable air mesh upper, the PUMA Wired Cage shoes are just the right mix of performance and style. The elastic gore across the forefoot and bold PUMA branding ensure a stylish and snug fit, and the SoftFoam+ sockliner provides superior cushioning\n\nFEATURES + BENEFITS\nIMEVA: PUMA's midsole for a lightweight and comfortable feel\nSoftFoam+: PUMA's comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your day\nDETAILS\nLow boot\nMesh and synthetic leather upper\nRubber outsole\nPUMA Wordmark across toe\nPUMA Cat Logo on tongue tape\nCushioned footbed\nTextured and patterned outsole\nWarranty: 3 months\nWarranty provided by brand/manufacturer\n\nSize & Fit\nRegular\n\nMaterial & Care\nMesh\nWipe with a clean, dry cloth to remove dust"
		},{
			thumbs: [
				"https://i.imgur.com/Z6Q0NNl.jpg",
				"https://i.imgur.com/lFSZbCF.jpg"
			],
			options: ["7", "8", "9", "10", "11"],
			tags: ["shoes", "fashion", "puma"],
			name: "Unisex Navy Blue Wired Cage Sneakers",
			category: "Fashion",
			brand: "Puma",
			price: 3499,
			offer: 45,
			description: "PRODUCT STORY\nWith its wavy IMEVA outsole and breathable air mesh upper, the PUMA Wired Cage shoes are just the right mix of performance and style. The elastic gore across the forefoot and bold PUMA branding ensure a stylish and snug fit, and the SoftFoam+ sockliner provides superior cushioning\n\nFEATURES + BENEFITS\nIMEVA: PUMA's midsole for a lightweight and comfortable feel\nSoftFoam+: PUMA's comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your day\nDETAILS\nLow boot\nMesh and synthetic leather upper\nRubber outsole\nPUMA Wordmark across toe\nPUMA Cat Logo on tongue tape\nCushioned footbed\nTextured and patterned outsole\nWarranty: 3 months\nWarranty provided by brand/manufacturer\n\nSize & Fit\nRegular\n\nMaterial & Care\nMesh\nWipe with a clean, dry cloth to remove dust"
		},{
			thumbs: [
				"https://i.imgur.com/Z6Q0NNl.jpg",
				"https://i.imgur.com/lFSZbCF.jpg"
			],
			options: ["7", "8", "9", "10", "11"],
			tags: ["shoes", "fashion", "puma"],
			name: "Unisex Navy Blue Wired Cage Sneakers",
			category: "Fashion",
			brand: "Puma",
			price: 3499,
			offer: 45,
			description: "PRODUCT STORY\nWith its wavy IMEVA outsole and breathable air mesh upper, the PUMA Wired Cage shoes are just the right mix of performance and style. The elastic gore across the forefoot and bold PUMA branding ensure a stylish and snug fit, and the SoftFoam+ sockliner provides superior cushioning\n\nFEATURES + BENEFITS\nIMEVA: PUMA's midsole for a lightweight and comfortable feel\nSoftFoam+: PUMA's comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your day\nDETAILS\nLow boot\nMesh and synthetic leather upper\nRubber outsole\nPUMA Wordmark across toe\nPUMA Cat Logo on tongue tape\nCushioned footbed\nTextured and patterned outsole\nWarranty: 3 months\nWarranty provided by brand/manufacturer\n\nSize & Fit\nRegular\n\nMaterial & Care\nMesh\nWipe with a clean, dry cloth to remove dust"
		},{
			thumbs: [
				"https://i.imgur.com/Z6Q0NNl.jpg",
				"https://i.imgur.com/lFSZbCF.jpg"
			],
			options: ["7", "8", "9", "10", "11"],
			tags: ["shoes", "fashion", "puma"],
			name: "Unisex Navy Blue Wired Cage Sneakers",
			category: "Fashion",
			brand: "Puma",
			price: 3499,
			offer: 45,
			description: "PRODUCT STORY\nWith its wavy IMEVA outsole and breathable air mesh upper, the PUMA Wired Cage shoes are just the right mix of performance and style. The elastic gore across the forefoot and bold PUMA branding ensure a stylish and snug fit, and the SoftFoam+ sockliner provides superior cushioning\n\nFEATURES + BENEFITS\nIMEVA: PUMA's midsole for a lightweight and comfortable feel\nSoftFoam+: PUMA's comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your day\nDETAILS\nLow boot\nMesh and synthetic leather upper\nRubber outsole\nPUMA Wordmark across toe\nPUMA Cat Logo on tongue tape\nCushioned footbed\nTextured and patterned outsole\nWarranty: 3 months\nWarranty provided by brand/manufacturer\n\nSize & Fit\nRegular\n\nMaterial & Care\nMesh\nWipe with a clean, dry cloth to remove dust"
		}
	]

	return (
		<>
			<AppBar />
			<Categories />
			<Carousel />
			<ProductList>
				{products.map((product, index) => <ProductCard key={index} {...product} />)}
			</ProductList>
		</>
	)
}

export default HomePage