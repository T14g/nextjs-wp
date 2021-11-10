import React from "react";
import Button from "../button/button.component";
import PostItemStyles, { Author, Title, Content } from "./post-item.styles";

const PostItem = ({ title, author, content }) => {
    return (
        <PostItemStyles>
            <Title>{title}</Title>
            <Author>Author: {author}</Author>
            <Content>{content}</Content>
            <Button text="Read More" />
        </PostItemStyles>
    )
};

export default PostItem;