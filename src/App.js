import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Projects from './Components/Home/Projects/Projects';
import ContactMe from './Components/Home/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
