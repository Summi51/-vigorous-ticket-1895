import logo from './logo.svg';
import './App.css';
import {MainRoutes} from './components/MainRoutes';
import {Login} from './pages/Login'
import Mens from './pages/Mens';
import WithSubnavigation from "./components/Navbar";
import LargeWithAppLinksAndSocial from './components/Footer';


function App() {
  return (
    <div className="App">
 
   <MainRoutes/>

    
    </div>
  );
}

export default App;
