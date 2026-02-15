import { useState } from 'react'
import Signup from './my-login-app/src/components/Signup'
import Login from './my-login-app/src/components/Login'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="App">
      {isLogin ? (
        <Login switchToSignup={() => setIsLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  )
}

export default App