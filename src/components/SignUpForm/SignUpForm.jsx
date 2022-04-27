import { Component } from "react";
import styles from './SignUpForm.module.css';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
state = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  error: ''
};

handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  });
};

handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...this.state};
    delete formData.confirm;
    delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await signUp(formData);
    // Baby step
    this.props.setUser(user);
  } catch {
    // An error happened on the server
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
      <div className={styles.SignUpForm}>
        <form autoComplete="off" className={styles.form1} onSubmit={this.handleSubmit}>
          <input type="text" className={styles.un} name="name" value={this.state.name} onChange={this.handleChange} placeholder="Username" required />
          <input type="email" className={styles.un} name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required />
          <input type="password" className={styles.un} name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
          <input type="password" className={styles.un} name="confirm" value={this.state.confirm} onChange={this.handleChange} placeholder="Confirm Password" required />
          <button className={styles.submit} type="submit" disabled={disable}>SIGN UP</button>
        </form>
        <p style={{display: this.state.error ? "block" : "none"}} className="error-message">&nbsp;{this.state.error}</p>
      </div>
  );
}
}

// import { Component } from "react";
// import { signUp } from '../../utilities/users-service'

// export default class SignUpForm extends Component {

//     state = {
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     }

//     handleChange = (evt) => {
//         this.setState({...this.state, [evt.target.name]: evt.target.value, error: '' })
//     }

//     handleSubmit = async (evt) => {
//         evt.preventDefault();
//         try {
//             // Alternative Approach
//             // const {name, email, password} = this.state;
//             // const formData = {name, email, password};
//             const formData = {...this.state};
//             delete formData.error;
//             delete formData.confirm;
//             const user = await signUp(formData)
//             this.props.setUser(user)
//             // alert(JSON.stringify(formData));
//         } catch (error) {
//             this.setState({ error: 'Sign Up Failed' })
//         }
//     }

//     render() {
//         const disable = this.state.password !== this.state.confirm;
//         return (
//         <div>
//             <div className="form-container">
//                 <form autoComplete="off" onSubmit={this.handleSubmit}>
//                     <label>Name</label>
//                     <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//                     <label>Email</label>
//                     <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//                     <label>Password</label>
//                     <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//                     <label>Confirm</label>
//                     <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//                     <button type="submit" disabled={disable}>SIGN UP</button>
//                 </form>
//             </div>
//             <h1 className="error-message">&nbsp;{this.state.error}</h1>
//         </div>
//         );
//       }
// }