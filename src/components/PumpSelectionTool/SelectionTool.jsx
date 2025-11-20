// src/components/SelectionTool.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SelectionTool.css";
import { IoMdCall } from "react-icons/io";

function SelectionTool({ question, onAnswer, currentAnswer, goToPreviousStep, canGoBack }) {
  const [inputValue, setInputValue] = useState(currentAnswer || "");

  useEffect(() => {
    setInputValue(currentAnswer || "");
  }, [question, currentAnswer]);

  const handleOptionChange = (optionId, nextSection) => {
    onAnswer(question.id, optionId, nextSection);
  };

  const handleRangeChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextClick = () => {
    if (inputValue !== "") {
      onAnswer(question.id, inputValue, question.nextSection);
    } else {
      alert("Please select a value before continuing.");
    }
  };

  const isRangeQuestion =
    question.id.toLowerCase().includes("head") ||
    question.id.toLowerCase().includes("discharge") ||
    question.id.toLowerCase().includes("depth");

  const isContactSection = question.section === "contact_service_team";

  return (
    <motion.div
      className="selection-tool"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      {/* TITLE */}
      <h2 className="question-title">{question.question.split("-")[0]}</h2>

      {/* SUBTEXT */}
      <p className="question-subtext">
        {question.question.includes("HEAD")
          ? "Do you know how high you will need to pump water?"
          : question.question.includes("Discharge")
          ? "Do you know how much flow you will need to pump?"
          : question.question.includes("Depth")
          ? "Do you know how much flow you will need to pump?"
          : ""}
      </p>

      {/* =======================
          SPECIAL CONTACT SECTION
      ======================== */}
      {isContactSection ? (
        <div className="contact-support-box">
          {/* <p>Please Contact Our Support Team For Immediate Assistance.</p> */}

          <a href="tel:9843820091" className="contact-call-btn">
            <IoMdCall /> Contact Our Sales Team
          </a>
        </div>
      ) : (
        <>
          {/* ================
              RANGE QUESTION
          ================= */}
          {isRangeQuestion ? (
            <div className="range-container">
              <div className="range-labels">
                <span>
                  ({question.min} {question.unit} – {question.max} {question.unit})
                </span>
              </div>
              <input
                type="range"
                className="range-slider"
                min={question.min}
                max={question.max}
                step="1"
                value={inputValue || question.min}
                onChange={handleRangeChange}
              />
              <div className="range-value">
                <strong>{inputValue || question.min} {question.unit}</strong>
              </div>
              <button className="next-btn" onClick={handleNextClick}>Next →</button>
            </div>
          ) : question.type === "input" ? (
            <div>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                min={question.min}
                max={question.max}
                placeholder={`Enter value (${question.min}-${question.max} ${question.unit})`}
              />
              <button className="Next-button" onClick={handleNextClick}>Next</button>
            </div>
          ) : (
            /* ================
                NORMAL OPTIONS
            ================= */
            <div className="options">
              {question.options.map((option) => (
                <motion.button
                  key={option.id}
                  className={`option-button ${currentAnswer === option.id ? "selected" : ""}`}
                  onClick={() => handleOptionChange(option.id, option.nextSection)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          )}
        </>
      )}

      {/* BACK BUTTON */}
      {canGoBack && (
        <button className="back-button" onClick={goToPreviousStep}>Back</button>
      )}
    </motion.div>
  );
}

export default SelectionTool;
