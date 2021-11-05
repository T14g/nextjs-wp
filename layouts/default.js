import React from "react";
import Head from "next/head";
import Header from "../components/header/header.component";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Next - WP</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            {children}
        </>
    )
};

export default Layout;