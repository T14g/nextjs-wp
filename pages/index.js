import "regenerator-runtime/runtime";
import React from "react";
import BannerSlider from "../components/banner-slider/banner-slider.component";
import YoutubePlayer from "../components/youtube-player/youtube-player.component";
import Image from "next/image";
import PostList from "../components/post-list/post-list.component";
import TypeWritter from "../components/typewritter/typewritter.component";
import CardSuit from "../components/card-suit/card-suit.component";
import SkillList from "../components/skill-list/skill-list.component";

import {
  Container,
  TitleH1,
  FullRow,
  FlexRow,
  Column,
  TitleH2,
  TextBlock,
} from "../styles/styled-pages/page.styles";

import HomeStyles, { Section } from "../styles/styled-pages/home.styles";

export default function Home({ posts, skills }) {
  return (
    <HomeStyles>
      <BannerSlider />
      <Section>
        <YoutubePlayer src="https://www.youtube.com/embed/Y-IUB62zDlA" />
      </Section>
      <Section>
        Next sectionNext sectionNext sectionNext sectionNext sectionNext sectionNext section
        Next sectionNext sectionNext sectionNext sectionNext sectionNext sectionNext section
      </Section>
    </HomeStyles>
    // <Container>
    //   <TitleH1> NextJS Blog with Wordpress CMS</TitleH1>
    //   <PostList posts={posts} />
    // </Container>
  );
}
