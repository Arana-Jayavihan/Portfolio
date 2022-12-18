import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <div className='section__info'>
        <h2 className="head-text">Completed <span> Projects</span></h2>

        <p className='section__info-text'>
          The list of projects that I completed through my days of stydying. Includes projects of different
          scopes.
        </p>
      </div>

      <div>
        <div className="app__work-filter">
          {['UI/UX', 'Web App', 'Pen Test', 'React JS', 'Python', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div
                className="app__work-img app__flex"
              >
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  {

                    work.projectLink !== undefined ?
                      <a href={work.projectLink} target="_blank" rel="noreferrer">

                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.90] }}
                          transition={{ duration: 0.25 }}
                          className="app__flex"
                        >
                          <AiFillEye />
                        </motion.div>
                      </a> : null
                  }
                  {
                    work.codeLink !== undefined ?
                      <a href={work.codeLink} target="_blank" rel="noreferrer">
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.90] }}
                          transition={{ duration: 0.25 }}
                          className="app__flex"
                        >
                          <AiFillGithub />
                        </motion.div>
                      </a> : null
                  }

                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text" style={{ color: 'black', textAlign: 'center' }}>{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10, textAlign: 'center', color: 'black' }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text" style={{ color: 'black' }}>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'projects',
  'app__whitebg',
);