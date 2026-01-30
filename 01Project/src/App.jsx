import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  function upvotes(){
    if(count>=20) return;
    setCount(count+1);
  }

  function downVotes(){
    if(count<=0) return;
    setCount(count-1);
  }

  return (
    <>
    <h2>Bill gates is nowhere close to Steve Jobs</h2>
    <button onClick={()=>{upvotes()}}>Upvotes</button> 
    <br></br>
    <h3>No of votes = {count}</h3>
    <br></br>
    <button onClick={()=>{downVotes()}}>Downvotes</button>
    </>
  )
  // remember we put upvotes inside a function cause withoug that it will have executed in compile time itself 
}

export default App
