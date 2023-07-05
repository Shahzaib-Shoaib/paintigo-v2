import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/dist/client/script";
import { getDirection } from "@utils/get-direction";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;

    return (
      <Html dir={getDirection(locale)} style={{ overflow: "auto" }}>
        <Head>
          {" "}
          <link rel="shortcut icon" href="/favicon.ico" />
          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KBP463R');`,
            }}
          ></Script>
          {/* <Script
            src="https://apps.elfsight.com/p/platform.js"
            strategy="beforeInteractive"
          ></Script> */}
          <Script
            strategy="beforeInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script strategy="beforeInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
          </Script>
          {/* <!-- Manychat --> */}
          <Script
            src="//widget.manychat.com/114027380510173.js"
            // defer="defer"
            strategy="beforeInteractive"
          ></Script>
          <Script
            src="https://mccdn.me/assets/js/widget.js"
            // defer="defer"
            strategy="beforeInteractive"
          ></Script>
        </Head>
        <body className="font-poppins">
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBP463R"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
