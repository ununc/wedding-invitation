import { ClickMe } from './ClickMe';

export const QnAItem = ({
  title,
  left,
  right,
  theme = 'rose',
  guide = false,
  leftFunction,
  rightFunction,
}: {
  title: string;
  left: string;
  right: string;
  guide?: boolean;
  theme?: string;
  leftFunction: () => void;
  rightFunction: () => void;
}) => {
  let cardBack;
  let titleUnder;
  if (theme === 'rose') {
    titleUnder = `bg-rose-200`;
    cardBack = `border-rose-300 shadow-rose-200`;
  } else if (theme === 'emerald') {
    titleUnder = `bg-purple-200`;
    cardBack = `border-purple-300 shadow-purple-200`;
  } else if (theme === 'sky') {
    titleUnder = `bg-sky-200`;
    cardBack = `border-sky-300 shadow-sky-200`;
  }
  return (
    <div className="flex flex-col mt-8 items-center justify-center">
      <div className="w-fit text-lg">
        {title}
        <div
          className={
            'h-1 mt-1 mx-8 opacity-30 rounded-2xl ' + titleUnder
          }></div>
      </div>
      <div className="flex justify-between gap-4 mt-4">
        <div
          onClick={leftFunction}
          className={
            'relative w-40 h-44 rounded-2xl border-b shadow-md ' + cardBack
          }>
          <div className="mx-3 my-4 h-[9.1rem]">
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
          className={
            'relative w-40 h-44 rounded-2xl border-b shadow-md ' + cardBack
          }>
          <div className="mx-3 my-4 h-[9.1rem]">
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
