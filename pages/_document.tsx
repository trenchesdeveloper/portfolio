import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html >
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="MERN stack developer looking for a Job" />
          <meta name="keywords" content="Full Stack Web Developer, MERN developer, Freelancer, Backend Engineer, Frontend Engineer"/>
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-400 dark:text-white dark:from-dark-500 dark:to-dark-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
