import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

export type PostContentProps = {
  content: string;
};

const PostContent: FunctionComponent<PostContentProps> = ({ content }) => (
  <Typography dangerouslySetInnerHTML={{ __html: content }}></Typography>
);

export default PostContent;
