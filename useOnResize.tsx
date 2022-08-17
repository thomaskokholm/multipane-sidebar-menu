import { useState, useEffect } from 'react';

export function useOnResize() {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const throttle = (func, delay) => {
    let inProgress = false;
    return (...args) => {
      if (inProgress) {
        return;
      }
      inProgress = true;
      setTimeout(() => {
        func(...args); // Consider moving this line before the set timeout if you want the very first one to be immediate
        inProgress = false;
      }, delay);
    };
  };

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
