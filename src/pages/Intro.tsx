import { useEffect, useRef } from 'react';
import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Video from '/intro/intros.webm';

export const Intro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isIntersecting = () => {
    videoRef?.current?.play();
  };
  const isNotIntersecting = () => {
    const video = videoRef?.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };
  const [observe, disconnect] = useIntersectionObserver(
    () => isIntersecting(),
    () => isNotIntersecting(),
    0.2,
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
      <div className="mt-2.5 mx-3 overflow-hidden rounded-xl">
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
      <AppearObserver>
        <div className="w-full text-neutral-600 opacity-80 font-medium text-base my-4 p-1 grow flex flex-col justify-center items-center">
          <div>2024. 10. 09 (수) "한글날" 낮12:00</div>
          <div className="mt-2">MJ컨벤션 5층 그랜드볼룸홀</div>
        </div>
      </AppearObserver>
    </Section>
  );
};
