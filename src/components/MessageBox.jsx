import React from 'react'

export default function MessageBox({message}) {
  return (
    <div className='alert alert-warning mt-5'>
      {message}
    </div>
  )
}
