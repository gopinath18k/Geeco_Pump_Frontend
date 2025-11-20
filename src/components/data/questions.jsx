// src/data/questions.js (Example for Domestic Use)
export const pumpSelectionQuestions = [
  {
    id: 'applicationType',
    question: 'What do you need the pump for?',
    options: [
      { id: 'Domestic', label: 'Domestic Use (Home, Garden, Water Tanks.)', nextSection: 'domesticUse' },
      { id: 'agricultural', label: 'Agricultural Use (Irrigation, Open Well, Borewell.)', nextSection: 'agriculturalUse' },
      { id: 'commercial', label: 'Commercial/Industrial Use (Utility Water Pumping, Car Wash, Pressure Boosting.)', nextSection: 'commercialUse' },
      { id: 'wastewater', label: 'Wastewater and Drainage Applications.', nextSection: 'wastewaterUse' },
    ],
  },
  {
    id: 'domesticUse_waterSource',
    question: 'What is the Water Source?',
    section: 'domesticUse', // This question belongs to the 'domesticUse' flow
    options: [
      { id: 'sumpTank', label: 'Sump/Tank', nextSection: 'domesticUse_sumpTank' },
      { id: 'openwell', label: 'Openwell (Well)', nextSection: 'domesticUse_openwell' },
      { id: 'Borewell', label: 'Borewell', nextSection: 'domesticUse_borewell' },
      { id: 'Pressure Boosting Application', label: 'Pressure Boosting Application', nextSection: 'domesticUse_pressure_boosting_application' },
    ],
  },

  // --- Sump/Tank branch for Domestic Use ---
  {
    id: 'domesticUse_sumpTank_installLocation',
    question: 'Where do you want to install the pump?',
    section: 'domesticUse_sumpTank',
    options: [
      { id: 'surface_sumpTank', label: 'Surface', nextSection: 'domesticUse_sumpTank_surface' },
      { id: 'submerged_sumpTank', label: 'Submerged in water', nextSection: 'domesticUse_sumpTank_submerged' },
    ],
  },
  // --- Surface installation for Sump/Tank ---
  {
    id: 'domesticUse_sumpTank_surface_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_sumpTank_surface',
    type: 'input', 
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_sumpTank_surface_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_sumpTank_surface',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_sumpTank_surface_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_sumpTank_surface',
    options: [
      { id: '1inch', label: '1"' },
      { id: '1.5inch', label: '1.5"' },
      { id: '2inch', label: '2"' },
      { id: '2.5inch', label: '2.5"' },
    ],
  },
  // --- Submerged installation for Sump/Tank (similar structure) --- //
  {
    id: 'domesticUse_sumpTank_submerged_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_sumpTank_submerged',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_sumpTank_submerged_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_sumpTank_submerged',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_sumpTank_submerged_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_sumpTank_submerged',
    options: [
      { id: '1inch_sub', label: '1"' },
      { id: '1.5inch_sub', label: '1.5"' },
      { id: '2inch_sub', label: '2"' },
      { id: '2.5inch_sub', label: '2.5"' },
    ],
  },

  // --- Open Well Section --- //

  // --- Sump/Tank branch for Domestic Use ---
  {
    id: 'domesticUse_openwell_installLocation',
    question: 'Where do you want to install the pump?',
    section: 'domesticUse_openwell',
    options: [
      { id: 'surface_openwell', label: 'Surface', nextSection: 'domesticUse_openwell_surface' },
      { id: 'submerged_openwell', label: 'Submerged in water', nextSection: 'domesticUse_openwell_submerged' },
    ],
  },

  // --- Surface installation for openwell ---
  {
    id: 'domesticUse_openwell_surface_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_openwell_surface',
    type: 'input', 
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_openwell_surface_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_openwell_surface',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_openwell_surface_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_openwell_surface',
    options: [
      { id: '1.5inch_op_s', label: '1.5"' },
      { id: '2inch_op_s', label: '2"' },
      { id: '2.5inch_op_s', label: '2.5"' },
    ],
  },

  // --- Submerged installation for openwell 
  
  {
    id: 'domesticUse_openwell_submerged_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_openwell_submerged',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_openwell_submerged_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_openwell_submerged',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_openwell_submerged_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_openwell_submerged',
    options: [
      { id: '1inch_op_sub', label: '1"' },
      { id: '1.5inch_op_sub', label: '1.5"' },
      { id: '2inch_sub', label: '2"' },
      { id: '2.5inch_sub', label: '2.5"' },
    ],
  },

// --- BoreWell Section --- //

// --- Borewell installation location --- //


{
  id: 'domesticUse_borewell_installLocation',
  question: 'Where do you want to install the pump?',
  section: 'domesticUse_borewell',
  options: [
    { id: 'Surface Borewell', label: 'Surface', nextSection: 'domesticUse_borewell_surface' },
    { id: 'Submersible Borewell', label: 'Inside the borewell (Submersible)', nextSection: 'domesticUse_borewell_submersible' },
  ],
},

// --- Surface Borewell Questions --- //

{
  id: 'domesticUse_borewell_surface_phase',
  question: 'Do you need a 1 phase or 3 phase design? (Single phase recommended for Household and Domestic applications)',
  section: 'domesticUse_borewell_surface',
  options: [
    { id: '1 Phase', label: '1 Phase', nextSection: 'domesticUse_borewell_surface_1phase' },
    { id: '3 Phase', label: '3 Phase', nextSection: 'domesticUse_borewell_surface_3phase' },
  ],
},

// --- Surface Borewell Single Phase Questions ---

{
  id: 'domesticUse_borewell_surface_depth',
  question: 'What is the total depth you want to draw water from the borewell? (in meters)',
  section: 'domesticUse_borewell_surface_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 450,
},

{
  id: 'domesticUse_borewell_surface_head',
  question: 'What is the total head you want to pump the water in meters?',
  section: 'domesticUse_borewell_surface_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 450,
},

{
  id: 'domesticUse_borewell_surface_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_surface_1phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 1000,
},

// --- Surface Borewell Three Phase Questions ---

{
  id: 'domesticUse_borewell_surface_depth',
  question: 'What is the total depth you want to draw water from the borewell? (in meters)',
  section: 'domesticUse_borewell_surface_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'domesticUse_borewell_surface_head',
  question: 'What is the total head you want to pump the water in meters?',
  section: 'domesticUse_borewell_surface_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'domesticUse_borewell_surface_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_surface_3phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},

// --- Submersible Borewell Questions ---

{
  id: 'domesticUse_borewell_submersible_phase',
  question: 'Do you need a  1phase or a 3phase design? (Single phase recommended for Household and domestic applications)',
  section: 'domesticUse_borewell_submersible',
  options: [
    { id: '1 Phase', label: '1 Phase', nextSection: 'domesticUse_borewell_submersible_1phase' },
    { id: '3 Phase', label: '3 Phase', nextSection: 'domesticUse_borewell_submersible_3phase' },
  ],
},

// --- Surface Borewell Single Phase Questions ---

{
    id: 'domesticUse_borewell_submersible_borewellSize',
    question: 'What is the size of your bore well?',
    section: 'domesticUse_borewell_submersible_1phase',
    options: [
      { id: '3 inch', label: '3"' },
      { id: '4 inch', label: '4"' },
      { id: '6 inch', label: '6"' },
    ],
  },

{
  id: 'domesticUse_borewell_submersible_head',
  question: 'What is the total head you want to pump the water in meters? ( Total head= Depth of Bore pump installation + height of the over head tank)',
  section: 'domesticUse_borewell_submersible_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 250,
},

{
  id: 'domesticUse_borewell_submersible_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_submersible_1phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},

// --- Surface Borewell Three Phase Questions ---

{
    id: 'domesticUse_borewell_submersible_borewellSize',
    question: 'What is the size of your bore well?',
    section: 'domesticUse_borewell_submersible_3phase',
    options: [
      { id: '3inch_b_sub', label: '3"' },
      { id: '4inch_b_sub', label: '4"' },
      { id: '6inch_b_sub', label: '6"' },
    ],
  },

{
  id: 'domesticUse_borewell_submersible_head',
  question: 'What is the total head you want to pump the water in meters? ( Total head= Depth of Bore pump installation + height of the over head tank)',
  section: 'domesticUse_borewell_submersible_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 250,
},

{
  id: 'domesticUse_borewell_submersible_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'domesticUse_borewell_submersible_3phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},


// --- Domestic Pressure Boosting ---

{
  id: 'domesticUse_pressure_boosting_bathrooms',
  section: 'domesticUse_pressure_boosting_application',
  question: 'How many bathrooms/showers are in your household?',
  options: [
    { id: '1', label: '1', nextSection: 'domesticUse_pressure_boosting_simultaneous_one' },
    { id: '2', label: '2', nextSection: 'domesticUse_pressure_boosting_simultaneous_two' },
    { id: '3', label: '3', nextSection: 'domesticUse_pressure_boosting_simultaneous_three' },
    { id: '4', label: '4', nextSection: 'domesticUse_pressure_boosting_simultaneous_four' },
    { id: '5', label: '5', nextSection: 'domesticUse_pressure_boosting_simultaneous_five' },
    { id: '6', label: '6', nextSection: 'domesticUse_pressure_boosting_simultaneous_six' },
    { id: '7 & Above', label: '7 & Above', nextSection: 'domesticUse_pressure_boosting_simultaneous_seven' },
  ],
},


// --- Domestic Pressure Boosting Simultaneous One   ---

{
  id: 'domesticUse_pressure_boosting_simultaneous',
  section: 'domesticUse_pressure_boosting_simultaneous_one',
  question: 'How many bathrooms/showers are used simultaneously?',
  options: [
    { id: '1', label: '1'},
  ],
},
// {
//   id: 'domesticUse_pressure_boosting_simultaneous',
//   section: 'domesticUse_pressure_boosting_simultaneous_one',
//   question: 'How many bathrooms/showers are used simultaneously?',
//   options: [
//     { id: '1', label: '1', nextSection: 'contact_service_team' }, // FIXED ✔
//   ],
// },

{
  id: 'Contact Our Service Team',
  section: 'contact_service_team',
  question: 'Please Contact Our Support Team For The Best Recommendation.',
  options: [
    {
      id: 'call_now',
      label: '📞 Call Our Service Team',
      action: 'call_support'
    }
  ]
},

// --- Domestic Pressure Boosting Simultaneous Two   ---

{
  id: 'domesticUse_pressure_boosting_simultaneous',
  section: 'domesticUse_pressure_boosting_simultaneous_two',
  question: 'How many bathrooms/showers are used simultaneously?',
  options: [
    { id: '1-2', label: '1-2'},
    { id: '2-3', label: '2-3'},
  ],
},
// --- Domestic Pressure Boosting Simultaneous Three   ---

{
  id: 'domesticUse_pressure_boosting_simultaneous',
  section: 'domesticUse_pressure_boosting_simultaneous_three',
  question: 'How many bathrooms/showers are used simultaneously?',
  options: [
    { id: '2-3', label: '2-3'},
    { id: '3-4', label: '3-4'},
  ],
},
// --- Domestic Pressure Boosting Simultaneous Four   ---

{
  id: 'domesticUse_pressure_boosting_simultaneous',
  section: 'domesticUse_pressure_boosting_simultaneous_four',
  question: 'How many bathrooms/showers are used simultaneously?',
  options: [
    { id: '3-4', label: '3-4'},
    { id: '4-5', label: '4-5'},
  ],
},
// --- Domestic Pressure Boosting Simultaneous five   ---

{
  id: 'domesticUse_pressure_boosting_simultaneous',
  section: 'domesticUse_pressure_boosting_simultaneous_five',
  question: 'How many bathrooms/showers are used simultaneously?',
  options: [
    { id: '4-5', label: '4-5'},
    { id: '5-6', label: '5-6'},
  ],
},
// --- Domestic Pressure Boosting Simultaneous six   ---

{
  id: 'domesticUse_pressure_boosting_simultaneous',
  section: 'domesticUse_pressure_boosting_simultaneous_six',
  question: 'How many bathrooms/showers are used simultaneously?',
  options: [
    { id: '5-6', label: '5-6'},
    { id: '6-7', label: '6-7'},
  ],
},

// --- Domestic Pressure Boosting Simultaneous seven   ---

{
  id: 'domesticUse_pressure_boosting_simultaneous',
  section: 'domesticUse_pressure_boosting_simultaneous_seven',
  question: 'How many bathrooms/showers are used simultaneously?',
  options: [
    { id: '6-7', label: '6-7'},
  ],
},








 
//------------- AGRICULTURE QUESTION SECTION ----------------//
  
 {
    id: 'agricultureUse_waterSource',
    question: 'What is the Water Source?',
    section: 'agriculturalUse', 
    options: [
      { id: 'openwell', label: 'Openwell', nextSection: 'agricultureUse_openwell' },
      { id: 'borewell', label: 'Borewell', nextSection: 'agricultureUse_borewell' },
      { id: 'canalriverbed', label: 'Canal RiverBed', nextSection: 'agricultureUse_canalriverbed' },
    ],
  },

  //------------- Agriculture_Openwell ----------------//

  {
    id: 'agricultureUse_openwell_powersource',
    question: 'What kind of power source is available?',
    section: 'agricultureUse_openwell',
    options: [
      { id: '1phase_b_sub', label: '1 Phase', nextSection: 'agricultureUse_openwell_1phase' },
      { id: '3phase_b_sub', label: '3 Phase', nextSection: 'agricultureUse_openwell_3phase' },
    ],
  },

//------------- 1 Phase QUESTION SECTION ----------------//

  {
    id: 'agricultureUse_openwell_installLocation',
    question: 'Type of Irrigation - Surface irrigation (Flooding, Water channels etc…), Sprinkler, Drip.',
    section: 'agricultureUse_openwell_1phase',
    options: [
      { id: 'surface_irrigation', label: 'Surface Irrigation', nextSection: 'agricultureUse_openwell_surface_irrigation' },
      { id: 'sprinkler', label: 'Sprinkler', nextSection: 'agricultureUse_openwell_sprinkler' },
      { id: 'drip_irrigation', label: 'Drip Irrigation', nextSection: 'agricultureUse_openwell_drip_irrigation' },
    ],
  },


  

  //------------- 3 Phase QUESTION SECTION ----------------//

  {
    id: 'agricultureUse_openwell_installLocation',
    question: 'Type of Irrigation - Surface irrigation (Flooding, Water channels etc…), Sprinkler, Drip.',
    section: 'agricultureUse_openwell_3phase',
    options: [
      { id: 'surface_irrigation', label: 'Surface Irrigation', nextSection: 'agricultureUse_openwell_surface_irrigation' },
      { id: 'sprinkler', label: 'Sprinkler', nextSection: 'agricultureUse_openwell_sprinkler' },
      { id: 'drip_irrigation', label: 'Drip Irrigation', nextSection: 'agricultureUse_openwell_drip_irrigation' },
    ],
  },
  
  //------------- AGRI HEAD & DISCHARGE & DELIVERY SIZE QUESTION SECTION ----------------//

  {
    id: 'agricultureUse_openwell_surface_irrigation_head',
    question: 'What is the total head required (in mts)',
    section: 'agricultureUse_openwell_surface_irrigation',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 250,
  },
  {
    id: 'agricultureUse_openwell_surface_irrigation_discharge',
    question: 'What is the discharge required?',
    section: 'agricultureUse_openwell_surface_irrigation',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },

  {
      id: 'agricultureUse_openwell_surface_irrigation_borewellSize',
      question: 'What is the desired Delivery size?',
      section: 'agricultureUse_openwell_surface_irrigation',
      options: [
        { id: '1inch_sur_ir', label: '1"' },
        { id: '1.5inch_sur_ir', label: '1.5"' },
        { id: '2inch_sur_ir', label: '2"' },
        { id: '2.5inch_sur_ir', label: '2.5"' },
      ],
    },



  //------------- Agriculture_Borewell ----------------//

    {
    id: 'agricultureUse_borewell_installLocation',
    question: 'Type Of Irrigation- Surface Irrigation,Sprinkler, Drip',
    section: 'agricultureUse_borewell',
    options: [
      { id: 'surface_irrigation', label: 'Surface Irrigation', nextSection: 'agricultureUse_borewell_surface_irrigation' },
      { id: 'sprinkler', label: 'Sprinkler', nextSection: 'agricultureUse_borewell_sprinkler' },
      { id: 'drip_irrigation', label: 'Drip Irrigation', nextSection: 'agricultureUse_borewell_drip_irrigation' },
    ],
  },

  //------------- Agriculture_Borewell_Installation Type ----------------//
  //------------- Agriculture_Borewell_Submersible ----------------//

  {
    id: 'agricultureUse_borewell_installLocation_type',
    question: 'Where do you want to install the pump? (Inside Borewell, Surface)',
    section: 'agricultureUse_borewell_surface_irrigation',
    options: [
      { id: 'submersible', label: 'Submersible', nextSection: 'agricultureUse_borewell_submersible' },
      { id: 'surface', label: 'Surface', nextSection: 'agricultureUse_borewell_surface' },
    ],
  },
  {
      id: 'agricultureUse_borewell_submersible_borewellSize',
      question: 'What is the size of your bore well? - 4”, 6”, 7”?',
      section: 'agricultureUse_borewell_submersible',
      options: [
        { id: '1inch_sur_ir', label: '1"' },
        { id: '1.5inch_sur_ir', label: '1.5"' },
        { id: '2inch_sur_ir', label: '2"' },
        { id: '2.5inch_sur_ir', label: '2.5"' },
      ],
    },

    {
    id: 'agricultureUse_borewell_submersible_powersource',
    question: 'Do you need a  1phase or a 3phase design?',
    section: 'agricultureUse_borewell_submersible',
    options: [
      { id: '1phase_b_sub', label: '1 Phase', nextSection: 'agricultureUse_borewell_submersible_1phase' },
      { id: '3phase_b_sub', label: '3 Phase', nextSection: 'agricultureUse_borewell_submersible_3phase' },
    ],
   },

   {
    id: 'agricultureUse_borewell_submersible_head',
    question: 'What is the total head you want to pump the water in meters?',
    section: 'agricultureUse_borewell_submersible_1phase',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 250,
  },

  {
    id: 'agricultureUse_borewell_submersible_discharge',
    question: 'Any desired LPM? (in liters)',
    section: 'agricultureUse_borewell_submersible_1phase',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },

  //------------- Agriculture_Borewell_Surface ----------------//

  {
    id: 'agricultureUse_borewell_surface_powersource',
    question: 'Do you need a  1phase or a 3phase design?',
    section: 'agricultureUse_borewell_surface',
    options: [
      { id: '1phase_b_sur', label: '1 Phase', nextSection: 'agricultureUse_borewell_surface_1phase' },
      { id: '3phase_b_sur', label: '3 Phase', nextSection: 'agricultureUse_borewell_surface_3phase' },
    ],
   },
   {
  id: 'agricultureUse_borewell_surface_depth',
  question: 'What is the total depth you want to draw water from the borewell? In meters',
  section: 'agricultureUse_borewell_surface_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 150,
},

{
    id: 'agricultureUse_borewell_surface_head',
    question: 'What is the total head you want to pump the water in meters?',
    section: 'agricultureUse_borewell_surface_1phase',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 250,
  },

  {
    id: 'agricultureUse_borewell_surface_discharge',
    question: 'Any desired LPM? (in liters)',
    section: 'agricultureUse_borewell_surface_1phase',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },

  //------------- Agriculture_Canal and Riverbed ----------------//

  {
    id: 'agricultureUse_canalriverbed_head',
    question: 'What is the total head you want to pump the water? (in meters)',
    section: 'agricultureUse_canalriverbed',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 250,
  },

  {
      id: 'agricultureUse_canalriverbed_borewellSize',
      question: 'What is the desired Delivery size?',
      section: 'agricultureUse_canalriverbed',
      options: [
        { id: '1inch_sur_ir', label: '1"' },
        { id: '1.5inch_sur_ir', label: '1.5"' },
        { id: '2inch_sur_ir', label: '2"' },
        { id: '2.5inch_sur_ir', label: '2.5"' },
      ],
    },

    {
      id: 'agricultureUse_canalriverbed_discharge',
      question: 'Any desired LPM? (in liters)',
      section: 'agricultureUse_canalriverbed',
      type: 'input',
      unit: 'LPM',
      min: 1,
      max: 450,
    },


    //------------- Commercial/Industrial ----------------//

    {
    id: 'commercialUse_mainPurpose',
    question: 'What are the main purposes and applications of using pumps in various commercial and industrial sectors?',
    section: 'commercialUse', 
    options: [
      { id: 'General Water Pumping', label: 'General water pumping & Utility Water transfer Application', nextSection: 'commercialUse_General water pumping' },
      { id: 'Pressure Boosting Application', label: 'Pressure Boosting Application', nextSection: 'commercialUse_Pressure Boosting Application' },
      { id: 'Climate Control Application', label: 'Climate Control Application', nextSection: 'commercialUse_Climate Control Application' },
      { id: 'High Pressure Washing', label: 'High Pressure Washing And Cleaning Application', nextSection: 'commercialUse_High Pressure Washing' },
      { id: 'Other Industrial Application', label: 'Other Industrial Application', nextSection: 'commercialUse_Other Industrial' },
    ],
  },
  {
    id: 'commercialUse_waterSource',
    question: 'What is the Water Source?',
    section: 'commercialUse_General water pumping', 
    options: [
      { id: 'sumpTank', label: 'Sump/Tank', nextSection: 'commercialUse_sumpTank' },
      { id: 'openwell', label: 'Openwell (Well)', nextSection: 'commercialUse_openwell' },
      { id: 'borewell', label: 'Borewell', nextSection: 'commercialUse_borewell' },
    ],
  },

  // --- Sump/Tank branch for commercialUse Use ---
  {
    id: 'commercialUse_sumpTank_installLocation',
    question: 'Where do you want to install the pump?',
    section: 'commercialUse_sumpTank',
    options: [
      { id: 'surface_sumpTank', label: 'Surface', nextSection: 'commercialUse_sumpTank_surface' },
      { id: 'submerged_sumpTank', label: 'Submerged in water', nextSection: 'commercialUse_sumpTank_submerged' },
    ],
  },
  // --- Surface installation for Sump/Tank ---
  {
    id: 'commercialUse_sumpTank_surface_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'commercialUse_sumpTank_surface',
    type: 'input', // Indicate this is an input field
    unit: 'meters',
    min: 1,
    max: 70,
  },
  {
    id: 'commercialUse_sumpTank_surface_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'commercialUse_sumpTank_surface',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'commercialUse_sumpTank_surface_deliverySize',
    question: 'Delivery Size',
    section: 'commercialUse_sumpTank_surface',
    options: [
      { id: '1inch', label: '1"' },
      { id: '1.5inch', label: '1.5"' },
      { id: '2inch', label: '2"' },
      { id: '2.5inch', label: '2.5"' },
    ],
  },
  // --- Submerged installation for Sump/Tank  --- //
  {
    id: 'commercialUse_sumpTank_submerged_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'commercialUse_sumpTank_submerged',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 70,
  },
  {
    id: 'commercialUse_sumpTank_submerged_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'commercialUse_sumpTank_submerged',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'commercialUse_sumpTank_submerged_deliverySize',
    question: 'Delivery Size',
    section: 'commercialUse_sumpTank_submerged',
    options: [
      { id: '1inch_sub', label: '1"' },
      { id: '1.5inch_sub', label: '1.5"' },
      { id: '2inch_sub', label: '2"' },
      { id: '2.5inch_sub', label: '2.5"' },
    ],
  },



  // ---Commercial/Industrial Open Well Section --- //

  // --- Openwell branch for Commercial/Industrial ---
  {
    id: 'commercialUse_openwell_installLocation',
    question: 'Where do you want to install the pump?',
    section: 'commercialUse_openwell',
    options: [
      { id: 'surface_openwell', label: 'Surface', nextSection: 'commercialUse_openwell_surface' },
      { id: 'submerged_openwell', label: 'Submerged in water', nextSection: 'commercialUse_openwell_submerged' },
    ],
  },

  // --- Surface installation for openwell ---
  {
    id: 'commercialUse_openwell_surface_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'commercialUse_openwell_surface',
    type: 'input', 
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'commercialUse_openwell_surface_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'commercialUse_openwell_surface',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'commercialUse_openwell_surface_deliverySize',
    question: 'Delivery Size',
    section: 'commercialUse_openwell_surface',
    options: [
      { id: '1inch_op', label: '1"' },
      { id: '1.5inch_op', label: '1.5"' },
      { id: '2inch_op', label: '2"' },
      { id: '2.5inch_op', label: '2.5"' },
    ],
  },

  // --- Submerged installation for openwell 
  
  {
    id: 'commercialUse_openwell_submerged_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'commercialUse_openwell_submerged',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'commercialUse_openwell_submerged_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'commercialUse_openwell_submerged',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'commercialUse_openwell_submerged_deliverySize',
    question: 'Delivery Size',
    section: 'commercialUse_openwell_submerged',
    options: [
      { id: '1inch_op', label: '1"' },
      { id: '1.5inch_op', label: '1.5"' },
      { id: '2inch_op', label: '2"' },
      { id: '2.5inch_op', label: '2.5"' },
    ],
  },



  // ---Commercial/Industrial BoreWell Section --- //

// --- Borewell installation location ---


{
  id: 'commercialUse_borewell_installLocation',
  question: 'Where do you want to install the pump?',
  section: 'commercialUse_borewell',
  options: [
    { id: 'surface_borewell', label: 'Surface', nextSection: 'commercialUse_borewell_surface' },
    { id: 'Submersible_Borewell', label: 'Inside the borewell (Submersible)', nextSection: 'commercialUse_borewell_submersible' },
  ],
},

// --- Commercial/Industrial Surface Borewell Questions ---

{
  id: 'commercialUse_borewell_surface_phase',
  question: 'Do you need a 1 phase or 3 phase design? (Single phase recommended for Household and Domestic applications)',
  section: 'commercialUse_borewell_surface',
  options: [
    { id: '1phase_bw_sur', label: '1 Phase', nextSection: 'commercialUse_borewell_surface_1phase' },
    { id: '3phase_bw_sur', label: '3 Phase', nextSection: 'commercialUse_borewell_surface_3phase' },
  ],
},

// --- Surface Borewell Single Phase Questions ---

{
  id: 'commercialUse_borewell_surface_depth',
  question: 'What is the total depth you want to draw water from the borewell? (in meters)',
  section: 'commercialUse_borewell_surface_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'commercialUse_borewell_surface_head',
  question: 'What is the total head you want to pump the water in meters?',
  section: 'commercialUse_borewell_surface_1phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'commercialUse_borewell_surface_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'commercialUse_borewell_surface_1phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},

// --- Surface Borewell Three Phase Questions ---

{
  id: 'commercialUse_borewell_surface_depth',
  question: 'What is the total depth you want to draw water from the borewell? (in meters)',
  section: 'commercialUse_borewell_surface_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'commercialUse_borewell_surface_head',
  question: 'What is the total head you want to pump the water in meters?',
  section: 'commercialUse_borewell_surface_3phase',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 50,
},

{
  id: 'commercialUse_borewell_surface_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'commercialUse_borewell_surface_3phase',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},

// --- Submersible Borewell Questions ---



{
    id: 'commercialUse_borewell_submersible_borewellSize',
    question: 'What is the size of your bore well?',
    section: 'commercialUse_borewell_submersible',
    options: [
      { id: '3inch_b_sub', label: '3"' },
      { id: '4inch_b_sub', label: '4"' },
      { id: '6inch_b_sub', label: '6"' },
    ],
  },

{
  id: 'commercialUse_borewell_submersible_head',
  question: 'What is the total head you want to pump the water in meters? ( Total head= Depth of Bore pump installation + height of the over head tank)',
  section: 'commercialUse_borewell_submersible',
  type: 'input',
  unit: 'meters',
  min: 1,
  max: 250,
},

{
  id: 'commercialUse_borewell_submersible_discharge',
  question: 'Any desired LPM? (in liters)',
  section: 'commercialUse_borewell_submersible',
  type: 'input',
  unit: 'LPM',
  min: 1,
  max: 450,
},


 // ---Commercial/Industrial BoreWell Section --- //

 // ---Commercial/Industrial Pressure Boosting Application Section --- //
  
  
  {
    id: 'commercialUse_pressureboostingsystem',
    question: 'Which type of pressure boosting system are you looking for?',
    section: 'commercialUse_Pressure Boosting Application', 
    options: [
      { id: 'High Rise Building', label: 'High Rise Building', nextSection: 'commercialUse_HighRiseBuilding' },
      { id: 'RO Application', label: 'RO Application', nextSection: 'commercialUse_ROApplication' },
    ],
  },
  {
    id: 'commercialUse_heightofthebuilding',
    question: 'What is the height of the building?',
    section: 'commercialUse_HighRiseBuilding', 
    options: [
      { id: 'High Rise Building', label: 'High Rise Building', nextSection: 'commercialUse_HighRiseBuilding' },
      { id: 'RO Application', label: 'RO Application', nextSection: 'commercialUse_ROApplication' },
    ],
  },

];