import React from 'react'
import firebase,{providerFacebook} from '../config/firebase'
const Login:React.FC = () => {
  
  const loginClick = () => {
    console.log('facebook login start')
    const auth = firebase.auth()
    auth.signInWithRedirect(providerFacebook)
    auth.getRedirectResult().then(result => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
  
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={loginClick}
      >
        facebook login
      </button>
    </div>
  )
}

export default Login
