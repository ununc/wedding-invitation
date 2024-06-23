import { useEffect, useRef } from 'react';
import { Section } from '../components/Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Video from '/intro/intros.mp4';

export const Intro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    0.3,
  );

  useEffect(() => {
    if (videoRef?.current) {
      observe(videoRef.current);
    }
    return () => {
      disconnect();
    };
  }, []);
  return (
    <Section>
      <div>
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
      <div className="w-full max-h-52 p-1 my-8 sm:my-12 grow flex flex-col justify-center items-center">
        <div className="font-medium text-[1.1875rem] sm:text-[1.375rem]">
          2024. 10. 09 (수) "한글날" 낮12:00
        </div>
        <div className="mt-3 font-medium sm:mt-4 text-[1.1875rem] sm:text-[1.375rem]">
          MJ컨벤션 5층 그랜드볼룸홀
        </div>
      </div>
    </Section>
  );
};
