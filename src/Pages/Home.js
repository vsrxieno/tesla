import React from 'react'
import Section from '../components/Section'

export default function Home(){
	return(
		<>
			<Section 
				title="Model 3"
				tagline="Order Online for touchless delivery"
				btn1="Custom Order"
				href_1="https://www.google.com/"
				btn2="Existing Inventory"
				href_2="https://www.facebook.com"
				chevron
				bg="model-3.jpg"
			/>
			<Section 
				title="Model Y"
				tagline="Order Online for touchless delivery"
				btn1="Custom Order"
				href_1="https://www.google.com"
				btn2="Existing Inventory"
				href_2="https://www.facebook.com"
				bg="model-y.jpg"
			/>
			<Section 
				title="Model S"
				tagline="Order Online for touchless delivery"
				btn1="Custom Order"
				btn2="Existing Inventory"
				bg="model-s.jpg"
			/>
			<Section 
				title="Model X"
				tagline="Order Online for touchless delivery"
				btn1="Custom Order"
				btn2="Existing Inventory"
				bg="model-x.jpg"
			/>
			<Section 
				title="Solar Panels"
				tagline="Lower Cost Solar Panels in India"
				btn1="Order Now"
				btn2="Learn More"
				bg="solar-panel.jpg"
			/>
			<Section 
				title="Solar Roof"
				tagline="Produce Clean Energy from your roof"
				btn1="Order Now"
				btn2="Learn More"
				bg="solar-roof.jpg"
			/>
			<Section 
				title="Accessories"
				btn1="Order Now"
				bg="accessories.jpg"
			/>			
		</>
	)
}