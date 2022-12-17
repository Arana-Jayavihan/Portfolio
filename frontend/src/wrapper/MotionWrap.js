import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], scale: [.975, 1] }}
      transition={{ duration: .75, ease: 'easeInOut'  }}
      initial={{ opacity: 0, scale: 0.975 }}
      exit={{ opacity: 0 }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;