import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex flex-col items-center gap-4 justify-center mb-4 '>
        <h1 className='text-4xl font-bold text-center'>{text1}</h1>
        <p className='text-gray-500 text-center sm:w-[50vw]'>{text2}</p>
    </div>
  )
}

export default Title