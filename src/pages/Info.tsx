import { useEffect, useRef } from 'react';
import { Flower } from '../components/Flower';
import { Section } from '../components/Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const Info = () => {
  const flower = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const man = useRef<HTMLDivElement>(null);
  const woman = useRef<HTMLDivElement>(null);

  const isIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.add('appear-active');
  };

  const isNotIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.remove('appear-active');
  };

  const [observeFlower, disconnectFlower] = useIntersectionObserver(
    () => isIntersecting(flower),
    () => isNotIntersecting(flower),
    0.8,
  );

  const [observeTitle, disconnectTitle] = useIntersectionObserver(
    () => isIntersecting(title),
    () => isNotIntersecting(title),
    0.8,
  );

  const [observeMan, disconnectMan] = useIntersectionObserver(
    () => isIntersecting(man),
    () => isNotIntersecting(man),
    0.8,
  );

  const [observeWoman, disconnectWoman] = useIntersectionObserver(
    () => isIntersecting(woman),
    () => isNotIntersecting(woman),
    0.8,
  );

  useEffect(() => {
    if (flower?.current) {
      observeFlower(flower.current);
    }
    if (title?.current) {
      observeTitle(title.current);
    }
    if (man?.current) {
      observeMan(man.current);
    }
    if (woman?.current) {
      observeWoman(woman.current);
    }
    return () => {
      disconnectFlower();
      disconnectTitle();
      disconnectMan();
      disconnectWoman();
    };
  }, []);
  return (
    <Section>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        축하 메세지 comments 다는 곳
      </div>
      <div className="w-full mt-8">
        <div ref={flower} className="w-full opacity-0">
          <div className="w-full mb-2 opacity-[0.55]">
            <Flower />
          </div>
        </div>
        <div ref={title} className="w-full opacity-0">
          <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
            마음 전하실 곳
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center w-8/12 mx-auto mt-5">
          <div ref={man} className="w-full opacity-0">
            <div className="relative w-full">
              <div className="w-full bg-amber-700 opacity-[0.08] text-center h-9 rounded-lg"></div>
              <div className="absolute absolute-center text-sm text-amber-950 opacity-60 text-center">
                신랑 측 계좌번호
              </div>
            </div>
            <div className="text-neutral-700 opacity-80 text-xs flex flex-col justify-center items-center gap-1 mt-2.5">
              <div className="">유호영 신한</div>
              <div className="">노정연 신한</div>
              <div className="">
                유형철 신한 110-386-204-301 <button>복사 숫자만</button>
              </div>
            </div>
          </div>

          <div ref={woman} className="w-full opacity-0">
            <div className="relative w-full mt-8">
              <div className="w-full bg-amber-700 opacity-[0.08] text-center h-9 rounded-lg"></div>
              <div className="absolute absolute-center text-sm text-amber-950 opacity-60 text-center">
                신부 측 계좌번호
              </div>
            </div>
            <div className="text-neutral-700 opacity-80 text-xs flex flex-col justify-center items-center gap-1 mt-2.5">
              <div className="">김정실 신한</div>
              <div className="">
                이새봄 신한 110-386-204-301 <button>복사 숫자만</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t-2 border-dashed border-amber-900 h-32 w-full text-sm flex flex-col items-center justify-center text-amber-950 opacity-40">
        <div>카카오톡 공유하기</div>
        <div className="mt-2">링크주소 복사하기</div>
        <div className="mt-2 text-[0.625rem]">
          Copyright 2024. <span className="font-bold">Yanagi</span> all rights
          reserved.
        </div>
      </div>
    </Section>
  );
};
