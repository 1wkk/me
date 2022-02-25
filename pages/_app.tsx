import 'prismjs/themes/prism-solarizedlight.min.css'
import '../styles/globals.scss'
import '../styles/layout.scss'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'

const App = ({ Component, pageProps }: AppProps) => (
  <div id='app' className='antialiased'>
    <Header />
    <div id='component'>
      <Component {...pageProps} />
    </div>
    <Footer />
  </div>
)

export default App
