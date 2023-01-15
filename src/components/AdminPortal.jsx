import React from "react";
import AddQuestions from "./AddQuestions";
import ViewQuestionsAdmin from "./ViewQuestionsAdmin";
import { useState } from "react";
import DeleteQuestion from "./DeleteQuestion";
import EditQuestion from "./EditQuestion";

export default function AdminPortal({ setShowMessage }) {
  const staticFeatures = {
    viewQuestion: false,
    editQuestions:false,
    dummy: false,
  };
  const [features, setFeatures] = useState(staticFeatures);
  const handleFeatures = (e) => {
    if (e.target.name == "viewq") {
      setFeatures({ ...staticFeatures, viewQuestion: true });
    } 
    else if(e.target.name==="editq"){
      
      setFeatures({...staticFeatures, editQuestions:true,})
    }
    else {
      setFeatures({ ...staticFeatures, dummy: true });
    }
  };
  return (
    
    <div className="container mt-5">
      
      <div className="row">
        <div className="col-3">
          <AddQuestions setShowMessage={setShowMessage}></AddQuestions>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            name="viewq"
            onClick={handleFeatures}
          >
            View Questions
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            name="editq"
            onClick={handleFeatures}
          >
            Edit Questions
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            name="dummy"
            onClick={handleFeatures}
          >
           Delete Question
          </button>
        </div>
      </div>
      <div className="row">
        {features.viewQuestion && <ViewQuestionsAdmin></ViewQuestionsAdmin>}
        {features. editQuestions && <EditQuestion></EditQuestion>}
        {features.dummy && <DeleteQuestion></DeleteQuestion>}
      </div>
    </div>
  );
}
