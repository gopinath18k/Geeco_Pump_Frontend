import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPump.css";

export const RegisterPump = () => {
  const [pumpName, setPumpName] = useState("");
  const [pumpModel, setPumpModel] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [warrantyYear, setWarrantyYear] = useState("");
  const [warrantyExpiry, setWarrantyExpiry] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const ApiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const navigate = useNavigate();

  // Expiry calculation
  const calculateExpiry = (date, year) => {
    if (date && year) {
      const newDate = new Date(date);
      newDate.setFullYear(newDate.getFullYear() + Number(year));
      return newDate.toISOString().split("T")[0];
    }
    return "";
  };

  const handleInvoiceDateChange = (e) => {
    const date = e.target.value;
    setInvoiceDate(date);
    setWarrantyExpiry(calculateExpiry(date, warrantyYear));
  };

  const handleWarrantyYearChange = (e) => {
    const year = e.target.value;
    setWarrantyYear(year);
    setWarrantyExpiry(calculateExpiry(invoiceDate, year));
  };

  const handleSubmit = () => {
    if (
      pumpName.trim() !== "" &&
      pumpModel.trim() !== "" &&
      invoiceNo.trim() !== "" &&
      invoiceDate.trim() !== "" &&
      warrantyYear !== ""
    ) {
      fetch(ApiUrl + "/pumpwarranty", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          pumpName,
          pumpModel,
          invoiceNo,
          invoiceDate,
          warrantyYear,
          warrantyExpiry,
        }),
      }).then((res) => {
        if (res.ok) {
          setSuccessMessage("Pump Warranty Added Successfully!");
          setPumpName("");
          setPumpModel("");
          setInvoiceNo("");
          setInvoiceDate("");
          setWarrantyYear("");
          setWarrantyExpiry("");
          setTimeout(() => setSuccessMessage(""), 3000);
        } else {
          alert("Error: Unable to register pump warranty");
        }
      });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="RegisterPump__container">
      <h1 className="RegisterPump__Heading">Pump Warranty Registration</h1>
      {/* ✅ Button to navigate */}
      <button
        type="button"
        className="RegisterPump__check-Btn"
        onClick={() => navigate("/registered-pumps")}
      >
        Check your pump warranty
      </button>
      <h3 className="RegisterPump__SubHeading">Register Pump</h3>

      {successMessage && (
        <div className="RegisterPump__success-message">
          {successMessage}
        </div>
      )}

      <form className="RegisterPump__form-grid">
        <div className="RegisterPump__form-row">
          <div className="RegisterPump__form-group">
            <label className="RegisterPump__label">Pump Name</label>
            <input
              type="text"
              className="RegisterPump__input"
              value={pumpName}
              onChange={(e) => setPumpName(e.target.value)}
            />
          </div>
          <div className="RegisterPump__form-group">
            <label className="RegisterPump__label">Pump Model</label>
            <input
              type="text"
              className="RegisterPump__input"
              value={pumpModel}
              onChange={(e) => setPumpModel(e.target.value)}
            />
          </div>
        </div>

        <div className="RegisterPump__form-row">
          <div className="RegisterPump__form-group">
            <label className="RegisterPump__label">Invoice Number</label>
            <input
              type="text"
              className="RegisterPump__input"
              value={invoiceNo}
              onChange={(e) => setInvoiceNo(e.target.value)}
            />
          </div>
          <div className="RegisterPump__form-group">
            <label className="RegisterPump__label">Invoice Date</label>
            <input
              type="date"
              className="RegisterPump__input"
              value={invoiceDate}
              onChange={handleInvoiceDateChange}
            />
          </div>
        </div>

        <div className="RegisterPump__form-row">
          <div className="RegisterPump__form-group">
            <label className="RegisterPump__label">Warranty Year</label>
            <select
              className="RegisterPump__select"
              value={warrantyYear}
              onChange={handleWarrantyYearChange}
            >
              <option value="">Select warranty</option>
              <option value={1}>1 Year</option>
              <option value={2}>2 Years</option>
              <option value={3}>3 Years</option>
            </select>
          </div>
          <div className="RegisterPump__form-group">
            <label className="RegisterPump__label">Warranty Expiry</label>
            <input
              type="text"
              className="RegisterPump__input"
              value={warrantyExpiry}
              readOnly
            />
          </div>
        </div>

        <button
          type="button"
          className="RegisterPump__submit-Btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      
    </div>
  );
};
