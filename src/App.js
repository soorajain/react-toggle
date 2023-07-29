import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="bgblue bgred">
      <header className="">
        <h1>Hi its Sooraj Jain</h1>
          <button id='btn1'className='btn' onClick={mode}>Toggle</button>
      </header>
    </div>
  );
}

let mode = () => {
  document.querySelector("div").classList.toggle("dark-mode");
}

export default App;
