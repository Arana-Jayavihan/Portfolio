import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { client } from '../client';

const SocialMedia = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const query = '*[_type == "profile"][0]'

    client.fetch(query)
      .then((data) => {
        setProfile(data)
        console.log(profile)
      })
  }, []);

  return (
    <div className="app__social"
    >
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
  )
}

export default SocialMedia;