import { FC } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

interface EditorHeaderProps {}

const EditorHeader: FC<EditorHeaderProps> = () => {
  return (
    <header className="h-10 pr-3 shadow-sm sticky border-b border-gray-200 flex-shrink-0  flex justify-between items-center">
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};

export default EditorHeader;
