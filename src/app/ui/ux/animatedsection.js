import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { DesignCarousel2 } from '@/app/designanddevelopment/designcarousel';
import BeforeAfterSlider from './beforeafter';

const AnimatedSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.1,     
  });

  return (
    <div ref={ref} className="w-full lg:mt-1 md:py-12 service-head">
      <p className="text-4xl font-bold text-center lg:mt-20 sm:mt-20">
        Service
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        
        <DesignCarousel2 />
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
