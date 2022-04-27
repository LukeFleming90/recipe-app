import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
      <div className={styles.AuthPage}>
        <div className={styles.primary}>
          <p className={styles.sign}>{showLogin ? 'LOG IN' : 'SIGN UP'}</p>
          {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
          <button className={styles.submit} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
        </div>
      </div>
  );
}

// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm";
// import { useState } from "react";

// export default function AuthPage({setUser}) {
//     const [showSignUp, setShowSignUp] = useState(false)
//     return (
//         <main>
//             <h1>AuthPage</h1>
//             <button onClick={() => setShowSignUp(!showSignUp)}>{ showSignUp ? 'Log In' : 'Sign Up'}</button>
//             {
//                 showSignUp ? 
//                 <SignUpForm setUser={setUser}/> :
//                 <LoginForm setUser={setUser}/>
//             }
//         </main>
//     )
// }