import Head from "next/head";
import PostList from "../components/post-list/post-list.component";
import { Container, TitleH1 } from "../styles/styled-pages/page.styles";

export default function Home({ posts }) {

  return (
    <Container>
      <TitleH1> NextJS Blog with Wordpress CMS</TitleH1>
      <PostList posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost/t14g/wp-json/wp/v2/posts?_embed');
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts
    }
  }
}