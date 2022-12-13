import './App.css';
import OffcanvasExample from './components/navbar';
import Home from './components/home';
function App() {
  return (
    <div className="App">
    <div className='linkk'>  <OffcanvasExample/>  </div> 
    <div className='home'>
    <Home/>
    </div>
    </div>
  );
}

export default App;
