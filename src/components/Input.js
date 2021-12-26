import React,{useState,useEffect} from 'react';


function Input({name,val,setVal,picture}) {
  
  const [error,setError] = useState(false)
  useEffect(()=>{
    if(val==="0"){
      setError(true)
    }
    else{
      setError(false)
    }
  },[val])
  
  const handleChange =(e)=>{
    setVal(e.target.value)
  }
  return (
     <label className="app__input">
       <div className='app__label'>
         <p>{name}</p>
         {error && <p className='app__error'>Can't be zero</p>}
       </div>
      <input 
        type="number" 
        placeholder='0'
        className='app__text' 
        value={val} 
        onChange={handleChange} 
        min="0"
        style={error ? 
          {backgroundImage: `url(${picture})`,outlineColor: "rgba(220,0,0,0.7)"} 
          : 
          {backgroundImage: `url(${picture})`}
        }
      />
    </label>
  );
}
  
  export default Input;
  