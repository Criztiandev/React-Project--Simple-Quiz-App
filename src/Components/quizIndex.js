import React from 'react'

function QuizIndex(props) {
  if(props.current === true){
    return(
        <div key={props.index} className='border border-black rounded-md w-10 h-10 flex justify-center items-center bg-lime-600'>
        <h1 className='text-xl font-bold'>{props.index + 1}</h1>
    </div>
    )
  }

  return(
    <div key={props.index} className='border border-black rounded-md w-10 h-10 flex justify-center items-center'>
        <h1 className='text-xl font-bold'>{props.index + 1}</h1>
    </div>
  )
}

export default QuizIndex