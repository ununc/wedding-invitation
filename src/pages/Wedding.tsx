import { useEffect, useRef } from 'react';
import { Hana } from '../components/Hana';
import { Section } from '../components/Section';
import calendar from '/calendar.jpg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
export const Wedding = () => {
  const title = useRef<HTMLDivElement>(null);

  const isIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.add('appear-active');
  };

  const isNotIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.remove('appear-active');
  };

  const [observeTitle, disconnectTitle] = useIntersectionObserver(
    () => isIntersecting(title),
    () => isNotIntersecting(title),
    1,
  );

  useEffect(() => {
    if (title?.current) {
      observeTitle(title.current);
    }
    return () => {
      disconnectTitle();
    };
  }, []);
  return (
    <Section>
      <div ref={title} className="w-full mt-4 opacity-0">
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center">
          L O C A T I O N
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          오시는 길
        </h2>
      </div>
      <div className="mt-8 h-fit w-[85%]"></div>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        네이버 지도 및 카카오 지도 링크 작업
      </div>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        교통편 버스 지하철 승용차
      </div>
      <div className=" h-8"></div>
    </Section>
  );
};
