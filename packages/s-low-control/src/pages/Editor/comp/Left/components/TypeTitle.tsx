import { FC } from "react";

interface TypeTitleProps {
  children?: React.ReactNode | string;
}

const TypeTitle: FC<TypeTitleProps> = ({ children }) => {
  return (
    <span className="border-solid border-l-0 border-t-0 border-r-0 border-b-2 border-sky-500 pb-1">
      {children}
    </span>
  );
};

export default TypeTitle;
