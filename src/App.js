import { useEffect } from 'react';
import './App.css';
import Register from './Pages/Register';


function App() {
  useEffect(() =>{
    document.title = 'Super App';
  }, []);

  return (
    <div className="App">
      <Register/>
    </div>
  );
}

export default App;
