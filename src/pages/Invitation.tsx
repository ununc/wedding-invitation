import { useEffect, useRef } from 'react';
import { Hana } from '../components/Hana';
import { Section } from '../components/Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const Invitation = () => {
  const bible = useRef<HTMLDivElement>(null);
  const prase = useRef<HTMLDivElement>(null);

  const isIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.add('appear-active');
  };

  const isNotIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.remove('appear-active');
  };

  const [observe, disconnect] = useIntersectionObserver(
    () => isIntersecting(bible),
    () => isNotIntersecting(bible),
    0.3,
  );

  const [observe1, disconnect1] = useIntersectionObserver(
    () => isIntersecting(prase),
    () => isNotIntersecting(prase),
    0.1,
  );

  useEffect(() => {
    if (bible?.current) {
      observe(bible.current);
    }
    if (prase?.current) {
      observe1(prase.current);
    }
    return () => {
      disconnect();
      disconnect1();
    };
  }, []);

  return (
    <Section>
      <div className="bg-white w-full">
        <Hana />
        <h2 className="italic text-3xl sm:text-4xl mt-1 sm:mt-2.5 text-center">
          INVITATION
        </h2>
        <div
          ref={bible}
          className="w-full text-center mt-5 sm:mt-7 sm:text-lg text-stone-800 opacity-0">
          <div>우리가 사랑함은</div>
          <div>그가 먼저 우리를 사랑하셨음이라</div>
          <div className="mt-1.5 sm:mt-2 text-sm sm:text-base">
            요한일서 4:19
          </div>
        </div>

        <div
          ref={prase}
          className="w-full pb-8 sm:pb-10 flex flex-col gap-1.5 text-center mt-5 sm:mt-7 text-[0.9rem] sm:text-base text-stone-700 opacity-0">
          <div>가장 좋은 때에, 가장 좋은 사람을 만났습니다.</div>
          <div>이 만남을 뭐라고 불러야 할지 고민하다가</div>
          <div>'인도하심'으로 설명할 수 있음을 알았습니다.</div>
          <div className="mt-2.5 sm:mt-3">
            이제 단 한 번뿐인 귀한 삶을 함께하기로 약속합니다.
          </div>
          <div>겸손과 온유와 사랑으로</div>
          <div>하나님이 기뻐하시는 가정을 만들어가겠습니다.</div>
          <div className="mt-2.5 sm:mt-3">부부로 시작하는 첫 순간에</div>
          <div>소중한 당신을 초대하고 싶습니다.</div>
        </div>
      </div>

      <div className="w-full py-8 flex justify-center items-center">
        <div className="text-end mr-5 sm:mr-7">
          <div className="text-zinc-500 text-lg sm:text-xl mb-0.5 sm:mb-[1.125rem] ">
            유호영 • 노정연
            <span className="text-[0.937rem] sm:text-base">의 장남</span>
          </div>
          <div className="h-8"></div>
          <div className="text-zinc-500 text-lg sm:text-xl mt-3 sm:mt-2.5">
            故이종성 • 김정실
            <span className="text-[0.937rem] sm:text-base">의 장녀</span>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center mr-[1.125rem] sm:mr-5">
          <div className="text-center text-xl sm:text-2xl">유형철</div>
          <div className="text-end py-3 sm:py-4">🩵</div>
          <div className="text-center text-xl sm:text-2xl">이새봄</div>
        </div>
      </div>
    </Section>
  );
};
