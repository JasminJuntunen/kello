
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [time, setTime] = useState(new Date())

useEffect(() => {
  
const id = setInterval(() => {
  setTime(new Date())
},1000)
  return () => {
    clearInterval(id)
  }
}, [])
  return (
    <div style= {{margin: '30px',fontSize: '200px'}}>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default App;
