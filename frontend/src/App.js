import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { About, Footer, Header, Skills, Work } from './containers'
import './App.scss'
import Layout from './containers/Layout';
import { client } from './client';
import { ThreeDots } from 'react-loader-spinner'

const App = () => {
	const [profile, setProfile] = useState([]);
	const [loading, setLoading] = useState(true);
	const clearLoading = () => {
		setTimeout(function () {
			setLoading(false)
		}, 2000)
	}
	let location = useLocation().hash
	location = location.split('#')[1]
	useEffect(() => {
		const query = '*[_type == "profile" && email == "aranajayavihan@gmail.com" ]'
		client.fetch(query)
			.then((data) => {
				setProfile(data[0])
				clearLoading()
			})
	}, []);
	return (
		<>
			{
				loading ?
					<div style={{ width: '100%', height: '100vh', backgroundColor: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
						<ThreeDots
							height="80"
							width="80"
							radius="9"
							color="#ffffff"
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
							wrapperClassName=""
							visible={true}
						/>
					</div>

					:
					<div className='app'>
						<Layout idName={location} >
							<Header user={profile} />
							<About />
							<Skills />
							<Work />
							{/* <Feedback /> */}
							<Footer user={profile} />
							<div className='copyright__sm'>
								<p className='p-text' style={{ textAlign: 'center' }}>
									Arana Jayavihan 🍃
								</p>
								<p className='p-text' style={{ textAlign: 'center' }}>
									Copyright @ 2022-2023
								</p>
							</div>
						</Layout>
					</div>
			}
		</>

	);
}

export default App;
