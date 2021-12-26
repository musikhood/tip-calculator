import React,{useState} from 'react';

function Select({name,val,setVal}) {
    const [customVal,setCustomVal] = useState("")
    
    const handleChange=e=>{
        setVal(e.target.value)
        setCustomVal(e.target.value)
        document.querySelectorAll('.app__tip button').forEach(btn=>{btn.className = ""})
    }
    const handleClick=e=>{
        setVal(e.target.value)
        setCustomVal("")
        document.querySelectorAll('.app__tip button').forEach(btn=>{btn.className = ""})
        e.target.className = "active"
    }
    return (
      <div className="app__select">
        <p>{name}</p>
        <div className='app__tip'>
            <button onClick={handleClick} value="5">5%</button>
            <button onClick={handleClick} value="10">10%</button>
            <button onClick={handleClick} value="15">15%</button>
            <button onClick={handleClick} value="25">25%</button>
            <button onClick={handleClick} value="50">50%</button>
            <input type="number" placeholder='Custom' value={customVal} onChange={handleChange}/>
        </div>
      </div>
    );
  }
  
  export default Select;
  