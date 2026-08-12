import { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ target, duration = 2000, suffix = '' }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(0);
  const frameRate = 1000 / 60; // 60 frames per second
  const totalFrames = Math.round(duration / frameRate);
  const easeOutQuad = t => t * (2 - t); // Easing function

  useEffect(() => {
    let frame = 0;
    const initialNumber = 0;

    const animate = () => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const animatedValue = Math.round(initialNumber + (target - initialNumber) * progress);

      if (frame < totalFrames) {
        setCurrentNumber(animatedValue);
        ref.current = requestAnimationFrame(animate);
      } else {
        setCurrentNumber(target);
      }
    };

    ref.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(ref.current);
  }, [target, duration, totalFrames]);

  return <span>{currentNumber}{suffix}</span>;
};

export default AnimatedNumber;