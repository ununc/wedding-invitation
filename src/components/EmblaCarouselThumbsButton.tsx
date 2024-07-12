import React from 'react';

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : '',
      )}>
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number">
        <div className="rounded-lg overflow-hidden h-full w-full">
          <img
            className="w-full h-full object-cover"
            src={`/thumb/thumb-${index}.jpg`}
            alt=""
          />
        </div>
      </button>
    </div>
  );
};
