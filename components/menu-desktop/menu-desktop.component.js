import React, { useState } from "react";
import MenuDesktopStyles, { MenuItem } from "./menu-desktop.styles";

const menuMock = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Quem somos",
    link: "#",
  },
  {
    name: "Marcas",
    link: "#",
  },
  {
    name: "Onde encontrar",
    link: "#",
  },
  {
    name: "Seja um revendedor",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Fale conosco",
    link: "#",
  },
];

const MenuDesktop = () => {
  const [current, setCurrent] = useState("");
  return (
    <MenuDesktopStyles>
      {menuMock.map((item, index) => (
        <MenuItem
          key={index}
          className={`${current === item.name ? "active" : ""}`}
          onClick={() => setCurrent(item.name)}
        >
          {item.name}
        </MenuItem>
      ))}
    </MenuDesktopStyles>
  );
};

export default MenuDesktop;
