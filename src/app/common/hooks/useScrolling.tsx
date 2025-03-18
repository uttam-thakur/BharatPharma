"use client";

import { useState, useEffect } from "react";

const useScrolling = ({ fallbackTime = 200 }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollingTimeout: string | number | NodeJS.Timeout | undefined;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop || scrollTop < lastScrollTop) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      lastScrollTop = scrollTop;

      clearTimeout(scrollingTimeout);
      scrollingTimeout = setTimeout(() => {
        setScrolling(false);
      }, fallbackTime);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolling;
};

export { useScrolling };
