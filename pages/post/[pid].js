import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Post = ({ data }) => {
    return (
        <div>
            <div>{data.title.rendered}</div>
            <div>{data.content.rendered}</div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost/t14g/wp-json/wp/v2/posts/' + ctx.params.pid);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            data
        }
    }
}

export default Post;