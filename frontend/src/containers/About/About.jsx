import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import './About.scss'
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap'
import { urlFor, client } from '../../client';


const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"] | order(_createdAt) '

		client.fetch(query)
			.then((data) => {
				setAbouts(data)
			})
	}, []);
	return (
		<>
			<div className='section__info'>
				<h2 className="head-text">Areas <span> of Expertise</span></h2>

				<p className='section__info-text'>
					The areas of studies and interests that I have been working under my undergraduation program and self studies.
				</p>
			</div>


			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<div>
							<h2 className="bold-text" style={{ marginTop: 20, textAlign: 'center' }}>{about.title}</h2>
							<p className="p-text" style={{ marginTop: 10, textAlign: 'center' }}>{about.description}</p>
						</div>

					</motion.div>
				))}
			</div>
		</>

	);
}
export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg',
);
