import { useEffect } from 'react';
import './App.css';


function App() {
  useEffect(() =>{
    document.title = 'Super App';
  }, []);
  
  return (
    <div className="App">
      hello
      
    </div>
  );
}

export default App;
