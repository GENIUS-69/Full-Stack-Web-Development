import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive');

  function changeColor(color) {
    setColor(color)
  }

  return (
    <div
      className='w-full h-screen duration-200'
      style={{
        backgroundColor: color
      }}>
      <div
        className="fixed flex flex-wrap justify-center bottom-13 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => changeColor('red')}
            className='outline-none px-4 py-1 rounded-full text-red shadow-lg'>Red</button>
          <button
            onClick={() => changeColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-blue shadow-lg'
          >Blue</button>
          <button
            onClick={() => changeColor('yellow')}
            className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg'
          >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
