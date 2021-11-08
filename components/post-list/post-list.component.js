import React from "react";

const PostList = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            {posts.length > 0 && posts.map((post, index) => (
                <div key={index}>
                    <h3>{post.title.rendered} - <span>Author: {post.author}</span></h3>
                    <div>{post.content.rendered}</div>
                </div>
            ))}
        </div>
    )
};

export default PostList;