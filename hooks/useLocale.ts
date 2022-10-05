import { useRouter } from "next/router";
import { Languages } from "../__typescript/api";

export default function useLocale() {
  const { locale } = useRouter();

  return {
    locale: locale as Languages,
  };
}
