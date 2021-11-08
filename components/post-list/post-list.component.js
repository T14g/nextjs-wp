import React from "react";
import PostListStyles from './post-list.styles';
import PostItem from "../post-item/post-item.component";

const PostList = ({ posts }) => {
    return (
        <PostListStyles>
            {posts.length > 0 && posts.map((post, index) => (
                <PostItem key={index}
                    title={post.title.rendered}
                    author={post._embedded.author[0].name}
                    content={post.content.rendered}
                />
            ))}
        </PostListStyles>
    )
};

export default PostList;