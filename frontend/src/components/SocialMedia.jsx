import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social"
  >
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
);

export default SocialMedia;