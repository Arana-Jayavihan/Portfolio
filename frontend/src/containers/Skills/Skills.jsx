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
              style={{ overflow: 'visible' }}
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
                          root: {},
                          path: {
                            stroke: `#28a745`,
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 2s ease 0s',
                            transform: 'rotate(1turn)',
                            transformOrigin: 'center center',
                          },

                          trail: {
                            stroke: '#d6d6d6',
                            strokeLinecap: 'round',
                            transform: 'rotate(1turn)',
                            transformOrigin: 'center center',
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