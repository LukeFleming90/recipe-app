import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import FileUploadPage from '../FileUploadPage/FileUploadPage';
import FoodPage from '../FoodPage/FoodPage';
import LogInPage from '../LogInPage/LogInPage';
import SignUpPage from '../SignUpPage/SignUpPage';

export default function App() {
  const [user, setUser] = useState(null);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setUser(getUser())
  },[])
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/about" element={<AboutPage user={user} setUser={setUser} />} />
            <Route path="/search" element={<FoodPage user={user} setUser={setUser} />} />
            <Route path="/file-upload" element={<FileUploadPage user={user} setUser={setUser} />} />
            <Route path="/main" element={<MainPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/main" />} />
          </Routes>
        </>
        :
        <>
        <Routes>
        <Route path="/login" element={<LogInPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
        <Route path="/*" element={<Navigate to="/login" /> }/>
        </Routes>
        </>
      }
    </main>
  );
}

// import './App.css';
// import { useState } from 'react';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
// import AuthPage from '../AuthPage/AuthPage';
// import { Routes, Route } from 'react-router-dom';

// function App() {

//   const [user, setUser] = useState(null);

//   return (
//     <main className="App">
//       {
//         user ? 
//         <Routes>
//           <Route path="/orders/new" element={<NewOrderPage/>}/>
//           <Route path="/orders" element={<OrderHistoryPage/>}/>
//         </Routes>
//         :
//         <AuthPage setUser={setUser}/>
//       }
//     </main>
//   );
// }

// export default App;
