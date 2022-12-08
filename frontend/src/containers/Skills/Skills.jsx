import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { urlFor, client } from '../../client';
import './Skills.scss';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const number = 283
const progress = (percent) => {
  setTimeout(function () {
    return percent
  }, 1000)
}

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills <span>& Experiences</span></h2>
      <div className="app__skills-container" >

        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <VisibilitySensor>
                {
                  ({ isVisible }) => {
                    const percent = isVisible ? skill.percentage : 0
                    return (
                      <CircularProgressbarWithChildren
                        id='progress'
                        value={percent}
                        styles={{
                          // Customize the root svg element
                          root: {},
                          // Customize the path, i.e. the "completed progress"
                          path: {
                            // Path color
                            stroke: `#28a745`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                            // Customize transition animation
                            transition: 'stroke-dashoffset 2s ease 0s',

                            // Rotate the path
                            transform: 'rotate(1turn)',
                            transformOrigin: 'center center',
                          },
                          // Customize the circle behind the path, i.e. the "total progress"
                          trail: {
                            // Trail color
                            stroke: '#d6d6d6',
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                            // Rotate the trail
                            transform: 'rotate(1turn)',
                            transformOrigin: 'center center',
                          },
                          // Customize the text
                          text: {
                            // Text color
                            fill: '#f88',
                            // Text size
                            fontSize: '16px',
                          },
                          // Customize background - only used when the `background` prop is true
                          background: {
                            fill: '#3e98c7',
                          },
                        }}>
                        <div
                          id='img'
                          className="app__flex"
                          data-tip
                          data-for={skill.name}
                          key={skill.name}
                        >

                          <img src={urlFor(skill.icon)} alt={skill.name} />
                          <h6 className='skill__percent bold-text'>{skill.percentage}%</h6>
                        </div>
                        
                      </CircularProgressbarWithChildren>

                    )
                  }
                }
              </VisibilitySensor>

              <p className="p-text">{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      type='success'
                      place='right'
                      id={work.name}
                      effect="float"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);