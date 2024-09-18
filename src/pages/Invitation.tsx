import { useEffect, useRef } from 'react';
import { Section } from '../components/Section';
import { Flower } from '../components/Flower';
import { AppearObserver } from '../components/AppearObserver';
import Video from '/invitation/invitation.mp4';

export const Invitation = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const initVideo = () => {
    if (videoRef?.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.7;
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
      }, 450);
    }
  };

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        initVideo();
      });
    }
  }, []);
  return (
    <Section classNames="mt-10">
      <div className="rounded-lg overflow-hidden mx-2.5 mt-4 mb-20 h-fit">
        <video
          preload="auto"
          className="shrink-0"
          poster="prevent"
          playsInline
          loop
          muted
          autoPlay
          controls
          ref={videoRef}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center">
          I N V I T A T I O N
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          초대합니다
        </h2>
      </AppearObserver>
      <AppearObserver>
        <div className="w-full mt-6 mb-2 opacity-[0.55]">
          <Flower />
        </div>
      </AppearObserver>
      <AppearObserver>
        <div className="text-15 text-neutral-700 opacity-75 text-center mt-3">
          <div className="">우리가 사랑함은</div>
          <div>그가 먼저 우리를 사랑하셨음이라</div>
          <div className="mt-1.5 text-xs">요한일서 4:19</div>
        </div>
      </AppearObserver>

      <div className="mt-5 text-sm text-neutral-700 opacity-75 text-center">
        <AppearObserver>
          <div className="mt-2">
            가장 좋은 때에, 가장 좋은 사람을 만났습니다.
          </div>
          <div className="mt-2">이 만남을 뭐라고 불러야 할지 고민하다가</div>
          <div className="mt-2">
            '인도하심'으로 설명할 수 있음을 알았습니다.
          </div>
        </AppearObserver>
        <AppearObserver>
          <div className="mt-2">
            이제 단 한 번뿐인 귀한 삶을 함께하기로 약속합니다.
          </div>
          <div className="mt-2">겸손과 온유와 사랑으로</div>
          <div className="mt-2">
            하나님이 기뻐하시는 가정을 만들어가겠습니다.
          </div>
        </AppearObserver>
        <AppearObserver>
          <div className="mt-2">부부로 시작하는 첫 순간에</div>
          <div className="mt-2">소중한 당신을 초대하고 싶습니다.</div>
        </AppearObserver>
      </div>

      <AppearObserver>
        <div className="text-lg py-12 flex justify-center items-center text-neutral-700 opacity-75">
          <div className="text-end mr-4">
            <div className="h-7  mb-0.5">
              유호영 • 노정연
              <span className="pl-1 text-[0.9rem] text-amber-950 opacity-50">
                의 장남
              </span>
            </div>
            <div className="h-1.5"></div>
            <div className="h-7 mt-3">
              故이종성 • 김정실
              <span className="pl-1 text-[0.9rem] text-amber-950 opacity-50">
                의 장녀
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center mr-[1.125rem]">
            <div>형철</div>
            <div className="h-5"></div>
            <div>새봄</div>
          </div>
        </div>
      </AppearObserver>
    </Section>
  );
};
