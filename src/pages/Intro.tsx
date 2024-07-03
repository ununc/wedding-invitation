import { useEffect, useRef } from 'react';
import { Section } from '../components/Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Video from '/intro/intros.mp4';

export const Intro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const title = useRef<HTMLDivElement>(null);

  const isIntersecting = () => {
    videoRef?.current?.play();
  };

  const isNotIntersecting = () => {
    const video = videoRef?.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const [observe, disconnect] = useIntersectionObserver(
    () => isIntersecting(),
    () => isNotIntersecting(),
    0.2,
  );

  const isIntersecting1 = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.add('appear-active');
  };

  const isNotIntersecting1 = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.remove('appear-active');
  };

  const [observe1, disconnect1] = useIntersectionObserver(
    () => isIntersecting1(title),
    () => isNotIntersecting1(title),
    0.8,
  );

  useEffect(() => {
    if (videoRef?.current) {
      observe(videoRef.current);
    }
    if (title?.current) {
      observe1(title.current);
    }
    return () => {
      disconnect();
      disconnect1();
    };
  }, []);
  return (
    <Section>
      <div className="mt-3 mx-3 sm:mt-4 sm:mx-4 overflow-hidden rounded-xl">
        <video
          preload="auto"
          className="intro-video shrink-0"
          poster="prevent"
          playsInline
          autoPlay
          muted
          ref={videoRef}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div
        ref={title}
        className="w-full opacity-0 text-neutral-700 opacity-80 font-medium text-xl sm:text-2xl p-1 my-8 sm:my-12 grow flex flex-col justify-center items-center">
        <div>2024. 10. 09 (수) "한글날" 낮12:00</div>
        <div className="mt-3 sm:mt-4">MJ컨벤션 5층 그랜드볼룸홀</div>
      </div>
    </Section>
  );
};
