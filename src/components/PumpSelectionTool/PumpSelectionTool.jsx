// src/PumpSelectionTool.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import "./PumpSelectionTool.css";
import { pumpSelectionQuestions } from "./../data/questions.jsx";
import { pumps } from "./../data/products.jsx";
import SelectionTool from "./../PumpSelectionTool/SelectionTool.jsx";
import ProductList from "./../PumpSelectionTool/ProductList.jsx";
import { motion, AnimatePresence } from "framer-motion";

function PumpSelectionTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [filteredPumps, setFilteredPumps] = useState([]);
  const [currentQuestionFlow, setCurrentQuestionFlow] = useState([
    pumpSelectionQuestions[0],
  ]);
  const [allAnswered, setAllAnswered] = useState(false);
  const questionRefs = useRef([]);
  const [visibleQuestions, setVisibleQuestions] = useState([0]);
  const [progress, setProgress] = useState(0);

  const filterProducts = useCallback(() => {
    let tempPumps = [...pumps];

     // Domestic Question //

    if (answers.applicationType) {
      tempPumps = tempPumps.filter(pump => pump.application === answers.applicationType);
    }
    if (answers.domesticUse_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.domesticUse_waterSource);
    }

    // Domestic Question SumpTank surface//

    if (answers.domesticUse_sumpTank_installLocation) {
      tempPumps = tempPumps.filter(pump => pump.installLocation === answers.domesticUse_sumpTank_installLocation);
    }
    if (answers.domesticUse_sumpTank_surface_head) {
      const headValue = parseInt(answers.domesticUse_sumpTank_surface_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.domesticUse_sumpTank_surface_discharge) {
      const dischargeValue = parseInt(answers.domesticUse_sumpTank_surface_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.domesticUse_sumpTank_surface_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.domesticUse_sumpTank_surface_deliverySize));
    }

    // Domestic Question SumpTank submerged//

    if (answers.domesticUse_sumpTank_submerged_head) {
      const headValue = parseInt(answers.domesticUse_sumpTank_submerged_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.domesticUse_sumpTank_submerged_discharge) {
      const dischargeValue = parseInt(answers.domesticUse_sumpTank_submerged_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.domesticUse_sumpTank_submerged_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.domesticUse_sumpTank_submerged_deliverySize));
    }

    // Domestic Question Openwell surface//

    // --- Domestic Question Openwell Surface ---
    
    if (answers.domesticUse_openwell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.domesticUse_openwell_installLocation
      );
    }

    if (answers.domesticUse_openwell_surface_head) {
      const headValue = parseFloat(answers.domesticUse_openwell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_openwell_surface_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_openwell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }

    if (answers.domesticUse_openwell_surface_deliverySize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.domesticUse_openwell_surface_deliverySize)
      );
    }

    // --- Domestic Question Openwell Submerged ---

    if (answers.domesticUse_openwell_Submerged_head) {
      const headValue = parseFloat(answers.domesticUse_openwell_Submerged_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_openwell_Submerged_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_openwell_Submerged_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }

    if (answers.domesticUse_openwell_surface_deliverySize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.domesticUse_openwell_surface_deliverySize)
      );
    }


      // Domestic Question Borewell //

    // --- Domestic Question Borewell Surface --- //
    
    if (answers.domesticUse_borewell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.domesticUse_borewell_installLocation
      );
    }
    if (answers.domesticUse_borewell_surface_phase) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.domesticUse_borewell_surface_phase
      );
    }

    if (answers.domesticUse_borewell_surface_depth) {
      const depthValue = parseFloat(answers.domesticUse_borewell_surface_depth);
      tempPumps = tempPumps.filter(
        pump => depthValue >= pump.depthMin && depthValue <= pump.depthMax
      );
    }
     
    if (answers.domesticUse_borewell_surface_head) {
      const headValue = parseFloat(answers.domesticUse_borewell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_borewell_surface_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_borewell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }


    // --- Domestic Question Borewell Submersible --- //

    

    if (answers.domesticUse_borewell_submersible_borewellSize) {
      tempPumps = tempPumps.filter(
        pump => pump.borewellSize.includes(answers.domesticUse_borewell_submersible_borewellSize)
      );
    }
     
    if (answers.domesticUse_borewell_submersible_phase) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.domesticUse_borewell_submersible_phase
      );
    }
    if (answers.domesticUse_borewell_submersible_sand_or_silt) {
      tempPumps = tempPumps.filter(
        pump => pump.sandorsilt === answers.domesticUse_borewell_submersible_sand_or_silt
      );
    }

    if (answers.domesticUse_borewell_submersible_head) {
      const headValue = parseFloat(answers.domesticUse_borewell_submersible_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_borewell_submersible_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_borewell_submersible_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }

    // ---Domestic Pressure Boosting Application Section --- //

    if (answers.domesticUse_pressure_boosting_bathrooms) {
      tempPumps = tempPumps.filter(
        pump => pump.numberofSB?.includes(answers.domesticUse_pressure_boosting_bathrooms)
      );
    }
    if (answers.domesticUse_pressure_boosting_simultaneous) {
      tempPumps = tempPumps.filter(
        pump => pump.numberofSBS?.includes(answers.domesticUse_pressure_boosting_simultaneous)
      );
    }

    //--------- Agriculture Openwell Section Question -------------//

    if (answers.agricultureUse_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.agricultureUse_waterSource);
    }
    if (answers.agricultureUse_openwell_powersource) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.agricultureUse_openwell_powersource
      );
    }
    if (answers.agricultureUse_openwell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.agricultureUse_openwell_installLocation
      );
    }
     if (answers.agricultureUse_openwell_surface_irrigation_head) {
      const headValue = parseFloat(answers.agricultureUse_openwell_surface_irrigation_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }

    if (answers.agricultureUse_openwell_surface_irrigation_discharge) {
      const dischargeValue = parseFloat(answers.agricultureUse_openwell_surface_irrigation_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }
    if (answers.agricultureUse_openwell_surface_irrigation_borewellSize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.agricultureUse_openwell_surface_irrigation_borewellSize)
      );
    }





    //--------- Agriculture Borewell Section Question -------------//

    // Submersible //

    if (answers.agricultureUse_borewell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.agricultureUse_borewell_installLocation
      );
    }
    if (answers.agricultureUse_borewell_installLocation_type) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocationtype === answers.agricultureUse_borewell_installLocation_type
      );
    }
  
    if (answers.agricultureUse_borewell_submersible_borewellSize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.agricultureUse_borewell_submersible_borewellSize)
      );
    }
    if (answers.agricultureUse_borewell_submersible_powersource) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.agricultureUse_borewell_submersible_powersource
      );
    }
    if (answers.agricultureUse_openwell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.agricultureUse_openwell_installLocation
      );
    }
    if (answers.agricultureUse_borewell_submersible_head) {
      const headValue = parseFloat(answers.agricultureUse_borewell_submersible_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }
    if (answers.agricultureUse_borewell_submersible_discharge) {
      const dischargeValue = parseFloat(answers.agricultureUse_borewell_submersible_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }

    // Surface //
    
    if (answers.agricultureUse_borewell_surface_powersource) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.agricultureUse_borewell_surface_powersource
      );
    }
    if (answers.agricultureUse_borewell_surface_depth) {
      const depthValue = parseFloat(answers.agricultureUse_borewell_surface_depth);
      tempPumps = tempPumps.filter(
        pump => depthValue >= pump.depthMin && depthValue <= pump.depthMax
      );
    }
    if (answers.agricultureUse_borewell_surface_head) {
      const headValue = parseFloat(answers.agricultureUse_borewell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }
    if (answers.agricultureUse_borewell_surface_discharge) {
      const dischargeValue = parseFloat(answers.agricultureUse_borewell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }


    // -------------- Commercial / Industrial Pump Question ---------------- //

    // Commercial / Industrial Question SumpTank submerged//


    if (answers.commercialUse_mainPurpose) {
      tempPumps = tempPumps.filter(pump => pump.mainPurpose === answers.commercialUse_mainPurpose);
    }
    if (answers.commercialUse_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.commercialUse_waterSource);
    }
    if (answers.commercialUse_sumpTank_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.commercialUse_sumpTank_installLocation
      );
    }
    if (answers.commercialUse_sumpTank_surface_head) {
      const headValue = parseInt(answers.commercialUse_sumpTank_surface_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.commercialUse_sumpTank_surface_discharge) {
      const dischargeValue = parseInt(answers.commercialUse_sumpTank_surface_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.commercialUse_sumpTank_surface_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.commercialUse_sumpTank_surface_deliverySize));
    }


    // Commercial / Industrial Question SumpTank submerged//

    if (answers.commercialUse_sumpTank_submerged_head) {
      const headValue = parseInt(answers.commercialUse_sumpTank_submerged_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.commercialUse_sumpTank_submerged_discharge) {
      const dischargeValue = parseInt(answers.commercialUse_sumpTank_submerged_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.commercialUse_sumpTank_submerged_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.commercialUse_sumpTank_submerged_deliverySize));
    }


      // Commercial / Industrial Question Openwell surface //

    if (answers.commercialUse_openwell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.commercialUse_openwell_installLocation
      );
    }
    if (answers.commercialUse_openwell_surface_head) {
      const headValue = parseInt(answers.commercialUse_openwell_surface_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.commercialUse_openwell_surface_discharge) {
      const dischargeValue = parseInt(answers.commercialUse_openwell_surface_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.commercialUse_openwell_surface_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.commercialUse_openwell_surface_deliverySize));
    }


    // Commercial / Industrial Question Openwell submerged//

    if (answers.commercialUse_openwell_submerged_head) {
      const headValue = parseInt(answers.commercialUse_openwell_submerged_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.commercialUse_openwell_submerged_discharge) {
      const dischargeValue = parseInt(answers.commercialUse_openwell_submerged_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.commercialUse_openwell_submerged_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.commercialUse_openwell_submerged_deliverySize));
    }


    // Commercial / Industrial Question Borewell surface //

    if (answers.commercialUse_borewell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.commercialUse_borewell_installLocation
      );
    }
    if (answers.commercialUse_borewell_surface_phase) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.commercialUse_borewell_surface_phase
      );
    }

    if (answers.commercialUse_borewell_surface_depth) {
      const depthValue = parseFloat(answers.commercialUse_borewell_surface_depth);
      tempPumps = tempPumps.filter(
        pump => depthValue >= pump.depthMin && depthValue <= pump.depthMax
      );
    }
     
    if (answers.commercialUse_borewell_surface_head) {
      const headValue = parseFloat(answers.commercialUse_borewell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.commercialUse_borewell_surface_discharge) {
      const dischargeValue = parseFloat(answers.commercialUse_borewell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }


    // --- Commercial Question Borewell Submersible --- //

    
    if (answers.commercialUse_borewell_submersible_phase) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.commercialUse_borewell_submersible_phase
      );
    }
    if (answers.commercialUse_borewell_submersible_sand_or_silt) {
      tempPumps = tempPumps.filter(
        pump => pump.sandorsilt === answers.commercialUse_borewell_submersible_sand_or_silt
      );
    }

    if (answers.commercialUse_borewell_submersible_borewellSize) {
      tempPumps = tempPumps.filter(
        pump => pump.borewellSize.includes(answers.commercialUse_borewell_submersible_borewellSize)
      );
    }
   
    if (answers.commercialUse_borewell_submersible_head) {
      const headValue = parseFloat(answers.commercialUse_borewell_submersible_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }

    if (answers.commercialUse_borewell_submersible_discharge) {
      const dischargeValue = parseFloat(answers.commercialUse_borewell_submersible_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }


    

    // ---Commercial/Industrial BoreWell Section --- //

 // ---Commercial/Industrial Pressure Boosting Application Section --- //


    if (answers.commercialUse_pressureboostingsystem) {
      tempPumps = tempPumps.filter(pump => pump.mainPurpose === answers.commercialUse_pressureboostingsystem);
    }
    if (answers.commercialUse_heightofthebuilding) {
      tempPumps = tempPumps.filter(pump => pump.heightoftheBuilding === answers.commercialUse_heightofthebuilding);
    }


    // ---Wastewater and Drainage Applications Section --- //

    // ---Drainage Application Section --- //
    
    if (answers.WastewaterUse_wastewater_and_drainage_applications_installLocation) {
          tempPumps = tempPumps.filter(
            pump => pump.installLocation === answers.WastewaterUse_wastewater_and_drainage_applications_installLocation
          );
    }
    
    if (answers.WastewaterUse_drainage_applications_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.WastewaterUse_drainage_applications_waterSource);
    }
    if (answers.WastewaterUse_basement_garage_balcony_head) {
      const headValue = parseFloat(answers.WastewaterUse_basement_garage_balcony_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }

    // --- Wastewater  Storm Water Rainwater Sumps Section --- //


    if (answers.WastewaterUse_Stormwater_Rainwater_head) {
      const headValue = parseFloat(answers.WastewaterUse_Stormwater_Rainwater_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }
    if (answers.WastewaterUse_Stormwater_Rainwater_discharge) {
      const dischargeValue = parseFloat(answers.WastewaterUse_Stormwater_Rainwater_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }


    // --- Wastewater Dewatering Application Section --- //

    if (answers.WastewaterUse_dewatering_application_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.WastewaterUse_dewatering_application_waterSource);
    }
    if (answers.WastewaterUse_dewatering_application_head) {
      const headValue = parseFloat(answers.WastewaterUse_dewatering_application_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }
    if (answers.WastewaterUse_dewatering_application_discharge) {
      const dischargeValue = parseFloat(answers.WastewaterUse_dewatering_application_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }

    

    

     setFilteredPumps(tempPumps);
  }, [answers]);

  useEffect(() => {
    if (allAnswered) filterProducts();
  }, [answers, filterProducts, allAnswered]);

// ---------------------- HELPER FUNCTION ----------------------
const isAllQuestionsAnswered = () => {
  return currentQuestionFlow.every(
    (q) => answers[q.id] !== undefined && answers[q.id] !== ""
  );
};

// ---------------------- HANDLE ANSWER ----------------------
const handleAnswer = (questionId, answer, nextSectionId) => {
  setAnswers((prev) => {
    const newAnswers = { ...prev, [questionId]: answer };

    const currentIndex = currentQuestionFlow.findIndex(
      (q) => q.id === questionId
    );

    if (nextSectionId) {
      const nextQuestions = pumpSelectionQuestions.filter(
        (q) => q.section === nextSectionId
      );

      setCurrentQuestionFlow((prevFlow) => {
        const updatedFlow = [...prevFlow.slice(0, currentIndex + 1)];
        const existingIds = new Set(updatedFlow.map((q) => q.id));

        nextQuestions.forEach((q) => {
          if (!existingIds.has(q.id)) {
            updatedFlow.push(q);
          }
        });

        return updatedFlow;
      });

      setCurrentStep(currentIndex + 1);
      setVisibleQuestions((prev) => [...new Set([...prev, currentIndex + 1])]);

      setTimeout(() => {
        const nextElement = questionRefs.current[currentIndex + 1];
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 600);
    } else {
      // check if all questions are answered
      const allAnsweredNow = currentQuestionFlow.every(
        (q) => newAnswers[q.id] !== undefined && newAnswers[q.id] !== ""
      );

      if (allAnsweredNow) {
        setAllAnswered(true);
      } else {
        // move to next unanswered question
        const nextUnansweredIndex = currentQuestionFlow.findIndex(
          (q) => newAnswers[q.id] === undefined || newAnswers[q.id] === ""
        );
        if (nextUnansweredIndex !== -1) {
          setCurrentStep(nextUnansweredIndex);
          setTimeout(() => {
            const nextEl = questionRefs.current[nextUnansweredIndex];
            if (nextEl) {
              nextEl.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 400);
        }
      }
    }

    return newAnswers;
  });
};



  // ---------------------- AUTO-SCROLL ----------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      if (questionRefs.current[currentStep]) {
        questionRefs.current[currentStep].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // ---------------------- OBSERVE VISIBILITY ----------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleQuestions((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleQuestions((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    questionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentQuestionFlow]);

  // ---------------------- GO BACK ----------------------
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setTimeout(() => {
        const prevEl = questionRefs.current[currentStep - 1];
        if (prevEl) {
          prevEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 400);
    }
  };

  // ---------------------- RESET ---------------------- //
  const resetSelection = () => {
    setAnswers({});
    setCurrentStep(0);
    setCurrentQuestionFlow([pumpSelectionQuestions[0]]);
    setFilteredPumps([]);
    setAllAnswered(false);
    setVisibleQuestions([0]);
  };

  // ---------------------- ANIMATION VARIANTS ---------------------- //
  const fadeVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  // ------------- Progress Calculation Effect ---------------------- //
  useEffect(() => {
    const total = currentQuestionFlow.length;
    const answered = currentQuestionFlow.filter(q => answers[q.id]).length;

    const percent = total === 0 ? 0 : Math.round((answered / total) * 100);
    setProgress(percent);
  }, [answers, currentQuestionFlow]);


  // ---------------------- RENDER ----------------------
  return (
    <div className="Pump_Selction_Tool_Container">
      <h1>Pump Selector Tool</h1>
      <button className="Pump_selection_Reset_Button" onClick={resetSelection}>
        Reset Selection
      </button>
      {/* Vertical Progress Bar */}
      <div className="progress-wrapper">
        <div className="progress-vertical-container">
          <motion.div
            className="progress-vertical-fill"
            initial={{ height: "0%" }}
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </div>



      {!allAnswered ? (
        <div
          className="questions-container"
          style={{
            scrollBehavior: "smooth", 
          }}
        >
          <AnimatePresence mode="wait">
            {currentQuestionFlow.map((question, index) => (
              <motion.div
                key={question.id}
                variants={fadeVariant}
                initial="hidden"
                animate={
                  visibleQuestions.includes(index) ? "visible" : "hidden"
                }
                exit="exit"
                ref={(el) => (questionRefs.current[index] = el)}
                data-index={index}
              >
                <SelectionTool
                  question={question}
                  onAnswer={handleAnswer}
                  currentAnswer={answers[question.id]}
                  goToPreviousStep={goToPreviousStep}
                  canGoBack={index > 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="Pump_selection_Complete">Selection Complete!</h2>
          {filteredPumps.length === 0 ? (
            <p>No pumps match your criteria. Try adjusting your selections.</p>
          ) : (
            <ProductList pumps={filteredPumps}/>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default PumpSelectionTool;