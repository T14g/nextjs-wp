import 'regenerator-runtime/runtime';
import React from "react";
import Image from 'next/image';
import PostList from '../components/post-list/post-list.component';
import TypeWritter from '../components/typewritter/typewritter.component';
import CardSuit from '../components/card-suit/card-suit.component';
import SkillList from '../components/skill-list/skill-list.component';

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

export default function Home({ posts, skills }) {

  return (
    <HomeStyles>
        123
    </HomeStyles>
    // <Container>
    //   <TitleH1> NextJS Blog with Wordpress CMS</TitleH1>
    //   <PostList posts={posts} />
    // </Container>
  );
}