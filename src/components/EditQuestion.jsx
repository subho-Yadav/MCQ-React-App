import React from 'react'
import { questions } from '../../data/appdata'
import {useState} from 'react'

export default function EditQuestion() {
  return (
    <div>
    <table className="table mt-3">
 <thead>
   <tr>
     <th scope="col">Q.No.</th>
     <th scope="col">Question</th>
     <th scope="col">Opt-1</th>
     <th scope="col">Opt-2</th>
     <th scope="col">Opt-3</th>
     <th scope="col">Opt-4</th>
   </tr>
 </thead>
 <tbody>
  {
   questions.map((e,index)=>{
      return  <tr key={e.question}>
       <th scope="row">{index+1}</th>
       <td>{e.question}</td>

       {e.opt.map((e)=>{
           return <td key={e}>{e}</td>
       })}
  
  <td><EditForm index={index}></EditForm></td>
     </tr>
   })
  }
 </tbody>
</table>
   </div>
  )
}

const EditForm = ({index})=>{
 
    const [question ,setQuestion]=useState({
        question:questions[index].question,
        opt1:questions[index].opt[0],
        opt2:questions[index].opt[1],
        opt3:questions[index].opt[2],
        opt4:questions[index].opt[3],
        ca:questions[index].correctAnswer,
      })
   
      const addQuestion=(event)=>{
        event.preventDefault()
         console.log("Question edited!")
      }
    
     
    
    return (
        <section>
       
     <button  className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#${index}`}>
     Edit
     </button>
     
     
     <div className="modal fade" id={index} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h1 className="modal-title fs-5" id="exampleModalLabel">Edit MCQ Question</h1>
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
     
       <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Edit Question</button>
     </form>
           </div>
           
         </div>
       </div>
     </div>
        </section>
       )
}

const Test=({index})=>{
   
    return(
        <button className='btn btn-danger' onClick={()=> alert(index)}> click</button>
    )
}