import './index.css';
import { useState } from 'react';
import UserProfile from './UserProfile';
import MoreProfile from './MoreProfile';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <UserProfile />
      <div style={{ display: 'flex' }}>
        <MoreProfile 
          name="Friend 1"
          bio="I'm a CPA"
          profileImage="https://plus.unsplash.com/premium_photo-1681488151540-1fe7f3e039ae?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <MoreProfile 
          name="Friend 2"
          bio="I'm a Barista"
          profileImage="https://images.unsplash.com/photo-1519658493417-b687d62a3111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default App;