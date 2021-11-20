import React from "react";
import Image from 'next/image';
import PostList from "../components/post-list/post-list.component";
import TypeWritter from "../components/typewritter/typewritter.component";
import {
  Container,
  TitleH1,
  FullRow,
  FlexRow,
  Column,
  TitleH2,
  TextBlock
} from "../styles/styled-pages/page.styles";
import HomeStyles, { SectionHero, SectionMessage, Message } from "../styles/styled-pages/home.styles";

export default function Home({ posts }) {

  return (
      <HomeStyles>
        <FullRow>

          <SectionHero>
            <TypeWritter />
          </SectionHero>

          <SectionMessage bg="#000">
            <Message color="#fff">
              If i'm not coding i'm probably playing  Guitar
            </Message>
          </SectionMessage>

          </FullRow>

          <FlexRow>

          <Column className="col-6">
            <TitleH2>Who I'm?</TitleH2>

            <TextBlock>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit suscipit tempore illum nam quae voluptas, veritatis, placeat minima mollitia officiis eos neque ratione sed in? Delectus magnam officiis ipsam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore accusantium, nam adipisci similique praesentium fugit eius. Ad dicta laborum libero quidem repudiandae, architecto, consectetur a excepturi voluptatem iure nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit suscipit tempore illum nam quae voluptas, veritatis, placeat minima mollitia officiis eos neque ratione sed in? Delectus magnam officiis ipsam!
            </TextBlock>

            <TextBlock>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit suscipit tempore illum nam quae voluptas, veritatis, placeat minima mollitia officiis eos neque ratione sed in? Delectus magnam officiis ipsam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore accusantium, nam adipisci similique praesentium fugit eius. Ad dicta laborum libero quidem repudiandae, architecto, consectetur a excepturi voluptatem iure nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit suscipit tempore illum nam quae voluptas, veritatis, placeat minima mollitia officiis eos neque ratione sed in? Delectus magnam officiis ipsam!
            </TextBlock>

          </Column>

          <Column className="col-6 col-card-bg" />

        </FlexRow>
      </HomeStyles>
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