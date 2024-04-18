import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/Horizon Logo (1).png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="All-in-One Discord Bot: Setup, Manage, Entertain, and Protect Your Servers!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Horizon" />
          <meta name="twitter:creator" content="@Horizon" />
          <meta property="og:url" content="https://horizondev-phi.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Horizon" />
          <link
            rel="icon"
            href="/img/Horizon Logo (1).png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="All-in-One Discord Bot: Setup, Manage, Entertain, and Protect Your Servers!"
          />
          <meta property="og:image" content="/img/Horizon Logo (1).png" />
          <meta property="og:image:alt" content="Horizon" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Horizon"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/Horizon Logo (1).png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
