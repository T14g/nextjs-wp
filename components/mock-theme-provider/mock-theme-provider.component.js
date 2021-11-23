import React from "react";
import 'jest-styled-components'
import { ThemeProvider } from "styled-components";
import Theme from "../../themes/default";

export const MockThemeProvider = ({ children }) => (
    <ThemeProvider theme={Theme}>{children}</ThemeProvider>
)