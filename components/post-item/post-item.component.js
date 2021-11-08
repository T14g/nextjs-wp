import React from "react";
import PostItemStyles, { Author, Title, Content } from "./post-item.styles";

const PostItem = ({ title, author, content }) => {
    return (
        <PostItemStyles>
            <Title>{title}</Title>
            <Author>Author: {author}</Author>
            <Content>{content}</Content>
        </PostItemStyles>
    )
};

export default PostItem;