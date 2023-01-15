import React from 'react'
import ViewQuestions from './ViewQuestions'
export default function UserPortal({setShowMessage}) {
  return (
    <div>
     <div className="container">
      <div className="row">
        <h3 className="col text-center mt-2">
          Questions
        </h3>
      </div>
      <div className="row">
    <ViewQuestions setShowMessage={setShowMessage}></ViewQuestions>
      </div>
     </div>
    </div>
  )
}
