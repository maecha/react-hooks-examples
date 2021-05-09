import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
