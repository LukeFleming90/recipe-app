import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import MainPage from '../MainPage/MainPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/events/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/events" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/about" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/" element={<MainPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/events" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
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
