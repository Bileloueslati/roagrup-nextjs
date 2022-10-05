import { Post } from "../__typescript/api";

export const getPostTitle = (post: Post) => post.title.rendered;

export const getPostContent = (post: Post) => post.content.rendered;
