import { usePageContext } from "../../contexts/PageContext";
import { NextSeo, NextSeoProps } from "next-seo";
import { FunctionComponent, PropsWithChildren } from "react";

type Props = NextSeoProps & {
  defaultDescription?: string;
};

export const SeoPage: FunctionComponent<Props> = ({
  defaultDescription,
  ...props
}) => {
  const {
    yoast_head_json: {
      title,
      description,
      robots: { index },
      og_title,
      og_type,
      og_site_name,
    },
  } = usePageContext();

  return (
    <NextSeo
      title={title}
      description={description || defaultDescription}
      openGraph={{
        title: og_title,
        type: og_type,
        site_name: og_site_name,
      }}
      {...props}
    />
  );
};
