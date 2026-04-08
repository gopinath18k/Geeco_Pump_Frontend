export const filterPumps = (answers, pumps) => {
    let tempPumps = [...pumps];

     // Domestic Question //

    if (answers.applicationType) {
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.application)) {
          return pump.application.includes(answers.applicationType);
        }
        return pump.application === answers.applicationType;
      });
    }



    if (answers.domesticUse_waterSource) {
      const selectedSource = answers.domesticUse_waterSource
        .toLowerCase()
        .trim();

      tempPumps = tempPumps.filter(pump =>
        Array.isArray(pump.waterSource)
          ? pump.waterSource.some(
              source => source.toLowerCase().trim() === selectedSource
            )
          : pump.waterSource?.toLowerCase().trim() === selectedSource
      );
    }

    // Domestic Question SumpTank surface//

    

    if (answers.domesticUse_sumpTank_installLocation === 'Surface SumpTank') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Surface SumpTank');
        }
        return pump.installLocation === 'Surface SumpTank';
      });

     

      if (answers.domesticUse_sumpTank_surface_head) {
        const headValue = parseInt(answers.domesticUse_sumpTank_surface_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.domesticUse_sumpTank_surface_discharge) {
        const dischargeValue = parseInt(answers.domesticUse_sumpTank_surface_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      

        if (answers.domesticUse_sumpTank_surface_deliverySize) {
      tempPumps = tempPumps.filter(pump => {
        const selectedSize = answers.domesticUse_sumpTank_surface_deliverySize;

    
        if (pump.deliverySize) {
          if (Array.isArray(pump.deliverySize)) {
            if (pump.deliverySize.includes(selectedSize)) return true;
          } else {
            if (pump.deliverySize === selectedSize) return true;
          }
        }

        
        if (pump.borewellSize) {
          if (Array.isArray(pump.borewellSize)) {
            if (pump.borewellSize.includes(selectedSize)) return true;
          } else {
            if (pump.borewellSize === selectedSize) return true;
          }
        }

        
        return false;
      });
    }
    }

    // Domestic Question SumpTank submerged//


    if (answers.domesticUse_sumpTank_installLocation === 'Submerged SumpTank') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Submerged SumpTank');
        }
        return pump.installLocation === 'Submerged SumpTank';
      });

     

      if (answers.domesticUse_sumpTank_submerged_head) {
        const headValue = parseInt(answers.domesticUse_sumpTank_submerged_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.domesticUse_sumpTank_submerged_discharge) {
        const dischargeValue = parseInt(answers.domesticUse_sumpTank_submerged_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      if (answers.domesticUse_sumpTank_submerged_deliverySize) {
      tempPumps = tempPumps.filter(pump => {
        const selectedSize = answers.domesticUse_sumpTank_submerged_deliverySize;

    
        if (pump.deliverySize) {
          if (Array.isArray(pump.deliverySize)) {
            if (pump.deliverySize.includes(selectedSize)) return true;
          } else {
            if (pump.deliverySize === selectedSize) return true;
          }
        }

        
        if (pump.borewellSize) {
          if (Array.isArray(pump.borewellSize)) {
            if (pump.borewellSize.includes(selectedSize)) return true;
          } else {
            if (pump.borewellSize === selectedSize) return true;
          }
        }

        
        return false;
      });
    }
    }

    // Domestic Question Openwell surface//

    // --- Domestic Question Openwell Surface ---
    
    

     if (answers.domesticUse_openwell_installLocation === 'Surface Openwell') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Surface Openwell');
        }
        return pump.installLocation === 'Surface Openwell';
      });

     

      if (answers.domesticUse_openwell_surface_head) {
        const headValue = parseInt(answers.domesticUse_openwell_surface_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.domesticUse_openwell_surface_discharge) {
        const dischargeValue = parseInt(answers.domesticUse_openwell_surface_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      if (answers.domesticUse_openwell_surface_deliverySize) {
          tempPumps = tempPumps.filter(pump => {
            if (!pump.deliverySize) return false;  
            if (Array.isArray(pump.deliverySize)) {
              return pump.deliverySize.includes(answers.domesticUse_openwell_surface_deliverySize);
            }
            return pump.deliverySize === answers.domesticUse_openwell_surface_deliverySize;  
          });
        }
    }

    // --- Domestic Question Openwell Submerged --- //

    

    if (answers.domesticUse_openwell_installLocation === 'Submersible Openwell') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Submersible Openwell');
        }
        return pump.installLocation === 'Submersible Openwell';
      });

     

      if (answers.domesticUse_openwell_submerged_head) {
        const headValue = parseInt(answers.domesticUse_openwell_submerged_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.domesticUse_openwell_submerged_discharge) {
        const dischargeValue = parseInt(answers.domesticUse_openwell_submerged_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      if (answers.domesticUse_openwell_submerged_deliverySize) {
          tempPumps = tempPumps.filter(pump => {
            if (!pump.deliverySize) return false;  
            if (Array.isArray(pump.deliverySize)) {
              return pump.deliverySize.includes(answers.domesticUse_openwell_submerged_deliverySize);
            }
            return pump.deliverySize === answers.domesticUse_openwell_submerged_deliverySize;  
          });
        }
    }

    


      // Domestic Question Borewell //

    // --- Domestic Question Borewell Surface --- //

     if (answers.domesticUse_borewell_installLocation === 'Surface Borewell') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Surface Borewell');
        }
        return pump.installLocation === 'Surface Borewell';
      });

     

      if (answers.domesticUse_borewell_surface_phase) {
        tempPumps = tempPumps.filter(
          pump => pump.phase === answers.domesticUse_borewell_surface_phase
        );
      }

      // if (answers.domesticUse_borewell_surface_depth) {
      //   const depthValue = parseFloat(answers.domesticUse_borewell_surface_depth);
      //   tempPumps = tempPumps.filter(
      //     pump => depthValue >= pump.depthMin && depthValue <= pump.depthMax
      //   );
      // }

        const headValue = parseFloat(
          answers.domesticUse_borewell_surface_head_1phase ||
          answers.domesticUse_borewell_surface_head_3phase
        );
        if (!isNaN(headValue)) {
          tempPumps = tempPumps.filter(
            pump => headValue >= pump.headMin && headValue <= pump.headMax
          );
        }

        
        const dischargeValue = parseFloat(
          answers.domesticUse_borewell_surface_discharge_1phase ||
          answers.domesticUse_borewell_surface_discharge_3phase
        );
        if (!isNaN(dischargeValue)) {
          tempPumps = tempPumps.filter(
            pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
          );
        }


      
    }


    
    // if (answers.domesticUse_borewell_installLocation) {
    //   tempPumps = tempPumps.filter(
    //     pump => pump.installLocation === answers.domesticUse_borewell_installLocation
    //   );
    // }
    


    // --- Domestic Question Borewell Submersible  --- //

    if (answers.domesticUse_borewell_installLocation === 'Submersible Borewell') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Submersible Borewell');
        }
        return pump.installLocation === 'Submersible Borewell';
      });

     

      if (answers.domesticUse_borewell_submersible_phase) {
        tempPumps = tempPumps.filter(
          pump => pump.phase === answers.domesticUse_borewell_submersible_phase
        );
      }

  
        const borewellSize =
          answers.domesticUse_borewell_submersible_borewellSize_1phase ||
          answers.domesticUse_borewell_submersible_borewellSize_3phase;

        if (borewellSize) {
          tempPumps = tempPumps.filter(pump => {
            const size = pump.borewellSize || pump.deliverySize;
            if (!size) return false;
            
            if (Array.isArray(size)) return size.includes(borewellSize);
            return size === borewellSize;
          });
        }

        const sandSilt =
          answers.domesticUse_borewell_submersible_sand_or_silt_1phase ||
          answers.domesticUse_borewell_submersible_sand_or_silt_3phase;
        if (sandSilt) {
          tempPumps = tempPumps.filter(pump => pump.sandorsilt === sandSilt);
        }

        
        const headValue = parseFloat(
          answers.domesticUse_borewell_submersible_head_1phase ||
          answers.domesticUse_borewell_submersible_head_3phase
        );
        if (!isNaN(headValue)) {
          tempPumps = tempPumps.filter(
            pump => headValue >= pump.headMin && headValue <= pump.headMax
          );
        }

        
        const dischargeValue = parseFloat(
          answers.domesticUse_borewell_submersible_discharge_1phase ||
          answers.domesticUse_borewell_submersible_discharge_3phase
        );
        if (!isNaN(dischargeValue)) {
          tempPumps = tempPumps.filter(
            pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
          );
         }


      
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

    
   
    if (answers.agricultureUse_openwell_powersource) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.agricultureUse_openwell_powersource
      );
    }
    
    if (answers.agricultureUse_openwell_installLocation === 'Surface Openwell') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Surface Openwell');
        }
        return pump.installLocation === 'Surface Openwell';
      });

     

      if (answers.agricultureUse_openwell_installLocation_type) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocationType === answers.agricultureUse_openwell_installLocation_type
      );
    }
     if (answers.agricultureUse_openwell_surface_irrigation_head) {
      const headValue = parseFloat(answers.agricultureUse_openwell_surface_irrigation_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.agricultureUse_openwell_surface_irrigation_discharge) {
      const dischargeValue = parseFloat(answers.agricultureUse_openwell_surface_irrigation_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }
    if (answers.agricultureUse_openwell_surface_irrigation_borewellSize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.agricultureUse_openwell_surface_irrigation_borewellSize)
      );
    }
    }
    





    //--------- Agriculture Borewell Section Question -------------//

