import React from 'react'
import {useState} from 'react'
import { questions } from '../../data/appdata'

export default function AddQuestions({setShowMessage}) {
  const [question ,setQuestion]=useState({
    question:"Favourite Dish",
    opt1:"Rasagolla",
    opt2:"Sandesh",
    opt3:"Mishti Doi",
    opt4:"Gulab Jamun",
    ca:"Mishti Doi",
  })

  const addQuestion=(event)=>{
    event.preventDefault()
     const qIndex=questions.findIndex(e=>e.question===question.question)
     if(qIndex!==-1){
      setShowMessage({display:true,message:"Question exists already"})
      setTimeout(()=>{
        setShowMessage({display:false,message:""})
      },2100)
      return
     }
     questions.push({
      question:question.question,
      opt:[question.opt1,question.opt2,question.opt3,question.opt4],
      ca:question.ca
    })
    setShowMessage({display:true,message:"Question added"})
    setTimeout(()=>{
      setShowMessage({display:false,message:""})
    },2100)
  }

  return (
   <>
   
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Question
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add MCQ Question</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={addQuestion}>
 
      <div className="mb-3">
    <label htmlFor="question" className="form-label" >Question</label>
    <input type="text" className="form-control" id="question" value={question.question} 
    onChange={(event)=>{setQuestion({...question,question:event.target.value})}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="Opt:1" className="form-label">Opt:1</label>
    <input type="text" className="form-control" id="opt:1" value={question.opt1} 
    onChange={(event)=>{setQuestion({...question,opt1:event.target.value})}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="Opt:2" className="form-label">Opt:2</label>
    <input type="text" className="form-control" id="opt:2" value={question.opt2} 
    onChange={(event)=>{setQuestion({...question,opt2:event.target.value})}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="Opt:3" className="form-label">Opt:3</label>
    <input type="text" className="form-control" id="opt:3" value={question.opt3} 
    onChange={(event)=>{setQuestion({...question,opt3:event.target.value})}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="Opt:4" className="form-label">Opt:4</label>
    <input type="text" className="form-control" id="opt:4" value={question.opt4} 
    onChange={(event)=>{setQuestion({...question,opt4:event.target.value})}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="correct" className="form-label">Correct Answer</label>
    <input type="text" className="form-control" id="correct" value={question.ca} 
    onChange={(event)=>{setQuestion({...question,ca:event.target.value})}}/>
  </div>

  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add Question</button>
</form>
      </div>
      
    </div>
  </div>
</div>
   </>
  )
}
