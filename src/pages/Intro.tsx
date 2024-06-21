import { useEffect, useRef } from 'react';
import { Section } from '../components/Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Video from '/intro/intros.mp4';

export const Intro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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
  );

  useEffect(() => {
    if (bottomRef?.current) {
      observe(bottomRef.current);
    }
    return () => {
      disconnect();
    };
  }, []);
  return (
    <Section>
      <div className="min-h-[33.7rem]">
        <video className="shrink-0" playsInline muted ref={videoRef}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div
        className="w-full max-h-52 p-1 my-8 sm:my-12 grow flex flex-col justify-center items-center"
        ref={bottomRef}>
        <div className="font-medium sm:text-lg">
          2024년 10월 9일 수요일 "한글날" 낮12:00
        </div>
        <div className="mt-1.5 sm:mt-2.5 sm:text-lg">
          MJ컨벤션 5층 그랜드볼룸홀
        </div>
      </div>
    </Section>
  );
};
