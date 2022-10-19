import './App.css';
import {useState} from 'react'
function App() {

  const [sum, setSum] = useState("57+34+13 = ?");
  const [num1, setNum1]=useState(57);  
  const [num2, setNum2]=useState(34);
  const [num3, setNum3]=useState(13);
  const calculate= ()=>{
    setSum(num1+num2+num3)
  } 

  return (
    <div className="App">
      <header className="App-header">
      {sum}
      <button onClick={calculate}>Calculate</button>
      </header>
    </div>
  );
}

export default App;