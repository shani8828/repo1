import React, { useState, useEffect } from 'react';

const PageUpButton = () => {
  const [visible, setVisible] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 250) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 text-custom-purple bg-none rounded-full w-9 h-9 text-2xl flex items-center justify-center shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      ↑
    </button>
  );
};

export default PageUpButton;
