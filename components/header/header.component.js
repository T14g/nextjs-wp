import { useEffect, useState } from "react";
import MenuDesktop from "../menu-desktop/menu-desktop.component";

import HeaderStyles, { Container, Logo } from "./header.styles";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setScrolled(window.pageYOffset > 200);
            });
        }
    }, []);

    return (
        <HeaderStyles className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Logo href="/">T14g.com</Logo>
                <MenuDesktop />
            </Container>
        </HeaderStyles>
    );
}


export default Header;