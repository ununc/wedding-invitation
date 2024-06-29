export const ClickMe = ({ index = 1 }) => {
  const classKind = index === 1 ? 'click-ani' : 'click-ani2';
  const classKind2 = index === 1 ? 'light-ani' : 'light-ani2';
  return (
    <div className={`${classKind} absolute w-6 h-6 right-6 bottom-2`}>
      <div className={`light ${classKind2}`}></div>
      <div className="finger"></div>
    </div>
  );
};
