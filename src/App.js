import React,{useState,useEffect} from 'react';
import Input from './components/Input';
import Select from './components/Select';
import Dollar from './images/icon-dollar.svg';
import Person from './images/icon-person.svg';


function App() {
  const [value,setValue] = useState("");
  const [people,setPeople] = useState("");
  const [tip,setTip] = useState("");
  const [status,setStatus] = useState(true);

  useEffect(()=>{
    if((value === "" || value === "0") || (people === "" || people === "0")){
      setStatus(true)
    }else{
      setStatus(false)
    } 
  },[value,people])

  const handleClick = () =>{
    setValue("")
    setPeople("")
    setTip("")
    document.querySelectorAll('.app__tip button').forEach(btn=>{btn.className = ""})
  }

  return (
    <div className="app">
      <div className='app__left'>
        <Input 
          name="Bill" 
          val={value} 
          setVal={setValue} 
          picture={Dollar}
        />
        <Select 
          name="Select Tip %"
          val={tip}
          setVal={setTip}
        />
        <Input 
          name="Number of People" 
          val={people} 
          setVal={setPeople} 
          picture={Person}
        />
      </div>
      <div className='app__right'>
        <div className='app__stats'>
          <label>
            <div>
              <p>Tip Amount</p>
              <p className='person'>/ person</p>
            </div>
            <h1>
              {`$${
                (+value / +people * +tip/100).toFixed(2) > 0 && people > 0 ? (+value / +people * +tip/100).toFixed(2) : "0.00" 
              }`}
            </h1>
          </label>
          <label>
            <div>
              <p>Total</p>
              <p className='person'>/ person</p>
            </div>
            <h1>{`$${
                (+value / +people * (1 + +tip/100)).toFixed(2) > 0 && people > 0 ? (+value / +people * (1 + +tip/100)).toFixed(2) : "0.00"
              }`}</h1>
          </label>
        </div>
        <button onClick={handleClick} disabled={status} style={status ? {opacity: 0.2}: null}>RESET</button>
      </div>
    </div>
  );
}

export default App;
