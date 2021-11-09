import React from "react";
import { useRouter } from 'next/router'
import { Container, TitleH1 } from "../../styles/styled-pages/page.styles";

export default function Post({ data }) {

    console.log(data);

    return (
        <Container>
            <TitleH1>Post Page</TitleH1>

        </Container>
    );
}




// export async function getStaticProps() {

//     const router = useRouter();
//     const { pid } = router.query;
//     const res = await fetch('http://localhost/t14g/wp-json/wp/v2/posts/' + pid);
//     const data = await res.json();

//     return {
//         props: {
//             data
//         }
//     }
// }

// export async function getStaticPaths() {
//     return {
//         paths: [], //indicates that no page needs be created at build time
//         fallback: 'blocking' //indicates the type of fallback
//     }
// }