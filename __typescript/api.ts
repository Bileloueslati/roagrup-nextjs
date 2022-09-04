export type Page<T = any> = {
  acf: T;
};

export type Post = {
  id: number;
  slug: string;
  excerpt: {

    rendered: string
  };
  title: {
    rendered: string;
  };
  _embedded: {
    author: {};
    wp_term: any;
    "wp:featuredmedia"?: EmbedPostImage[];
  };
  date: string;
};

type EmbedPostImage = {
  id: number;
  source_url: string;
};
