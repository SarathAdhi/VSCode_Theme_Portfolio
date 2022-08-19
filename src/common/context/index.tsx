import { pages } from "@utils/constants/pages";
import React, { createContext, useState } from "react";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const Context = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

export type OpenedPageProps = {
  name: string;
  href: string;
  Icon: any;
  language: string;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [ideTheme, setIdeTheme] = useState(vs2015);
  const [currentlyOpenedPages, setCurrentlyOpenedPages] = useState<
    OpenedPageProps[]
  >([pages[0]]);

  return (
    <Context.Provider
      value={{
        extension: { ideTheme, setIdeTheme },
        openedPages: { currentlyOpenedPages, setCurrentlyOpenedPages },
      }}
    >
      {children}
    </Context.Provider>
  );
};
