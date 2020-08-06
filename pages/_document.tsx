// /pages/_document.js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300;400&family=Muli:wght@200;300;400&display=swap"
            rel="stylesheet"
          />
          <title>Life of Plastic</title>
          <meta property="og:title" content="Life of Plastic" key="title" />
          <meta name="description" content="A data visualization to explore the complex relationship of plastic and its recycling system." />
          <meta property="og:description" content="A data visualization to explore the complex relationship of plastic and its recycling system." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
