import { createContext, useContext } from "react";
import { Page } from "../__typescript/api";

const PageContext = createContext({});

export const usePage = <T>() => {
  const { acf } = useContext(PageContext) as Page<T>;

  return acf;
};

export default PageContext;
