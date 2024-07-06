import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const AppearObserver = ({ children }: { children: React.ReactNode }) => {
  const target = useRef<HTMLDivElement>(null);
  const appear = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.add('appear-active');
  };
  const disappear = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.remove('appear-active');
  };
  const [observe, disconnect] = useIntersectionObserver(
    () => appear(target),
    () => disappear(target),
    0.2,
  );
  useEffect(() => {
    if (target?.current) {
      observe(target.current);
    }
    return () => {
      disconnect();
    };
  }, []);
  return (
    <div ref={target} className="w-full h-fit opacity-0">
      {children}
    </div>
  );
};
