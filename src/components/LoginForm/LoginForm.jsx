import { useState } from 'react';
import styles from './LoginForm.module.css'
import * as usersService from '../../utilities/users-service';


export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  // <div>
  //   <div className="form-container">
  //     <form autoComplete="off" onSubmit={handleSubmit}>
  //       <label>Email</label>
  //       <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
  //       <label>Password</label>
  //       <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
  //       <button type="submit">LOG IN</button>
  //     </form>
  //   </div>
  //   <p className="error-message">&nbsp;{error}</p>
  // </div>

  // <p className={styles.sign} align="center">Sign in</p>
  //   <form class="form1">
  //     <input class="un " type="text" align="center" placeholder="Username">
  //     <input class="pass" type="password" align="center" placeholder="Password">
  //     <a class="submit" align="center">Sign in</a>
  //     <p class="forgot" align="center"><a href="#">Forgot Password?</p>
  
  <div className={styles.LoginForm}>
      <form autoComplete="off" className={styles.form1} onSubmit={handleSubmit}>
        <input type="text" className={styles.un} name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
        <input type="password" className={styles.pass} name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
        <button className={styles.submit} type="submit">LOG IN</button>
      </form>
  </div>
    



);
}

// import { useState } from 'react';
// import * as userService from '../../utilities/users-service';


// export default function LoginForm ({ setUser }) {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: ''
//     })
//     const [error, setError] = useState('')

//     const handleChange = (evt) => {
//         setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//         setError('');
//     }

//     const handleSubmit = async (evt) => {
//         evt.preventDefault()
//         try {
//             const user = await userService.login(credentials);
//             setUser(user)
//         } catch(error) {
//             setError(error.message)
//         }
//     }

//     return (
//         <div>
//             <div className="form-container">
//                 <form autoComplete="off" onSubmit={handleSubmit}>
//                     <label>Email</label>
//                     <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
//                     <label>Password</label>
//                     <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
//                     <button type="submit">LOG IN</button>
//                 </form>
//             </div>
//             <h1 className="error-message">&nbsp;{error}</h1>
//         </div>
//     )
// }