import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { client } from '../../client';
import './Footer.scss';
import { BsGithub, BsInstagram, BsTelephoneFill, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'

const Footer = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isEmpty, setIsEmpty] = useState(true);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const chkEmpty = () => {
		if (formData.username !== '' && formData.email !== '' && formData.message !== '') {
			handleSubmit()
		}
		else {
			setAlert(true)
		}
	}
	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: 'contact',
			name: formData.username,
			email: formData.email,
			message: formData.message,
		};

		client.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className='section__info'>
				<h2 className="head-text">Get <span>In Touch</span></h2>

				<p className='section__info-text'>
					Hit me up if any questions, inquiries, job oppertunities, or any help needed.
				</p>
			</div>

			<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
				<div className="app__footer-cards">
					<div style={{ display: 'flex', height: '10vh', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginBottom: '3rem' }}>
						<h5 className='head-text' style={{ fontSize: '1.75rem', marginBottom: '.5rem' }}>Contact Details</h5>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '30px', width: '125px' }}>
							<BsTelephoneFill style={{ color: '#28a745', lineHeight: '1.5', fontSize: '1.25rem' }} />
							<span >
								<a href="tel:+94 76 415 2204" className="p-text" style={{ color: '#fff', textDecoration: 'none', fontSize: '1,25rem' }}>  +94 76 415 2204</a>
							</span>
						</div >
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '30px', width: '190px' }}>
							<MdEmail style={{ color: '#28a745', lineHeight: '1.5', fontSize: '1.25rem' }} />
							<span >
								<a href="mailto:aranajayavihan@gmail.com" className="p-text" style={{ color: '#fff', textDecoration: 'none', fontSize: '1,25rem' }}>  aranajayavihan@gmail.com</a>
							</span>
						</div >
					</div>
					<div style={{ display: 'flex', height: '10vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '3rem' }}>
						<h5 className='head-text' style={{ fontSize: '1.75rem', marginBottom: '.5rem' }}>Follow Me On</h5>
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
				</div>

				{!isFormSubmitted ? (
					<div className="app__footer-form app__flex">

						<motion.div
							whileInView={{ opacity: [0, 1] }}>
							{
								alert ?
									<p className='p-text' style={{ color: '#28a745', }}>Fill All Fields</p>
									: null
							}

						</motion.div>

						<div className="app__flex">
							<input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
						</div>
						<div className="app__flex">
							<input className="p-text" type="email" placeholder="Your Email" name="email" required value={email} onChange={handleChangeInput} />
						</div>
						<div>
							<textarea
								className="p-text"
								placeholder="Your Message"
								value={message}
								name="message"
								onChange={handleChangeInput}
							/>
						</div>

						<button type="button" className="p-text" onClick={chkEmpty}>{!loading ? 'Send Message' : 'Sending...'}</button>

					</div>
				) : isFormSubmitted ? (
					<div style={{ height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						<h3 className="head-text">
							Thank You For Reaching Me 🍃
						</h3>
					</div>
				) : {}
				}

			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__primarybg',
);