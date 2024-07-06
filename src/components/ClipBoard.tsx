export const ClipBoard = ({
  text,
  setAppear,
  children,
}: {
  text: string;
  setAppear: () => void;
  children: React.ReactNode;
}) => {
  const copy = () => {
    window.navigator.clipboard.writeText(text);
    setAppear();
  };
  return <button onClick={copy}>{children}</button>;
};
