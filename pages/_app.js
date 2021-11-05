import React from "react";
import Theme from "../themes/default";
import Layout from '../layouts/default';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../layouts/default.styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;