import React, { useEffect, useState } from "react";
import "./RegisteredPumps.css";
import { useNavigate } from "react-router-dom";

export const RegisteredPumps = () => {
  const [newPumpWarranty, setNewPumpWarranty] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const ApiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const navigate = useNavigate();

  const getAllPump = () => {
    fetch(ApiUrl + "/pumpwarranty")
      .then((res) => res.json())
      .then((res) => setNewPumpWarranty(res));
  };

  useEffect(() => {
    getAllPump();
  }, []);

  const handleSearch = () => {
    setHasSearched(true);
  };

  // 🔍 Filter pumps by pump model or invoice number
  const filteredPumps = newPumpWarranty.filter((p) =>
    p.pumpModel?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.invoiceNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDaysRemaining = (expiryDateString) => {
    if (!expiryDateString) return 0;
    const expiry = new Date(expiryDateString);
    const today = new Date();
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="WP_PageContainer">
      <div className="WP_Header">
        <div className="WP_HeaderText">
          <h1 className="WP_Title">Warranty Status<br/>& Registration</h1>
          <p className="WP_Subtitle">
            Access real-time technical ledgers and verify service coverage for industrial pump assets globally.
          </p>
        </div>
        <button
          type="button"
          className="WP_RegisterBtn"
          onClick={() => navigate("/warranty-registration")}
        >
          Register New Pump Warranty
        </button>
      </div>

      <div className="WP_SearchWrapper">
        <div className="WP_SearchContainer">
          <svg className="WP_SearchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="WP_SearchInput"
            placeholder="Enter Serial Number or Pump ID (e.g. 701074)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setHasSearched(false);
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="WP_SearchButton" onClick={handleSearch}>Search</button>
        </div>
      </div>

      {hasSearched && searchTerm.trim() !== "" && (
        <div className="WP_ResultsContainer">
          {filteredPumps.length > 0 ? (
            filteredPumps.map((pump, index) => {
              const daysRemaining = getDaysRemaining(pump.warrantyExpiry);
              const isActive = daysRemaining > 0;
              const expiryDateObj = pump.warrantyExpiry ? new Date(pump.warrantyExpiry) : null;

              return (
                <div key={index} className="WP_Card">
                  <div className="WP_CardHeader">
                    <div className="WP_CardTags">
                      <span className={`WP_CardBadge ${isActive ? 'WP_BadgeActive' : 'WP_BadgeExpired'}`}>
                        {isActive ? 'ACTIVE WARRANTY' : 'WARRANTY EXPIRED'}
                      </span>
                      <div className="WP_CardStatus">
                        <div className="WP_CardStatusDot"></div>
                        <div className="WP_CardStatusText">
                          <span>Warranty Period:</span>
                          <strong>{isActive ? `${daysRemaining} Days Remaining` : 'Warranty Expired'}</strong>
                        </div>
                      </div>
                    </div>
                    
                    {expiryDateObj && (
                      <div className="WP_ExpiryBox">
                        <span className="WP_ExpiryLabel">EXPIRES ON</span>
                        <strong className="WP_ExpiryYear">{expiryDateObj.getFullYear()}</strong>
                        <span className="WP_ExpiryMD">
                          {String(expiryDateObj.getMonth() + 1).padStart(2, '0')}-{String(expiryDateObj.getDate()).padStart(2, '0')}
                        </span>
                      </div>
                    )}
                  </div>

                  <h2 className="WP_PumpTitle">{pump.pumpName || 'Industrial Pump'}</h2>

                  <div className="WP_DetailsGrid">
                    <div className="WP_DetailItem">
                      <span className="WP_DetailLabel">PUMP MODEL</span>
                      <strong className="WP_DetailValue">{pump.pumpModel || '-'}</strong>
                    </div>
                    <div className="WP_DetailItem">
                      <span className="WP_DetailLabel">INVOICE NUMBER</span>
                      <strong className="WP_DetailValue">{pump.invoiceNo || '-'}</strong>
                    </div>
                    <div className="WP_DetailItem">
                      <span className="WP_DetailLabel">REGISTRATION DATE</span>
                      <strong className="WP_DetailValue">{formatDate(pump.invoiceDate) || '-'}</strong>
                    </div>
                    <div className="WP_DetailItem">
                      <span className="WP_DetailLabel">COVERAGE TIER</span>
                      <strong className="WP_DetailValue">{pump.warrantyYear ? `${pump.warrantyYear} Year` : '-'}</strong>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
             <div className="WP_Card" style={{textAlign: "center", padding: "40px"}}>
               <p style={{color: "#64748b", margin: 0}}>No pump details found for this search.</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
};
