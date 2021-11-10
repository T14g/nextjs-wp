import React from "react";
import PostItemStyles, { Author, Title, ReadMore } from "./post-item.styles";

const PostItem = ({ id, title, author, content }) => {
    return (
        <PostItemStyles>
            <Title>{title}</Title>
            <Author>Author: {author}</Author>
            <ReadMore href={`post/${id}`}>Read More</ReadMore>
        </PostItemStyles>
    )
};

export default PostItem;