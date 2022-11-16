import React from 'react';

// Containers
import { About, Feedback, Footer, Header, Skills, Work } from './containers'
import { Navbar } from './components';
const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Feedback />
			<Footer />
		</div>
	);
}

export default App;
