import React, { useState } from 'react';

function Input({onAdd}) {
     const [text, setText] = useState("");
  return (
       <div id="input" className='flex flex-row justify-between place-items-center drop-shadow-2xl'>
            <input
                 className='rounded-lg p-5'
                 type='text' value={text}
                 onChange={(e) => setText(e.target.value)}
                 placeholder="Enter the data..."
            />
            <div className='w-10'></div>
            <div onClick={()=>onAdd(text)}>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-end" fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path color='green' strokeLinecap="round" strokeLinejoin='round' d="M12 4v16m8-8H4" />
                      </svg>
            </div>
    </div>
  )
}

export default Input
