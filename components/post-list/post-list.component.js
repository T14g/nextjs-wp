import React from "react";

const PostList = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            {posts.length > 0 && posts.map((post, index) => (
                <div key={index}>{post.content.rendered}</div>
            ))}
        </div>
    )
};

export default PostList;