// -------------------- AGRICULTURE → BOREWELL -------------------- //

    if (answers.agricultureUse_waterSource) {
      const selectedSource = answers.agricultureUse_waterSource
        .toLowerCase()
        .trim();

      tempPumps = tempPumps.filter(pump =>
        Array.isArray(pump.waterSource)
          ? pump.waterSource.some(
              source => source.toLowerCase().trim() === selectedSource
            )
          : pump.waterSource?.toLowerCase().trim() === selectedSource
      );
    }

    
    if (answers.agricultureUse_borewell_installLocation_type) {
      const selected = answers.agricultureUse_borewell_installLocation_type
        .toLowerCase()
        .trim();

      tempPumps = tempPumps.filter(
        pump =>
          pump.installLocationType?.toLowerCase().trim() === selected
      );
    }

    
    if (answers.agricultureUse_borewell_installLocation) {
        const selectedLocation =
          answers.agricultureUse_borewell_installLocation
            .toLowerCase()
            .trim();

        tempPumps = tempPumps.filter(pump => {

          if (!pump.installLocation) return false;

          
          if (Array.isArray(pump.installLocation)) {
            return pump.installLocation.some(
              loc => loc.toLowerCase().trim() === selectedLocation
            );
          }

          
          return pump.installLocation.toLowerCase().trim() === selectedLocation;
        });
      }

    // -------------------- SUBMERSIBLE BOREWELL -------------------- //

    if (
      answers.agricultureUse_borewell_installLocation ===
      'Submersible Borewell'
    ) {

      
      if (answers.agricultureUse_borewell_deliverySize) {
        const selectedDelivery =
          answers.agricultureUse_borewell_deliverySize
            .toLowerCase()
            .trim();

        tempPumps = tempPumps.filter(pump =>
          pump.deliverySize?.toLowerCase().trim() === selectedDelivery
        );
      }

      
      if (answers.agricultureUse_borewell_submersible_sand_or_silt) {
        tempPumps = tempPumps.filter(
          pump =>
            pump.sandorsilt ===
            answers.agricultureUse_borewell_submersible_sand_or_silt
        );
      }

      
      if (answers.agricultureUse_borewell_submersible_powersource) {
        tempPumps = tempPumps.filter(
          pump =>
            pump.phase ===
            answers.agricultureUse_borewell_submersible_powersource
        );
      }

      
      const headValue =
        parseFloat(
          answers.agricultureUse_borewell_submersible_head_1phase ||
          answers.agricultureUse_borewell_submersible_head_3phase
        );

      if (!isNaN(headValue)) {
        tempPumps = tempPumps.filter(
          pump =>
            headValue >= pump.headMin &&
            headValue <= pump.headMax
        );
      }

      
      const dischargeValue =
        parseFloat(
          answers.agricultureUse_borewell_submersible_discharge_1phase ||
          answers.agricultureUse_borewell_submersible_discharge_3phase
        );

      if (!isNaN(dischargeValue)) {
        tempPumps = tempPumps.filter(
          pump =>
            dischargeValue >= pump.lpmMin &&
            dischargeValue <= pump.lpmMax
        );
      }
    }

    // -------------------- SURFACE BOREWELL -------------------- //
    
    if (
      answers.agricultureUse_borewell_installLocation ===
      'Surface Borewell'
    ) {

      
      

      
      if (answers.agricultureUse_borewell_surface_powersource) {
        tempPumps = tempPumps.filter(
          pump =>
            pump.phase ===
            answers.agricultureUse_borewell_surface_powersource
        );
      }

      
      const headValue =
        parseFloat(
          answers.agricultureUse_borewell_surface_head_1phase ||
          answers.agricultureUse_borewell_surface_head_3phase
        );

      if (!isNaN(headValue)) {
        tempPumps = tempPumps.filter(
          pump =>
            headValue >= pump.headMin &&
            headValue <= pump.headMax
        );
      }

      
      const dischargeValue =
        parseFloat(
          answers.agricultureUse_borewell_surface_discharge_1phase ||
          answers.agricultureUse_borewell_surface_discharge_3phase
        );

      if (!isNaN(dischargeValue)) {
        tempPumps = tempPumps.filter(
          pump =>
            dischargeValue >= pump.lpmMin &&
            dischargeValue <= pump.lpmMax
        );
      }
    }



    // -------------- Commercial / Industrial Pump Question ---------------- //

    

    if (answers.commercialUse_mainPurpose) {
      tempPumps = tempPumps.filter(pump => pump.mainPurpose === answers.commercialUse_mainPurpose);
    }
    if (answers.commercialUse_waterSource) {
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.waterSource)) {
          return pump.waterSource.includes(answers.commercialUse_waterSource);
        }
        return pump.waterSource === answers.commercialUse_waterSource;
      });
    }

    // Commercial / Industrial Question SumpTank Surface//


     if (answers.commercialUse_sumpTank_installLocation === 'Surface SumpTank') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Surface SumpTank');
        }
        return pump.installLocation === 'Surface SumpTank';
      });

     

      if (answers.commercialUse_sumpTank_surface_head) {
        const headValue = parseInt(answers.commercialUse_sumpTank_surface_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.commercialUse_sumpTank_surface_discharge) {
        const dischargeValue = parseInt(answers.commercialUse_sumpTank_surface_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      if (answers.commercialUse_sumpTank_surface_deliverySize) {
          tempPumps = tempPumps.filter(pump => {
            if (!pump.deliverySize) return false;  
            if (Array.isArray(pump.deliverySize)) {
              return pump.deliverySize.includes(answers.commercialUse_sumpTank_surface_deliverySize);
            }
            return pump.deliverySize === answers.commercialUse_sumpTank_surface_deliverySize;  
          });
        }
    }


    // Commercial / Industrial Question SumpTank submerged//

    if (answers.commercialUse_sumpTank_installLocation === 'Submerged SumpTank') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Submerged SumpTank');
        }
        return pump.installLocation === 'Submerged SumpTank';
      });

     

      if (answers.commercialUse_sumpTank_submerged_head) {
        const headValue = parseInt(answers.commercialUse_sumpTank_submerged_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.commercialUse_sumpTank_submerged_discharge) {
        const dischargeValue = parseInt(answers.commercialUse_sumpTank_submerged_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      if (answers.commercialUse_sumpTank_submerged_deliverySize) {
          tempPumps = tempPumps.filter(pump => {
            if (!pump.deliverySize) return false;  
            if (Array.isArray(pump.deliverySize)) {
              return pump.deliverySize.includes(answers.commercialUse_sumpTank_submerged_deliverySize);
            }
            return pump.deliverySize === answers.commercialUse_sumpTank_submerged_deliverySize;  
          });
        }
    }

    

      // Commercial / Industrial Question Openwell surface //

    
    
    if (answers.commercialUse_openwell_installLocation === 'Surface Openwell') {

      
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Surface Openwell');
        }
        return pump.installLocation === 'Surface Openwell';
      });

     

      if (answers.commercialUse_openwell_surface_head) {
        const headValue = parseInt(answers.commercialUse_openwell_surface_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.commercialUse_openwell_surface_discharge) {
        const dischargeValue = parseInt(answers.commercialUse_openwell_surface_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      if (answers.commercialUse_openwell_surface_deliverySize) {
        tempPumps = tempPumps.filter(
          pump => pump.deliverySize.includes(
            answers.commercialUse_openwell_surface_deliverySize
          )
        );
      }
    }


    // Commercial / Industrial Question Openwell submerged//

    if (answers.commercialUse_openwell_installLocation === 'Submersible Openwell') {
      tempPumps = tempPumps.filter(pump => {
        if (Array.isArray(pump.installLocation)) {
          return pump.installLocation.includes('Submersible Openwell');
        }
        return pump.installLocation === 'Submersible Openwell';
      });
      if (answers.commercialUse_openwell_submerged_head) {
        const headValue = parseInt(answers.commercialUse_openwell_submerged_head);
        tempPumps = tempPumps.filter(
          pump => headValue >= pump.headMin && headValue <= pump.headMax
        );
      }

      if (answers.commercialUse_openwell_submerged_discharge) {
        const dischargeValue = parseInt(answers.commercialUse_openwell_submerged_discharge);
        tempPumps = tempPumps.filter(
          pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
        );
      }

      if (answers.commercialUse_openwell_submerged_deliverySize) {
        tempPumps = tempPumps.filter(
          pump => pump.deliverySize.includes(answers.commercialUse_openwell_submerged_deliverySize)
        );
      }
    }


    // --- Commercial Question Borewell Surface --- //

if (answers.commercialUse_borewell_installLocation === 'Surface Borewell') {

  
  tempPumps = tempPumps.filter(pump => {
    if (!pump.installLocation) return false;
    if (Array.isArray(pump.installLocation)) {
      return pump.installLocation.includes('Surface Borewell');
    }
    return pump.installLocation === 'Surface Borewell';
  });

  
  if (answers.commercialUse_borewell_surface_phase) {
    tempPumps = tempPumps.filter(
      pump => pump.phase === answers.commercialUse_borewell_surface_phase
    );
  }

 
  const sandSilt =
    answers.commercialUse_borewell_submersible_sand_or_silt_1phase ||
    answers.commercialUse_borewell_submersible_sand_or_silt_3phase;
  if (sandSilt) {
    tempPumps = tempPumps.filter(pump => pump.sandorsilt === sandSilt);
  }

  
  const borewellSize =
    answers.commercialUse_borewell_submersible_borewellSize_1phase ||
    answers.commercialUse_borewell_submersible_borewellSize_3phase;
  if (borewellSize) {
    tempPumps = tempPumps.filter(pump => {
      const size = pump.borewellSize || pump.deliverySize;
      if (!size) return false;
      
      if (Array.isArray(size)) return size.includes(borewellSize);
      return size === borewellSize;
    });
  }

  
  const headValue = parseFloat(
    answers.commercialUse_borewell_surface_head_1phase ||
    answers.commercialUse_borewell_surface_head_3phase
  );
  if (!isNaN(headValue)) {
    tempPumps = tempPumps.filter(
      pump => headValue >= pump.headMin && headValue <= pump.headMax
    );
  }

  
  const dischargeValue = parseFloat(
    answers.commercialUse_borewell_surface_discharge_1phase ||
    answers.commercialUse_borewell_surface_discharge_3phase
  );
  if (!isNaN(dischargeValue)) {
    tempPumps = tempPumps.filter(
      pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
    );
  }
}
    
   


    // --- Commercial Question Borewell Submersible --- //

if (answers.commercialUse_borewell_installLocation === 'Submersible Borewell') {

  
  tempPumps = tempPumps.filter(pump => {
    if (!pump.installLocation) return false;
    if (Array.isArray(pump.installLocation)) {
      return pump.installLocation.includes('Submersible Borewell');
    }
    return pump.installLocation === 'Submersible Borewell';
  });

  
  if (answers.commercialUse_borewell_submersible_phase) {
    tempPumps = tempPumps.filter(
      pump => pump.phase === answers.commercialUse_borewell_submersible_phase
    );
  }

 
  const sandSilt =
    answers.commercialUse_borewell_submersible_sand_or_silt_1phase ||
    answers.commercialUse_borewell_submersible_sand_or_silt_3phase;
  if (sandSilt) {
    tempPumps = tempPumps.filter(pump => pump.sandorsilt === sandSilt);
  }

  
  const borewellSize =
    answers.commercialUse_borewell_submersible_borewellSize_1phase ||
    answers.commercialUse_borewell_submersible_borewellSize_3phase;
  if (borewellSize) {
    tempPumps = tempPumps.filter(pump => {
      const size = pump.borewellSize || pump.deliverySize;
      if (!size) return false;
      
      if (Array.isArray(size)) return size.includes(borewellSize);
      return size === borewellSize;
    });
  }

  
  const headValue = parseFloat(
    answers.commercialUse_borewell_submersible_head_1phase ||
    answers.commercialUse_borewell_submersible_head_3phase
  );
  if (!isNaN(headValue)) {
    tempPumps = tempPumps.filter(
      pump => headValue >= pump.headMin && headValue <= pump.headMax
    );
  }

  
  const dischargeValue = parseFloat(
    answers.commercialUse_borewell_submersible_discharge_1phase ||
    answers.commercialUse_borewell_submersible_discharge_3phase
  );
  if (!isNaN(dischargeValue)) {
    tempPumps = tempPumps.filter(
      pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
    );
  }
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

    

    

    return tempPumps;
};