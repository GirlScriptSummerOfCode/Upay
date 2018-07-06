import Document, { Head, Main, NextScript } from 'next/document';
import links from '../constants/links';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <style>{`
            body {
              margin: 0;
              padding: 0;
              font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
            }

            main {
              padding: 20px;
            }
          `}</style>
          <link
            href="http://fonts.googleapis.com/css?family=Cookie"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
          />
        </Head>
        <body>
          <NavBar links={links} />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}
