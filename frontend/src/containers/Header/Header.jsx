import React from 'react';
import { motion } from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap';
import { TypeAnimation } from 'react-type-animation';
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
	whileInView: {
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
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className="app__header-info"
			>
				<div className='app__header-badge'>
					<div className='badge-cmp app_flex'>
						<span></span>
						<p className="p-text" style={{ color: 'black', textAlign: 'left', fontWeight: 400, fontSize: '18px' }}>Hello 👋 <br></br>I'm Arana</p>
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

					

				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				{/* <img src={images.profile} alt="profile_bg" /> */}
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</motion.div>
			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.react, images.ubuntu, images.sass].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="profile_bg" />
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default AppWrap(Header, 'home');
