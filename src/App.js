
import './App.css';
import Employees from './components/Employees';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <div className="">
      <Header></Header>

      </div>
      <div className="">
      <Employees></Employees>
      </div>
      
    </div>
  );
}

export default App;
