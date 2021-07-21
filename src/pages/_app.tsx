import '../../styles/globals.scss';
import {WebProvider} from '../context/contact';

function MyApp({ Component, pageProps }) {
  return (
    <WebProvider>
      <Component {...pageProps} />
    </WebProvider>
  )
}

export default MyApp
