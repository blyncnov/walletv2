import '../styles/globals.css'
import Script from 'next/script'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navigation/>
      <Component {...pageProps} />
    </>
  )
  
 
}

export default MyApp
