import * as usersAPI  from './users-api';
import { useHistory } from "react-router-dom";

export async function signUp(userData) {
  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}

// import { getSuggestedQuery } from '@testing-library/react';
// import * as usersAPI from './users-api'

// // Sign Up

// export async function signUp(userData) {
//     const token = await usersAPI.signUp(userData);
//     localStorage.setItem('token', token)
//     return token;
// }

// // Login

// export async function login(credentials) {
//     const token = await usersAPI.login(credentials);
//     localStorage.setItem('token', token);
//     return getUser();
// }

// // Get Token

// export function getToken() {
//     const token = localStorage.getItem('token');
//     if(!token) return null;

//     const payload = JSON.parse(window.atob(token.split('.')[1]))
//     if(payload.exp < Date.now() / 1000) {
//         localStorage.removeItem('token');
//         return null;
//     }

//     return token;

// }

// // Get User

// export function getUser() {
//     const token = getToken();
//     return token ? JSON.parse(window.atob(token.split('.')[1])).user : null
// }

// // Logout

// export function logout() {
//     localStorage.removeItem('token')
// }

// // checkToken

// export function checkToken() {
//     return usersAPI.checkToken()
//             .then(dateStr => new Date(dateStr))
// }