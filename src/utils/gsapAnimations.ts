// src/utils/gsapAnimations.ts
import { gsap } from 'gsap';

export const animateHeroText = () => {
  gsap.fromTo(
    '.hero-text',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1.5 }
  );
};

export const fadeIn = (element: string) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, stagger: 0.2 }
  );
};
