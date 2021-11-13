import React from "react";
import MenuDesktop from "../menu-desktop/menu-desktop.component";

import HeaderStyles, { Container, Logo } from "./header.styles";

const Header = () =>
    <HeaderStyles>
        <Container>
            <Logo href="/">T14g.com</Logo>
            <MenuDesktop />
        </Container>
    </HeaderStyles>

export default Header;