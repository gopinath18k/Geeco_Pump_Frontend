// src/components/ProductList.jsx
import React from 'react';
import "./ProductList.css";

function ProductList({ pumps }) {
  if (!pumps || pumps.length === 0) {
    return (
      <div className="no-pumps-message">
        <p>No pumps found matching your criteria. Try adjusting your selections.</p>
      </div>
    );
  }

  return (
    <div className={`pumps-grid ${pumps.length > 3 ? 'carousel' : ''}`}>
      {pumps.map(pump => (
        <div key={pump.id} className="pump-cards" >
          <img src={pump.imageUrl} alt={pump.name} />
          <h3>{pump.name}</h3>
          {/* <p>{pump.description}</p> */}
          <ul className="specs-list">
            <li><strong>Application:</strong> <span>{pump.application}</span></li>
            <li><strong>Water Source:</strong> <span>{pump.waterSource}</span></li>
            <li><strong>Installation:</strong> <span>{pump.installLocation?.replace(/_/g, ' ') || 'N/A'}</span></li>
            {pump.headMin && <li><strong>Head:</strong> <span>{pump.headMin}-{pump.headMax} m</span></li>}
            {pump.dischargeMin && <li><strong>Discharge:</strong> <span>{pump.dischargeMin}-{pump.dischargeMax} LPM</span></li>}
            {pump.deliverySize && <li><strong>Delivery Size:</strong> <span>{pump.deliverySize.join(', ')}</span></li>}
            {pump.phase && <li><strong>Phase:</strong> <span>{pump.phase.replace(/_/g, ' ')}</span></li>}
            {pump.depthMin && <li><strong>Depth:</strong> <span>{pump.depthMin}-{pump.depthMax} m</span></li>}
            {pump.lpmMin && <li><strong>LPM:</strong> <span>{pump.lpmMin}-{pump.lpmMax} L/min</span></li>}
            {pump.borewellSize && <li><strong>Borewell Size:</strong> <span>{pump.borewellSize.replace(/_/g, '')}</span></li>}
            {pump.totalHeadMin && <li><strong>Total Head:</strong> <span>{pump.totalHeadMin}-{pump.totalHeadMax} m</span></li>}

            {/* Add more pump specific details here based on your product data */}
          </ul>
          <button className="view-details-button">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;