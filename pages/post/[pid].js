import React, { useEffect } from 'react';
import BigTitle from '../../components/big-title/big-title.component';
import { Container } from '../../styles/styled-pages/page.styles';
import PostStyles, { PostContent } from './post.styles';

const Post = ({ data }) => {
    return (
        <PostStyles>
            <Container>
                <BigTitle className="centered">{data.title.rendered}</BigTitle>
                <PostContent dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
            </Container>
        </PostStyles>

    );
}

export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost/t14g/wp-json/wp/v2/posts/' + ctx.params.pid);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default Post;