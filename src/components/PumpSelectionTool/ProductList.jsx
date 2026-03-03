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
            {pump.waterSource && (
              <li>
                <strong>Water Source:</strong>{" "}
                <span>
                  {getFilteredValue(
                    pump.waterSource,
                    selectedAnswers?.agricultureUse_waterSource
                      ? 'agricultureUse_waterSource'
                      : selectedAnswers?.commercialUse_waterSource
                      ? 'commercialUse_waterSource'
                      : 'domesticUse_waterSource'
                  )}
                </span>
              </li>
            )}
            {pump.installLocation && (
              <li>
                <strong>Install Location:</strong>{" "}
                <span>
                  {getFilteredValue(
                    pump.installLocation,
                    selectedAnswers?.agricultureUse_borewell_installLocation
                      ? 'agricultureUse_borewell_installLocation'
                      : selectedAnswers?.agricultureUse_openwell_installLocation
                      ? 'agricultureUse_openwell_installLocation'
                      : selectedAnswers?.commercialUse_borewell_installLocation
                      ? 'commercialUse_borewell_installLocation'
                      : selectedAnswers?.commercialUse_openwell_installLocation
                      ? 'commercialUse_openwell_installLocation'
                      : selectedAnswers?.domesticUse_openwell_installLocation
                      ? 'domesticUse_openwell_installLocation'
                      : selectedAnswers?.domesticUse_borewell_installLocation // Added this line
                      ? 'domesticUse_borewell_installLocation'
                      : null
                  )}
                </span>
              </li>
            )}
            {pump.installLocationType && <li><strong>Install Location Type:</strong> <span>{pump.installLocationType.replace(/_/g, ' ')}</span></li>}
            {pump.headMin && <li><strong>Head:</strong> <span>{pump.headMin}-{pump.headMax} M</span></li>}
            {pump.lpmMin && <li><strong>LPM:</strong> <span>{pump.lpmMin}-{pump.lpmMax} L/Min</span></li>}
            {/* {pump.deliverySize && <li><strong>Delivery Size:</strong> <span>{getFilteredValue(pump.deliverySize, 'deliverySize')}</span></li>} */}
            {pump.numberofSB && <li><strong>No bathrooms:</strong> <span>{getFilteredValue(pump.numberofSB, 'numberofSB')}</span></li>}
            {pump.numberofSBS && <li><strong>Outlets Used Simultaneously:</strong> <span>{getFilteredValue(pump.numberofSBS, 'numberofSBS')}</span></li>}
            {pump.pumpHp && <li><strong>Pump HP:</strong> <span>{getFilteredValue(pump.pumpHp, 'pumpHp')}</span></li>}
            {pump.pumpTankCapacity && <li><strong>Pump Tank Capacity:</strong> <span>{getFilteredValue(pump.pumpTankCapacity, 'pumpTankCapacity')}</span></li>}
            {/* Phase Display */}
            {pump.phase && (
                <li>
                  <strong>Phase:</strong>{" "}
                  <span>
                    {getFilteredValue(
                      pump.phase,
                      selectedAnswers?.commercialUse_borewell_submersible_phase || 
                      selectedAnswers?.commercialUse_borewell_surface_phase || 
                      selectedAnswers?.agricultureUse_borewell_submersible_powersource ||
                      selectedAnswers?.domesticUse_borewell_surface_phase || 
                      'domesticUse_borewell_submersible_phase'
                    )?.replace(/_/g, ' ')}
                  </span>
                </li>
              )}

            {/* Sand or Silt Display */}
            {/* Sand or Silt Display */}
            {pump.sandorsilt && (
              <li>
                <strong>Sand or Silt:</strong>{" "}
                <span>
                  {getFilteredValue(
                    pump.sandorsilt, 
                    selectedAnswers?.commercialUse_borewell_submersible_sand_or_silt_1phase ||
                    selectedAnswers?.commercialUse_borewell_submersible_sand_or_silt_3phase ||
                    selectedAnswers?.domesticUse_borewell_submersible_sand_or_silt_1phase ||
                    selectedAnswers?.domesticUse_borewell_submersible_sand_or_silt_3phase
                  )?.replace(/_/g, ' ')}
                </span>
              </li>
            )}

            {/* Borewell Size Display */}
            {(pump.deliverySize || pump.borewellSize) && (
                <li>
                  <strong>{pump.deliverySize ? 'Delivery Size' : 'Borewell Size'}:</strong>{" "}
                  <span>
                    {getFilteredValue(
                      pump.deliverySize || pump.borewellSize,
                      pump.deliverySize
                        ? selectedAnswers?.domesticUse_openwell_submerged_deliverySize
                          ? 'domesticUse_openwell_submerged_deliverySize'
                          : 'domesticUse_openwell_surface_deliverySize'
                        : selectedAnswers?.commercialUse_borewell_submersible_borewellSize_1phase
                        ? 'commercialUse_borewell_submersible_borewellSize_1phase'
                        : selectedAnswers?.commercialUse_borewell_submersible_borewellSize_3phase
                        ? 'commercialUse_borewell_submersible_borewellSize_3phase'
                        : selectedAnswers?.domesticUse_borewell_submersible_borewellSize_1phase // Added
                        ? 'domesticUse_borewell_submersible_borewellSize_1phase'
                        : 'domesticUse_borewell_submersible_borewellSize_3phase' // Added
                    )}
                  </span>
                </li>
              )}

            {/* Add more pump specific details here */}
          </ul>

          <button className="view-details-button">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
