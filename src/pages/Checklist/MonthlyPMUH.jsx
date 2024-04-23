import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./DailyCIL.css"
import axios from 'axios';

function MonthlyPMUH() {

  let navigate = useNavigate();
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const validationSchema = Yup.object().shape({
    UH_crane_inspected_by: Yup.string().required("Please click field and press space.")
  });

  const initialValues = {
    UH_crane_inspected_by: "",
    UH_crane_approved_by: "",
    UH_crane_no: "",
    UH_crane_date: "",
    UH_crane_time_start: "",
    UH_crane_time_end: "",
    Hoisting_Drive_Motor_sound_result: "",
    Hoisting_Drive_Motor_sound_action: "",
    Hoisting_Drive_Motor_sound_remarks: "",
    Hoisting_Drive_Motor_Temperature_result: "",
    Hoisting_Drive_Motor_Temperature_action: "",
    Hoisting_Drive_Motor_Temperature_remarks: "",
    Hoisting_Drive_E_magnetic_brake_gap_result: "",
    Hoisting_Drive_E_magnetic_brake_gap_action: "",
    Hoisting_Drive_E_magnetic_brake_gap_remarks: "",
    Hoisting_Drive_E_magnetic_brake_wear_tear_result: "",
    Hoisting_Drive_E_magnetic_brake_wear_tear_action: "",
    Hoisting_Drive_E_magnetic_brake_wear_tear_remarks: "",
    Hoisting_Drive_Cyclo_gear_sound_result: "",
    Hoisting_Drive_Cyclo_gear_sound_action: "",
    Hoisting_Drive_Cyclo_gear_sound_remarks: "",
    Hoisting_Drive_Cyclo_gear_leakage_result: "",
    Hoisting_Drive_Cyclo_gear_leakage_action: "",
    Hoisting_Drive_Cyclo_gear_leakage_remarks: "",
    Hoisting_Drive_Cyclo_gear_Grease_result: "",
    Hoisting_Drive_Cyclo_gear_Grease_action: "",
    Hoisting_Drive_Cyclo_gear_Grease_remarks: "",
    Hoisting_Drive_wire_ropes_Lubrication_result: "",
    Hoisting_Drive_wire_ropes_Lubrication_action: "",
    Hoisting_Drive_wire_ropes_Lubrication_remarks: "",
    Hoisting_Drive_wire_ropes_Wear_tear_result: "",
    Hoisting_Drive_wire_ropes_Wear_tear_action: "",
    Hoisting_Drive_wire_ropes_Wear_tear_remarks: "",
    Hoisting_Drive_Traction_sheaves_result: "",
    Hoisting_Drive_Traction_sheaves_action: "",
    Hoisting_Drive_Traction_sheaves_remarks: "",
    Hoisting_Drive_sensing_plate_home_position_result: "",
    Hoisting_Drive_sensing_plate_home_position_action: "",
    Hoisting_Drive_sensing_plate_home_position_remarks: "",
    Hoisting_Drive_sensing_plate_Slowdown_position_result: "",
    Hoisting_Drive_sensing_plate_Slowdown_position_action: "",
    Hoisting_Drive_sensing_plate_Slowdown_position_remarks: "",
    Hoisting_Drive_sensing_plate_Over_run_limit_position_result: "",
    Hoisting_Drive_sensing_plate_Over_run_limit_position_action: "",
    Hoisting_Drive_sensing_plate_Over_run_limit_position_remarks: "",
    Hoisting_Drive_stop_position_Lower_result: "",
    Hoisting_Drive_stop_position_Lower_action: "",
    Hoisting_Drive_stop_position_Lower_remarks: "",
    Hoisting_Drive_stop_position_Upper_result: "",
    Hoisting_Drive_stop_position_Upper_action: "",
    Hoisting_Drive_stop_position_Upper_remarks: "",
    Hoisting_Drive_guide_rollers_Clearance_result: "",
    Hoisting_Drive_guide_rollers_Clearance_action: "",
    Hoisting_Drive_guide_rollers_Clearance_remarks: "",
    Hoisting_Drive_guide_rollers_Wear_tear_result: "",
    Hoisting_Drive_guide_rollers_Wear_tear_action: "",
    Hoisting_Drive_guide_rollers_Wear_tear_remarks: "",
    Travel_Drive_Motor_sound_result: "",
    Travel_Drive_Motor_sound_action: "",
    Travel_Drive_Motor_sound_remarks: "",
    Travel_Drive_Motor_Temperature_result: "",
    Travel_Drive_Motor_Temperature_action: "",
    Travel_Drive_Motor_Temperature_remarks: "",
    Travel_Drive_E_magnetic_brake_gap_result: "",
    Travel_Drive_E_magnetic_brake_gap_action: "",
    Travel_Drive_E_magnetic_brake_gap_remarks: "",
    Travel_Drive_E_magnetic_brake_wear_tear_result: "",
    Travel_Drive_E_magnetic_brake_wear_tear_action: "",
    Travel_Drive_E_magnetic_brake_wear_tear_remarks: "",
    Travel_Drive_Cyclo_gear_sound_result: "",
    Travel_Drive_Cyclo_gear_sound_action: "",
    Travel_Drive_Cyclo_gear_sound_remarks: "",
    Travel_Drive_Cyclo_gear_leakage_result: "",
    Travel_Drive_Cyclo_gear_leakage_action: "",
    Travel_Drive_Cyclo_gear_leakage_remarks: "",
    Travel_Drive_Cyclo_gear_Grease_result: "",
    Travel_Drive_Cyclo_gear_Grease_action: "",
    Travel_Drive_Cyclo_gear_Grease_remarks: "",
    Travel_Drive_Front_wheel_sound_result: "",
    Travel_Drive_Front_wheel_sound_action: "",
    Travel_Drive_Front_wheel_sound_remarks: "",
    Travel_Drive_Front_wheel_Wear_tear_result: "",
    Travel_Drive_Front_wheel_Wear_tear_action: "",
    Travel_Drive_Front_wheel_Wear_tear_remarks: "",
    Travel_Drive_Rear_wheel_sound_result: "",
    Travel_Drive_Rear_wheel_sound_action: "",
    Travel_Drive_Rear_wheel_sound_remarks: "",
    Travel_Drive_Rear_wheel_Wear_tear_result: "",
    Travel_Drive_Rear_wheel_Wear_tear_action: "",
    Travel_Drive_Rear_wheel_Wear_tear_remarks: "",
    Travel_Drive_top_guide_rollers_result: "",
    Travel_Drive_top_guide_rollers_action: "",
    Travel_Drive_top_guide_rollers_remarks: "",
    Travel_Drive_Bottom_guide_rollers_result: "",
    Travel_Drive_Bottom_guide_rollers_action: "",
    Travel_Drive_Bottom_guide_rollers_remarks: "",
    Travel_Drive_sensing_plate_home_position_result: "",
    Travel_Drive_sensing_plate_home_position_action: "",
    Travel_Drive_sensing_plate_home_position_remarks: "",
    Travel_Drive_sensing_plate_Slowdown_position_result: "",
    Travel_Drive_sensing_plate_Slowdown_position_action: "",
    Travel_Drive_sensing_plate_Slowdown_position_remarks: "",
    Travel_Drive_sensing_plate_Over_run_limit_position_result: "",
    Travel_Drive_sensing_plate_Over_run_limit_position_action: "",
    Travel_Drive_sensing_plate_Over_run_limit_position_remarks: "",
    Travel_Drive_Bay_centering_stop_position_result: "",
    Travel_Drive_Bay_centering_stop_position_action: "",
    Travel_Drive_Bay_centering_stop_position_remarks: "",
    Travel_Drive_Bay_centering_measurement_result: "",
    Travel_Drive_Bay_centering_measurement_action: "",
    Travel_Drive_Bay_centering_measurement_remarks: "",
    Travel_Drive_Bay_Bottom_rail_Wear_tear_result: "",
    Travel_Drive_Bay_Bottom_rail_Wear_tear_action: "",
    Travel_Drive_Bay_Bottom_rail_Wear_tear_remarks: "",
    Travel_Drive_Bay_Bottom_rail_Rail_joint_result: "",
    Travel_Drive_Bay_Bottom_rail_Rail_joint_action: "",
    Travel_Drive_Bay_Bottom_rail_Rail_joint_remarks: "",
    Travel_Drive_Bay_Bottom_rail_Shim_plate_result: "",
    Travel_Drive_Bay_Bottom_rail_Shim_plate_action: "",
    Travel_Drive_Bay_Bottom_rail_Shim_plate_remarks: "",
    Slide_Fork_Motor_sound_result: "",
    Slide_Fork_Motor_sound_action: "",
    Slide_Fork_Motor_sound_remarks: "",
    Slide_Fork_Motor_Temperature_result: "",
    Slide_Fork_Motor_Temperature_action: "",
    Slide_Fork_Motor_Temperature_remarks: "",
    Slide_Fork_E_magnetic_brake_gap_result: "",
    Slide_Fork_E_magnetic_brake_gap_action: "",
    Slide_Fork_E_magnetic_brake_gap_remarks: "",
    Slide_Fork_E_magnetic_brake_wear_tear_result: "",
    Slide_Fork_E_magnetic_brake_wear_tear_action: "",
    Slide_Fork_E_magnetic_brake_wear_tear_remarks: "",
    Slide_Fork_Cyclo_gear_sound_result: "",
    Slide_Fork_Cyclo_gear_sound_action: "",
    Slide_Fork_Cyclo_gear_sound_remarks: "",
    Slide_Fork_Cyclo_gear_greases_result: "",
    Slide_Fork_Cyclo_gear_greases_action: "",
    Slide_Fork_Cyclo_gear_greases_remarks: "",
    Slide_Fork_Cyclo_gear_Grease_result: "",
    Slide_Fork_Cyclo_gear_Grease_action: "",
    Slide_Fork_Cyclo_gear_Grease_remarks: "",
    Slide_Fork_Rack_pinion_sound_result: "",
    Slide_Fork_Rack_pinion_sound_action: "",
    Slide_Fork_Rack_pinion_sound_remarks: "",
    Slide_Fork_Rack_pinion_Lubrication_result: "",
    Slide_Fork_Rack_pinion_Lubrication_action: "",
    Slide_Fork_Rack_pinion_Lubrication_remarks: "",
    Slide_Fork_Rack_pinion_Wear_tear_result: "",
    Slide_Fork_Rack_pinion_Wear_tear_action: "",
    Slide_Fork_Rack_pinion_Wear_tear_remarks: "",
    Slide_Fork_Rack_pinion_Backlash_result: "",
    Slide_Fork_Rack_pinion_Backlash_action: "",
    Slide_Fork_Rack_pinion_Backlash_remarks: "",
    Slide_Fork_Torque_limiter_Locknut_result: "",
    Slide_Fork_Torque_limiter_Locknut_action: "",
    Slide_Fork_Torque_limiter_Locknut_remarks: "",
    Slide_Fork_Torque_limiter_Mechanic_result: "",
    Slide_Fork_Torque_limiter_Mechanic_action: "",
    Slide_Fork_Torque_limiter_Mechanic_remarks: "",
    Slide_Fork_Rack_gear_Lubrication_result: "",
    Slide_Fork_Rack_gear_Lubrication_action: "",
    Slide_Fork_Rack_gear_Lubrication_remarks: "",
    Slide_Fork_Rack_gear_Deformation_result: "",
    Slide_Fork_Rack_gear_Deformation_action: "",
    Slide_Fork_Rack_gear_Deformation_remarks: "",
    Slide_Fork_Rack_gear_Wear_tear_result: "",
    Slide_Fork_Rack_gear_Wear_tear_action: "",
    Slide_Fork_Rack_gear_Wear_tear_remarks: "",
    Slide_Fork_Sprocket_sound_result: "",
    Slide_Fork_Sprocket_sound_action: "",
    Slide_Fork_Sprocket_sound_remarks: "",
    Slide_Fork_Sprocket_Wear_tear_result: "",
    Slide_Fork_Sprocket_Wear_tear_action: "",
    Slide_Fork_Sprocket_Wear_tear_remarks: "",
    Slide_Fork_Stopping_sensing_Fork_centering_result: "",
    Slide_Fork_Stopping_sensing_Fork_centering_action: "",
    Slide_Fork_Stopping_sensing_Fork_centering_remarks: "",
    Slide_Fork_Stopping_sensing_Fork_stroke_result: "",
    Slide_Fork_Stopping_sensing_Fork_stroke_action: "",
    Slide_Fork_Stopping_sensing_Fork_stroke_remarks: "",
    Fork_body_Middle_rail_Grove_wear_tear_result: "",
    Fork_body_Middle_rail_Grove_wear_tear_action: "",
    Fork_body_Middle_rail_Grove_wear_tear_remarks: "",
    Fork_body_Middle_rail_Lubrication_result: "",
    Fork_body_Middle_rail_Lubrication_action: "",
    Fork_body_Middle_rail_Lubrication_remarks: "",
    Fork_body_Cam_followers_Wear_tear_result: "",
    Fork_body_Cam_followers_Wear_tear_action: "",
    Fork_body_Cam_followers_Wear_tear_remarks: "",
    Fork_body_Cam_followers_Lubrication_result: "",
    Fork_body_Cam_followers_Lubrication_action: "",
    Fork_body_Cam_followers_Lubrication_remarks: "",
    Trolley_Unit_Collector_arm_Fasteners_result: "",
    Trolley_Unit_Collector_arm_Fasteners_action: "",
    Trolley_Unit_Collector_arm_Fasteners_remarks: "",
    Trolley_Unit_Collector_arm_Wear_tear_result: "",
    Trolley_Unit_Collector_arm_Wear_tear_action: "",
    Trolley_Unit_Collector_arm_Wear_tear_remarks: "",
    Trolley_Unit_Collector_arm_Dust_result: "",
    Trolley_Unit_Collector_arm_Dust_action: "",
    Trolley_Unit_Collector_arm_Dust_remarks: "",
    Control_Panel_E_magnetic_contactors_result: "",
    Control_Panel_E_magnetic_contactors_action: "",
    Control_Panel_E_magnetic_contactors_remarks: "",
    Control_Panel_Electric_wiring_Snapped_result: "",
    Control_Panel_Electric_wiring_Snapped_action: "",
    Control_Panel_Electric_wiring_Snapped_remarks: "",
    Control_Panel_Electric_wiring_connection_result: "",
    Control_Panel_Electric_wiring_connection_action: "",
    Control_Panel_Electric_wiring_connection_remarks: "",
    Control_Panel_Transformer_result: "",
    Control_Panel_Transformer_action: "",
    Control_Panel_Transformer_remarks: "",
    Control_Panel_PC_Board_result: "",
    Control_Panel_PC_Board_action: "",
    Control_Panel_PC_Board_remarks: "",
    Control_Panel_panel_buttons_result: "",
    Control_Panel_panel_buttons_action: "",
    Control_Panel_panel_buttons_remarks: "",
    Control_Panel_Indicator_result: "",
    Control_Panel_Indicator_action: "",
    Control_Panel_Indicator_remarks: "",
    Control_Panel_E_stop_button_result: "",
    Control_Panel_E_stop_button_action: "",
    Control_Panel_E_stop_button_remarks: "",
    Control_Panel_Ventilation_fan_result: "",
    Control_Panel_Ventilation_fan_action: "",
    Control_Panel_Ventilation_fan_remarks: "",
    Control_Panel_4bit_sensor_result: "",
    Control_Panel_4bit_sensor_action: "",
    Control_Panel_4bit_sensor_remarks: "",
    Control_Panel_Optical_transmitter_Alignment_result: "",
    Control_Panel_Optical_transmitter_Alignment_action: "",
    Control_Panel_Optical_transmitter_Alignment_remarks: "",
    Control_Panel_Optical_transmitter_LED_result: "",
    Control_Panel_Optical_transmitter_LED_action: "",
    Control_Panel_Optical_transmitter_LED_remarks: "",
    Detectors_Pre_occupied_load_result: "",
    Detectors_Pre_occupied_load_action: "",
    Detectors_Pre_occupied_load_remarks: "",
    Detectors_Load_profile_result: "",
    Detectors_Load_profile_action: "",
    Detectors_Load_profile_remarks: "",
    Detectors_High_load_result: "",
    Detectors_High_load_action: "",
    Detectors_High_load_remarks: "",
    Detectors_Fork_loaded_result: "",
    Detectors_Fork_loaded_action: "",
    Detectors_Fork_loaded_remarks: "",
    Detectors_Carriage_chain_loose_result: "",
    Detectors_Carriage_chain_loose_action: "",
    Detectors_Carriage_chain_loose_remarks: "",
    Detectors_Load_overhanged_result: "",
    Detectors_Load_overhanged_action: "",
    Detectors_Load_overhanged_remarks: "",
    Detectors_Load_projection_result: "",
    Detectors_Load_projection_action: "",
    Detectors_Load_projection_remarks: "",
    Detectors_Fork_end_detectors_result: "",
    Detectors_Fork_end_detectors_action: "",
    Detectors_Fork_end_detectors_remarks: "",
    Detectors_Fork_centering_detectors_result: "",
    Detectors_Fork_centering_detectors_action: "",
    Detectors_Fork_centering_detectors_remarks: "",
    Crane_travelling_Home_position_result: "",
    Crane_travelling_Home_position_action: "",
    Crane_travelling_Home_position_remarks: "",
    Crane_travelling_Regular_position_front_result: "",
    Crane_travelling_Regular_position_front_action: "",
    Crane_travelling_Regular_position_front_remarks: "",
    Crane_travelling_Regular_position_rear_result: "",
    Crane_travelling_Regular_position_rear_action: "",
    Crane_travelling_Regular_position_rear_remarks: "",
    Crane_travelling_Forward_decel1_result: "",
    Crane_travelling_Forward_decel1_action: "",
    Crane_travelling_Forward_decel1_remarks: "",
    Crane_travelling_Backward_decel1_result: "",
    Crane_travelling_Backward_decel1_action: "",
    Crane_travelling_Backward_decel1_remarks: "",
    Crane_travelling_Dec_1_2_result: "",
    Crane_travelling_Dec_1_2_action: "",
    Crane_travelling_Dec_1_2_remarks: "",
    Crane_travelling_End_limit_result: "",
    Crane_travelling_End_limit_action: "",
    Crane_travelling_End_limit_remarks: "",
    Carriage_hoisting_Upper_level_result: "",
    Carriage_hoisting_Upper_level_action: "",
    Carriage_hoisting_Upper_level_remarks: "",
    Carriage_hoisting_Lower_level_result: "",
    Carriage_hoisting_Lower_level_action: "",
    Carriage_hoisting_Lower_level_remarks: "",
    Carriage_hoisting_Fork_level_zone_result: "",
    Carriage_hoisting_Fork_level_zonel_action: "",
    Carriage_hoisting_Fork_level_zone_remarks: "",
    Carriage_hoisting_Station_upper_level_result: "",
    Carriage_hoisting_Station_upper_level_action: "",
    Carriage_hoisting_Station_upper_level_remarks: "",
    Carriage_hoisting_Station_lower_level_result: "",
    Carriage_hoisting_Station_lower_level_action: "",
    Carriage_hoisting_Station_lower_level_remarks: "",
    Carriage_hoisting_Station_Upward_decel1_result: "",
    Carriage_hoisting_Station_Upward_decel1_action: "",
    Carriage_hoisting_Station_Upward_decel1_remarks: "",
    Carriage_hoisting_Station_Downward_decel1_result: "",
    Carriage_hoisting_Station_Downward_decel1_action: "",
    Carriage_hoisting_Station_Downward_decel1_remarks: "",
    Carriage_hoisting_Decel2_result: "",
    Carriage_hoisting_Decel2_action: "",
    Carriage_hoisting_Decel2_remarks: "",
    Carriage_hoisting_End_limit_result: "",
    Carriage_hoisting_End_limit_action: "",
    Carriage_hoisting_End_limit_remarks: "",
    UH_Crane_INSPECTION_SUMMARY: "",
    UH_Crane_Verified_by_MNC: ""

  };

  const onSubmit = (data) => {
    axios.post("https://maintaimdb-044f7fcd2d92.herokuapp.com/uhchecklist", data,
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        }
      }).then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          username: response.data.username
          navigate(-1);
        }

      });
  };

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    firstname: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get("https://maintaimdb-044f7fcd2d92.herokuapp.com/auth/auth", {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            firstname: response.data.firstname,
            status: true,
          });
        }
      });
  }, []);

  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form id="checklistForm" className='bg-[#f3f5f5] container mx-auto px-2 sm:px-4 lg:px-8'>
        <h1 className='text-black font-bold text-[30px]'>UH CRANE INSPECTION CHECKLIST (MONTHLY)</h1>

        <div className='flex mt-2'>
          <button
            type='submit'
            //onClick={()=>navigate(-1)}
            className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4 mr-2  
              bg-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
            style={{ color: currentColor }}
          >
            Save
          </button>

          <button
            onClick={() => navigate('/checklistsmenu')}
            className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
            style={{ backgroundColor: currentColor }}
          >
            Discard
          </button>
        </div>

        <table>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
              <div class="textbox-container">
                <label for="UH_crane_inspected_by">Inspected by:</label>
                <ErrorMessage className='text-red-500' name="UH_crane_inspected_by" component="span" />
                <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="UH_crane_inspected_by" name="UH_crane_inspected_by"
                  value={authState.firstname}
                />
              </div>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
              <div class="textbox-container">
                <label for="UH_crane_approved_by">Approved by (Supervisor):</label>
                <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="UH_crane_approved_by" name="UH_crane_approved_by" />
              </div>
            </td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
              <div class="textbox-container">
                <label for="UH_crane_no">Crane Number:</label>
                <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="UH_crane_no" name="UH_crane_no" />
              </div>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
              <div class="textbox-container">
                <label for="UH_crane_date">Date:</label>
                <Field className="w-[80px] sm:w-full h-[35px] text-center" type="date" id="UH_crane_date" name="UH_crane_date" />
              </div>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
              <div class="textbox-container">
                <label for="UH_crane_time_start">Time Start:</label>
                <Field className="w-[80px] sm:w-full h-[35px] text-center" type="time" id="UH_crane_time_start" name="UH_crane_time_start" />
              </div>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
              <div class="textbox-container">
                <label for="UH_crane_time_end">Time End:</label>
                <Field className="w-[80px] sm:w-full h-[35px] text-center" type="time" id="UH_crane_time_end" name="UH_crane_time_end" />
              </div>
            </td>
          </tr>
        </table>
        <h3 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>I - Hoisting Drive Section</h3>
        <table>
          <tr className="center-text text-[10px] sm:text-base">
            <th className='text-[10px] sm:text-base'>Item</th>
            <th className='text-[10px] sm:text-base'>Inspection Item</th>
            <th className='text-[10px] sm:text-base'>Check Point</th>
            <th className='text-[10px] sm:text-base'>Method</th>
            <th className='text-[10px] sm:text-base'>Result</th>
            <th className='text-[10px] sm:text-base'>Action</th>
            <th className='text-[10px] sm:text-base'>Remarks</th>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>1</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Motor</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Control_Panel_Result">
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>

            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Motor_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_Motor_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Temperature</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Motor_Temperature_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Motor_Temperature_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_Motor_Temperature_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>2</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake (Gap: 0.5mm Limit: 2mm)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining gap</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_E_magnetic_brake_gap_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_E_magnetic_brake_gap_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_E_magnetic_brake_gap_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_E_magnetic_brake_wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_E_magnetic_brake_wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_E_magnetic_brake_wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>3</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 27Litres)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Cyclo_gear_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Cyclo_gear_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_Cyclo_gear_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Oil level / leakage</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Cyclo_gear_leakage_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Cyclo_gear_leakage_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_Cyclo_gear_leakage_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Grease amount</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Cyclo_gear_Grease_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Cyclo_gear_Grease_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_Cyclo_gear_Grease_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>4</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting wire ropes (new : 12.5 mm)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_wire_ropes_Lubrication_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_wire_ropes_Lubrication_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_wire_ropes_Lubrication_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_wire_ropes_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_wire_ropes_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_wire_ropes_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>5</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Traction sheaves</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Traction_sheaves_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_Traction_sheaves_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_Traction_sheaves_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>6</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting sensing plate</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Home position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_sensing_plate_home_position_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_sensing_plate_home_position_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_sensing_plate_home_position_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Slowdown position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_sensing_plate_Slowdown_position_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_sensing_plate_Slowdown_position_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_sensing_plate_Slowdown_position_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Over-run limit position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>7</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoist stop position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lower level</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_stop_position_Lower_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_stop_position_Lower_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_stop_position_Lower_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upper level</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_stop_position_Upper_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_stop_position_Upper_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_stop_position_Upper_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>8</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting guide rollers (new : dia 172 mm)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Clearance to mast</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_guide_rollers_Clearance_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_ guide_rollers_Clearance_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_guide_rollers_Clearance_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_guide_rollers_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Drive_guide_rollers_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Drive_ guide_rollers_Wear_tear_remarks" /></td>
          </tr>

        </table>
        <h3 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>II - Travel Drive Section</h3>
        <table>
          <tr className="center-text text-[10px] sm:text-base">
            <th className='text-[10px] sm:text-base'>Item</th>
            <th className='text-[10px] sm:text-base'>Inspection Item</th>
            <th className='text-[10px] sm:text-base'>Check Point</th>
            <th className='text-[10px] sm:text-base'>Method</th>
            <th className='text-[10px] sm:text-base'>Result</th>
            <th className='text-[10px] sm:text-base'>Action</th>
            <th className='text-[10px] sm:text-base'>Remarks</th>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>1</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Motor</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Motor_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Motor_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Motor_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Temperature</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Motor_Temperature_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Motor_Temperature_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Motor_Temperature_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>2</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.7mm)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining gap</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_E_magnetic_brake_gap_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_E_magnetic_brake_gap_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_E_magnetic_brake_gap_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_E_magnetic_brake_wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_E_magnetic_brake_wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_E_magnetic_brake_wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>3</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 9.5Litres)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Cyclo_gear_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Cyclo_gear_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Cyclo_gear_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Oil level / leakage</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Cyclo_gear_leakage_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Cyclo_gear_leakage_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Cyclo_gear_leakage_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Grease amount</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Cyclo_gear_Grease_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Cyclo_gear_Grease_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Cyclo_gear_Grease_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>4</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Front wheel</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Front_wheel_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Front_wheel_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Front_wheel_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Front_wheel_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Front_wheel_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Front_wheel_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Result" /></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Action" /></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>5</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rear wheel</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Rear_wheel_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Rear_wheel_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Rear_wheel_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Rear_wheel_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Rear_wheel_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Rear_wheel_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Rear_wheel_Wear_tear_measure_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Rear_wheel_Wear_tear_measure_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Rear_wheel_Wear_tear_measure_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>6</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Top guide rollers (dia 98 mm or more)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_top_guide_rollers_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_top_guide_rollers_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_top_guide_rollers_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>7</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bottom guide rollers (dia172 mm or more)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bottom_guide_rollers_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bottom_guide_rollers_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Bottom_guide_rollers_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>8</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Travelling sensing plate (at both end of travel)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Home position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_sensing_plate_home_position_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_sensing_plate_home_position_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_sensing_plate_home_position_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Slowdown position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_sensing_plate_Slowdown_position_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_sensing_plate_Slowdown_position_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_sensing_plate_Slowdown_position_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Over-run limit position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_sensing_plate_Over_run_limit_position_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_sensing_plate_Over_run_limit_position_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_sensing_plate_Over_run_limit_position_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>9</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bay centering</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bay stop position</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_centering_stop_position_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_centering_stop_position_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Bay_centering_stop_position_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>(X1/X2 measurement)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_centering_measurement_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_centering_measurement_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Bay_centering_measurement_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>10</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bottom rail</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rail joint condition</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Shim plate / Anchor bolt</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Retighten</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_remarks" /></td>
          </tr>

        </table>
        <h3 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>III - Slide Fork</h3>
        <table>
          <tr className="center-text text-[10px] sm:text-base">
            <th className='text-[10px] sm:text-base'>Item</th>
            <th className='text-[10px] sm:text-base'>Inspection Item</th>
            <th className='text-[10px] sm:text-base'>Check Point</th>
            <th className='text-[10px] sm:text-base'>Method</th>
            <th className='text-[10px] sm:text-base'>Result</th>
            <th className='text-[10px] sm:text-base'>Action</th>
            <th className='text-[10px] sm:text-base'>Remarks</th>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>1</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Motor</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Motor_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Motor_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Motor_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Temperature</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Motor_Temperature_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Motor_Temperature_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Motor_Temperature_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>2</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.5mm)</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining gap</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_E_magnetic_brake_gap_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_E_magnetic_brake_gap_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_E_magnetic_brake_gap_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_E_magnetic_brake_wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_E_magnetic_brake_wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_E_magnetic_brake_wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>3</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cyclo gear reducer</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Cyclo_gear_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Cyclo_gear_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Cyclo_gear_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Grease amount</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Cyclo_gear_Grease_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Cyclo_gear_Grease_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Cyclo_gear_Grease_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>4</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rack & pinion</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Rack_pinion_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_Lubrication_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_Lubrication_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Rack_pinion_Lubrication_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Rack_pinion_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Backlash</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_Backlash_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_pinion_Backlash_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Rack_pinion_Backlash_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>5</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Torque limiter</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Locknut tightness</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Torque_limiter_Locknut_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Torque_limiter_Locknut_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Torque_limiter_Locknut_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Mechanic operation</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Torque_limiter_Mechanic_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Torque_limiter_Mechanic_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Torque_limiter_Mechanic_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>6</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rack gear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_gear_Lubrication_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_gear_Lubrication_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Rack_gear_Lubrication_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_gear_Deformation_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_gear_Deformation_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Rack_gear_Deformation_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_gear_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Rack_gear_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Rack_gear_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>7</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket / idler gears</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rotating sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Sprocket_sound_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Sprocket_sound_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Sprocket_sound_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Sprocket_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Sprocket_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Sprocket_Wear_tear_remarks" /></td>
          </tr>

          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>8</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Stopping sensing plate</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork centering</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Stopping_sensing_Fork_centering_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Stopping_sensing_Fork_centering_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Stopping_sensing_Fork_centering_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork stroke</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Stopping_sensing_Fork_stroke_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Stopping_sensing_Fork_stroke_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Stopping_sensing_Fork_stroke_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><b>Fork body</b></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>9</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>a Middle rail</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Grove wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Middle_rail_Grove_wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Middle_rail_Grove_wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_body_Middle_rail_Grove_wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Middle_rail_Lubrication_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Middle_rail_Lubrication_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_body_Middle_rail_Lubrication_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>10</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>b Cam followers</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Cam_followers_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Cam_followers_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_body_Cam_followers_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Cam_followers_Lubrication_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_body_Cam_followers_Lubrication_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_body_Cam_followers_Lubrication_remarks" /></td>
          </tr>

        </table>

        <h3 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>IV - Trolley Unit</h3>
        <table>
          <tr className="center-text text-[10px] sm:text-base">
            <th className='text-[10px] sm:text-base'>Item</th>
            <th className='text-[10px] sm:text-base'>Inspection Item</th>
            <th className='text-[10px] sm:text-base'>Check Point</th>
            <th className='text-[10px] sm:text-base'>Method</th>
            <th className='text-[10px] sm:text-base'>Result</th>
            <th className='text-[10px] sm:text-base'>Action</th>
            <th className='text-[10px] sm:text-base'>Remarks</th>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>1</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Collector arm</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fasteners condition</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Trolley_Unit_Collector_arm_Fasteners_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Trolley_Unit_Collector_arm_Fasteners_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Trolley_Unit_Collector_arm_Fasteners_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wear & tear</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Trolley_Unit_Collector_arm_Wear_tear_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Trolley_Unit_Collector_arm_Wear_tear_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Trolley_Unit_Collector_arm_Wear_tear_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Trolley_Unit_Collector_arm_Dust_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Trolley_Unit_Collector_arm_Dust_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Trolley_Unit_Collector_arm_Dust_remarks" /></td>
          </tr>
        </table>
        <h3 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>V - Control Panel Section</h3>
        <table>
          <tr className="center-text text-[10px] sm:text-base">
            <th className='text-[10px] sm:text-base'>Item</th>
            <th className='text-[10px] sm:text-base'>Inspection Item</th>
            <th className='text-[10px] sm:text-base'>Check Point</th>
            <th className='text-[10px] sm:text-base'>Method</th>
            <th className='text-[10px] sm:text-base'>Result</th>
            <th className='text-[10px] sm:text-base'>Action</th>
            <th className='text-[10px] sm:text-base'>Remarks</th>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>1</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic contactors</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>On / Off condition</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_E_magnetic_contactors_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_E_magnetic_contactors_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_E_magnetic_contactors_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>2</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electric wiring</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Snapped / broken wire</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Electric_wiring_Snapped_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Electric_wiring_Snapped_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_Electric_wiring_Snapped_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wiring connection</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Electric_wiring_connection_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Electric_wiring_connection_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_Electric_wiring_connection_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>3</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Transformer / Power supply</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Voltage measurement</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Transformer_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Transformer_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_Transformer_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>4</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>P.C. Board</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Connectors connection</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_PC_Board_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_PC_Board_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_PC_Board_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>5</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Operation panel buttons</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_panel_buttons_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_panel_buttons_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_panel_buttons_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>6</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Indicator</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Indicator_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Indicator_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_Indicator_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>7</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Emergency stop button</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_E_stop_button_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_E_stop_button_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_E_stop_button_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>8</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Ventilation fan</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Ventilation_fan_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Ventilation_fan_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_Ventilation_fan_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>9</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>4-bit sensor</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_4bit_sensor_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_4bit_sensor_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_4bit_sensor_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>10</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Optical transmitter</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Alignment</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Optical_transmitter_Alignment_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Optical_transmitter_Alignment_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_Optical_transmitter_Alignment_remarks" /></td>
          </tr>
          <tr className="center-text text-[10px] sm:text-base">
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED light condition</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Optical_transmitter_LED_result" >
              <option value="" disabled selected>Select option</option>
              <option value="O">O</option>
              <option value="∆">∆</option>
              <option value="X">X</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Control_Panel_Optical_transmitter_LED_action" >
              <option value="" disabled selected>Select option</option>
              <option value="A">A</option>
              <option value="C">C</option>
              <option value="R">R</option>
              <option value="M">M</option>
              <option value="T">T</option>
              <option value="O">O</option>
              <option value="L">L</option>
            </Field>
            </td>
            <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Control_Panel_Optical_transmitter_LED_remarks" /></td>
          </tr>
        </table>
        <table><tbody className="text-[10px] sm:text-base">

          <h3 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>VI - Detectors/Sensors</h3>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Item</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Pre-occupied load detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Pre_occupied_load_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Pre_occupied_load_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Pre_occupied_load_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>2</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load profile limit switch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Load_profile_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Load_profile_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Load_profile_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>3</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>High load sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_High_load_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_High_load_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_High_load_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>4</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork loaded sensor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Fork_loaded_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Fork_loaded_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Fork_loaded_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>5</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Carriage chain loose detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Carriage_chain_loose_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Carriage_chain_loose_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Carriage_chain_loose_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>6</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load overhanged sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Load_overhanged_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Load_overhanged_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Load_overhanged_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>7</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load projection sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Load_projection_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Load_projection_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Load_projection_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>8</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork end detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Fork_end_detectors_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Fork_end_detectors_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Fork_end_detectors_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>9</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork centering detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Fork_centering_detectors_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Detectors_Fork_centering_detectors_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Detectors_Fork_centering_detectors_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><b>Crane travelling detectors</b></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>10</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Home position</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Home_position_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Home_position_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Crane_travelling_Home_position_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>11</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Regular position (front)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Regular_position_front_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Regular_position_front_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Crane_travelling_Regular_position_front_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>12</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Regular position (rear)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Regular_position_rear_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Regular_position_rear_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Crane_travelling_Regular_position_rear_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>13</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Forward decel 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Forward_decel1_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Forward_decel1_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Crane_travelling_Forward_decel1_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>14</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Backward decel 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Backward_decel1_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Backward_decel1_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Crane_travelling_Backward_decel1_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>15</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dece1 2</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Dec_1_2_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_Dec_1_2_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Crane_travelling_Dec_1_2_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>16</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>End limit (emergency)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_End_limit_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_travelling_End_limit_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Crane_travelling_End_limit_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><b>Carriage hoisting detectors</b></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>17</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upper level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Upper_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Upper_level_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Upper_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>18</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lower level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Lower_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Lower_level_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Lower_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>19</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork level zone</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Fork_level_zone_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Fork_level_zonel_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Fork_level_zone_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>20</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Station upper level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_upper_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_upper_level_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Station_upper_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>21</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Station lower level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_lower_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_lower_level_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Station_lower_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>22</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upward decel 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_Upward_decel1_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_Upward_decel1_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Station_Upward_decel1_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>23</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Downward decel 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_Downward_decel1_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Station_Downward_decel1_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Station_Downward_decel1_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>24</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Decel 2</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Decel2_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_Decel2_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_Decel2_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>25</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>End limit (emergency)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O Check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_End_limit_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_hoisting_End_limit_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_hoisting_End_limit_remarks" /></td>
            </tr>
          </table>


        </tbody></table>


        <div class="textbox-container">
          <h2 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'></h2>
        </div>


        <table>

          <tbody className="text-[10px] sm:text-base"><tr className="center-text text-[10px] sm:text-base">
            <td colspan="2">
              <Field as="textarea" className='border-black border w-[100%]' id="UH_Crane_INSPECTION_SUMMARY" name="UH_Crane_INSPECTION_SUMMARY" rows="6" cols="50"></Field>
            </td>
          </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <p><strong>Method</strong> (M = Measure, S = Sound, T = Touch, V = Visual)</p>
              </td>

            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <p><strong>Action</strong> (A - Adjust, C - Cleaned, M - Make Repair, R - Replace)</p>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <strong>Verified by (MNC)</strong>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="UH_Crane_Verified_by_MNC" name="UH_Crane_Verified_by_MNC" />
                </div>
              </td>

            </tr>

          </tbody></table>





      </Form>

    </Formik >

  )
}

export default MonthlyPMUH
