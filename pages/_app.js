import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login';
import Loading from '../components/Loading';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // get logged in user, if present will hold
  const [user, loading] = useAuthState(auth); 

  useEffect(() => {
    console.log(loading);
  }, [loading])

  if (loading) return <Loading />
  if (!user) {
    return <Login />
  }

  return <Component {...pageProps} />
}

export default MyApp
