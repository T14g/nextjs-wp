import "regenerator-runtime/runtime";
import React from "react";
import BannerSlider from "../components/banner-slider/banner-slider.component";
import YoutubePlayer from "../components/youtube-player/youtube-player.component";

import HomeStyles, {
  Section,
  Row,
  Container,
  Column,
  MediumTitle,
  BigTitle,
  Text,
} from "../styles/styled-pages/home.styles";

export default function Home() {
  return (
    <HomeStyles>
      <BannerSlider />
      <Section className="section-with-bg1">
        <Container>
          <Row>
            <Column>
              <MediumTitle>About us</MediumTitle>
              <BigTitle>It's a big title, enjoy it</BigTitle>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dolorum possimus officia mollitia sapiente dolore assumenda?
                Natus, maiores veniam totam eaque unde accusamus cupiditate.
                Error quia quam eveniet maiores sit!
              </Text>
            </Column>
            <Column>
              <YoutubePlayer
                src="https://www.youtube.com/embed/Y-IUB62zDlA"
                customClass="youtube-player"
              />
            </Column>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Column>
              <MediumTitle>About us</MediumTitle>
              <BigTitle>It's a big title, enjoy it</BigTitle>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dolorum possimus officia mollitia sapiente dolore assumenda?
                Natus, maiores veniam totam eaque unde accusamus cupiditate.
                Error quia quam eveniet maiores sit!
              </Text>
            </Column>
            <Column>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dolorum possimus officia mollitia sapiente dolore assumenda?
                Natus, maiores veniam totam eaque unde accusamus cupiditate.
                Error quia quam eveniet maiores sit!
              </Text>
            </Column>
          </Row>
        </Container>
      </Section>
    </HomeStyles>
  );
}
