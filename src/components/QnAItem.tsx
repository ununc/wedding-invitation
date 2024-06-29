import { ClickMe } from './ClickMe';

export const QnAItem = ({
  title,
  left,
  right,
  guide = false,
  leftFunction,
  rightFunction,
}: {
  title: string;
  left: string;
  right: string;
  guide?: boolean;
  leftFunction: () => void;
  rightFunction: () => void;
}) => {
  return (
    <div className="flex flex-col mt-8 items-center justify-center">
      <div className="w-fit text-lg">
        {title}
        <div className="h-1 mt-1 mx-8 opacity-30 rounded-2xl bg-pink-200"></div>
      </div>
      <div className="flex justify-between gap-4 mt-4 relative">
        <div
          onClick={leftFunction}
          className="card-back  w-40 h-44 rounded-2xl border-b border-rose-300 shadow-md shadow-rose-200">
          <div className="mx-4 my-5 h-[8.5rem]">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={left}
              alt=""
            />
          </div>
          {guide && <ClickMe />}
        </div>
        <div
          onClick={rightFunction}
          className="card-back  w-40 h-44 rounded-2xl border-b border-rose-300 shadow-md shadow-rose-200">
          <div className="mx-4 my-5 h-[8.5rem]">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={right}
              alt=""
            />
          </div>
          {guide && <ClickMe index={2} />}
        </div>
      </div>
    </div>
  );
};
