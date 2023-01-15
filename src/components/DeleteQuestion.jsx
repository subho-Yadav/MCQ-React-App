import React from 'react'
import { questions } from '../../data/appdata'



export default function DeleteQuestion() {
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
       <td><button className='btn btn-danger'>Delete</button></td>
     </tr>
   })
  }
 </tbody>
</table>
   </div>
  )
}
