import React from 'react';
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import './Header.scss'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { useState } from 'react';
import { urlFor } from '../../client'
import { useEffect } from 'react';

const Header = (props) => {
	const [profile, setProfile] = useState([]);
	useEffect(() => {
		setProfile(props.user)
		console.log(profile)
	}, [props.user]);

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
						{
							profile.profileImg ?
								<img src={urlFor(profile.profileImg)} alt="profile_bg" /> : null
						}

					</div>
					<div style={{ margin: '1rem', marginBottom: '2rem' }} >
						<h5 className='head-text' style={{ fontSize: '1.5rem', fontWeight: '400', fontFamily: 'inherit' }} >Arana Jayavihan</h5>
					</div>
					<div>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%" }}><span style={{ color: '#28a745' }} >Email : </span><a href={`mailto:${profile.email}`} style={{ color: '#fff', textDecoration: 'none' }}>  {profile.email}</a></p>
						<hr style={{ marginTop: '3%', marginBottom: '3%', border: '.5px #212529 solid' }}></hr>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%" }}><span style={{ color: '#28a745' }} >Contact : </span><a href={`mailto:${profile.contact}`} style={{ color: '#fff', textDecoration: 'none' }}>  {profile.contact}</a></p>
						<hr style={{ marginTop: '3%', marginBottom: '3%', border: '.5px #212529 solid' }}></hr>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%", color: '#fff' }}><span style={{ color: '#28a745' }} >From : </span>{profile.from}</p>
						<hr style={{ marginTop: '3%', marginBottom: '3%', border: '.5px #212529 solid' }}></hr>
						<p className='p-text' style={{ fontSize: '16px', marginTop: "2%", color: '#fff' }}><span style={{ color: '#28a745' }} >Age : </span>{profile.age}</p>
					</div>
					<div style={{ display: 'flex', height: '10vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '3rem', marginTop: '2rem' }}>

						<p className='p-text'>Follow Me</p>
						<div className='footer__social'>
							<div>
								<BsLinkedin onClick={() => window.open(profile.linkedin, "_blank")} />
							</div>
							<div>
								<BsGithub onClick={() => window.open(profile.github, "_blank")} />
							</div>
							<div>
								<BsInstagram onClick={() => window.open(profile.instagram, "_blank")} />
							</div>
							<div>
								<BsTwitter onClick={() => window.open(profile.twitter, "_blank")} />
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
						<p className="p-text" style={{ color: '#FFF', textAlign: 'center', fontWeight: 400, fontSize: '18px' }}>Hello Folks <span style={{ fontSize: '1.5rem' }} >👋</span> <br></br>I am <span style={{ color: '#28a745', fontSize: '1.5rem' }}>{profile.fullName}</span></p>
					</div>
					<div className='type-animation'>

						<TypeAnimation
							sequence={
								[
									'Cyber Security Undergraduate',
									1750,
									'Security Analyst',
									1750,
									'Penetration Tester',
									1750,
									'Web 2/3 Developer',
									1750,
									'Software Developer',
									1750,
								]
							}
							speed={50}
							wrapper="span"
							style={{ fontSize: '1.75em', fontWeight: 'bold', fontFamily: 'inherit' }}
							repeat={Infinity}
						/>

					</div>
					<div style={{ width: '80%' }}>
						<p className='p-text' style={{ color: '#fff', fontSize: '1rem', textAlign: 'center' }}>
							{profile.description}
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

export default Header