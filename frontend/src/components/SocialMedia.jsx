import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaFacebookF onClick={() => window.open("https://www.facebook.com/profile.php?id=100011115035680", "_blank")} />
    </div>
    <div>
      <BsGithub onClick={() => window.open("https://github.com/Arana-Jayavihan", "_blank")} />
    </div>
    <div>
      <BsInstagram onClick={() => window.open("https://www.instagram.com/_.arana._/", "_blank")} />
    </div>
  </div>
);

export default SocialMedia;