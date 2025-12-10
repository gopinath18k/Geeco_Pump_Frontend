// src/components/ProductList.jsx
import React from 'react';
import "./ProductList.css";

function ProductList({ pumps, selectedAnswers }) {
  if (!pumps || pumps.length === 0) {
    return (
      <div className="no-pumps-message">
        <p>No pumps found matching your criteria. Try adjusting your selections.</p>
      </div>
    );
  }

  const getFilteredValue = (pumpValue, questionId) => {
    if (!pumpValue) return null;

    const selectedValue = selectedAnswers?.[questionId];

    if (Array.isArray(pumpValue)) {
      // Only keep the selected value(s)
      if (selectedValue) {
        return pumpValue.filter(val => 
          val.toLowerCase().replace(/ /g, "_") === String(selectedValue).toLowerCase().replace(/ /g, "_")
        ).join(", ");
      }
      return pumpValue.join(", ");
    }

    // For strings or numbers, just return the value
    return pumpValue;
  };

  return (
    <div className={`pumps-grid ${pumps.length > 3 ? 'carousel' : ''}`}>
      {pumps.map(pump => (
        <div key={pump.id} className="pump-cards">
          <img src={pump.imageUrl} alt={pump.name} />
          <h3>{pump.name}</h3>

          <ul className="specs-list">
            <li>
              <strong>Application:</strong>{" "}
              <span>{getFilteredValue(pump.application, 'applicationType')}</span>
            </li>
            {pump.mainPurpose && <li><strong>Main Purpose:</strong> <span>{pump.mainPurpose.replace(/_/g, ' ')}</span></li>}
            <li><strong>Water Source:</strong> <span>{pump.waterSource}</span></li>
            {pump.installLocation && <li><strong>Install Location:</strong> <span>{pump.installLocation.replace(/_/g, ' ')}</span></li>}
            {pump.installLocationType && <li><strong>Install Location Type:</strong> <span>{pump.installLocationType.replace(/_/g, ' ')}</span></li>}
            {pump.headMin && <li><strong>Head:</strong> <span>{pump.headMin}-{pump.headMax} m</span></li>}
            {pump.lpmMin && <li><strong>LPM:</strong> <span>{pump.lpmMin}-{pump.lpmMax} L/min</span></li>}
            {pump.deliverySize && <li><strong>Delivery Size:</strong> <span>{getFilteredValue(pump.deliverySize, 'deliverySize')}</span></li>}
            {pump.numberofSB && <li><strong>No bathrooms:</strong> <span>{getFilteredValue(pump.numberofSB, 'numberofSB')}</span></li>}
            {pump.numberofSBS && <li><strong>Outlets Used Simultaneously:</strong> <span>{getFilteredValue(pump.numberofSBS, 'numberofSBS')}</span></li>}
            {pump.pumpHp && <li><strong>Pump HP:</strong> <span>{getFilteredValue(pump.pumpHp, 'pumpHp')}</span></li>}
            {pump.pumpTankCapacity && <li><strong>Pump Tank Capacity:</strong> <span>{getFilteredValue(pump.pumpTankCapacity, 'pumpTankCapacity')}</span></li>}
            {pump.phase && <li><strong>Phase:</strong> <span>{getFilteredValue(pump.phase, 'domesticUse_borewell_submersible_phase')?.replace(/_/g, ' ')}</span></li>}
            {pump.sandorsilt && <li><strong>Sand or Silt:</strong> <span>{getFilteredValue(pump.sandorsilt, 'domesticUse_borewell_submersible_sand_or_silt')?.replace(/_/g, ' ')}</span></li>}
            {pump.borewellSize && <li><strong>Borewell Size:</strong> <span>{getFilteredValue(pump.borewellSize, 'domesticUse_borewell_submersible_borewellSize')}</span></li>}

            {/* Add more pump specific details here */}
          </ul>

          <button className="view-details-button">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
