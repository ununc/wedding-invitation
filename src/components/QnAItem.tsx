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
    <div className="flex flex-col mt-8 items-center justify-center">
      <div className="text-neutral-700 opacity-[0.68]">{title}</div>
      <div className="flex justify-between gap-4 mt-4">
        <div className="w-40 h-44 mx-3 my-4 h-[9.1rem]" onClick={leftFunction}>
          <img
            className="w-full h-full object-cover rounded-xl"
            src={left}
            alt=""
          />
        </div>
        <div className="w-40 h-44 mx-3 my-4 h-[9.1rem]" onClick={rightFunction}>
          <img
            className="w-full h-full object-cover rounded-xl"
            src={right}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
