export interface Page<ACF = any> {
  type: "page" | "post";
  acf: ACF;
  yoast_head_json: Seo;
  translations: {
    [key in Languages]?: number;
  };
}

export type Seo = {
  title: string;
  description: string;
  robots: {
    index: "index" | "noindex";
    follow: "follow" | "nofollow";
  };
  og_image: {
    url: string;
    width: number;
    height: number;
    type: string;
  }[];
  og_type: string;
  og_title: string;
  og_site_name: string;
  og_url: string;
  canonical: string;
};

export interface Post extends Page {
  id: number;
  slug: string;
  excerpt: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded: {
    author: {};
    wp_term: any;
    "wp:featuredmedia"?: EmbedPostImage[];
  };
  date: string;
}

type EmbedPostImage = {
  id: number;
  source_url: string;
};

export type Languages = "fr" | "en" | "tr";

export type GlobalData = {
  acf: {
    countries: {
      name: string;
      description: string;
      axis: {
        top: string | number;
        left: string | number;
      };
    }[];
  };
};

export type Banner = {
  [key in "title" | "description" | "image"]: string;
};
