import "./App.css";
import Main from './views/Main'
import Logo from './images/logo_ninja.webp'

function App() {
  return (
    <div className="App">
      <Main image_Logo={Logo}/>
    </div>
  );
}

export default App;
