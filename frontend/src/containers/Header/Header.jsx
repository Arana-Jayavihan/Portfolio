import React from 'react';
import { motion } from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap';
import { TypeAnimation } from 'react-type-animation';
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
	whileInView: {
		x: [200, 25],
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Header = () => {
	return (
		<div id='home' className='app__header app__flex'>
			<motion.div
				whileInView={{ x: [-200, 0], opacity: [0, 1], scale: [0, 1] }}
				transition={{ duration: 1 }}
				className="app__header-info"
			>
				<div className='app__header-badge'>
					<div className='badge-cmp app_flex'>
						<p className="p-text" style={{ color: 'black', textAlign: 'left', fontWeight: 400, fontSize: '18px' }}>Hello 👋 <br></br>I'm <span style={{ color: '#28a745', fontSize: '1.5rem' }}>Arana Jayavihan</span></p>
						<div >
							<TypeAnimation
								sequence={[
									'A Security Analyst',
									1500,
									'A Bug Bounty Hunter',
									1500,
									'A Web 2/3 Developer',
									1500,
									'A Software Engineer',
									1500,
								]}
								speed={50}
								style={{ fontSize: '2em', fontWeight: 'bold', fontFamily: 'inherit' }}
								wrapper="span"
								repeat={Infinity}
							/>

						</div>
					</div>

					<div className='app__header-extInfo'>
						<div className='tag-cmp'>
							<h4 style={{ fontSize: '1em', fontWeight: '400' }} >Email : <a href="mailto:aranajayavihan@gmail.com" style={{ textDecoration: 'none', color: '#28a745', fontWeight: '400' }} >aranajayavihan@gmail.com</a></h4>
							<hr style={{ marginTop: '2%', marginBottom: '2%' }}></hr>
							<h4 style={{ fontSize: '1em', fontWeight: '400' }} >Mobile : <a href="tel:+94 76 415 2204" style={{ textDecoration: 'none', color: '#28a745', fontWeight: '400' }} >+94 76 415 2204</a></h4>
							<hr style={{ marginTop: '2%', marginBottom: '2%' }}></hr>
							<h4 style={{ fontSize: '1em', fontWeight: '400' }} >From : <span style={{ textDecoration: 'none', color: '#28a745', fontSize: '1rem', fontWeight: '400' }}>Sri Lanka</span></h4>
							<hr style={{ marginTop: '2%', marginBottom: '2%' }}></hr>
							<h4 style={{ fontSize: '1em', fontWeight: '400' }} >Age : <span style={{ textDecoration: 'none', color: '#28a745', fontSize: '1rem', fontWeight: '400' }}>21</span></h4>
							{/* <hr style={{ marginTop: '2%', marginBottom: '2%' }}></hr> */}
						</div>
					</div>
				</div>
			</motion.div>


			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<motion.img src={images.profile} alt="profile_bg" whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }} />
				{/* <motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/> */}
			</motion.div>
			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.bash, images.python, images.javascript].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="profile_bg" />
					</div>
				))}
			</motion.div>
			{/* <motion.div
				whileInView={{ x: [200, -30], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className="app__header-info"
			>
				<div className='app__header-badge'>
					<div className='badge-cmp app_flex'>
						<p
							className="p-text"
							style={
								{
									color: 'black',
									textAlign: 'left',
									fontWeight: 400,
									fontSize: '18px'
								}
							}>
							Hello 👋 <br></br>I'm Arana
						</p>
					</div>
				</div>
			</motion.div> */}
		</div>
	);
}

// export default AppWrap(Header, 'home');
export default Header
