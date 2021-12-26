import React,{useState,useEffect} from 'react';

function Select({name,val,setVal}) {
    const [customVal,setCustomVal] = useState("")

    const [error,setError] = useState(false)
    useEffect(()=>{
        if(val==="0"){
        setError(true)
        }
        else{
        setError(false)
        }
    },[val])

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
        <div className='app__label'>
         <p>{name}</p>
         {error && <p style={{color: "rgba(220,0,0,0.7)"}}>Can't be zero</p>}
       </div>
        <div className='app__tip'>
            <button onClick={handleClick} value="5">5%</button>
            <button onClick={handleClick} value="10">10%</button>
            <button onClick={handleClick} value="15">15%</button>
            <button onClick={handleClick} value="25">25%</button>
            <button onClick={handleClick} value="50">50%</button>
            <input type="number" placeholder='Custom' value={customVal} onChange={handleChange} min="0" style={error ? {outlineColor: "rgba(220,0,0,0.7)"} : null}/>
        </div>
      </div>
    );
  }
  
  export default Select;
  