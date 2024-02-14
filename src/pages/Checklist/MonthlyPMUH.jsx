import React, {useState, useEffect} from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./DailyCIL.css"
import axios from 'axios';

function MonthlyPMUH() {

  let navigate = useNavigate();
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

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
          accessToken: localStorage.getItem("accessToken"),
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
          accessToken: localStorage.getItem("accessToken"),
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
      onSubmit={onSubmit}>
      <Form id="checklistForm" className='bg-[#f3f5f5]'>
        <h1>UH CRANE INSPECTION CHECKLIST (MONTHLY)</h1>

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
          <tr>
            <td>
              <div class="textbox-container">
                <label for="UH_crane_inspected_by">Inspected by:</label>
                <Field type="text" id="UH_crane_inspected_by" name="UH_crane_inspected_by"
                  />
              </div>
            </td>
            <td>
              <div class="textbox-container">
                <label for="UH_crane_approved_by">Approved by (Supervisor):</label>
                <Field type="text" id="UH_crane_approved_by" name="UH_crane_approved_by" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="textbox-container">
                <label for="UH_crane_no">Crane Number:</label>
                <Field type="text" id="UH_crane_no" name="UH_crane_no" />
              </div>
            </td>
            <td>
              <div class="textbox-container">
                <label for="UH_crane_date">Date:</label>
                <Field type="date" id="UH_crane_date" name="UH_crane_date" />
              </div>
            </td>
            <td>
              <div class="textbox-container">
                <label for="UH_crane_time_start">Time Start:</label>
                <Field type="time" id="UH_crane_time_start" name="UH_crane_time_start" />
              </div>
            </td>
            <td>
              <div class="textbox-container">
                <label for="UH_crane_time_end">Time End:</label>
                <Field type="time" id="UH_crane_time_end" name="UH_crane_time_end" />
              </div>
            </td>
          </tr>
        </table>
        <h3>I - Hoisting Drive Section</h3>
        <table>
          <tr>
            <th>Item</th>
            <th>Inspection Item</th>
            <th>Check Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Motor</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Hoisting_Drive_Motor_sound_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_Motor_sound_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_Motor_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Temperature</td>
            <td>Touch</td>
            <td><Field type="text" name="Hoisting_Drive_Motor_Temperature_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_Motor_Temperature_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_Motor_Temperature_remarks" /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Electro-magnetic brake (Gap: 0.5mm Limit: 2mm)</td>
            <td>Lining gap</td>
            <td>Measure</td>
            <td><Field type="text" name="Hoisting_Drive_E_magnetic_brake_gap_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_E_magnetic_brake_gap_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_E_magnetic_brake_gap_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Lining wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_E_magnetic_brake_wear_tear_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_E_magnetic_brake_wear_tear_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_E_magnetic_brake_wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 27Litres)</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_sound_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_sound_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Oil level / leakage</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_leakage_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_leakage_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_leakage_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Grease amount</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_Grease_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_Grease_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_Cyclo_gear_Grease_remarks" /></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hoisting wire ropes (new : 12.5 mm)</td>
            <td>Lubrication</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_wire_ropes_Lubrication_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_wire_ropes_Lubrication_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_wire_ropes_Lubrication_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Measure</td>
            <td><Field type="text" name="Hoisting_Drive_wire_ropes_Wear_tear_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_wire_ropes_Wear_tear_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_wire_ropes_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Traction sheaves</td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_Traction_sheaves_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_Traction_sheaves_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_Traction_sheaves_remarks" /></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Hoisting sensing plate</td>
            <td>Home position</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_home_position_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_home_position_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_home_position_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Slowdown position</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_Slowdown_position_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_Slowdown_position_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_Slowdown_position_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Over-run limit position</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_remarks" /></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Hoist stop position</td>
            <td>Lower level</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_stop_position_Lower_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_stop_position_Lower_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_stop_position_Lower_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Upper level</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_stop_position_Upper_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_stop_position_Upper_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_stop_position_Upper_remarks" /></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Hoisting guide rollers (new : dia 172 mm)</td>
            <td>Clearance to mast</td>
            <td>Visual</td>
            <td><Field type="text" name="Hoisting_Drive_guide_rollers_Clearance_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_ guide_rollers_Clearance_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_guide_rollers_Clearance_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Measure</td>
            <td><Field type="text" name="Hoisting_Drive_guide_rollers_Wear_tear_result" /></td>
            <td><Field type="text" name="Hoisting_Drive_guide_rollers_Wear_tear_action" /></td>
            <td><Field type="text" name="Hoisting_Drive_ guide_rollers_Wear_tear_remarks" /></td>
          </tr>

        </table>
        <h3>II - Travel Drive Section</h3>
        <table>
          <tr>
            <th>Item</th>
            <th>Inspection Item</th>
            <th>Check Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Motor</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Travel_Drive_Motor_sound_result" /></td>
            <td><Field type="text" name="Travel_Drive_Motor_sound_action" /></td>
            <td><Field type="text" name="Travel_Drive_Motor_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Temperature</td>
            <td>Touch</td>
            <td><Field type="text" name="Travel_Drive_Motor_Temperature_result" /></td>
            <td><Field type="text" name="Travel_Drive_Motor_Temperature_action" /></td>
            <td><Field type="text" name="Travel_Drive_Motor_Temperature_remarks" /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.7mm)</td>
            <td>Lining gap</td>
            <td>Measure</td>
            <td><Field type="text" name="Travel_Drive_E_magnetic_brake_gap_result" /></td>
            <td><Field type="text" name="Travel_Drive_E_magnetic_brake_gap_action" /></td>
            <td><Field type="text" name="Travel_Drive_E_magnetic_brake_gap_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Lining wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_E_magnetic_brake_wear_tear_result" /></td>
            <td><Field type="text" name="Travel_Drive_E_magnetic_brake_wear_tear_action" /></td>
            <td><Field type="text" name="Travel_Drive_E_magnetic_brake_wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 9.5Litres)</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_sound_result" /></td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_sound_action" /></td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Oil level / leakage</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_leakage_result" /></td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_leakage_action" /></td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_leakage_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Grease amount</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_Grease_result" /></td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_Grease_action" /></td>
            <td><Field type="text" name="Travel_Drive_Cyclo_gear_Grease_remarks" /></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Front wheel</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Travel_Drive_Front_wheel_sound_result" /></td>
            <td><Field type="text" name="Travel_Drive_Front_wheel_sound_action" /></td>
            <td><Field type="text" name="Travel_Drive_Front_wheel_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_Front_wheel_Wear_tear_result" /></td>
            <td><Field type="text" name="Travel_Drive_Front_wheel_Wear_tear_action" /></td>
            <td><Field type="text" name="Travel_Drive_Front_wheel_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Measure</td>
            <td><Field type="text" name="Result" /></td>
            <td><Field type="text" name="Action" /></td>
            <td><Field type="text" name="Remarks" /></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Rear wheel</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_sound_result" /></td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_sound_action" /></td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_Wear_tear_result" /></td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_Wear_tear_action" /></td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Measure</td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_Wear_tear_measure_result" /></td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_Wear_tear_measure_action" /></td>
            <td><Field type="text" name="Travel_Drive_Rear_wheel_Wear_tear_measure_remarks" /></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Top guide rollers (dia 98 mm or more)</td>
            <td>Wear & tear</td>
            <td>Measure</td>
            <td><Field type="text" name="Travel_Drive_top_guide_rollers_result" /></td>
            <td><Field type="text" name="Travel_Drive_top_guide_rollers_action" /></td>
            <td><Field type="text" name="Travel_Drive_top_guide_rollers_remarks" /></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Bottom guide rollers (dia172 mm or more)</td>
            <td>Wear & tear</td>
            <td>Measure</td>
            <td><Field type="text" name="Travel_Drive_Bottom_guide_rollers_result" /></td>
            <td><Field type="text" name="Travel_Drive_Bottom_guide_rollers_action" /></td>
            <td><Field type="text" name="Travel_Drive_Bottom_guide_rollers_remarks" /></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Travelling sensing plate (at both end of travel)</td>
            <td>Home position</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_home_position_result" /></td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_home_position_action" /></td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_home_position_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Slowdown position</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_Slowdown_position_result" /></td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_Slowdown_position_action" /></td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_Slowdown_position_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Over-run limit position</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_Over_run_limit_position_result" /></td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_Over_run_limit_position_action" /></td>
            <td><Field type="text" name="Travel_Drive_sensing_plate_Over_run_limit_position_remarks" /></td>
          </tr>
          <tr>
            <td>9</td>
            <td>Bay centering</td>
            <td>Bay stop position</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_Bay_centering_stop_position_result" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_centering_stop_position_action" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_centering_stop_position_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>(X1/X2 measurement)</td>
            <td>Measure</td>
            <td><Field type="text" name="Travel_Drive_Bay_centering_measurement_result" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_centering_measurement_action" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_centering_measurement_remarks" /></td>
          </tr>
          <tr>
            <td>10</td>
            <td>Bottom rail</td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_result" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_action" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Rail joint condition</td>
            <td>Visual</td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_result" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_action" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Shim plate / Anchor bolt</td>
            <td>Retighten</td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_result" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_action" /></td>
            <td><Field type="text" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_remarks" /></td>
          </tr>

        </table>
        <h3>III - Slide Fork</h3>
        <table>
          <tr>
            <th>Item</th>
            <th>Inspection Item</th>
            <th>Check Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Motor</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Slide_Fork_Motor_sound_result" /></td>
            <td><Field type="text" name="Slide_Fork_Motor_sound_action" /></td>
            <td><Field type="text" name="Slide_Fork_Motor_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Temperature</td>
            <td>Touch</td>
            <td><Field type="text" name="Slide_Fork_Motor_Temperature_result" /></td>
            <td><Field type="text" name="Slide_Fork_Motor_Temperature_action" /></td>
            <td><Field type="text" name="Slide_Fork_Motor_Temperature_remarks" /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.5mm)</td>
            <td>Lining gap</td>
            <td>Measure</td>
            <td><Field type="text" name="Slide_Fork_E_magnetic_brake_gap_result" /></td>
            <td><Field type="text" name="Slide_Fork_E_magnetic_brake_gap_action" /></td>
            <td><Field type="text" name="Slide_Fork_E_magnetic_brake_gap_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Lining wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_E_magnetic_brake_wear_tear_result" /></td>
            <td><Field type="text" name="Slide_Fork_E_magnetic_brake_wear_tear_action" /></td>
            <td><Field type="text" name="Slide_Fork_E_magnetic_brake_wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cyclo gear reducer</td>
            <td>Rotating sound</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Cyclo_gear_sound_result" /></td>
            <td><Field type="text" name="Slide_Fork_Cyclo_gear_sound_action" /></td>
            <td><Field type="text" name="Slide_Fork_Cyclo_gear_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Grease amount</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Cyclo_gear_Grease_result" /></td>
            <td><Field type="text" name="Slide_Fork_Cyclo_gear_Grease_action" /></td>
            <td><Field type="text" name="Slide_Fork_Cyclo_gear_Grease_remarks" /></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Rack & pinion</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_sound_result" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_sound_action" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Lubrication</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Lubrication_result" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Lubrication_action" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Lubrication_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Wear_tear_result" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Wear_tear_action" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Backlash</td>
            <td>Measure</td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Backlash_result" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Backlash_action" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_pinion_Backlash_remarks" /></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Torque limiter</td>
            <td>Locknut tightness</td>
            <td>Touch</td>
            <td><Field type="text" name="Slide_Fork_Torque_limiter_Locknut_result" /></td>
            <td><Field type="text" name="Slide_Fork_Torque_limiter_Locknut_action" /></td>
            <td><Field type="text" name="Slide_Fork_Torque_limiter_Locknut_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Mechanic operation</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Torque_limiter_Mechanic_result" /></td>
            <td><Field type="text" name="Slide_Fork_Torque_limiter_Mechanic_action" /></td>
            <td><Field type="text" name="Slide_Fork_Torque_limiter_Mechanic_remarks" /></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Rack gear</td>
            <td>Lubrication</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Lubrication_result" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Lubrication_action" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Lubrication_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Deformation</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Deformation_result" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Deformation_action" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Deformation_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Wear_tear_result" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Wear_tear_action" /></td>
            <td><Field type="text" name="Slide_Fork_Rack_gear_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Sprocket / idler gears</td>
            <td>Rotating sound</td>
            <td>Sound</td>
            <td><Field type="text" name="Slide_Fork_Sprocket_sound_result" /></td>
            <td><Field type="text" name="Slide_Fork_Sprocket_sound_action" /></td>
            <td><Field type="text" name="Slide_Fork_Sprocket_sound_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Sprocket_Wear_tear_result" /></td>
            <td><Field type="text" name="Slide_Fork_Sprocket_Wear_tear_action" /></td>
            <td><Field type="text" name="Slide_Fork_Sprocket_Wear_tear_remarks" /></td>
          </tr>

          <tr>
            <td>8</td>
            <td>Stopping sensing plate</td>
            <td>Fork centering</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Stopping_sensing_Fork_centering_result" /></td>
            <td><Field type="text" name="Slide_Fork_Stopping_sensing_Fork_centering_action" /></td>
            <td><Field type="text" name="Slide_Fork_Stopping_sensing_Fork_centering_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Fork stroke</td>
            <td>Visual</td>
            <td><Field type="text" name="Slide_Fork_Stopping_sensing_Fork_stroke_result" /></td>
            <td><Field type="text" name="Slide_Fork_Stopping_sensing_Fork_stroke_action" /></td>
            <td><Field type="text" name="Slide_Fork_Stopping_sensing_Fork_stroke_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td><b>Fork body</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>a Middle rail</td>
            <td>Grove wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Fork_body_Middle_rail_Grove_wear_tear_result" /></td>
            <td><Field type="text" name="Fork_body_Middle_rail_Grove_wear_tear_action" /></td>
            <td><Field type="text" name="Fork_body_Middle_rail_Grove_wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Lubrication</td>
            <td>Visual</td>
            <td><Field type="text" name="Fork_body_Middle_rail_Lubrication_result" /></td>
            <td><Field type="text" name="Fork_body_Middle_rail_Lubrication_action" /></td>
            <td><Field type="text" name="Fork_body_Middle_rail_Lubrication_remarks" /></td>
          </tr>
          <tr>
            <td>10</td>
            <td>b Cam followers</td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Fork_body_Cam_followers_Wear_tear_result" /></td>
            <td><Field type="text" name="Fork_body_Cam_followers_Wear_tear_action" /></td>
            <td><Field type="text" name="Fork_body_Cam_followers_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Lubrication</td>
            <td>Visual</td>
            <td><Field type="text" name="Fork_body_Cam_followers_Lubrication_result" /></td>
            <td><Field type="text" name="Fork_body_Cam_followers_Lubrication_action" /></td>
            <td><Field type="text" name="Fork_body_Cam_followers_Lubrication_remarks" /></td>
          </tr>

        </table>

        <h3>IV - Trolley Unit</h3>
        <table>
          <tr>
            <th>Item</th>
            <th>Inspection Item</th>
            <th>Check Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Collector arm</td>
            <td>Fasteners condition</td>
            <td>Touch</td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Fasteners_result" /></td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Fasteners_action" /></td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Fasteners_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wear & tear</td>
            <td>Visual</td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Wear_tear_result" /></td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Wear_tear_action" /></td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Wear_tear_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Dust accumulation</td>
            <td>Visual</td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Dust_result" /></td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Dust_action" /></td>
            <td><Field type="text" name="Trolley_Unit_Collector_arm_Dust_remarks" /></td>
          </tr>
        </table>
        <h3>V - Control Panel Section</h3>
        <table>
          <tr>
            <th>Item</th>
            <th>Inspection Item</th>
            <th>Check Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Electro-magnetic contactors</td>
            <td>On / Off condition</td>
            <td>Touch</td>
            <td><Field type="text" name="Control_Panel_E_magnetic_contactors_result" /></td>
            <td><Field type="text" name="Control_Panel_E_magnetic_contactors_action" /></td>
            <td><Field type="text" name="Control_Panel_E_magnetic_contactors_remarks" /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Electric wiring</td>
            <td>Snapped / broken wire</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_Electric_wiring_Snapped_result" /></td>
            <td><Field type="text" name="Control_Panel_Electric_wiring_Snapped_action" /></td>
            <td><Field type="text" name="Control_Panel_Electric_wiring_Snapped_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Wiring connection</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_Electric_wiring_connection_result" /></td>
            <td><Field type="text" name="Control_Panel_Electric_wiring_connection_action" /></td>
            <td><Field type="text" name="Control_Panel_Electric_wiring_connection_remarks" /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Transformer / Power supply</td>
            <td>Voltage measurement</td>
            <td>Measure</td>
            <td><Field type="text" name="Control_Panel_Transformer_result" /></td>
            <td><Field type="text" name="Control_Panel_Transformer_action" /></td>
            <td><Field type="text" name="Control_Panel_Transformer_remarks" /></td>
          </tr>
          <tr>
            <td>4</td>
            <td>P.C. Board</td>
            <td>Connectors connection</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_PC_Board_result" /></td>
            <td><Field type="text" name="Control_Panel_PC_Board_action" /></td>
            <td><Field type="text" name="Control_Panel_PC_Board_remarks" /></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Operation panel buttons</td>
            <td>Functionality</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_panel_buttons_result" /></td>
            <td><Field type="text" name="Control_Panel_panel_buttons_action" /></td>
            <td><Field type="text" name="Control_Panel_panel_buttons_remarks" /></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Indicator</td>
            <td>Functionality</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_Indicator_result" /></td>
            <td><Field type="text" name="Control_Panel_Indicator_action" /></td>
            <td><Field type="text" name="Control_Panel_Indicator_remarks" /></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Emergency stop button</td>
            <td>Functionality</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_E_stop_button_result" /></td>
            <td><Field type="text" name="Control_Panel_E_stop_button_action" /></td>
            <td><Field type="text" name="Control_Panel_E_stop_button_remarks" /></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Ventilation fan</td>
            <td>Functionality</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_Ventilation_fan_result" /></td>
            <td><Field type="text" name="Control_Panel_Ventilation_fan_action" /></td>
            <td><Field type="text" name="Control_Panel_Ventilation_fan_remarks" /></td>
          </tr>
          <tr>
            <td>9</td>
            <td>4-bit sensor</td>
            <td>Functionality</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_4bit_sensor_result" /></td>
            <td><Field type="text" name="Control_Panel_4bit_sensor_action" /></td>
            <td><Field type="text" name="Control_Panel_4bit_sensor_remarks" /></td>
          </tr>
          <tr>
            <td>10</td>
            <td>Optical transmitter</td>
            <td>Alignment</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_Optical_transmitter_Alignment_result" /></td>
            <td><Field type="text" name="Control_Panel_Optical_transmitter_Alignment_action" /></td>
            <td><Field type="text" name="Control_Panel_Optical_transmitter_Alignment_remarks" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>LED light condition</td>
            <td>Visual</td>
            <td><Field type="text" name="Control_Panel_Optical_transmitter_LED_result" /></td>
            <td><Field type="text" name="Control_Panel_Optical_transmitter_LED_action" /></td>
            <td><Field type="text" name="Control_Panel_Optical_transmitter_LED_remarks" /></td>
          </tr>
        </table>
        <table><tbody>

          <h3>VI - Detectors/Sensors</h3>
          <table>
            <tr>
              <th>Item</th>
              <th>Inspection Item</th>
              <th>Check Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Pre-occupied load detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Pre_occupied_load_result" /></td>
              <td><Field type="text" name="Detectors_Pre_occupied_load_action" /></td>
              <td><Field type="text" name="Detectors_Pre_occupied_load_remarks" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Load profile limit switch</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Load_profile_result" /></td>
              <td><Field type="text" name="Detectors_Load_profile_action" /></td>
              <td><Field type="text" name="Detectors_Load_profile_remarks" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>High load sensors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_High_load_result" /></td>
              <td><Field type="text" name="Detectors_High_load_action" /></td>
              <td><Field type="text" name="Detectors_High_load_remarks" /></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Fork loaded sensor</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Fork_loaded_result" /></td>
              <td><Field type="text" name="Detectors_Fork_loaded_action" /></td>
              <td><Field type="text" name="Detectors_Fork_loaded_remarks" /></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Carriage chain loose detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Carriage_chain_loose_result" /></td>
              <td><Field type="text" name="Detectors_Carriage_chain_loose_action" /></td>
              <td><Field type="text" name="Detectors_Carriage_chain_loose_remarks" /></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Load overhanged sensors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Load_overhanged_result" /></td>
              <td><Field type="text" name="Detectors_Load_overhanged_action" /></td>
              <td><Field type="text" name="Detectors_Load_overhanged_remarks" /></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Load projection sensors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Load_projection_result" /></td>
              <td><Field type="text" name="Detectors_Load_projection_action" /></td>
              <td><Field type="text" name="Detectors_Load_projection_remarks" /></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Fork end detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Fork_end_detectors_result" /></td>
              <td><Field type="text" name="Detectors_Fork_end_detectors_action" /></td>
              <td><Field type="text" name="Detectors_Fork_end_detectors_remarks" /></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Fork centering detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Detectors_Fork_centering_detectors_result" /></td>
              <td><Field type="text" name="Detectors_Fork_centering_detectors_action" /></td>
              <td><Field type="text" name="Detectors_Fork_centering_detectors_remarks" /></td>
            </tr>
            <tr>
              <td></td>
              <td><b>Crane travelling detectors</b></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Home position</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Crane_travelling_Home_position_result" /></td>
              <td><Field type="text" name="Crane_travelling_Home_position_action" /></td>
              <td><Field type="text" name="Crane_travelling_Home_position_remarks" /></td>
            </tr>
            <tr>
              <td>11</td>
              <td>Regular position (front)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Crane_travelling_Regular_position_front_result" /></td>
              <td><Field type="text" name="Crane_travelling_Regular_position_front_action" /></td>
              <td><Field type="text" name="Crane_travelling_Regular_position_front_remarks" /></td>
            </tr>
            <tr>
              <td>12</td>
              <td>Regular position (rear)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Crane_travelling_Regular_position_rear_result" /></td>
              <td><Field type="text" name="Crane_travelling_Regular_position_rear_action" /></td>
              <td><Field type="text" name="Crane_travelling_Regular_position_rear_remarks" /></td>
            </tr>
            <tr>
              <td>13</td>
              <td>Forward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Crane_travelling_Forward_decel1_result" /></td>
              <td><Field type="text" name="Crane_travelling_Forward_decel1_action" /></td>
              <td><Field type="text" name="Crane_travelling_Forward_decel1_remarks" /></td>
            </tr>
            <tr>
              <td>14</td>
              <td>Backward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Crane_travelling_Backward_decel1_result" /></td>
              <td><Field type="text" name="Crane_travelling_Backward_decel1_action" /></td>
              <td><Field type="text" name="Crane_travelling_Backward_decel1_remarks" /></td>
            </tr>
            <tr>
              <td>15</td>
              <td>Dece1 2</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Crane_travelling_Dec_1_2_result" /></td>
              <td><Field type="text" name="Crane_travelling_Dec_1_2_action" /></td>
              <td><Field type="text" name="Crane_travelling_Dec_1_2_remarks" /></td>
            </tr>
            <tr>
              <td>16</td>
              <td>End limit (emergency)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Crane_travelling_End_limit_result" /></td>
              <td><Field type="text" name="Crane_travelling_End_limit_action" /></td>
              <td><Field type="text" name="Crane_travelling_End_limit_remarks" /></td>
            </tr>
            <tr>
              <td></td>
              <td><b>Carriage hoisting detectors</b></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>17</td>
              <td>Upper level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Upper_level_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Upper_level_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Upper_level_remarks" /></td>
            </tr>
            <tr>
              <td>18</td>
              <td>Lower level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Lower_level_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Lower_level_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Lower_level_remarks" /></td>
            </tr>
            <tr>
              <td>19</td>
              <td>Fork level zone</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Fork_level_zone_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Fork_level_zonel_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Fork_level_zone_remarks" /></td>
            </tr>
            <tr>
              <td>20</td>
              <td>Station upper level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Station_upper_level_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_upper_level_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_upper_level_remarks" /></td>
            </tr>
            <tr>
              <td>21</td>
              <td>Station lower level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Station_lower_level_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_lower_level_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_lower_level_remarks" /></td>
            </tr>
            <tr>
              <td>22</td>
              <td>Upward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Station_Upward_decel1_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_Upward_decel1_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_Upward_decel1_remarks" /></td>
            </tr>
            <tr>
              <td>23</td>
              <td>Downward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Station_Downward_decel1_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_Downward_decel1_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Station_Downward_decel1_remarks" /></td>
            </tr>
            <tr>
              <td>24</td>
              <td>Decel 2</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_Decel2_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_Decel2_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_Decel2_remarks" /></td>
            </tr>
            <tr>
              <td>25</td>
              <td>End limit (emergency)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><Field type="text" name="Carriage_hoisting_End_limit_result" /></td>
              <td><Field type="text" name="Carriage_hoisting_End_limit_action" /></td>
              <td><Field type="text" name="Carriage_hoisting_End_limit_remarks" /></td>
            </tr>
          </table>


        </tbody></table>


        <div class="textbox-container">
          <h2>Remarks:</h2>
        </div>


        <table>

          <tbody><tr>
            <td colspan="2">
              <Field as="textarea" className='border-black border w-[100%]' id="UH_Crane_INSPECTION_SUMMARY" name="UH_Crane_INSPECTION_SUMMARY" rows="6" cols="50"></Field>
            </td>
          </tr>
            <tr>
              <td>
                <p><strong>Method</strong> (M = Measure, S = Sound, T = Touch, V = Visual)</p>
              </td>

            </tr>
            <tr>
              <td>
                <p><strong>Action</strong> (A - Adjust, C - Cleaned, M - Make Repair, R - Replace)</p>
              </td>
              <td>
                <div class="textbox-container">
                  <strong>Verified by (MNC)</strong>
                  <Field type="text" id="UH_Crane_Verified_by_MNC" name="UH_Crane_Verified_by_MNC" />
                </div>
              </td>

            </tr>

          </tbody></table>





      </Form>

    </Formik>

  )
}

export default MonthlyPMUH