import { useState } from 'react'
import './App.css'

function App() {
  // we are using state here cause cause the color is the element that is going to change 
  const [color, setColor] = useState('green')

  return (
    <div className='w-full h-screen duration-200'
        style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  ">

          hi there so how was the day <br />

        </div>
        <div className="bg-red">hi there 222222</div>
        
      </div>    

    </div>
  )
}

export default App
