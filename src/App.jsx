import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatbotWidget from "./components/Chatbot/ChatbotWidget";
import { Allpumps } from "./components/AllPumps/Allpumps";
import { Contactus } from "./components/Contactus/Contactus";
import { Home } from "./components/Home/Home";
import PumpSelectionTool from "./components/PumpSelectionTool/PumpSelectionTool";
import { RegisterPump } from "./components/Registration/RegisterPump";
import { RegisteredPumps } from "./components/Registration/RegisteredPumps";
import { Agriculture } from "./components/AllPumps/Agriculture/Agriculture";
import { Navbar } from "./components/Home/Header/Navbar";
import Footer from "./components/Home/Footer/Footer";
import { BorewellV4Pumps } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V4_Pump";
import { V4TuffPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/V4_Tuff_Pump/V4_Tuff_Pump";
import { V4BulletPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/V4_Bullet_Pump/V4_Bullet_Pump";
import { V4EnvyPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V4_Envy_Pump/V4_Envy_Pump";
import { V6PremiumPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V6_Pump/Borewell_V6_Premium_Pump/V6_Premium_Pump";
import { V6VincPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V6_Pump/Borewell_V6_Vinc_Pump/V6_Vinc_Pump";
import { V6ActivePump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V6_Pump/Borewell_V6_Active_Pump/V6_Active_Pump";
import { AgricultureZOWOpenwellPump } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/ZOW_Pump/ZOW_Pump";
import { AgriSsMsOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/SS_MS_Openwell_Pump";
import { AgriSsOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/SS_Horizontal_Openwell_Pump/Agri_SS_Horizontal_Openwell_Pump";
import { AgriMsOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/MS_Horizontal_Openwell_Pump/Agri_MS_Horizontal_Openwell_Pump";
import { AgriDolpinBelugaOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Dolpin_Beluga_Openwell_Pump/Agri_Dolpin_Beluga_Openwell_Pump";
import { AgriDolpinOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Dolpin_Beluga_Openwell_Pump/Dolpin_Horizontal_Openwell_Pump/Agri_Dolpin_Openwell_Pump";
import { AgriBelugaOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Dolpin_Beluga_Openwell_Pump/Beluga_Horizontal_Openwell_Pump/Agri_Beluga_Horizontal_Openwell_Pump";
import { AgriJumboOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Horizontal_Pump/Jumbo_Openwell_Pump/Agri_Jumbo_Openwell_Pump";
import { AgriSsMsVerticalPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/Agri_SSMS_Vertical_Pump";
import { AgriSsOpenwellVerticalPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/SS_Vertical_Openwell_Pump/Agri_SS_Vertical_Openwell_Pump";
import { AgriMsOpenwellVerticalPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/MS_Vertical_Openwell_Pump/Agri_MS_Vertical_Openwell_Pump";
import { AgriJumboVerticalOpenwellPumps } from "./components/AllPumps/Agriculture/Openwell_Pump/Vertical_Pump/Jumbo_Vertical_Openwell_Pump/Agri_Jumbo_Vertical_Openwell_Pump";
import { AgriSSMSAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_SSMS_Amphibian_Pump";
import { AgriSSAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_SS_Amphibian_Pump/Agri_SS_Amphibian_Pump";
import { AgriMSAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_MS_Amphibian_Pump/Agri_MS_Amphibian_Pump";
import { AgriJumboAmphibianPumps } from "./components/AllPumps/Agriculture/Amphibian_Pump/Agri_Jumbo_Amphibian_Pump/Agri_Jumbo_Amphibian_Pump";
import { AgriMiniMonoblockPumps } from "./components/AllPumps/Agriculture/Self_Priming_Monoblock_Pump/Agri_Mini_Monoblocks_Pump/Agri_Mini_Monoblocks_Pump";
import { AgriGMSPumps } from "./components/AllPumps/Agriculture/Self_Priming_Monoblock_Pump/Agri_GMS_Pump/Agri_GMS_Pump";
import { AgriGMHPumps } from "./components/AllPumps/Agriculture/Self_Priming_Monoblock_Pump/Agri_GHM_Pump/Agri_GMH_Pump";
import { AgriHighPressureMultistagePumps } from "./components/AllPumps/Agriculture/High_Pressure_Pump/Agri_High_Pressure_Multistage_Pump";
import { AgriMonoCompressorPumps } from "./components/AllPumps/Agriculture/Compressor_Pump/Mono_Compressor_Pump/Agri_Mono_Compressor_Pump";
import { AgriDoubleCylinderCompressorPumps } from "./components/AllPumps/Agriculture/Compressor_Pump/Belt_Compressor_Pump/Double_Compressor_Pump/Agri_Double_Compressor_Pump";
import { AgriSingleCylinderCompressorPumps } from "./components/AllPumps/Agriculture/Compressor_Pump/Belt_Compressor_Pump/Single_Compressor_Pump/Agri_Single_Compressor_Pump";
import { AgriSinglePhaseELH } from "./components/AllPumps/Agriculture/Control_Panel/Agri_Single_Phase_Panel/Agri_Single_Phase_ELH_Panel";
import { AgriThreePhaseGNCOne } from "./components/AllPumps/Agriculture/Control_Panel/Agri_Three_Phase_Panel/Agri_Three_Phase_GNC_Panel_One/Agri_Three_Phase_GNC_Panel_One";
import { AgriThreePhaseGNCTwo } from "./components/AllPumps/Agriculture/Control_Panel/Agri_Three_Phase_Panel/Agri_Three_Phase_GNC_Panel_Two/Agri_Three_Phase_GNC_Panel_Two";
import { Domestic } from "./components/AllPumps/Domestic/Domestic";
import { DomV3SleekPump } from "./components/AllPumps/Domestic/Borewell_Pump/V3_Sleek_Model/Dom_V3_Sleek_Model_Pump";
import { DomV4LittleSubPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_LittleSub_Pump/Dom_V4_LittleSub_Pump";
import { DomesticV4FTSPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_FTS_Pump";
import { DomV4FlojetPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Flojet_Pump/Dom_V4_Flojet_Pump";
import { DomV4FloraPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Flora_Pump/Dom_V4_Flora_Pump";
import { DomV4SakthiPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Sakthi_Pump/Dom_V4_Sakthi_Pump";
import { DomV4TaurusPump } from "./components/AllPumps/Domestic/Borewell_Pump/V4_Pumps/Dom_V4_FTS_Pump/Dom_V4_Taurus_Pump/Dom_V4_Taurus_Pump";
import { DomesticSSHorizontalPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/SS_Horizontal_Openwell";
import { DomVividPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/Domestic_Vivid_Pump/Domestic_Vivid_Pump";
import { DomZipPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/Domestic_Zip_Pump/Domestic_Zip_Pump";
import { DomZowPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Horizontal_Openwell/Domestic_Zow_Pump/Domestic_Zow_Pump";
import { DomVerticalGSVPump } from "./components/AllPumps/Domestic/Openwell_Pump/SS_Vertical_Openwell/SS_Vertical_GSV_Pump";
import { DomScmPump } from "./components/AllPumps/Domestic/Monoblock_Pump/Dom_SCM_Pump";
import { DomesticHeroPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Hero_Pump/Domestic_Hero_Pump";
import { DomesticHeroPlusPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Hero_Plus_Pump/Domestic_Hero_Plus_Pump";
import { DomesticSmartPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Smart_Pump/Domestic_Smart_Pump";
import { DomesticLittleKingPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_LittleKing_Pump/Domestic_LittleKing_Pump";
import { DomesticLittleKingPlusPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_LittleKing_Plus_Pump/Domestic_LittleKing_Plus_Pump";
import { DomesticGeecoValePump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Mini_Monoblocks/Domestic_Geeco_Vale_Pump/Domestic_Geeco_Vale_Pump";
import { DomesticGMS2Pump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMS2_Pump/Domestic_GMS2_Pump";
import { DomesticGMS2ProPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMS2_Pro_Pump/Domestic_GMS2_Pro_Pump";
import { DomesticGMS3Pump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMS3_Pump/Domestic_GMS3_Pump";
import { DomesticGMHSilverPump } from "./components/AllPumps/Domestic/Self_Priming_Monoblock/Slowspeed_Monoblock/Domestic_GMH_Silver_Pump/Domestic_GMH_Silver_Pump";
import { DomesticJetKingPump } from "./components/AllPumps/Domestic/Jet_Pumps/Jet_King_Pump/Dom_Jet_King_Pump";
import { DomesticJetBMPump } from "./components/AllPumps/Domestic/Jet_Pumps/Jet_Pumps_BM/Dom_Jet_Pumps_BM";
import { DomesticPressureBoosterPump } from "./components/AllPumps/Domestic/High_Pressure_Pump/Horizontal_Multistage/Domestic_Pressure_Booster-Pump";
import { DomesticROPump } from "./components/AllPumps/Domestic/High_Pressure_Pump/Vertical_Multistage/Domestic_RO_Pump";
import { DomesticDewateringPump } from "./components/AllPumps/Domestic/Waste_Water_Pump/Domestic_Dewatering_Pump";
import { DomesticMCBPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_MCB_Panel/Domestic_MCB_Panel";
import { DomesticSWIFTPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_SWIFT_Panel/Domestic_SWIFT_Panel";
import { DomesticELHPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_ELH_Panel/Domestic_ELH_Panel";
import { DomesticELHAutoPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_ELH_Auto_Panel/Domestic_ELH_Auto_Panel";
import { DomesticELHFullAutoPanel } from "./components/AllPumps/Domestic/Control_Panels/Single_Phase_Panels/Domestic_ELH_Full_Auto_Panel/Domestic_ELH_Full_Auto_Panel";
import { DomesticGNCPanel } from "./components/AllPumps/Domestic/Control_Panels/Three_Phase_Panel/Domestic_Three_GNC_Panel";
import { Commercial } from "./components/AllPumps/Commercial/Commercial";
import { ComTuffBulletPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Tuff_Bullet_Pumps/Com_V4_Tuff_Bullet_Pumps";
import { ComV4TuffPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Tuff_Bullet_Pumps/Com_V4_Tuff_Pump/Com_V4_Tuff_Pump";
import { ComV4BulletPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Tuff_Bullet_Pumps/Com_V4_Bullet_Pump/Com_V4_Bullet_Pump";
import { ComV4SakthiPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V4_Pump/V4_Sakthi_Pump/Com_V4_Sakthi_Pump";
import { ComV6PremiumPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V6_Pump/Com_V6_Premium_Pump/Com_V6_Premium_Pump";
import { ComV6VincPump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V6_Pump/Com_V6_Vinc_Pump/Com_V6_Vinc_Pump";
import { ComV6ActivePump } from "./components/AllPumps/Commercial/Borewell_Pump/Borewell_V6_Pump/Com_V6_Active_Pump/Com_V6_Active_Pump";
import { ComSSMSHorizontalPump } from "./components/AllPumps/Commercial/Openwell_Pump/Horizontal_Openwell/SS&MS_Openwell/Com_SS_MS_Openwell_Pump";
import { ComSSOpenwellPump } from "./components/AllPumps/Commercial/Openwell_Pump/Horizontal_Openwell/SS&MS_Openwell/Com_SS_Openwell/Com_SS_Openwell_Pump";
import { ComMSOpenwellPump } from "./components/AllPumps/Commercial/Openwell_Pump/Horizontal_Openwell/SS&MS_Openwell/Com_MS_Openwell/Com_MS_Openwell_Pump";
import { ComJumboPump } from "./components/AllPumps/Commercial/Openwell_Pump/Horizontal_Openwell/Jumbo_Openwell/Com_Jumbo_Openwell";
import { ComSSMSAmphibianPump } from "./components/AllPumps/Commercial/Openwell_Pump/Horizontal_Amphibian/Com_SS_MS_Amphibian_Pump";
import { ComSSAmphibianPump } from "./components/AllPumps/Commercial/Openwell_Pump/Horizontal_Amphibian/Com_SS_Amphibian_Pump/Com_SS_Amphibian_Pump";
import { ComMSAmphibianPump } from "./components/AllPumps/Commercial/Openwell_Pump/Horizontal_Amphibian/Com_MS_Amphibian_Pump/Com_MS_Amphibian_Pump";
import { ComSCMPump } from "./components/AllPumps/Commercial/Centrifugal_Monoblocks/Com_SCM_Pumps";
import { ComHeroPump } from "./components/AllPumps/Commercial/Self_Priming_Monoblock/Mini_Monoblocks/Com_Hero_Pump/Com_Hero_Pump";
import { ComHeroPlusPump } from "./components/AllPumps/Commercial/Self_Priming_Monoblock/Mini_Monoblocks/Com_Hero_Plus_Pump/Com_Hero_Plus_Pump";
import { ComSmartPump } from "./components/AllPumps/Commercial/Self_Priming_Monoblock/Mini_Monoblocks/Com_Smart_Pump/Com_Smart_Pump";
import { ComLittleKingPump } from "./components/AllPumps/Commercial/Self_Priming_Monoblock/Mini_Monoblocks/Com_LittleKing_Pump/Com_LittleKing_Pump";
import { ComLittleKingPlusPump } from "./components/AllPumps/Commercial/Self_Priming_Monoblock/Mini_Monoblocks/Com_LittleKing_Plus_Pump/Com_LittleKing_Plus_Pump";
import { ComGeecoValePump } from "./components/AllPumps/Commercial/Self_Priming_Monoblock/Mini_Monoblocks/Com_Geeco_Vale_Pump/Com_Geeco_Vale_Pump";
import { ComDewateringPump } from "./components/AllPumps/Commercial/Waste_Water_Pump/Com_Dewatering_Pump/Com_Dewatering_Pump";
import { ComSewagePump } from "./components/AllPumps/Commercial/Waste_Water_Pump/Com_Sewage_Pump/Com_Sewage_Pump";
import { ComCutterPump } from "./components/AllPumps/Commercial/Waste_Water_Pump/Com_Cutter_Pump/Com_Cutter_Pump";
import { ComHorizontalMultistagePump } from "./components/AllPumps/Commercial/High_Pressure_Pump/Horizontal_Multistage_Pump/Com_Horizontal_Multistage_Pump";
import { ComVerticalMultistagePump } from "./components/AllPumps/Commercial/High_Pressure_Pump/Vertical_Multistage_Pump/Com_Vertical_Multistage_Pump";
import { ComVerticalInlinePump } from "./components/AllPumps/Commercial/High_Pressure_Pump/Vertical_Inline_Pump/Com_Vertical_Inline_Pump";
import { ComCarwashPump } from "./components/AllPumps/Commercial/High_Pressure_Pump/High_Pressure_Carwash_Pump/Com_High_Pressure_Carwash_Pump";
import { ComGTCSPump } from "./components/AllPumps/Commercial/Tank_Compressor/Com_GTCS_Pump/Com_GTCS_Pump";
import { ComGTCDPump } from "./components/AllPumps/Commercial/Tank_Compressor/Com_GTCD_Pump/Com_GTCD_Pump";
import { ComGTCDHPump } from "./components/AllPumps/Commercial/Tank_Compressor/Com_GTCDH_Pump/Com_GTCDH_Pump";
import { ComMCBPanel } from "./components/AllPumps/Commercial/Control_Panels/Single_Phase_Panels/Commercial_MCB_Panel/Com_MCB_Panel";
import { ComSWIFTPanel } from "./components/AllPumps/Commercial/Control_Panels/Single_Phase_Panels/Commercial_SWIFT_Panel/Com_SWIFT_Panel";
import { ComELHPanel } from "./components/AllPumps/Commercial/Control_Panels/Single_Phase_Panels/Commercial_ELH_Panel/Com_ELH_Panel";
import { ComELHAutoPanel } from "./components/AllPumps/Commercial/Control_Panels/Single_Phase_Panels/Commercial_ELH_Auto_Panel/Com_ELH_Auto_Panel";
import { ComELHFullAutoPanel } from "./components/AllPumps/Commercial/Control_Panels/Single_Phase_Panels/Commercial_ELH_Full_Auto_Panel/Com_ELH_Full_Auto_Panel";
import { ComGNC1Panel } from "./components/AllPumps/Commercial/Control_Panels/Three_Phase_Panel/Com_Three_GNC1_Panel";
import { ComGNC2Panel } from "./components/AllPumps/Commercial/Control_Panels/Three_Phase_Panel/Com_Three_GNC2_Panel";
import { Industrial } from "./components/AllPumps/Industrial/Industrial";
import { IndTuffBulletPump } from "./components/AllPumps/Industrial/Borewell_Pump/V4_Tuff_Bullet_Pumps/Ind_V4_Tuff_Bullet_Pumps";
import { IndV4TuffPump } from "./components/AllPumps/Industrial/Borewell_Pump/V4_Tuff_Bullet_Pumps/Ind_V4_Tuff_Pump/Ind_V4_Tuff_Pump";
import { IndV4BulletPump } from "./components/AllPumps/Industrial/Borewell_Pump/V4_Tuff_Bullet_Pumps/Ind_V4_Bullet_Pump/Ind_V4_Bullet_Pump";
import { IndSsMsOpenwellPumps } from "./components/AllPumps/Industrial/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/Ind_SS_MS_Openwell_Pump";
import { IndSsOpenwellPumps } from "./components/AllPumps/Industrial/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/SS_Horizontal_Openwell_Pump/Ind_SS_Horizontal_Openwell_Pump";
import { IndMsOpenwellPumps } from "./components/AllPumps/Industrial/Openwell_Pump/Horizontal_Pump/SS&MS_Openwell_Pump/MS_Horizontal_Openwell_Pump/Ind_MS_Horizontal_Openwell_Pump";
import { IndSsMsVerticalPumps } from "./components/AllPumps/Industrial/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/Ind_SSMS_Vertical_Pump";
import { IndMsOpenwellVerticalPumps } from "./components/AllPumps/Industrial/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/MS_Vertical_Openwell_Pump/Ind_MS_Vertical_Openwell_Pump";
import { IndSsOpenwellVerticalPumps } from "./components/AllPumps/Industrial/Openwell_Pump/Vertical_Pump/SS&MS_Vertical_Openwell_Pump/SS_Vertical_Openwell_Pump/Ind_SS_Vertical_Openwell_Pump";
import { IndJumboVerticalOpenwellPumps } from "./components/AllPumps/Industrial/Openwell_Pump/Vertical_Pump/Jumbo_Vertical_Openwell_Pump/Ind_Jumbo_Vertical_Openwell_Pump";
import { IndDewateringPump } from "./components/AllPumps/Industrial/Waste_Water_Pump/Ind_Dewatering_Pump/Ind_Dewatering_Pump";
import { IndSewagePump } from "./components/AllPumps/Industrial/Waste_Water_Pump/Ind_Sewage_Pump/Ind_Sewage_Pump";
import { IndCutterPump } from "./components/AllPumps/Industrial/Waste_Water_Pump/Ind_Cutter_Pump/Ind_Cutter_Pump";
import { IndHorizontalMultistagePump } from "./components/AllPumps/Industrial/High_Pressure_Pump/Horizontal_Multistage_Pump/Ind_Horizontal_Multistage_Pump";
import { IndVerticalMultistagePump } from "./components/AllPumps/Industrial/High_Pressure_Pump/Vertical_Multistage_Pump/Ind_Vertical_Multistage_Pump";
import { IndVerticalInlinePump } from "./components/AllPumps/Industrial/High_Pressure_Pump/Vertical_Inline_Pump/Ind_Vertical_Inline_Pump";
import { IndCarwashPump } from "./components/AllPumps/Industrial/High_Pressure_Pump/High_Pressure_Carwash_Pump/Ind_High_Pressure_Carwash_Pump";
import { IndGTCSPump } from "./components/AllPumps/Industrial/Tank_Compressor/Ind_GTCS_Pump/Ind_GTCS_Pump";
import { IndGTCDPump } from "./components/AllPumps/Industrial/Tank_Compressor/Ind_GTCD_Pump/Ind_GTCD_Pump";
import { IndGTCDHPump } from "./components/AllPumps/Industrial/Tank_Compressor/Ind_GTCDH_Pump/Ind_GTCDH_Pump";
import { IndMCBPanel } from "./components/AllPumps/Industrial/Control_Panels/Single_Phase_Panels/Ind_MCB_Panel/Ind_MCB_Panel";
import { IndSWIFTPanel } from "./components/AllPumps/Industrial/Control_Panels/Single_Phase_Panels/Ind_SWIFT_Panel/Ind_SWIFT_Panel";
import { IndELHPanel } from "./components/AllPumps/Industrial/Control_Panels/Single_Phase_Panels/Ind_ELH_Panel/Ind_ELH_Panel";
import { IndELHAutoPanel } from "./components/AllPumps/Industrial/Control_Panels/Single_Phase_Panels/Ind_ELH_Auto_Panel/Ind_ELH_Auto_Panel";
import { IndELHFullAutoPanel } from "./components/AllPumps/Industrial/Control_Panels/Single_Phase_Panels/Ind_ELH_Full_Auto_Panel/Ind_ELH_Full_Auto_Panel";
import { IndGNC1Panel } from "./components/AllPumps/Industrial/Control_Panels/Three_Phase_Panel/Ind_Three_GNC1_Panel";
import { IndGNC2Panel } from "./components/AllPumps/Industrial/Control_Panels/Three_Phase_Panel/Ind_Three_GNC2_Panel";




function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ChatbotWidget />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact-us' element={<Contactus/>}></Route>
        <Route path='/all-pumps-categories' element={<Allpumps/>}></Route>
        <Route path='/pump-selection-tool' element={<PumpSelectionTool/>}></Route>
        <Route path='/warranty-registration' element={<RegisterPump/>}></Route>
        <Route path='/registered-pumps' element={<RegisteredPumps/>}></Route>

        {/* AGRICULTURE CATEGORY SECTION */}

        <Route path='/agriculture-pump-categories' element={<Agriculture/>}></Route>
        <Route path='/agriculture-pump/borewell-v4-pumps' element={<BorewellV4Pumps/>}></Route>
        <Route path='/agriculture-pump/borewell-v4-pumps/v4-tuff-pump' element={<V4TuffPump/>}></Route>
        <Route path='/agriculture-pump/borewell-v4-pumps/v4-bullet-pump' element={<V4BulletPump/>}></Route>
        <Route path='/agriculture-pump/v4-envy-pump' element={<V4EnvyPump/>}></Route>
        <Route path='/agriculture-pump/v6-premium-pump' element={<V6PremiumPump/>}></Route>
        <Route path='/agriculture-pump/v6-vinc-pump' element={<V6VincPump/>}></Route>
        <Route path='/agriculture-pump/v6-active-pump' element={<V6ActivePump/>}></Route>
        <Route path='/agriculture-pump/agriculture-zow-horizontal-openwell-pump' element={<AgricultureZOWOpenwellPump/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-horizontal-openwell-pump' element={<AgriSsMsOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-horizontal-openwell-pump/ss-horizontal-openwell-pump' element={<AgriSsOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-horizontal-openwell-pump/ms-horizontal-openwell-pump' element={<AgriMsOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-dolphin&beluga-horizontal-openwell-pump' element={<AgriDolpinBelugaOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-dolphin&beluga-horizontal-openwell-pump/agriculture-dolphin-horizontal-openwell-pump' element={<AgriDolpinOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-dolphin&beluga-horizontal-openwell-pump/agriculture-beluga-horizontal-openwell-pump' element={<AgriBelugaOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-jumbo-horizontal-openwell-pump' element={<AgriJumboOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-vertical-openwell-pump' element={<AgriSsMsVerticalPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-vertical-openwell-pump/agriculture-ss-vertical-openwell-pump' element={<AgriSsOpenwellVerticalPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-vertical-openwell-pump/agriculture-ms-vertical-openwell-pump' element={<AgriMsOpenwellVerticalPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-jumbo-vertical-openwell-pump' element={<AgriJumboVerticalOpenwellPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-amphibian-pump' element={<AgriSSMSAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-amphibian-pump/agriculture-ss-amphibian-pump' element={<AgriSSAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-ss&ms-amphibian-pump/agriculture-ms-amphibian-pump' element={<AgriMSAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-jumbo-horizontal-amphibian-pump' element={<AgriJumboAmphibianPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-self-priming-monoblock-mini-monoblocks-pump' element={<AgriMiniMonoblockPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-self-priming-monoblock-gms-pump' element={<AgriGMSPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-self-priming-monoblock-gmh-pump' element={<AgriGMHPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-high-pressure-vertical-multistage-pump' element={<AgriHighPressureMultistagePumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-mono-compressor-pump' element={<AgriMonoCompressorPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-double-cylinder-compressor-pump' element={<AgriDoubleCylinderCompressorPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-single-cylinder-compressor-pump' element={<AgriSingleCylinderCompressorPumps/>}></Route>
        <Route path='/agriculture-pump/agriculture-single-phase-elh' element={<AgriSinglePhaseELH/>}></Route>
        <Route path='/agriculture-pump/agriculture-three-phase-gnc-panel-one' element={<AgriThreePhaseGNCOne/>}></Route>
        <Route path='/agriculture-pump/agriculture-three-phase-gnc-panel-two' element={<AgriThreePhaseGNCTwo/>}></Route>

        {/* DOMESTIC CATEGORY SECTION */}

        <Route path='/domestic-pump-categories' element={<Domestic/>}></Route>
        <Route path='/domestic-pump/borewell-v3-sleek-pump' element={<DomV3SleekPump/>}></Route>
        <Route path='/domestic-pump/v4-littlesub-pump' element={<DomV4LittleSubPump/>}></Route>
        <Route path='/domestic-pump/v4-flojet-flora-taurus-sakthi-pumps' element={<DomesticV4FTSPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-flojet-pump' element={<DomV4FlojetPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-flora-pump' element={<DomV4FloraPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-sakthi-pump' element={<DomV4SakthiPump/>}></Route>
        <Route path='/domestic-pump/borewell-v4-taurus-pump' element={<DomV4TaurusPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps' element={<DomesticSSHorizontalPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps/vivid-pump' element={<DomVividPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps/zip-pump' element={<DomZipPump/>}></Route>
        <Route path='/domestic-pump/ss-horizontal-openwell-pumps/zow-pump' element={<DomZowPump/>}></Route>
        <Route path='/domestic-pump/ss-vertical-gsv-openwell-pumps' element={<DomVerticalGSVPump/>}></Route>
        <Route path='/domestic-pump/centrifugal-monoblock-scm-pump' element={<DomScmPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/hero-pump' element={<DomesticHeroPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/hero-plus-pump' element={<DomesticHeroPlusPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/smart-pump' element={<DomesticSmartPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/littleking-pump' element={<DomesticLittleKingPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/littleking-plus-pump' element={<DomesticLittleKingPlusPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/geeco-vale-pump' element={<DomesticGeecoValePump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gms2-pump' element={<DomesticGMS2Pump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gms2-pro-pump' element={<DomesticGMS2ProPump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gms3-pump' element={<DomesticGMS3Pump/>}></Route>
        <Route path='/domestic-pump/self-priming-monoblock/gmh-silver-pump' element={<DomesticGMHSilverPump/>}></Route>
        <Route path='/domestic-pump/jet-pumps/shallow-well-jet-king-pump' element={<DomesticJetKingPump/>}></Route>
        <Route path='/domestic-pump/jet-pumps/jet-pump-bm' element={<DomesticJetBMPump/>}></Route>
        <Route path='/domestic-pump/high-pressure/horizontal-multistage/domestic-pressure-booster-pump' element={<DomesticPressureBoosterPump/>}></Route>
        <Route path='/domestic-pump/high-pressure/vertical-multistage/domestic-ro-pump' element={<DomesticROPump/>}></Route>
        <Route path='/domestic-pump/waste-water-pump/dewatering-pump' element={<DomesticDewateringPump/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/mcb-panel' element={<DomesticMCBPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/swift-panel' element={<DomesticSWIFTPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/elh-panel' element={<DomesticELHPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/elh-auto-panel' element={<DomesticELHAutoPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/single-phase-panels/elh-full-auto-panel' element={<DomesticELHFullAutoPanel/>}></Route>
        <Route path='/domestic-pump/control-panels/three-phase-panel/gnc-panel-1' element={<DomesticGNCPanel/>}></Route>

      {/* COMMERCIALS CATEGORY SECTION */}

        <Route path='/commercial-pump-categories' element={<Commercial/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-tuff-bullet-pumps' element={<ComTuffBulletPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-tuff-bullet-pumps/v4-tuff-pump' element={<ComV4TuffPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-tuff-bullet-pumps/v4-bullet-pump' element={<ComV4BulletPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v4-sakthi-pump' element={<ComV4SakthiPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v6-premium-pump' element={<ComV6PremiumPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v6-vinc-pump' element={<ComV6VincPump/>}></Route>
        <Route path='/commercial-pump/borewell-submersible/v6-active-pump' element={<ComV6ActivePump/>}></Route>
        <Route path='/commercial-pump/ss-ms-horizontal-openwell-pumps' element={<ComSSMSHorizontalPump/>}></Route>
        <Route path='/commercial-pump/ss-ms-horizontal-openwell-pumps/ss-openwell-pump' element={<ComSSOpenwellPump/>}></Route>
        <Route path='/commercial-pump/ss-ms-horizontal-openwell-pumps/ms-openwell-pump' element={<ComMSOpenwellPump/>}></Route>
        <Route path='/commercial-pump/jumbo-horizontal-openwell-pump' element={<ComJumboPump/>}></Route>
        <Route path='/commercial-pump/ss-ms-amphibian-pumps' element={<ComSSMSAmphibianPump/>}></Route>
        <Route path='/commercial-pump/ss-ms-amphibian-pumps/ss-amphibian-pump' element={<ComSSAmphibianPump/>}></Route>
        <Route path='/commercial-pump/ss-ms-amphibian-pumps/ms-amphibian-pump' element={<ComMSAmphibianPump/>}></Route>
        <Route path='/commercial-pump/centrifugal-monoblocks-pumps/scm-pump' element={<ComSCMPump/>}></Route>
        <Route path='/commercial-pump/self-priming-monoblock/hero-pump' element={<ComHeroPump/>}></Route>
        <Route path='/commercial-pump/self-priming-monoblock/hero-plus-pump' element={<ComHeroPlusPump/>}></Route>
        <Route path='/commercial-pump/self-priming-monoblock/smart-pump' element={<ComSmartPump/>}></Route>
        <Route path='/commercial-pump/self-priming-monoblock/littleking-pump' element={<ComLittleKingPump/>}></Route>
        <Route path='/commercial-pump/self-priming-monoblock/littleking-plus-pump' element={<ComLittleKingPlusPump/>}></Route>
        <Route path='/commercial-pump/self-priming-monoblock/geeco-vale-pump' element={<ComGeecoValePump/>}></Route>
        <Route path='/commercial-pump/waste-water-pump/dewatering-pump' element={<ComDewateringPump/>}></Route>
        <Route path='/commercial-pump/waste-water-pump/sewage-pump' element={<ComSewagePump/>}></Route>
        <Route path='/commercial-pump/waste-water-pump/cutter-pump' element={<ComCutterPump/>}></Route>
        <Route path='/commercial-pump/high-pressure-pumps/horizontal-multistage-pump' element={<ComHorizontalMultistagePump/>}></Route>
        <Route path='/commercial-pump/high-pressure-pumps/vertical-multistage-pump' element={<ComVerticalMultistagePump/>}></Route>
        <Route path='/commercial-pump/high-pressure-pumps/vertical-inline-pump' element={<ComVerticalInlinePump/>}></Route>
        <Route path='/commercial-pump/high-pressure-pumps/high-pressure-car-wash-pump' element={<ComCarwashPump/>}></Route>
        <Route path='/commercial-pump/tank-compressor-pumps/gtcs-pump' element={<ComGTCSPump/>}></Route>
        <Route path='/commercial-pump/tank-compressor-pumps/gtcd-pump' element={<ComGTCDPump/>}></Route>
        <Route path='/commercial-pump/tank-compressor-pumps/gtcdh-pump' element={<ComGTCDHPump/>}></Route>
        <Route path='/commercial-pump/control-panels/single-phase-panels/mcb-panel' element={<ComMCBPanel/>}></Route>
        <Route path='/commercial-pump/control-panels/single-phase-panels/swift-panel' element={<ComSWIFTPanel/>}></Route>
        <Route path='/commercial-pump/control-panels/single-phase-panels/elh-panel' element={<ComELHPanel/>}></Route>
        <Route path='/commercial-pump/control-panels/single-phase-panels/elh-auto-panel' element={<ComELHAutoPanel/>}></Route>
        <Route path='/commercial-pump/control-panels/single-phase-panels/elh-full-auto-panel' element={<ComELHFullAutoPanel/>}></Route>
        <Route path='/commercial-pump/control-panels/three-phase-panel/gnc-panel-1' element={<ComGNC1Panel/>}></Route>
        <Route path='/commercial-pump/control-panels/three-phase-panel/gnc-panel-2' element={<ComGNC2Panel/>}></Route>
        
        {/* Industrial CATEGORY SECTION */}

        <Route path='/industrial-pump-categories' element={<Industrial/>}></Route>
        <Route path='/industrial-pump/borewell-submersible/v4-tuff-bullet-pumps' element={<IndTuffBulletPump/>}></Route>
        <Route path='/industrial-pump/borewell-submersible/v4-tuff-bullet-pumps/v4-tuff-pump' element={<IndV4TuffPump/>}></Route>
        <Route path='/industrial-pump/borewell-submersible/v4-tuff-bullet-pumps/v4-bullet-pump' element={<IndV4BulletPump/>}></Route>
        <Route path='/industrial-pump/industrial-ss-ms-horizontal-openwell-pump' element={<IndSsMsOpenwellPumps/>}></Route>
        <Route path='/industrial-pump/industrial-ss-ms-horizontal-openwell-pump/ss-horizontal-openwell-pump' element={<IndSsOpenwellPumps/>}></Route>
        <Route path='/industrial-pump/industrial-ss-ms-horizontal-openwell-pump/ms-horizontal-openwell-pump' element={<IndMsOpenwellPumps/>}></Route>
        <Route path='/industrial-pump/ss-ms-vertical-openwell-pump' element={<IndSsMsVerticalPumps/>}></Route>
        <Route path='/industrial-pump/ss-ms-vertical-openwell-pump/ss-vertical-openwell-pump' element={<IndSsOpenwellVerticalPumps/>}></Route>
        <Route path='/industrial-pump/ss-ms-vertical-openwell-pump/ms-vertical-openwell-pump' element={<IndMsOpenwellVerticalPumps/>}></Route>
        <Route path='/industrial-pump/jumbo-vertical-openwell-pump' element={<IndJumboVerticalOpenwellPumps/>}></Route>
        <Route path='/industrial-pump/waste-water-pump/dewatering-pump' element={<IndDewateringPump/>}></Route>
        <Route path='/industrial-pump/waste-water-pump/sewage-pump' element={<IndSewagePump/>}></Route>
        <Route path='/industrial-pump/waste-water-pump/cutter-pump' element={<IndCutterPump/>}></Route>
        <Route path='/industrial-pump/high-pressure-pumps/horizontal-multistage-pump' element={<IndHorizontalMultistagePump/>}></Route>
        <Route path='/industrial-pump/high-pressure-pumps/vertical-multistage-pump' element={<IndVerticalMultistagePump/>}></Route>
        <Route path='/industrial-pump/high-pressure-pumps/vertical-inline-pump' element={<IndVerticalInlinePump/>}></Route>
        <Route path='/industrial-pump/high-pressure-pumps/high-pressure-car-wash-pump' element={<IndCarwashPump/>}></Route>
        <Route path='/industrial-pump/tank-compressor-pumps/gtcs-pump' element={<IndGTCSPump/>}></Route>
        <Route path='/industrial-pump/tank-compressor-pumps/gtcd-pump' element={<IndGTCDPump/>}></Route>
        <Route path='/industrial-pump/tank-compressor-pumps/gtcdh-pump' element={<IndGTCDHPump/>  }></Route>
        <Route path='/industrial-pump/control-panels/single-phase-panels/mcb-panel' element={<IndMCBPanel/>}></Route>
        <Route path='/industrial-pump/control-panels/single-phase-panels/swift-panel' element={<IndSWIFTPanel/>}></Route>
        <Route path='/industrial-pump/control-panels/single-phase-panels/elh-panel' element={<IndELHPanel/>}></Route>
        <Route path='/industrial-pump/control-panels/single-phase-panels/elh-auto-panel' element={<IndELHAutoPanel/>}></Route>
        <Route path='/industrial-pump/control-panels/single-phase-panels/elh-full-auto-panel' element={<IndELHFullAutoPanel/>}></Route>
        <Route path='/industrial-pump/control-panels/three-phase-panel/gnc-panel-1' element={<IndGNC1Panel/>}></Route>
        <Route path='/industrial-pump/control-panels/three-phase-panel/gnc-panel-2' element={<IndGNC2Panel/>}></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
