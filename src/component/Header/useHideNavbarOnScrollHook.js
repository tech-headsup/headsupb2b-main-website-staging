import { useEffect, useRef, useState } from 'react';

export const useHideNavbarOnScroll = (navbarRef) => {
  const lastScrollTop = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = 100;

      if (currentScroll > lastScrollTop.current && currentScroll > scrollThreshold) {
        setIsHidden(true);
      } else if (currentScroll < lastScrollTop.current) {
        setIsHidden(false);
      }

      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isHidden;
};