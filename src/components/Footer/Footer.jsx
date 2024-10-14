import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Trigger when 10% of the footer is visible
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 text-white p-8 rounded-sm bg-opacity-5"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: isVisible ? 0 : -200 }}
          transition={{ duration: 1.5 }}
          className="mb-4 md:mb-0"
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-2 flex justify-center">Contact Us</h2>
          <div className="flex items-center mb-2">
            <Phone className="mr-2 text-orange-500" size={20} />
            <span>+91 number daldena</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 text-orange-500" size={20} />
            <span>srmsigkdd@gmail.com</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: isVisible ? 0 : 200 }}
          transition={{ duration: 1.5 }}
          className=""
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/srmsigkdd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/srmsigkdd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center text-sm text-gray-400"
      >
        © 2024 SRMIST ACM SIGKDD Student Chapter 
      </motion.div>
    </motion.footer>
  );
};

export default Footer;