import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login';

function MyApp({ Component, pageProps }) {
  // get logged in user, if present will hold
  const { user } = useAuthState(auth); 

  if (!user) {
    return <Login />
  }

  return <Component {...pageProps} />
}

export default MyApp
