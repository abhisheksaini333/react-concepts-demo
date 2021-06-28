import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Login from './Components/auth/Login';

function App() {
  const appName = 'My First React App';
  return (
    <div className="App">
      <h1>Welcome to {appName}</h1>
      <h1>As of now we are in class {1+1}</h1>
      <Users subtitle="Active users" count="5">List of Users from App.js</Users>
      <Login/>
    </div>
  );
}

export default App;
