import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
