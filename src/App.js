import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';


//use memo eka application eka speed karann bawitha karai(performane wadi karann)
//use memo-returns a value
//use calleback=return a function
//use callback use for to optimize a app(also  memo)
function App() {
    
  const [imageUrl,setImageUrl]=useState('')
  const [name,setName]=useState('')
  const [result,setResult]=useState('')

  const myFunction=useCallback(()=> ()=>"amila"
  ,[])
  
  console.log("rerender");
  console.log(result)

  useEffect(()=>{
     console.log("use Effect")
     //console.log(myFunction())
     setResult(myFunction())
  },[myFunction])
 
     return (
    <div >
     <input type='text' placeholder='Enter image url' onChange={(e)=>setImageUrl(e.target.value)} />
     <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
     <input type='text' placeholder='Enter your city' />
     <input type='text' placeholder='Enter your position' />
     <button >Set Data</button>
    
     <div>
      <p>{imageUrl}</p>
       <p>{name}</p>
    </div>
    </div>

   
  );
}

export default App;
