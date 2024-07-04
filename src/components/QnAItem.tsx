import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const QnAItem = ({
  title,
  left,
  right,
  leftFunction,
  rightFunction,
}: {
  title: string;
  left: string;
  right: string;
  leftFunction: () => void;
  rightFunction: () => void;
}) => {
  const qna = useRef<HTMLDivElement>(null);

  const isIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.add('appear-active');
  };

  const isNotIntersecting = (element: React.RefObject<HTMLDivElement>) => {
    element?.current?.classList.remove('appear-active');
  };

  const [observe, disconnect] = useIntersectionObserver(
    () => isIntersecting(qna),
    () => isNotIntersecting(qna),
    0.4,
  );

  useEffect(() => {
    if (qna?.current) {
      observe(qna.current);
    }
    return () => {
      disconnect();
    };
  }, []);
  return (
    <div ref={qna} className="w-[95%] opacity-0">
      <div className="flex flex-col mt-10 items-center justify-center">
        <div className="text-neutral-700 opacity-[0.68] text-[0.9375rem]">
          {title}
        </div>
        <div className="flex w-11/12 justify-between gap-2 mt-4 h-44">
          <div
            className="w-40 h-full rounded-xl overflow-hidden cursor-pointer"
            onClick={leftFunction}>
            <img className="w-full h-full object-cover" src={left} alt="" />
          </div>
          <div
            className="w-40 h-full rounded-xl overflow-hidden cursor-pointer"
            onClick={rightFunction}>
            <img className="w-full h-full object-cover " src={right} alt="" />
          </div>
        </div>
        <div className=" text-xs text-neutral-700 opacity-40 mt-4">
          사진을 눌러보세요
        </div>
      </div>
    </div>
  );
};
