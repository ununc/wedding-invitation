import { useEffect, useRef } from 'react';
import { Section } from '../components/Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Flower } from '../components/Flower';

export const Invitation = () => {
  const title = useRef<HTMLDivElement>(null);
  const flower = useRef<HTMLDivElement>(null);

  const bible = useRef<HTMLDivElement>(null);
  const prase = useRef<HTMLDivElement>(null);
  const prase2 = useRef<HTMLDivElement>(null);
  const prase3 = useRef<HTMLDivElement>(null);

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

  const [observeFlower, disconnectFlower] = useIntersectionObserver(
    () => isIntersecting(flower),
    () => isNotIntersecting(flower),
    0.2,
  );

  const [observe, disconnect] = useIntersectionObserver(
    () => isIntersecting(bible),
    () => isNotIntersecting(bible),
    0.2,
  );

  const [observe1, disconnect1] = useIntersectionObserver(
    () => isIntersecting(prase),
    () => isNotIntersecting(prase),
    0.2,
  );

  const [observe2, disconnect2] = useIntersectionObserver(
    () => isIntersecting(prase2),
    () => isNotIntersecting(prase2),
    0.2,
  );
  const [observe3, disconnect3] = useIntersectionObserver(
    () => isIntersecting(prase3),
    () => isNotIntersecting(prase3),
    0.2,
  );

  useEffect(() => {
    if (title?.current) {
      observeTitle(title.current);
    }
    if (flower?.current) {
      observeFlower(flower.current);
    }
    if (bible?.current) {
      observe(bible.current);
    }
    if (prase?.current) {
      observe1(prase.current);
    }
    if (prase2?.current) {
      observe2(prase2.current);
    }
    if (prase3?.current) {
      observe3(prase3.current);
    }
    return () => {
      disconnect();
      disconnect1();
      disconnect2();
      disconnect3();
      disconnectTitle();
      disconnectFlower();
    };
  }, []);

  return (
    <Section classNames="mt-4">
      <div ref={title} className="w-full opacity-0">
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center">
          I N V I T A T I O N
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          초대합니다
        </h2>
      </div>
      <div ref={flower} className="w-full opacity-0">
        <div className="w-full mt-6 mb-2 opacity-[0.55]">
          <Flower />
        </div>
      </div>
      <div ref={bible} className="w-full mt-1.5 opacity-0">
        <div className="text-neutral-700 opacity-75 text-center text-[0.9375rem] sm:text-lg">
          <div className="">우리가 사랑함은</div>
          <div>그가 먼저 우리를 사랑하셨음이라</div>
          <div className="mt-1.5 sm:mt-2 text-xs sm:text-base">
            요한일서 4:19
          </div>
        </div>
      </div>

      <div ref={prase} className="w-full mt-5 sm:mt-7 opacity-0">
        <div className="text-neutral-700 opacity-[0.85] text-sm sm:text-bases text-center">
          <div>가장 좋은 때에, 가장 좋은 사람을 만났습니다.</div>
          <div className="mt-2">이 만남을 뭐라고 불러야 할지 고민하다가</div>
          <div className="mt-2">
            '인도하심'으로 설명할 수 있음을 알았습니다.
          </div>
        </div>
      </div>
      <div ref={prase2} className="w-full mt-3 opacity-0">
        <div className="text-neutral-700 opacity-80 text-sm sm:text-base text-center">
          이제 단 한 번뿐인 귀한 삶을 함께하기로 약속합니다.
        </div>
        <div className="text-neutral-700 opacity-80 text-sm sm:text-base text-center">
          <div>겸손과 온유와 사랑으로</div>
          <div className="mt-2">
            하나님이 기뻐하시는 가정을 만들어가겠습니다.
          </div>
          <div className="mt-2">부부로 시작하는 첫 순간에</div>
          <div className="mt-2">소중한 당신을 초대하고 싶습니다.</div>
        </div>
      </div>

      <div
        ref={prase3}
        className="w-full py-16 flex justify-center items-center opacity-0">
        <div className="text-end mr-5 sm:mr-7">
          <div className="h-7 text-neutral-700 opacity-[0.85] text-lg sm:text-xl mb-0.5 sm:mb-[1.125rem] ">
            유호영 • 노정연
            <span className="pl-0.5 text-[0.9rem] sm:text-base text-amber-950 opacity-[0.55]">
              의 장남
            </span>
          </div>
          <div className="h-1.5"></div>
          <div className="h-7 text-neutral-700 opacity-[0.85] text-lg sm:text-xl mt-3 sm:mt-2.5">
            故이종성 • 김정실
            <span className="pl-0.5 text-[0.9rem] sm:text-base text-amber-950 opacity-[0.55]">
              의 장녀
            </span>
          </div>
        </div>
        <div className="flex flex-col text-neutral-700 justify-end items-center mr-[1.125rem] sm:mr-5">
          <div className="text-center text-xl sm:text-2xl">형철</div>
          <div className="h-5"></div>
          <div className="text-center text-xl sm:text-2xl">새봄</div>
        </div>
      </div>
    </Section>
  );
};
