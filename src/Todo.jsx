import React,{useState} from 'react'
import './App.css'

function Todo() {

    const [toDos,setToDos]=useState([])
    const [toDo,setToDo]=useState('')
   
    
    const dltTodo = (ind) =>{
      var nwList =toDos
      nwList.splice(ind,1)
      setToDos([...nwList])
      
    }
    const hi=new Date()
    const h=hi.getHours()-12
    const m=hi.getMinutes()
    
    
  return (
    <div className="app">
    <div className="mainHeading">
      <h1  className='entering-font'>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2 className='entering-font'>*Create Your List*</h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {
         toDos.map((obj,ind)=>{
         
     return( 
      <div className="todo">
        <div className="left ">
          <input value={obj.status} onChange={(e)=>(
           setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              //("todo").style.color="blue"
              return obj2
           }))
          ,console.log(e.target.checked),
            console.log(obj)
          )}
          type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
              
          <i onClick={()=>dltTodo(ind)} value={toDos.text} className="fa fa-trash"></i>
          
        </div>


          <h6 className='text-align'>Created at { h+" : "+m+" pm"} </h6>
       </div>)
    })}
    
    <div className='done-align done-tasks'>
    <h1  style={{color:'#c7dced',fontFamily: 'system-ui'}}><u>Done Tasks</u></h1>
             
    {
      toDos.map((obj)=>{
        if(obj.status){
          return(
               <h4 >⦿  {obj.text}</h4>
          )

        }
        return null
      })
    }
    </div>
    </div>
  </div>
  )
}

export default Todo
