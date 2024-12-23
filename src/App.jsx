import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const boxRef = useRef(null)
  const h1Ref = useRef(null)
  const [number, setNumber] = useState(0)
  const ChangeColor =()=>{
    const value1=Math.floor(Math.random()*256)
    const value2=Math.floor(Math.random()*256)
    const value3=Math.floor(Math.random()*256)
    boxRef.current.style.backgroundColor = `rgba(${value1},${value2},${value3})`
    h1Ref.current.style.color="white"
    setNumber(number+1);
    console.log("hello")
  }
  useEffect(function(){
ChangeColor()
  },[])


  return (
    <div className='h-screen w-full relative'>
      <div ref={boxRef}
      className='h-full w-full mb-4 bg-blue-500 '
       id="box">
        <h1 ref={h1Ref}
         className='ml-10 pt-20 text-3xl font-bold text-white'>People often show their true colors when it benefits them, taking you for granted as many times as the background color changes. So, choose your company wisely</h1>
         <div className='text-center mt-40'>
         <h1 className='text-white text-3xl font-bold mx-auto'>{number} Times</h1>

         </div>
      </div>
      {/* <button 
      onClick={()=>{
        ChangeColor()
      }}
      className='px-4 py-2 bg-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>Change Background colour</button> */}
    </div>
  )
}

export default App