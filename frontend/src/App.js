import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
// Containers
import { About, Feedback, Footer, Header, Skills, Work } from './containers'

// CSS 
import './App.scss'
import Layout from './containers/Layout';


const App = () => {
	let location = useLocation().hash
	location = location.split('#')[1]

	return (
		<div className='app'>
			<Layout idName={location} >
				<Header/>
				<About />
				<Skills />
				<Work />
				{/* <Feedback /> */}
				<Footer />
				<div className='copyright__sm'>
				<p className='p-text' style={{ textAlign: 'center'}}>
					Arana Jayavihan 🍃
				</p>
				<p className='p-text' style={{ textAlign: 'center'}}>
					Copyright @ 2022-2023
				</p>
				</div>
			</Layout>
		</div>
	);
}

export default App;
