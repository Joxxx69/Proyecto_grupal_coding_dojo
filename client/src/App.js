import "./App.css";
import Main from './views/Main'
import Logo from './images/logo_ninja.webp'
import { Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Main image_Logo={Logo}/>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
