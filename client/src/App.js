// import React, {useState} from 'react';
import React from 'react';
import TopMenuContainer from './components/top-menu/Container';
// import LoginPage from './components/login-page/login';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div>
      {/* Navigation Bar (Top) */}
      <TopMenuContainer />
      
      {/* Content Container (to be navigated when click on "home", "report", and "about me" hyperlink in the future) */}
      <div className="mt-[150px]">
        <Outlet />
      </div>      
    </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
