import {
  createContext,
  useContext,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import { Page, Post } from "../__typescript/api";

export type PageT = Page | Post;

const PageContext = createContext<null | PageT>(null);

export const usePageContext = <T,>() => {
  const context = useContext(PageContext);
  if (!context)
    throw new Error(
      "Please wrappe your component with <PageContextProvider />"
    );

  return context;
};

export const usePage = <T,>() => {
  const context = useContext(PageContext);

  const data = context as Page<T>;

  return data.acf;
};

type ContextProvider = PropsWithChildren<{
  value: any;
}>;

export const PageContextProvider: FunctionComponent<ContextProvider> = ({
  value,
  children,
}) => <PageContext.Provider value={value}>{children}</PageContext.Provider>;

export default PageContext;
