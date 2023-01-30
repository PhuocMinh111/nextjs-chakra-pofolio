import React from "react";
import Head from "next/head";
import { UseContext } from "@/context/context";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
function Layout({ children, router }: any) {
  const { lightMode } = UseContext();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`mt-14 ${lightMode ? "bg-primaryLight" : "dark"}`}>
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
