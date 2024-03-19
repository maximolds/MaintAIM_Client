import React, {useState, useEffect} from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './MonthlyPMUL.css'
import axios from 'axios';
import ulimage from '../../assets/images/UL.jpg'
import * as Yup from 'yup';
function MonthlyPMUL() {

    let navigate = useNavigate();
    const { currentColor, activeMenu, setActiveMenu } = useStateContext();

    const validationSchema = Yup.object().shape({
        ul_crane_inspected_by: Yup.string().required("Please click field and press space.")
      });

    const initialValues = {
        ul_crane_inspected_by: "",
        ul_crane_approved_by: "",
        ul_crane_no: "",
        ul_crane_date: "",
        ul_crane_time_start: "",
        ul_crane_time_end: "",
        Crane_Drive_Unit_Before_Crane_motor_Result: "",
        Crane_Drive_Unit_Before_Crane_motor_Actions: "",
        Crane_Drive_Unit_Before_Crane_motor_Remarks: "",
        Crane_Drive_Unit_before_reducer_cracks_result: "",
        Crane_Drive_Unit_before_reducer_cracks_action: "",
        Crane_Drive_Unit_before_reducer_cracks_remarks: "",
        Crane_Drive_Unit_before_reducer_leaking_result: "",
        Crane_Drive_Unit_before_reducer_leaking_action: "",
        Crane_Drive_Unit_before_reducer_leaking_remarks: "",
        Crane_Drive_Unit_before_reducer_level_result: "",
        Crane_Drive_Unit_before_reducer_level_action: "",
        Crane_Drive_Unit_before_reducer_level_remarks: "",
        Crane_Drive_Unit_before_break_gap_result: "",
        Crane_Drive_Unit_before_break_gap_remarks: "",
        Crane_Drive_Unit_before_break_gap_action: "",
        Crane_Drive_Unit_before_guide_roller_result: "",
        Crane_Drive_Unit_before_guide_roller_action: "",
        Crane_Drive_Unit_before_guide_roller_remarks: "",
        Crane_Drive_Unit_before_crane_encoder_result: "",
        Crane_Drive_Unit_before_crane_encoder_action: "",
        Crane_Drive_Unit_before_crane_encoder_remarks: "",
        Crane_Drive_Unit_before_crane_wheels_diameter_result: "",
        Crane_Drive_Unit_before_crane_wheels_diameter_action: "",
        Crane_Drive_Unit_before_crane_wheels_diameter_remarks: "",
        Crane_Drive_Unit_before_crane_wheels_damage_result: "",
        Crane_Drive_Unit_before_crane_wheels_damage_action: "",
        Crane_Drive_Unit_before_crane_wheels_damage_remarks: "",
        Crane_Drive_Unit_during_crane_motor_result: "",
        Crane_Drive_Unit_during_crane_motor_action: "",
        Crane_Drive_Unit_during_crane_motor_remarks: "",
        Crane_Drive_Unit_during_speed_reducer_result: "",
        Crane_Drive_Unit_during_speed_reducer_action: "",
        Crane_Drive_Unit_during_speed_reducer_remarks: "",
        Crane_Drive_Unit_during_guide_Roller_result: "",
        Crane_Drive_Unit_during_guide_Roller_action: "",
        Crane_Drive_Unit_during_guide_Roller_remarks: "",
        Crane_Drive_Unit_after_crane_motor_result: "",
        Crane_Drive_Unit_after_crane_motor_action: "",
        Crane_Drive_Unit_after_crane_motor_remarks: "",
        Crane_Drive_Unit_after_speed_reducer_result: "",
        Crane_Drive_Unit_after_speed_reducer_action: "",
        Crane_Drive_Unit_after_speed_reducer_remarks: "",
        Crane_Drive_Unit_after_screws_result: "",
        Crane_Drive_Unit_after_screws_action: "",
        Crane_Drive_Unit_after_screws_remarks: "",
        Carriage_Drive_Unit_before_carriage_motor_result: "",
        Carriage_Drive_Unit_before_carriage_motor_action: "",
        Carriage_Drive_Unit_before_carriage_motor_remarks: "",
        Carriage_Drive_Unit_before_speed_reducer_cracks_result: "",
        Carriage_Drive_Unit_before_speed_reducer_cracks_action: "",
        Carriage_Drive_Unit_before_speed_reducer_cracks_remarks: "",
        Carriage_Drive_Unit_before_speed_reducer_leaking_result: "",
        Carriage_Drive_Unit_before_speed_reducer_leaking_action: "",
        Carriage_Drive_Unit_before_speed_reducer_leaking_remarks: "",
        Carriage_Drive_Unit_before_speed_reducer_grease_qty_result: "",
        Carriage_Drive_Unit_before_speed_reducer_grease_qty_action: "",
        Carriage_Drive_Unit_before_speed_reducer_grease_qty_remarks: "",
        Carriage_Drive_Unit_before_break_gap_result: "",
        Carriage_Drive_Unit_before_break_gap_action: "",
        Carriage_Drive_Unit_before_break_gap_remarks: "",
        Carriage_Drive_Unit_before_wire_rope_damage_result: "",
        Carriage_Drive_Unit_before_wire_rope_damage_action: "",
        Carriage_Drive_Unit_before_wire_rope_damage_remarks: "",
        Carriage_Drive_Unit_before_wire_rope_installation_result: "",
        Carriage_Drive_Unit_before_wire_rope_installation_action: "",
        Carriage_Drive_Unit_before_wire_rope_installation_remarks: "",
        Carriage_Drive_Unit_before_wire_rope_lubrication_result: "",
        Carriage_Drive_Unit_before_wire_rope_lubrication_action: "",
        Carriage_Drive_Unit_before_wire_rope_lubrication_remarks: "",
        Carriage_Drive_Unit_before_wire_rope_extra_result: "",
        Carriage_Drive_Unit_before_wire_rope_extra_action: "",
        Carriage_Drive_Unit_before_wire_rope_extra_remarks: "",
        Carriage_Drive_Unit_before_wiring_drum_result: "",
        Carriage_Drive_Unit_before_wiring_drum_action: "",
        Carriage_Drive_Unit_before_wiring_drum_remarks: "",
        Carriage_Drive_Unit_before_carriage_encoder_result: "",
        Carriage_Drive_Unit_before_carriage_encoder_action: "",
        Carriage_Drive_Unit_before_carriage_encoder_remarks: "",
        Carriage_Drive_Unit_during_motor_drum_result: "",
        Carriage_Drive_Unit_during_motor_drum_action: "",
        Carriage_Drive_Unit_during_motor_drum_remarks: "",
        Carriage_Drive_Unit_during_wiring_drum_result: "",
        Carriage_Drive_Unit_during_wiring_drum_action: "",
        Carriage_Drive_Unit_during_wiring_drum_remarks: "",
        Carriage_Drive_Unit_during_wire_rope_result: "",
        Carriage_Drive_Unit_during_wire_rope_action: "",
        Carriage_Drive_Unit_during_wire_rope_remarks: "",
        Carriage_Drive_Unit_after_carriage_motor_result: "",
        Carriage_Drive_Unit_after_carriage_motor_action: "",
        Carriage_Drive_Unit_after_carriage_motor_remarks: "",
        Carriage_Drive_Unit_after_screws_result: "",
        Carriage_Drive_Unit_after_screws_action: "",
        Carriage_Drive_Unit_after_screws_remarks: "",
        Hoisting_Carriage_before_Carriage_frame_result: "",
        Hoisting_Carriage_before_Carriage_frame_action: "",
        Hoisting_Carriage_before_Carriage_frame_remarks: "",
        Hoisting_Carriage_before_wire_rope_damage_result: "",
        Hoisting_Carriage_before_wire_rope_damage_action: "",
        Hoisting_Carriage_before_wire_rope_damage_remarks: "",
        Hoisting_Carriage_before_wire_rope_lubrication_result: "",
        Hoisting_Carriage_before_wire_rope_lubrication_action: "",
        Hoisting_Carriage_before_wire_rope_lubrication_remarks: "",
        Hoisting_Carriage_before_guide_roller_result: "",
        Hoisting_Carriage_before_guide_roller_action: "",
        Hoisting_Carriage_before_guide_roller_remarks: "",
        Hoisting_Carriage_before_face_roller_result: "",
        Hoisting_Carriage_before_face_roller_action: "",
        Hoisting_Carriage_before_face_roller_remarks: "",
        Hoisting_Carriage_before_displacement_result: "",
        Hoisting_Carriage_before_displacement_action: "",
        Hoisting_Carriage_before_displacement_remarks: "",
        Hoisting_Carriage_before_count_plate_result: "",
        Hoisting_Carriage_before_count_plate_action: "",
        Hoisting_Carriage_before_count_plate_remarks: "",
        Hoisting_Carriage_before_dog_on_dec_result: "",
        Hoisting_Carriage_before_dog_on_dec_action: "",
        Hoisting_Carriage_before_dog_on_dec_remarks: "",
        Hoisting_Carriage_before_dog_on_Emg_result: "",
        Hoisting_Carriage_before_dog_on_Emg_action: "",
        Hoisting_Carriage_before_dog_on_Emg_remarks: "",
        Hoisting_Carriage_before_positioning_sensor_damage_result: "",
        Hoisting_Carriage_before_positioning_sensor_damage_action: "",
        Hoisting_Carriage_before_positioning_sensor_damage_remarks: "",
        Hoisting_Carriage_before_positioning_sensor_lamp_result: "",
        Hoisting_Carriage_before_positioning_sensor_lamp_action: "",
        Hoisting_Carriage_before_positioning_sensor_lamp_remarks: "",
        Hoisting_Carriage_before_load_detector_result: "",
        Hoisting_Carriage_before_load_detector_action: "",
        Hoisting_Carriage_before_load_detector_remarks: "",
        Hoisting_Carriage_before_emergency_looseness_result: "",
        Hoisting_Carriage_before_emergency_looseness_action: "",
        Hoisting_Carriage_before_emergency_looseness_remarks: "",
        Hoisting_Carriage_before_emergency_function_result: "",
        Hoisting_Carriage_before_emergency_function_action: "",
        Hoisting_Carriage_before_emergency_function_remarks: "",
        Hoisting_Carriage_before_limit_switch_result: "",
        Hoisting_Carriage_before_limit_switch_action: "",
        Hoisting_Carriage_before_limit_switch_remarks: "",
        Hoisting_Carriage_before_wire_clip_result: "",
        Hoisting_Carriage_before_wire_clip_action: "",
        Hoisting_Carriage_before_wire_clip_remarks: "",
        Hoisting_Carriage_during_guide_roller_result: "",
        Hoisting_Carriage_during_guide_roller_action: "",
        Hoisting_Carriage_during_guide_roller_remarks: "",
        Hoisting_Carriage_during_displacement_result: "",
        Hoisting_Carriage_during_displacement_action: "",
        Hoisting_Carriage_during_displacement_remarks: "",
        Hoisting_Carriage_after_screws_result: "",
        Hoisting_Carriage_after_screws_action: "",
        Hoisting_Carriage_after_screws_remarks: "",
        Slide_Fork_before_fork_result: "",
        Slide_Fork_before_fork_action: "",
        Slide_Fork_before_fork_remarks: "",
        Slide_Fork_before_load_detector_result: "",
        Slide_Fork_before_load_detector_action: "",
        Slide_Fork_before_load_detector_remarks: "",
        Slide_Fork_before_drive_chain_damage_result: "",
        Slide_Fork_before_drive_chain_damage_action: "",
        Slide_Fork_before_drive_chain_damage_remarks: "",
        Slide_Fork_before_drive_chain_slack_result: "",
        Slide_Fork_before_drive_chain_slack_action: "",
        Slide_Fork_before_drive_chain_slack_remarks: "",
        Slide_Fork_before_drive_chain_lubrication_result: "",
        Slide_Fork_before_drive_chain_lubrication_action: "",
        Slide_Fork_before_drive_chain_lubrication_remarks: "",
        Slide_Fork_before_drive_chain_elongation_result: "",
        Slide_Fork_before_drive_chain_elongation_action: "",
        Slide_Fork_before_drive_chain_elongation_remarks: "",
        Slide_Fork_before_cam_follower_damage_result: "",
        Slide_Fork_before_cam_follower_damage_action: "",
        Slide_Fork_before_cam_follower_damage_remarks: "",
        Slide_Fork_before_cam_follower_lubrication_result: "",
        Slide_Fork_before_cam_follower_lubrication_action: "",
        Slide_Fork_before_cam_follower_lubrication_remarks: "",
        Slide_Fork_before_cam_follower_rotates_result: "",
        Slide_Fork_before_cam_follower_rotates_action: "",
        Slide_Fork_before_cam_follower_rotates_remarks: "",
        Slide_Fork_before_limit_sw_looseness_result: "",
        Slide_Fork_before_limit_sw_looseness_action: "",
        Slide_Fork_before_limit_sw_looseness_remarks: "",
        Slide_Fork_before_limit_sw_function_result: "",
        Slide_Fork_before_limit_sw_function_action: "",
        Slide_Fork_before_limit_sw_function_remarks: "",
        Slide_Fork_before_sprocket_result: "",
        Slide_Fork_before_sprocket_action: "",
        Slide_Fork_before_sprocket_remarks: "",
        Slide_Fork_before_fork_motor_result: "",
        Slide_Fork_before_fork_motor_action: "",
        Slide_Fork_before_fork_motor_remarks: "",
        Slide_Fork_before_break_gap_result: "",
        Slide_Fork_before_break_gap_action: "",
        Slide_Fork_before_break_gap_remarks: "",
        Slide_Fork_before_torque_damage_result: "",
        Slide_Fork_before_torque_damage_action: "",
        Slide_Fork_before_torque_damage_remarks: "",
        Slide_Fork_before_torque_set_value_result: "",
        Slide_Fork_before_torque_set_value_action: "",
        Slide_Fork_before_torque_set_value_remarks: "",
        Slide_Fork_before_fork_extract_result: "",
        Slide_Fork_before_fork_extract_action: "",
        Slide_Fork_before_fork_extract_remarks: "",
        Slide_Fork_during_fork_result: "",
        Slide_Fork_during_fork_action: "",
        Slide_Fork_during_fork_remarks: "",
        Slide_Fork_during_sprocket_result: "",
        Slide_Fork_during_sprocket_action: "",
        Slide_Fork_during_sprocket_remarks: "",
        Slide_Fork_during_load_detector_result: "",
        Slide_Fork_during_load_detector_action: "",
        Slide_Fork_during_load_detector_remarks: "",
        Slide_Fork_after_screws_result: "",
        Slide_Fork_after_screws_action: "",
        Slide_Fork_after_screws_remarks: "",
        Frames_before_guide_roller_result: "",
        Frames_before_guide_roller_action: "",
        Frames_before_guide_roller_remarks: "",
        Frames_before_upper_sheave_result: "",
        Frames_before_upper_sheave_action: "",
        Frames_before_upper_sheave_remarks: "",
        Frames_before_feed_rail_result: "",
        Frames_before_feed_rail_action: "",
        Frames_before_feed_rail_remarks: "",
        Frames_before_collector_result: "",
        Frames_before_collector_action: "",
        Frames_before_collector_remarks: "",
        Frames_before_upper_frame_result: "",
        Frames_before_upper_frame_action: "",
        Frames_before_upper_frame_remarks: "",
        Frames_before_lower_frame_result: "",
        Frames_before_lower_frame_action: "",
        Frames_before_lower_frame_remarks: "",
        Frames_during_upper_guide_result: "",
        Frames_during_upper_guide_action: "",
        Frames_during_upper_guide_remarks: "",
        Frames_after_screws_result: "",
        Frames_after_screws_action: "",
        Frames_after_screws_remarks: "",
        Rails_and_Countplate_before_Bottom_roller_result: "",
        Rails_and_Countplate_before_Bottom_roller_action: "",
        Rails_and_Countplate_before_Bottom_roller_remarks: "",
        Rails_and_Countplate_before_Top_roller_result: "",
        Rails_and_Countplate_before_Top_roller_action: "",
        Rails_and_Countplate_before_Top_roller_remarks: "",
        Rails_and_Countplate_before_count_plate_result: "",
        Rails_and_Countplate_before_count_plate_action: "",
        Rails_and_Countplate_before_count_plate_remarks: "",
        Rails_and_Countplate_before_dog_emg_result: "",
        Rails_and_Countplate_before_dog_emg_action: "",
        Rails_and_Countplate_before_dog_emg_remarks: "",
        Rails_and_Countplate_during_bottom_rail_result: "",
        Rails_and_Countplate_during_bottom_rail_action: "",
        Rails_and_Countplate_during_bottom_rail_remarks: "",
        Rails_and_Countplate_during_top_rail_result: "",
        Rails_and_Countplate_during_top_rail_action: "",
        Rails_and_Countplate_during_top_rail_remarks: "",
        Rails_and_Countplate_during_count_plate_result: "",
        Rails_and_Countplate_during_count_plate_action: "",
        Rails_and_Countplate_during_count_plate_remarks: "",
        Rails_and_Countplate_after_screws_result: "",
        Rails_and_Countplate_after_screws_action: "",
        Rails_and_Countplate_after_screws_remarks: "",
        Sensors_before_Crane_sensor_result: "",
        Sensors_before_Crane_sensor_action: "",
        Sensors_before_Crane_sensor_remarks: "",
        Sensors_before_LW_result: "",
        Sensors_before_LW_action: "",
        Sensors_before_LW_remarks: "",
        Sensors_before_Optical_result: "",
        Sensors_before_Optical_action: "",
        Sensors_before_Optical_remarks: "",
        Sensors_after_screws_result: "",
        Sensors_after_screws_action: "",
        Sensors_after_screws_remarks: "",
        Panels_and_Ladder_before_operational_cleaning_result: "",
        Panels_and_Ladder_before_operational_cleaning_action: "",
        Panels_and_Ladder_before_operational_cleaning_remarks: "",
        Panels_and_Ladder_before_operational_lamp_result: "",
        Panels_and_Ladder_before_operational_lamp_action: "",
        Panels_and_Ladder_before_operational_lamp_remarks: "",
        Panels_and_Ladder_before_operational_keys_result: "",
        Panels_and_Ladder_before_operational_keys_action: "",
        Panels_and_Ladder_before_operational_keys_remarks: "",
        Panels_and_Ladder_before_control_cleaning_result: "",
        Panels_and_Ladder_before_control_cleaning_action: "",
        Panels_and_Ladder_before_control_cleaning_remarks: "",
        Panels_and_Ladder_before_control_wiring_result: "",
        Panels_and_Ladder_before_control_wiring_action: "",
        Panels_and_Ladder_before_control_wiring_remarks: "",
        Panels_and_Ladder_before_safety_plug_result: "",
        Panels_and_Ladder_before_safety_plug_action: "",
        Panels_and_Ladder_before_safety_plug_remarks: "",
        Panels_and_Ladder_before_safety_fence_result: "",
        Panels_and_Ladder_before_safety_fence_action: "",
        Panels_and_Ladder_before_safety_fence_remarks: "",
        Panels_and_Ladder_after_screws_result: "",
        Panels_and_Ladder_after_screws_action: "",
        Panels_and_Ladder_after_screws_remarks: "",
        Inverter_Unit_Before_Inverter_wiring_result: "",
        Inverter_Unit_Before_Inverter_wiring_action: "",
        Inverter_Unit_Before_Inverter_wiring_remarks: "",
        Inverter_Unit_Before_Inverter_bolts_result: "",
        Inverter_Unit_Before_Inverter_bolts_action: "",
        Inverter_Unit_Before_Inverter_bolts_remarks: "",
        Inverter_Unit_Before_Inverter_sound_result: "",
        Inverter_Unit_Before_Inverter_sound_action: "",
        Inverter_Unit_Before_Inverter_sound_remarks: "",
        Inverter_Unit_Before_Inverter_cleaning_result: "",
        Inverter_Unit_Before_Inverter_cleaning_action: "",
        Inverter_Unit_Before_Inverter_cleaning_remarks: "",
        Inverter_Unit_Before_Inverter_damage_result: "",
        Inverter_Unit_Before_Inverter_damage_action: "",
        Inverter_Unit_Before_Inverter_damage_remarks: "",
        Inverter_Unit_Before_Inverter_function_result: "",
        Inverter_Unit_Before_Inverter_function_action: "",
        Inverter_Unit_Before_Inverter_function_remarks: "",
        Carriage_Fork_during_load_detectors_result: "",
        Carriage_Fork_during_load_detectors_action: "",
        Carriage_Fork_during_load_detectors_remarks: "",
        Carriage_Fork_during_load_profile_result: "",
        Carriage_Fork_during_load_profile_action: "",
        Carriage_Fork_during_load_profile_remarks: "",
        Carriage_Fork_during_fork_loaded_result: "",
        Carriage_Fork_during_fork_loaded_action: "",
        Carriage_Fork_during_fork_loaded_remarks: "",
        Carriage_Fork_during_chain_loose_result: "",
        Carriage_Fork_during_chain_loose_action: "",
        Carriage_Fork_during_chain_loose_remarks: "",
        Carriage_Fork_during_fork_end_result: "",
        Carriage_Fork_during_fork_end_action: "",
        Carriage_Fork_during_fork_end_remarks: "",
        Carriage_Fork_during_fork_centering_result: "",
        Carriage_Fork_during_fork_centering_action: "",
        Carriage_Fork_during_fork_centering_remarks: "",
        Crane_Travelling_Detectors_during_home_result: "",
        Crane_Travelling_Detectors_during_home_action: "",
        Crane_Travelling_Detectors_during_home_remarks: "",
        Crane_Travelling_Detectors_during_regular_front_result: "",
        Crane_Travelling_Detectors_during_regular_front_action: "",
        Crane_Travelling_Detectors_during_regular_front_remarks: "",
        Crane_Travelling_Detectors_during_regular_rear_result: "",
        Crane_Travelling_Detectors_during_regular_rear_action: "",
        Crane_Travelling_Detectors_during_regular_rear_remarks: "",
        Crane_Travelling_Detectors_during_Forward_decel1_result: "",
        Crane_Travelling_Detectors_during_Forward_decel1_action: "",
        Crane_Travelling_Detectors_during_Forward_decel1_remarks: "",
        Crane_Travelling_Detectors_during_Backward_decel1_result: "",
        Crane_Travelling_Detectors_during_Backward_decel1_action: "",
        Crane_Travelling_Detectors_during_Backward_decel1_remarks: "",
        Crane_Travelling_Detectors_during_decel2_result: "",
        Crane_Travelling_Detectors_during_decel2_action: "",
        Crane_Travelling_Detectors_during_decel2_remarks: "",
        Crane_Travelling_Detectors_during_end_limit_emergency_result: "",
        Crane_Travelling_Detectors_during_end_limit_emergency_action: "",
        Crane_Travelling_Detectors_during_end_limit_emergency_remarks: "",
        Crane_Travelling_Detectors_during_upper_level_result: "",
        Crane_Travelling_Detectors_during_upper_level_action: "",
        Crane_Travelling_Detectors_during_upper_level_remarks: "",
        Crane_Travelling_Detectors_during_lower_level_result: "",
        Crane_Travelling_Detectors_during_lower_level_action: "",
        Crane_Travelling_Detectors_during_lower_level_remarks: "",
        Crane_Travelling_Detectors_during_fork_level_result: "",
        Crane_Travelling_Detectors_during_fork_level_action: "",
        Crane_Travelling_Detectors_during_fork_level_remarks: "",
        Crane_Travelling_Detectors_during_station_upper_result: "",
        Crane_Travelling_Detectors_during_station_upper_action: "",
        Crane_Travelling_Detectors_during_station_upper_remarks: "",
        Crane_Travelling_Detectors_during_station_lower_result: "",
        Crane_Travelling_Detectors_during_station_lower_action: "",
        Crane_Travelling_Detectors_during_station_lower_remarks: "",
        Crane_Travelling_Detectors_during_Upward_decel1_result: "",
        Crane_Travelling_Detectors_during_Upward_decel1_action: "",
        Crane_Travelling_Detectors_during_Upward_decel1_remarks: "",
        Crane_Travelling_Detectors_during_Downward_decel1_result: "",
        Crane_Travelling_Detectors_during_Downward_decel1_action: "",
        Crane_Travelling_Detectors_during_Downward_decel1_remarks: "",
        Crane_Travelling_Detectors_during_End_limit_result: "",
        Crane_Travelling_Detectors_during_End_limit_action: "",
        Crane_Travelling_Detectors_during_End_limit_remarks: "",
        UL_crane_INSPECTION_SUMMARY_RECOMMENDATION: "",
        UL_crane_Verified_by_MNC: ""
    };

    const onSubmit = (data) => {
        axios.post("https://maintaimdb-044f7fcd2d92.herokuapp.com/ulchecklist", data,
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
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                <Form id="checklistForm" className='bg-[#f3f5f5]'>
                    <h1 className='text-3xl font-extrabold dark:text-gray-200 mb-5'>UL CRANE INSPECTION CHECKLIST (MONTHLY)</h1>

                    <div className='flex mt-2'>
                        <button
                            type='submit'
                            className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
rounded-xl buttonShadow mt-4 mr-2  
bg-white hover:text-black flex justify-center border-1 border-fade-blue
items-center text-center`}
                            style={{ color: currentColor }}

                        >Submit</button>

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
                                    <label for="ul_crane_inspected_by">Inspected by:</label>
                                    <ErrorMessage className='text-red-500' name="ul_crane_inspected_by" component="span" />
                                    <Field type="text" id="ul_crane_inspected_by" name="ul_crane_inspected_by"
                                    value={authState.firstname}
                                    />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_approved_by">Approved by (Supervisor):</label>
                                    <Field type="text" id="ul_crane_approved_by" name="ul_crane_approved_by" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_no">Crane Number:</label>
                                    <Field type="text" id="ul_crane_no" name="ul_crane_no" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_date">Date:</label>
                                    <Field type="date" id="ul_crane_date" name="ul_crane_date" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_time_start">Time Start:</label>
                                    <Field type="time" id="ul_crane_time_start" name="ul_crane_time_start" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_time_end">Time End:</label>
                                    <Field type="time" id="ul_crane_time_end" name="ul_crane_time_end" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Crane Drive Unit</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Crane motor</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Crane_Drive_Unit_Before_Crane_motor_Result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_Before_Crane_motor_Actions" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_Before_Crane_motor_Remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_cracks_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_cracks_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_cracks_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease leaking</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_leaking_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_leaking_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_leaking_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease quantity/level</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_level_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_level_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_reducer_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Brake gap</td>
                            <td>Check clearance. (KB=0.3 - 0.8) (XB-4=0.25 - 0.6) mm</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_break_gap_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_break_gap_remarks" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_break_gap_action" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Traveling guide roller</td>
                            <td>Check for diameter. (over 98mm)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_guide_roller_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_guide_roller_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Crane wheels</td>
                            <td>Check for diameter (limit 196mm)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if there is any damage or deformation to the crane wheels</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Crane Motor</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_crane_motor_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_crane_motor_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_crane_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_speed_reducer_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_speed_reducer_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_speed_reducer_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Traveling guide roller</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_guide_Roller_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_guide_Roller_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_during_guide_Roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Crane Motor</td>
                            <td>Check for overheating</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_crane_motor_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_crane_motor_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_crane_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for overheating</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_speed_reducer_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_speed_reducer_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_speed_reducer_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_screws_result" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_screws_action" /></td>
                            <td><Field type="text" name="Crane_Drive_Unit_after_screws_remarks" /></td>
                        </tr>

                    </table>
                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Carriage Drive Unit</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Carriage motor</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_carriage_motor_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_carriage_motor_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_carriage_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease leaking</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease qty</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Brake gap</td>
                            <td>Check clearance. (within 0.4 - 0.5mm)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_break_gap_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_break_gap_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_break_gap_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire rope</td>
                            <td>Check damage, abrasion, rust and worn out</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for proper installation on drum groove</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for extra rope held on drum at least 2 times</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wiring drum</td>
                            <td>Check for damage and abrasion</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wiring_drum_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wiring_drum_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_wiring_drum_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Carriage encoder</td>
                            <td>Check for Installation</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_carriage_encoder_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_carriage_encoder_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_before_carriage_encoder_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Motor & drum</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_motor_drum_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_motor_drum_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_motor_drum_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wiring drum</td>
                            <td>Check for horizontal vibration</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_wiring_drum_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_wiring_drum_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_wiring_drum_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire rope</td>
                            <td>Check if rope is winded smoothly</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_wire_rope_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_wire_rope_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_during_wire_rope_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Carriage motor</td>
                            <td>Check for overheating</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_after_carriage_motor_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_after_carriage_motor_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_after_carriage_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Carriage_Drive_Unit_after_screws_result" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_after_screws_action" /></td>
                            <td><Field type="text" name="Carriage_Drive_Unit_after_screws_remarks" /></td>
                        </tr>
                    </table>
                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Hoisting Carriage</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Carriage frame</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_Carriage_frame_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_Carriage_frame_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_Carriage_frame_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire rope</td>
                            <td>Check for damage, abrasion and rust</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_rope_damage_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_rope_damage_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_rope_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Hoisting guide roller</td>
                            <td>Check diameter. (over 119mm)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_guide_roller_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_guide_roller_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Hoisting face roller</td>
                            <td>Check diameter. (over 59mm)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_face_roller_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_face_roller_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_face_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load displacement detection wire</td>
                            <td>Check function</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_displacement_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_displacement_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_displacement_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Count plate</td>
                            <td>Check for deformation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_count_plate_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_count_plate_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_count_plate_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dog on dec. sensor</td>
                            <td>Check for deformation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_dog_on_dec_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_dog_on_dec_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_dog_on_dec_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dog on Emg. Stop sensor</td>
                            <td>Check for deformation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_dog_on_Emg_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_dog_on_Emg_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_dog_on_Emg_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Carriage positioning sensor</td>
                            <td>Check for damage and rust accumulation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if lamp comes on</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load detector</td>
                            <td>Check if lamp comes on</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_load_detector_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_load_detector_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_load_detector_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Emergency stop sensor</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_emergency_looseness_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_emergency_looseness_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_emergency_looseness_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for function</td>
                            <td>Sound</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_emergency_function_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_emergency_function_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_emergency_function_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Limit switch for detecting wire tension</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_limit_switch_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_limit_switch_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_limit_switch_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire clip</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_clip_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_clip_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_before_wire_clip_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Hoisting guide roller</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><Field type="text" name="Hoisting_Carriage_during_guide_roller_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_during_guide_roller_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_during_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load displacement detection wire</td>
                            <td>Check if error occurs correctly</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Hoisting_Carriage_during_displacement_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_during_displacement_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_during_displacement_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Hoisting_Carriage_after_screws_result" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_after_screws_action" /></td>
                            <td><Field type="text" name="Hoisting_Carriage_after_screws_remarks" /></td>
                        </tr>
                    </table>

                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Slide Fork</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Fork</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_before_fork_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_fork_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_fork_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Pre-occupied load detector</td>
                            <td>Check for damage and dust accumulation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_before_load_detector_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_load_detector_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_load_detector_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork drive chain</td>
                            <td>Check for damage abrasion or rust</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_damage_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_damage_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for chain slack. (within 5mm)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_slack_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_slack_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_slack_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_lubrication_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_lubrication_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check Elongation</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_elongation_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_elongation_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_drive_chain_elongation_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Cam follower</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_damage_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_damage_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_damage_remarks" /></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_lubrication_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_lubrication_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check it it rotates smoothly</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_rotates_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_rotates_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_cam_follower_rotates_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Limit SW for detecting side end and range</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Slide_Fork_before_limit_sw_looseness_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_limit_sw_looseness_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_limit_sw_looseness_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for function</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Slide_Fork_before_limit_sw_function_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_limit_sw_function_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_limit_sw_function_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Sprocket</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_before_sprocket_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_sprocket_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_sprocket_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork motor</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_before_fork_motor_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_fork_motor_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_fork_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Brake gap</td>
                            <td>Check clearance. (FB05=0.2-0.5) (FBIA=0.15-0.5)mm</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Slide_Fork_before_break_gap_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_break_gap_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_break_gap_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Torque limitter</td>
                            <td>Check for damage cracks</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_before_torque_damage_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_torque_damage_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_torque_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for set value. (within 235N-m)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Slide_Fork_before_torque_set_value_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_torque_set_value_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_torque_set_value_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork</td>
                            <td>Extract the fork with load to empty cell. Check  if there is proper clearance of 15mm between fork end and the cell</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Slide_Fork_before_fork_extract_result" /></td>
                            <td><Field type="text" name="Slide_Fork_before_fork_extract_action" /></td>
                            <td><Field type="text" name="Slide_Fork_before_fork_extract_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Fork</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><Field type="text" name="Slide_Fork_during_fork_result" /></td>
                            <td><Field type="text" name="Slide_Fork_during_fork_action" /></td>
                            <td><Field type="text" name="Slide_Fork_during_fork_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Sprocket</td>
                            <td>Check for horizontal vibration</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_during_sprocket_result" /></td>
                            <td><Field type="text" name="Slide_Fork_during_sprocket_action" /></td>
                            <td><Field type="text" name="Slide_Fork_during_sprocket_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Pre-occupied load detector</td>
                            <td>Check if it detects the load correctly</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_during_load_detector_result" /></td>
                            <td><Field type="text" name="Slide_Fork_during_load_detector_action" /></td>
                            <td><Field type="text" name="Slide_Fork_during_load_detector_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Slide_Fork_after_screws_result" /></td>
                            <td><Field type="text" name="Slide_Fork_after_screws_action" /></td>
                            <td><Field type="text" name="Slide_Fork_after_screws_remarks" /></td>
                        </tr>
                    </table>

                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Frames</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Traveling guide roller</td>
                            <td>Check for diameter. (within 78mm)</td>
                            <td>Measure</td>
                            <td><Field type="text" name="Frames_before_guide_roller_result" /></td>
                            <td><Field type="text" name="Frames_before_guide_roller_action" /></td>
                            <td><Field type="text" name="Frames_before_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upper sheave</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Frames_before_upper_sheave_result" /></td>
                            <td><Field type="text" name="Frames_before_upper_sheave_action" /></td>
                            <td><Field type="text" name="Frames_before_upper_sheave_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Power feed rail</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Frames_before_feed_rail_result" /></td>
                            <td><Field type="text" name="Frames_before_feed_rail_action" /></td>
                            <td><Field type="text" name="Frames_before_feed_rail_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Current collector</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Frames_before_collector_result" /></td>
                            <td><Field type="text" name="Frames_before_collector_action" /></td>
                            <td><Field type="text" name="Frames_before_collector_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upper frame</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Frames_before_upper_frame_result" /></td>
                            <td><Field type="text" name="Frames_before_upper_frame_action" /></td>
                            <td><Field type="text" name="Frames_before_upper_frame_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Lower frame</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Frames_before_lower_frame_result" /></td>
                            <td><Field type="text" name="Frames_before_lower_frame_action" /></td>
                            <td><Field type="text" name="Frames_before_lower_frame_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Upper guide roller</td>
                            <td>Check for abnormal sound</td>
                            <td>sound</td>
                            <td><Field type="text" name="Frames_during_upper_guide_result" /></td>
                            <td><Field type="text" name="Frames_during_upper_guide_action" /></td>
                            <td><Field type="text" name="Frames_during_upper_guide_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Frames_after_screws_result" /></td>
                            <td><Field type="text" name="Frames_after_screws_action" /></td>
                            <td><Field type="text" name="Frames_after_screws_remarks" /></td>
                        </tr>
                    </table>
                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Rails and Countplate</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Bottom guide roller</td>
                            <td>Check for damage or deformation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_before_Bottom_roller_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_Bottom_roller_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_Bottom_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Top guide roller</td>
                            <td>Check for damage or deformation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_before_Top_roller_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_Top_roller_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_Top_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Count plate</td>
                            <td>Check for damage or deformation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_before_count_plate_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_count_plate_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_count_plate_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dog on Emg. Stop sensor</td>
                            <td>Check deformation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_before_dog_emg_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_dog_emg_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_before_dog_emg_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Bottom guide rail</td>
                            <td>Check for smooth travelling at sections</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_during_bottom_rail_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_during_bottom_rail_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_during_bottom_rail_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Top guide rail</td>
                            <td>Check for smooth travelling at sections</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_during_top_rail_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_during_top_rail_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_during_top_rail_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Count plate</td>
                            <td>Check for smooth travelling at count plate</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_during_count_plate_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_during_count_plate_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_during_count_plate_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Rails_and_Countplate_after_screws_result" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_after_screws_action" /></td>
                            <td><Field type="text" name="Rails_and_Countplate_after_screws_remarks" /></td>
                        </tr>
                    </table>

                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Sensors</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Crane sensor</td>
                            <td>Check for damage and dust accumulation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Sensors_before_Crane_sensor_result" /></td>
                            <td><Field type="text" name="Sensors_before_Crane_sensor_action" /></td>
                            <td><Field type="text" name="Sensors_before_Crane_sensor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>LW for Emg. Stop</td>
                            <td>Check for function</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Sensors_before_LW_result" /></td>
                            <td><Field type="text" name="Sensors_before_LW_action" /></td>
                            <td><Field type="text" name="Sensors_before_LW_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Optical data transmiiter</td>
                            <td>Check for damage and dust accumulation</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Sensors_before_Optical_result" /></td>
                            <td><Field type="text" name="Sensors_before_Optical_action" /></td>
                            <td><Field type="text" name="Sensors_before_Optical_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Sensors_after_screws_result" /></td>
                            <td><Field type="text" name="Sensors_after_screws_action" /></td>
                            <td><Field type="text" name="Sensors_after_screws_remarks" /></td>
                        </tr>
                    </table>

                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Panels and Ladder</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Operational panel</td>
                            <td>Check for cleaning</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_cleaning_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_cleaning_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_cleaning_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if lamp comes on</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_lamp_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_lamp_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_lamp_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if all keys activate correctly</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_keys_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_keys_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_operational_keys_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Operational/Control panel</td>
                            <td>Check for cleaning</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Panels_and_Ladder_before_control_cleaning_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_control_cleaning_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_control_cleaning_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for wiring</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Panels_and_Ladder_before_control_wiring_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_control_wiring_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_control_wiring_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Safety plug</td>
                            <td>Check if message is displayed correctly</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Panels_and_Ladder_before_safety_plug_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_safety_plug_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_safety_plug_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Safety fence</td>
                            <td>Check if the sign is fixed on the fence</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Panels_and_Ladder_before_safety_fence_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_safety_fence_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_before_safety_fence_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Panels_and_Ladder_after_screws_result" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_after_screws_action" /></td>
                            <td><Field type="text" name="Panels_and_Ladder_after_screws_remarks" /></td>
                        </tr>
                    </table>

                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Inverter Unit</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Before</td>
                            <td>Inverter</td>
                            <td>Check for wiring</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_wiring_result" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_wiring_action" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_wiring_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_bolts_result" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_bolts_action" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_bolts_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for abnormal sound</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_sound_result" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_sound_action" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for cleaning</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_cleaning_result" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_cleaning_action" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_cleaning_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_damage_result" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_damage_action" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for function of moving parts</td>
                            <td>Visual</td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_function_result" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_function_action" /></td>
                            <td><Field type="text" name="Inverter_Unit_Before_Inverter_function_remarks" /></td>
                        </tr>
                    </table>
                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Carriage/Fork Detectors</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Pre-occupied load detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Fork_during_load_detectors_result" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_load_detectors_action" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_load_detectors_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load profile detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Fork_during_load_profile_result" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_load_profile_action" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_load_profile_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork loaded sensor</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_loaded_result" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_loaded_action" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_loaded_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Carriage chain loose detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Fork_during_chain_loose_result" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_chain_loose_action" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_chain_loose_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork end detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_end_result" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_end_action" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_end_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork centering detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_centering_result" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_centering_action" /></td>
                            <td><Field type="text" name="Carriage_Fork_during_fork_centering_remarks" /></td>
                        </tr>
                    </table>
                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Crane Travelling Detectors</h2>
                    <table>
                        <tr>
                            <th>Op</th>
                            <th>Inspection Item</th>
                            <th>Check Point</th>
                            <th>Method</th>
                            <th>Result</th>
                            <th>Action</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Home position</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_home_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_home_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_home_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Regular position (front)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_regular_front_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_regular_front_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_regular_front_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Regular position (rear)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_regular_rear_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_regular_rear_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_regular_rear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Forward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Forward_decel1_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Forward_decel1_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Forward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Backward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Backward_decel1_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Backward_decel1_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Backward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Decel 2</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_decel2_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_decel2_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_decel2_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>End limit (emergency)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_end_limit_emergency_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_end_limit_emergency_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_end_limit_emergency_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upper level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_upper_level_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_upper_level_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_upper_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Lower level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_lower_level_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_lower_level_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_lower_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork level zone</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_fork_level_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_fork_level_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_fork_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Station upper level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_station_upper_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_station_upper_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_station_upper_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Station lower level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_station_lower_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_station_lower_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_station_lower_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Upward_decel1_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Upward_decel1_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Upward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Downward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Downward_decel1_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Downward_decel1_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_Downward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>End limit (emergency)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_End_limit_result" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_End_limit_action" /></td>
                            <td><Field type="text" name="Crane_Travelling_Detectors_during_End_limit_remarks" /></td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td><b>Result</b> O=Good ∆=Fair X=Defective</td>

                        </tr>
                        <tr>
                            <td><b>Action</b> A=Adjust C=Clean R=Replace M=Make repair T=Tighten O=Overhaul L=Lubricate</td>
                        </tr>
                    </table>
                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>CHAIN ELONGATION MEASUREMENT:</h2>
                    <img src={ulimage} alt="Chain Elongation Crane 3 & 4" width="[100%]" height="50" />

                    <h2 className='mt-10 text-2xl font-extrabold dark:text-gray-200 mb-3'>INSPECTION SUMMARY/RECOMMENDATION:</h2>
                    <div class="inspection-summary">
                        <Field as="textarea" className='border-black border w-[100%]' id="UL_crane_INSPECTION_SUMMARY_RECOMMENDATION" name="UL_crane_INSPECTION_SUMMARY_RECOMMENDATION"></Field>
                    </div>

                    <td>
                        <div class="textbox-container">
                            <label for="UL_crane_Verified_by_MNC">Verified by (MNC):</label>
                            <Field type="text" id="UL_crane_Verified_by_MNC" name="UL_crane_Verified_by_MNC" />
                        </div>
                    </td>
                </Form>
            </Formik>

        </div>
    )
}

export default MonthlyPMUL
