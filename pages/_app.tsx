import '../styles/globals.scss'
import '../styles/hljs.scss'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'

const App = ({ Component, pageProps }: AppProps) => (
  <div className='antialiased'>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
)

export default App
