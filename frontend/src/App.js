import React from 'react';
import { useLocation } from "react-router-dom";
// Containers
import { About, Feedback, Footer, Header, Skills, Work } from './containers'

// CSS
import './App.scss'
import Layout from './containers/Layout';

const App = () => {
	let location = useLocation().hash
	location = location.split('#')[1]
	console.log(location)

	return (
		<div className='app'>
			<Layout idName={location}>
				<Header />
				<About />
				<Skills />
				<Work />
				<Feedback />
				<Footer />
			</Layout>

		</div>
	);
}

export default App;
