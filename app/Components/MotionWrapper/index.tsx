'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';

type MotionWrapperProps = {
  children: React.ReactNode;
};

const MotionWrapper: FC<MotionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
