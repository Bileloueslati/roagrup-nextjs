import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
} from "react";
import { GlobalData } from "../__typescript/api";

const GlobalDataContext = createContext<null | GlobalData>(null);

type Props = PropsWithChildren & {
  value: GlobalData;
};

export const GlobalDataContextProvider: FunctionComponent<Props> = ({
  value,
  children,
}) => (
  <GlobalDataContext.Provider value={value}>
    {children}
  </GlobalDataContext.Provider>
);

export const useGlobalDataContext = () => {
  const value = useContext(GlobalDataContext);

  if (!value)
    throw new Error(
      "Please wrappe your component with <WebsiteContext.Provider />"
    );

  return value.acf;
};
