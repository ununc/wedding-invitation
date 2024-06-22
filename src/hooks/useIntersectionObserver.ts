import { useRef } from 'react';

export default function useIntersectionObserver(
  callback: () => void,
  reverse: () => void,
  threshold = 1,
): [(element: HTMLElement) => void, () => void] {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          } else {
            reverse();
          }
        });
      },
      { threshold },
    ),
  );

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  const disconnect = () => {
    observer.current.disconnect();
  };

  return [observe, disconnect];
}
