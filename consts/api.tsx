import http from "../libs/axios";
import { Page, GlobalData, Languages, Post } from "../__typescript/api";

export const getPage = (id: number) => http.get<Page>(`/wp/v2/pages/${id}`);

export const getGlobalData = () =>
  http.get<GlobalData>(`/acf/v3/options/options`);

export const getPosts = (locale: Languages, page: number = 6) =>
  http.get<Post[]>(`/wp/v2/posts?_embed&per_page=${page}&lang=${locale}`);

  export const getPost = (id: number) =>
  http.get<Post[]>(`/wp/v2/posts/${id}?_embed`);
