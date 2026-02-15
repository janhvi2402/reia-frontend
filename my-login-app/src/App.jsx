import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  const [view, setView] = useState('login'); 

  // Function to move to home
  const handleLogin = () => setView('home');
  // Function to move to login
  const handleLogout = () => setView('login');

  return (
    <div className="App">
      {view === 'home' && <Home onLogout={handleLogout} />}
      
      {view === 'login' && (
        <Login 
          switchToSignup={() => setView('signup')} 
          onLoginSuccess={handleLogin}  /* Passing the function here */
        />
      )}
      
      {view === 'signup' && (
        <Signup switchToLogin={() => setView('login')} />
      )}
    </div>
  );
}

export default App;