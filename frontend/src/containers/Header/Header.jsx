import React from 'react';
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { images } from '../../constants'
import './Header.scss'
import { BsGithub, BsInstagram, BsTelephoneFill, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Navbar } from '../../components/Navbar/Navbar';
import { useEffect } from 'react';

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
		<>
			<div id='home' className='app__header app__flex'>
				<div>
					<h2 className='head-hext' >Hello Folks</h2>
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						style={{
							// backgroundColor: '#343a40',
							width: '90%',
							height: '100%',
							textAlign: 'center',
							fontFamily: 'inherit'
						}}
					>

						<h2 className='head-hext' style={{ fontSize: '2rem' }}>
							<TypeAnimation
								sequence={[
									'A Cyber Security Undergraduate',
									1500,
									'A Security Analyst',
									1500,
									'A Bug Bounty Hunter',
									1500,
									'A Web 2/3 Developer',
									1500,
									'A Programmer',
									1500,
								]}
								speed={50}
								wrapper="span"
								repeat={Infinity}
								style={{ fontSize: '2rem' }}
							/>
						</h2>

					</motion.div>
				</div>

				{/* <motion.div
					whileInView={{ x: [-200, 20], opacity: [0, 1], scale: [0, 1] }}
					transition={{ duration: 1 }}
					className="app__header-info"
				>
					<div className='app__header-badge'>
						<div className='badge-cmp app_flex'>
							<p className="p-text" style={{ color: 'black', textAlign: 'left', fontWeight: 400, fontSize: '18px' }}>Hello Folks 👋 <br></br>I'm <span style={{ color: '#28a745', fontSize: '1.5rem' }}>Arana Jayavihan</span></p>
							<div >
								<TypeAnimation
									sequence={[
										'A Cyber Security Undergraduate',
										1500,
										'A Security Analyst',
										1500,
										'A Bug Bounty Hunter',
										1500,
										'A Web 2/3 Developer',
										1500,
										'A Programmer',
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
								<h4 style={{ fontSize: '1em', fontWeight: '400' }} >From : <span style={{ textDecoration: 'none', color: '#28a745', fontSize: '1rem', fontWeight: '400' }}>Colombo, Sri Lanka</span></h4>
								<hr style={{ marginTop: '2%', marginBottom: '2%' }}></hr>
								<h4 style={{ fontSize: '1em', fontWeight: '400' }} >Age : <span style={{ textDecoration: 'none', color: '#28a745', fontSize: '1rem', fontWeight: '400' }}>21</span></h4>
								<hr style={{ marginTop: '2%', marginBottom: '2%' }}></hr>
							</div>
						</div>
					</div>
				</motion.div> */}


				{/* <motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className="app__header-img"
				>
					<motion.img src={images.profile} alt="profile_bg" whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: 'easeInOut' }} />
					<motion.img
								whileInView={{ scale: [0, 1] }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								src={images.circle}
								alt="profile_circle"
								className="overlay_circle"
							/>
				</motion.div> */}
				{/* <motion.div
					variants={scaleVariants}
					whileInView={scaleVariants.whileInView}
					className="app__header-circles"
				>
					{[images.bash, images.python, images.javascript].map((circle, index) => (
						<div className="circle-cmp app__flex" key={`circle-${index}`}>
							<img src={circle} alt="profile_bg" />
						</div>
					))}
				</motion.div> */}
			</div>
		</>
	)

}

const Header2 = () => {
	return (
		<>
			<div
				id='home'
				style={{ zIndex: '20', top: '10%', display: 'flex', flexDirection: 'row' }}
			>
				<motion.div
					className='side__panel'
					whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
					transition={{ duration: 0.5 }}
				>
					<div className='panel-image'>
						<img src={images.profile} alt="profile_bg" />
					</div>
					<div style={{ margin: '1rem', marginBottom: '2rem' }} >
						<h5 className='head-text' style={{ fontSize: '1.5rem', fontWeight: '400', fontFamily: 'inherit' }} >Arana Jayavihan</h5>
					</div>
					<div>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%" }}><span style={{ color: '#28a745' }} >Email : </span><a href="mailto:aranajayavihan@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>  aranajayavihan@gmail.com</a></p>
						<hr style={{ marginTop: '3%', marginBottom: '3%', border: '.5px #212529 solid' }}></hr>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%" }}><span style={{ color: '#28a745' }} >Contact : </span><a href="tel:+94 76 415 2204" style={{ color: '#fff', textDecoration: 'none' }}>  +94 76 415 2204</a></p>
						<hr style={{ marginTop: '3%', marginBottom: '3%', border: '.5px #212529 solid' }}></hr>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%", color: '#fff' }}><span style={{ color: '#28a745' }} >From : </span>Colombo, Sri Lanka</p>
						<hr style={{ marginTop: '3%', marginBottom: '3%', border: '.5px #212529 solid' }}></hr>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%", color: '#fff' }}><span style={{ color: '#28a745' }} >Age : </span>21</p>
					</div>
					<div style={{ display: 'flex', height: '10vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '3rem', marginTop: '2rem' }}>
						{/* <h5 className='head-text' style={{ fontSize: '1.75rem', marginBottom: '.5rem' }}>Follow Me On</h5> */}
						<div className='footer__social'>
							<div>
								<BsLinkedin onClick={() => window.open("https://www.linkedin.com/in/arana-jayavihan/", "_blank")} />
							</div>
							<div>
								<BsGithub onClick={() => window.open("https://github.com/Arana-Jayavihan", "_blank")} />
							</div>
							<div>
								<BsInstagram onClick={() => window.open("https://www.instagram.com/_.arana._/", "_blank")} />
							</div>
							<div>
								<BsTwitter onClick={() => window.open("https://twitter.com/Arana_Jayavihan", "_blank")} />
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					className='right-panel'
					whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<p className="p-text" style={{ color: '#FFF', textAlign: 'center', fontWeight: 400, fontSize: '18px' }}>Hello Folks <span style={{ fontSize: '1.5rem' }} >👋</span> <br></br>I am <span style={{ color: '#28a745', fontSize: '1.5rem' }}>Arana Jayavihan</span></p>
					</div>
					<div className='type-animation'>
						<TypeAnimation
							sequence={[
								'Cyber Security Undergraduate',
								1500,
								'Security Analyst',
								1500,
								'Penetration Tester',
								1500,
								'Web 2/3 Developer',
								1500,
								'Software Developer',
								1500,
							]}
							speed={50}
							wrapper="span"
							style={{ fontSize: '1.75em', fontWeight: 'bold', fontFamily: 'inherit' }}
							repeat={Infinity}
						/>
					</div>
					<div style={{ width: '80%' }}>
						<p className='p-text' style={{ color: '#fff', fontSize: '1rem', textAlign: 'center'}}>
							I'm a cybersecurity undergraduate with a wide variety of skill set in different IT domains.
							Discovering new technologies is my passion. Also I'm a hard-working, agile, adaptive, team-playing,
							pasionate individual.
						</p>
					</div>
					<div className='arrow-animation'>
						<div class="container">
							<div class="chevron"></div>
							<div class="chevron"></div>
							<div class="chevron"></div>
						</div>
					</div>
				</motion.div>

			</div>
		</>
	)
}

// export default AppWrap(Header, 'home');
export { Header, Header2 }
