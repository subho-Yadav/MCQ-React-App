import React from "react";
import { questions } from "../../data/appdata";
import {useState} from 'react'
export default function ViewQuestions() {
  const [activeQuestion , setActiveQuestion]=useState("")
  const [showMessage,setShowMessage] = useState({
    display:false,
    message:""
  })
  const checkAnswer = (element, index) => {
    setActiveQuestion(index)
    if (questions[index].correctAnswer === element) {
      setShowMessage({ display: true, message: "Correct Answer!" });
    } else {
      setShowMessage({ display: true, message: "Wrong Answer!" });
    }
    setTimeout(() => {
      setShowMessage({ display: false, message: "" });
    }, 2000);
  };
  return questions.map((e, index) => {
    return (
      <div className="accordion mt-4" id="accordionExample" key={e.question}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${index}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {e.question}
            </button>
          </h2>
          <div
            id={index}
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="col-6">
                <form>
                  {e.opt.map((element) => {
                    return (
                      <div className="form-check" key={element}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id={element}
                          onClick={() => checkAnswer(element, index)}
                        />
                        <label className="form-check-label" htmlFor={element}>
                          {element}
                        </label>
                      </div>
                    );
                  })}
                </form>
              </div>
              <div className="col-6">
              {
                  showMessage.display && activeQuestion===index && <div className="alert alert-warning">
                      {showMessage.message}
                  </div>
                 }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
