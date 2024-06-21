export const Section = ({
  classNames,
  children,
}: {
  classNames?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={
        "w-full max-w-[32rem] h-fit flex flex-col justify-center items-center " +
        classNames
      }
    >
      {children}
    </div>
  );
};
