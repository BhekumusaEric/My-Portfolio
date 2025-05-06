import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SkillProgress({ skill, level, color = '#0969DA' }) {
  const [width, setWidth] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      setWidth(level);
      controls.start({
        width: `${level}%`,
        transition: { duration: 1, ease: 'easeOut' }
      });
    }
  }, [controls, inView, level]);
  
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-light">{skill}</span>
        <span className="text-sm font-medium text-light">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color, width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
}
