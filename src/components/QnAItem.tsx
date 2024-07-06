import { AppearObserver } from './AppearObserver';

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
  return (
    <AppearObserver>
      <div className="flex flex-col mt-10 items-center justify-center px-2.5">
        <div className="text-neutral-700 opacity-[0.68] text-15">{title}</div>
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
    </AppearObserver>
  );
};
