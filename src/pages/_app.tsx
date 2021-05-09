import { AppProps } from 'next/app'

import 'minireset.css'
import '../styles/base.scss'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
