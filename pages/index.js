import React from "react";
import PostList from "../components/post-list/post-list.component";
import TypeWritter from "../components/typewritter/typewritter.component";
import { Container, TitleH1, FullRow } from "../styles/styled-pages/page.styles";
import HomeStyles, { SectionHero } from "../styles/styled-pages/home.styles";

export default function Home({ posts }) {

  return (
    <>
      <FullRow>
        <SectionHero>
          <TypeWritter />
        </SectionHero>
      </FullRow>
    </>
    // <Container>
    //   <TitleH1> NextJS Blog with Wordpress CMS</TitleH1>
    //   <PostList posts={posts} />
    // </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost/t14g/wp-json/wp/v2/posts?_embed');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}