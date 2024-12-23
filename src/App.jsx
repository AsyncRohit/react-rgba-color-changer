import React, { useEffect, useRef } from 'react'

const App = () => {

  const boxRef = useRef(null)
  const ChangeColor =()=>{
    const value1=Math.floor(Math.random()*256)
    const value2=Math.floor(Math.random()*256)
    const value3=Math.floor(Math.random()*256)
    boxRef.current.style.backgroundColor = `rgba(${value1},${value2},${value3})`
  }

  return (
    <div className='h-screen w-full relative'>
      <div ref={boxRef}
      className='h-full w-full mb-4 bg-orange-500 text-white'
       id="box">

      </div>
      <button 
      onClick={()=>{
        ChangeColor()
      }}
      className='px-4 py-2 bg-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>Change Background colour</button>
    </div>
  )
}

export default App