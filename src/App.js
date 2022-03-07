import './App.css'
import Navbar from './components/navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/single/Single'
import Write from './pages/Write';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
