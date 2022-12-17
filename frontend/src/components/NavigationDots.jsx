import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavigationDots = () => {
  const navArr = ['home', 'about', 'skills', 'projects', 'contact']
    const [active, setActive] = useState('home');
    const count = navArr.length
    
    window.addEventListener('scroll', () => {
        let height = window.document.body.scrollHeight - window.innerHeight
        let curPosition = window.pageYOffset;

        if (height / count >= curPosition) {
            setActive('home')
        }
        else if (height / count * 2 >= curPosition) {
            setActive('about')
        }
        else if (height / count * 3 >= curPosition) {
            setActive('skills')
        }
        else if (height / count * 4 >= curPosition) {
            setActive('projects')
        }
        else if (height / count * 5 >= curPosition) {
            setActive('contact')
        }
    })

  return (
    <motion.div className="app__navigation"
      whileInView={{ opacity: [0,1] }}
      transition={{ duration: .75, ease: 'easeInOut' }}
      initial={{ opacity: 0}}
    >
      {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#28a745' } : {}}
        />
      ))}
    </motion.div>
  )
}


  ;

export { NavigationDots };