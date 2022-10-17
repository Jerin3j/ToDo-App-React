import {useState,useRef} from 'react'
function App() {
  const inputRef=useRef()                       
   var [state,setState]= useState('')
     

       const setVal=() =>{
             setState(inputRef.current.value)
      }

      console.log(state)

  return (
    <div >
      <input ref={inputRef} ></input>
      <button  onClick={setVal} >Add</button>
       <h1 >{state }</h1>
    </div>
  );
}

export default App;
