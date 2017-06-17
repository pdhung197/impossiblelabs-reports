import NextDocument, { Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta content="Homepage" name="description" />
          <meta content="website" property="og:type" />
          <link href="//fonts.googleapis.com/css?family=Open+Sans:700|Open+Sans:800|Lato:300" rel="stylesheet" type="text/css"/>
        </Head>
        <body>
          <Main/>
          <NextScript />

          <style jsx>{`
            @import 'tachyons/src/tachyons';
            @custom-media --breakpoint-not-small screen and (min-width: 48em);
            @media screen {
              html, body {
                height: 100%;
              };
            }
          `}</style>

        </body>
      </html>
    )
  }
}
