import './App.css';
import { Navbar } from './Navbar';
import { Shop } from './Shop';


function App() {

  return (
    <div className="App">
      {/* <Navbar title='Yash' /> */}
      <Navbar />
      <div className='container'>
        <Shop />
      </div>
    </div>
  );
}

export default App;
