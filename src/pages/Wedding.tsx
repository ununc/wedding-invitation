import { useEffect, useRef } from 'react';
import { Section } from '../components/Section';
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
    0.2,
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
      <div className="mt-4 h-fit w-full">
        <div className="map h-48 opacity-[0.95]"></div>
      </div>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        <div>
          <div>주소</div>
          <div>경기도 부천시 소사구 경인로 386 (소사본동 65-7)</div>
          <div>MJ컨벤션 5층 그랜드볼룸홀</div>
        </div>
        <div>
          <div>전화</div>
          <div>032-347-5500</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-60 items-center mx-auto">
          <div className="map-icon opacity-[0.85] cursor-pointer">
            <a href="https://naver.me/xwmiFiaC">
              <div className="naver w-full h-full"></div>
            </a>
          </div>
          <div className="map-icon opacity-[0.85] cursor-pointer">
            <a href="https://place.map.kakao.com/m/27339651">
              <div className="kakao w-full h-full"></div>
            </a>
          </div>
          <div className="map-icon opacity-[0.85] cursor-pointer">
            <a href="https://naver.me/Fgivzc56">
              <div className="tmap w-full h-full"></div>
            </a>
          </div>
        </div>
      </div>
      <div className=" h-8"></div>
    </Section>
  );
};
