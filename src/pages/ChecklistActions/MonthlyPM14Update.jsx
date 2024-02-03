import React, { useEffect, useState } from 'react'
import "../Checklist/MonthlyPM13.css"
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import crane14image from '../../assets/images/crane14.jpg'
function MonthlyPM14Update() {

    let navigate = useNavigate();
    const { currentColor, activeMenu, setActiveMenu } = useStateContext();
    const [initialValues, setInitialValues] = useState({
        crane14_inspected_by: "",
        crane14_approved_by: "",
        crane14_no: "",
        crane14_date: "",
        crane14_time_start: "",
        crane14_time_end: "",
        Travel_Drive_Before_Travel_motor_result: "",
        Travel_Drive_Before_Travel_motor_action: "",
        Travel_Drive_Before_Travel_motor_remarks: "",
        Travel_Drive_Before_Speed_reducer_damages_result: "",
        Travel_Drive_Before_Speed_reducer_damages_action: "",
        Travel_Drive_Before_Speed_reducer_damages_remarks: "",
        Travel_Drive_Before_Speed_reducer_leakage_result: "",
        Travel_Drive_Before_Speed_reducer_leakage_action: "",
        Travel_Drive_Before_Speed_reducer_leakage_remarks: "",
        Travel_Drive_Before_Speed_reducer_level_result: "",
        Travel_Drive_Before_Speed_reducer_level_action: "",
        Travel_Drive_Before_Speed_reducer_level_remarks: "",
        Travel_Drive_Before_E_magnetic_brake_wear_tear_result: "",
        Travel_Drive_Before_E_magnetic_brake_wear_tear_action: "",
        Travel_Drive_Before_E_magnetic_brake_wear_tear_remarks: "",
        Travel_Drive_Before_E_magnetic_brake_Brake_gap_result: "",
        Travel_Drive_Before_E_magnetic_brake_Brake_gap_action: "",
        Travel_Drive_Before_E_magnetic_brake_Brake_gap_remarks: "",
        Travel_Drive_Before_Drive_wheel_result: "",
        Travel_Drive_Before_Drive_wheel_action: "",
        Travel_Drive_Before_Drive_wheel_remarks: "",
        Travel_Drive_Before_Free_wheel_result: "",
        Travel_Drive_Before_Free_wheel_action: "",
        Travel_Drive_Before_Free_wheel_remarks: "",
        Travel_Drive_Before_Travel_encoder_result: "",
        Travel_Drive_Before_Travel_encoder_action: "",
        Travel_Drive_Before_Travel_encoder_remarks: "",
        Travel_Drive_During_Travel_motor_result: "",
        Travel_Drive_During_Travel_motor_action: "",
        Travel_Drive_During_Travel_motor_remarks: "",
        Travel_Drive_During_Speed_reducer_result: "",
        Travel_Drive_During_Speed_reducer_remarks: "",
        Travel_Drive_During_Speed_reducer_action: "",
        Travel_Drive_During_E_magnetic_brake_result: "",
        Travel_Drive_During_E_magnetic_brake_action: "",
        Travel_Drive_During_E_magnetic_brake_remarks: "",
        Travel_Drive_During_Travel_wheel_result: "",
        Travel_Drive_During_Travel_wheel_action: "",
        Travel_Drive_During_Travel_wheel_remarks: "",
        Travel_Drive_During_Free_wheel_result: "",
        Travel_Drive_During_Free_wheel_action: "",
        Travel_Drive_During_Free_wheel_remarks: "",
        Travel_Drive_After_Travel_motor_result: "",
        Travel_Drive_After_Travel_motor_action: "",
        Travel_Drive_After_Travel_motor_remarks: "",
        Travel_Drive_After_Speed_reducer_result: "",
        Travel_Drive_After_Speed_reducer_remarks: "",
        Travel_Drive_After_Speed_reducer_action: "",
        Travel_Drive_After_Bolts_result: "",
        Travel_Drive_After_Bolts_action: "",
        Travel_Drive_After_Bolts_remarks: "",
        Hoist_Drive_Before_Hoisting_motor_result: "",
        Hoist_Drive_Before_Hoisting_motor_action: "",
        Hoist_Drive_Before_Hoisting_motor_remarks: "",
        Hoist_Drive_Before_Speed_reducer_damages_result: "",
        Hoist_Drive_Before_Speed_reducer_damages_remarks: "",
        Hoist_Drive_Before_Speed_reducer_damages_action: "",
        Hoist_Drive_Before_Speed_reducer_leakage_result: "",
        Hoist_Drive_Before_Speed_reducer_leakage_action: "",
        Hoist_Drive_Before_Speed_reducer_leakage_remarks: "",
        Hoist_Drive_Before_Speed_reducer_level_result: "",
        Hoist_Drive_Before_Speed_reducer_level_action: "",
        Hoist_Drive_Before_Speed_reducer_level_remarks: "",
        Hoist_Drive_Before_E_magnetic_brake_wear_tear_result: "",
        Hoist_Drive_Before_E_magnetic_brake_wear_tear_action: "",
        Hoist_Drive_Before_E_magnetic_brake_wear_tear_remarks: "",
        Hoist_Drive_Before_E_magnetic_brake_Brake_gap_result: "",
        Hoist_Drive_Before_E_magnetic_brake_Brake_gap_action: "",
        Hoist_Drive_Before_E_magnetic_brake_Brake_gap_remarks: "",
        Hoist_Drive_Before_Hoisting_chain_Abrasion_result: "",
        Hoist_Drive_Before_Hoisting_chain_Abrasion_action: "",
        Hoist_Drive_Before_Hoisting_chain_Abrasion_remarks: "",
        Hoist_Drive_Before_Hoisting_chain_Chain_tension_result: "",
        Hoist_Drive_Before_Hoisting_chain_Chain_tension_action: "",
        Hoist_Drive_Before_Hoisting_chain_Chain_tension_remarks: "",
        Hoist_Drive_Before_Hoisting_chain_Elongation_result: "",
        Hoist_Drive_Before_Hoisting_chain_Elongation_action: "",
        Hoist_Drive_Before_Hoisting_chain_Elongation_remarks: "",
        Hoist_Drive_Before_Sprocket_result: "",
        Hoist_Drive_Before_Sprocket_action: "",
        Hoist_Drive_Before_Sprocket_remarks: "",
        Hoist_Drive_Before_Hoisting_encoder_result: "",
        Hoist_Drive_Before_Hoisting_encoder_action: "",
        Hoist_Drive_Before_Hoisting_encoder_remarks: "",
        Hoist_Drive_During_Hoisting_motor_result: "",
        Hoist_Drive_During_Hoisting_motor_action: "",
        Hoist_Drive_During_Hoisting_motor_remarks: "",
        Hoist_Drive_During_Speed_reducer_result: "",
        Hoist_Drive_During_Speed_reducer_action: "",
        Hoist_Drive_During_Speed_reducer_remarks: "",
        Hoist_Drive_During_E_magnetic_brake_result: "",
        Hoist_Drive_During_E_magneticmagnetic_brake_action: "",
        Hoist_Drive_During_E_magneticmagnetic_brake_remarks: "",
        Hoist_Drive_During_Sprocket_sound_result: "",
        Hoist_Drive_During_Sprocket_sound_action: "",
        Hoist_Drive_During_Sprocket_sound_remarks: "",
        Hoist_Drive_During_Sprocket_vibrations_result: "",
        Hoist_Drive_During_Sprocket_vibrations_action: "",
        Hoist_Drive_During_Sprocket_vibrations_remarks: "",
        Hoist_Drive_After_Hoisting_motor_result: "",
        Hoist_Drive_After_Hoisting_motor_action: "",
        Hoist_Drive_After_Hoisting_motor_remarks: "",
        Hoist_Drive_After_Speed_reducer_result: "",
        Hoist_Drive_After_Speed_reducer_action: "",
        Hoist_Drive_After_Speed_reducer_remarks: "",
        Hoist_Drive_After_Bolts_result: "",
        Hoist_Drive_After_Bolts_action: "",
        Hoist_Drive_After_Bolts_remarks: "",
        Hoisting_Carriage_Before_Carriage_frame_result: "",
        Hoisting_Carriage_Before_Carriage_frame_action: "",
        Hoisting_Carriage_Before_Carriage_frame_remarks: "",
        Hoisting_Carriage_Before_guide_rollers_abrasion_result: "",
        Hoisting_Carriage_Before_guide_rollers_abrasion_action: "",
        Hoisting_Carriage_Before_guide_rollers_abrasion_remarks: "",
        Hoisting_Carriage_Before_guide_rollers_mast_result: "",
        Hoisting_Carriage_Before_guide_rollers_mast_action: "",
        Hoisting_Carriage_Before_guide_rollers_mast_remarks: "",
        Hoisting_Carriage_Before_guide_rollers_Diameter_result: "",
        Hoisting_Carriage_Before_guide_rollers_Diameter_action: "",
        Hoisting_Carriage_Before_guide_rollers_Diameter_remarks: "",
        Hoisting_Carriage_Before_face_rollers_abrasion_result: "",
        Hoisting_Carriage_Before_face_rollers_abrasion_action: "",
        Hoisting_Carriage_Before_face_rollers_abrasion_remarks: "",
        Hoisting_Carriage_Before_face_rollers_Diameter_result: "",
        Hoisting_Carriage_Before_face_rollers_Diameter_action: "",
        Hoisting_Carriage_Before_face_rollers_Diameter_remarks: "",
        Hoisting_Carriage_Before_Load_profile_damages_result: "",
        Hoisting_Carriage_Before_Load_profile_damages_action: "",
        Hoisting_Carriage_Before_Load_profile_damages_remarks: "",
        Hoisting_Carriage_Before_Load_profile_Spring_condition_result: "",
        Hoisting_Carriage_Before_Load_profile_Spring_condition_action: "",
        Hoisting_Carriage_Before_Load_profile_Spring_condition_remarks: "",
        Hoisting_Carriage_Before_Bay_count_shielding_result: "",
        Hoisting_Carriage_Before_Bay_count_shielding_action: "",
        Hoisting_Carriage_Before_Bay_count_shielding_remarks: "",
        Hoisting_Carriage_Before_Home_position_result: "",
        Hoisting_Carriage_Before_Home_position_action: "",
        Hoisting_Carriage_Before_Home_position_remarks: "",
        Hoisting_Carriage_Before_Deceleration_shielding_result: "",
        Hoisting_Carriage_Before_Deceleration_shielding_action: "",
        Hoisting_Carriage_Before_Deceleration_shielding_remarks: "",
        Hoisting_Carriage_Before_Over_run_flag_damages_result: "",
        Hoisting_Carriage_Before_Over_run_flag_damages_action: "",
        Hoisting_Carriage_Before_Over_run_flag_damages_remarks: "",
        Hoisting_Carriage_Before_Over_run_flag_Position_result: "",
        Hoisting_Carriage_Before_Over_run_flag_Position_action: "",
        Hoisting_Carriage_Before_Over_run_flag_Position_remarks: "",
        Hoisting_Carriage_During_guide_rollers_result: "",
        Hoisting_Carriage_During_guide_rollers_action: "",
        Hoisting_Carriage_During_guide_rollers_remarks: "",
        Hoisting_Carriage_During_face_rollers_result: "",
        Hoisting_Carriage_During_face_rollers_action: "",
        Hoisting_Carriage_During_face_rollers_remarks: "",
        Hoisting_Carriage_During_Shielding_plates_result: "",
        Hoisting_Carriage_During_Shielding_plates_remarks: "",
        Hoisting_Carriage_During_Shielding_plates_action: "",
        Hoisting_Carriage_After_Bolts_result: "",
        Hoisting_Carriage_After_Bolts_remarks: "",
        Hoisting_Carriage_After_Bolts_action: "",
        Top_Bottom_Rails_Before_Top_rail_damages_result: "",
        Top_Bottom_Rails_Before_Top_rail_damages_action: "",
        Top_Bottom_Rails_Before_Top_rail_damages_remarks: "",
        Top_Bottom_Rails_Before_Top_rail_Rail_joint_result: "",
        Top_Bottom_Rails_Before_Top_rail_Rail_joint_action: "",
        Top_Bottom_Rails_Before_Top_rail_Rail_joint_remarks: "",
        Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_result: "",
        Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_action: "",
        Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_remarks: "",
        Top_Bottom_Rails_Before_Bottom_rail_damages_result: "",
        Top_Bottom_Rails_Before_Bottom_rail_damages_action: "",
        Top_Bottom_Rails_Before_Bottom_rail_damages_remarks: "",
        Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_result: "",
        Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_action: "",
        Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_remarks: "",
        Top_Bottom_Rails_Before_Shim_plates_damages_result: "",
        Top_Bottom_Rails_Before_Shim_plates_damages_action: "",
        Top_Bottom_Rails_Before_Shim_plates_damages_remarks: "",
        Top_Bottom_Rails_Before_Shim_plates_Missing_result: "",
        Top_Bottom_Rails_Before_Shim_plates_Missing_action: "",
        Top_Bottom_Rails_Before_Shim_plates_Missing_remarks: "",
        Top_Bottom_Rails_Before_Anchor_bolt_result: "",
        Top_Bottom_Rails_Before_Anchor_bolt_action: "",
        Top_Bottom_Rails_Before_Anchor_bolt_remarks: "",
        Top_Bottom_Rails_Before_Shielding_plates_result: "",
        Top_Bottom_Rails_Before_Shielding_plates_action: "",
        Top_Bottom_Rails_Before_Shielding_plates_remarks: "",
        Top_Bottom_Rails_Before_Bay_count_shielding_result: "",
        Top_Bottom_Rails_Before_Bay_count_shielding_action: "",
        Top_Bottom_Rails_Before_Bay_count_shielding_remarks: "",
        Top_Bottom_Rails_Before_Home_position_result: "",
        Top_Bottom_Rails_Before_Home_position_action: "",
        Top_Bottom_Rails_Before_Home_position_remarks: "",
        Top_Bottom_Rails_Before_Deceleration_shielding_result: "",
        Top_Bottom_Rails_Before_Deceleration_shielding_action: "",
        Top_Bottom_Rails_Before_Deceleration_shielding_remarks: "",
        Top_Bottom_Rails_Before_Over_run_flag_damages_result: "",
        Top_Bottom_Rails_Before_Over_run_flag_damages_action: "",
        Top_Bottom_Rails_Before_Over_run_flag_damages_remarks: "",
        Top_Bottom_Rails_Before_Over_run_flag_Position_result: "",
        Top_Bottom_Rails_Before_Over_run_flag_Position_action: "",
        Top_Bottom_Rails_Before_Over_run_flag_Position_remarks: "",
        Top_Bottom_Rails_During_Top_rail_result: "",
        Top_Bottom_Rails_During_Top_rail_action: "",
        Top_Bottom_Rails_During_Top_rail_remarks: "",
        Top_Bottom_Rails_During_Bottom_rail_result: "",
        Top_Bottom_Rails_During_Bottom_rail_action: "",
        Top_Bottom_Rails_During_Bottom_rail_remarks: "",
        Top_Bottom_Rails_During_Shielding_plates_result: "",
        Top_Bottom_Rails_before_Deceleration_remarks: "",
        Top_Bottom_Rails_before_Over_run_damage_result: "",
        Top_Bottom_Rails_before_Over_run_damage_action: "",
        Top_Bottom_Rails_before_Over_run_damage_remarks: "",
        Top_Bottom_Rails_before_Over_run_Position_result: "",
        Top_Bottom_Rails_before_Over_run_Position_action: "",
        Top_Bottom_Rails_before_Over_run_Position_remarks: "",
        Top_Bottom_Rails_during_Top_rail_result: "",
        Top_Bottom_Rails_during_Top_rail_action: "",
        Top_Bottom_Rails_during_Top_rail_remarks: "",
        Top_Bottom_Rails_during_Bottom_rail_result: "",
        Top_Bottom_Rails_during_Bottom_rail_action: "",
        Top_Bottom_Rails_during_Bottom_rail_remarks: "",
        Top_Bottom_Rails_during_Shielding_plates_result: "",
        Top_Bottom_Rails_during_Shielding_plates_action: "",
        Top_Bottom_Rails_during_Shielding_plates_remarks: "",
        Top_Bottom_Rails_after_bolts_result: "",
        Top_Bottom_Rails_after_bolts_action: "",
        Top_Bottom_Rails_after_bolts_remarks: "",
        Upper_Lower_Frames_Before_Upper_frame_result: "",
        Upper_Lower_Frames_Before_Upper_frame_acction: "",
        Upper_Lower_Frames_Before_Upper_frame_remarks: "",
        Upper_Lower_Frames_Before_Sprocket_Upper_frame_result: "",
        Upper_Lower_Frames_Before_Sprocket_Upper_frame_action: "",
        Upper_Lower_Frames_Before_Sprocket_Upper_frame_remarks: "",
        Upper_Lower_Frames_Before_Upper_guide_roller_abrasion_result: "",
        Upper_Lower_Frames_Before_Upper_guide_roller_abrasion_action: "",
        Upper_Lower_Frames_Before_Upper_guide_roller_abrasion_remarks: "",
        Upper_Lower_Frames_Before_Upper_guide_roller_diameter_result: "",
        Upper_Lower_Frames_Before_Upper_guide_roller_diameter_action: "",
        Upper_Lower_Frames_Before_Upper_guide_roller_diameter_remarks: "",
        Upper_Lower_Frames_Before_Lower_frame_result: "",
        Upper_Lower_Frames_Before_Lower_frame_action: "",
        Upper_Lower_Frames_Before_Lower_frame_remarks: "",
        Upper_Lower_Frames_Before_Sprocket_Lower_frame_result: "",
        Upper_Lower_Frames_Before_Sprocket_Lower_frame_action: "",
        Upper_Lower_Frames_Before_Sprocket_Lower_frame_remarks: "",
        Upper_Lower_Frames_Before_lower_guide_roller_abrasion_result: "",
        Upper_Lower_Frames_Before_lower_guide_roller_abrasion_action: "",
        Upper_Lower_Frames_Before_lower_guide_roller_abrasion_remarks: "",
        Upper_Lower_Frames_Before_Lower_guide_roller_diameter_result: "",
        Upper_Lower_Frames_Before_Lower_guide_roller_diameter_action: "",
        Upper_Lower_Frames_Before_Lower_guide_roller_diameter_remarks: "",
        Upper_Lower_Frames_during_upper_guide_roller_result: "",
        Upper_Lower_Frames_during_upper_guide_roller_action: "",
        Upper_Lower_Frames_during_upper_guide_roller_remarks: "",
        Upper_Lower_Frames_during_lower_guide_roller_result: "",
        Upper_Lower_Frames_during_lower_guide_roller_action: "",
        Upper_Lower_Frames_during_lower_guide_roller_remarks: "",
        Upper_Lower_Frames_during_Sprocket_sound_result: "",
        Upper_Lower_Frames_during_Sprocket_sound_action: "",
        Upper_Lower_Frames_during_Sprocket_sound_remarks: "",
        Upper_Lower_Frames_during_Sprocket_vibrations_result: "",
        Upper_Lower_Frames_during_Sprocket_vibrations_action: "",
        Upper_Lower_Frames_during_Sprocket_vibrations_remarks: "",
        Upper_Lower_Frames_after_bolts_result: "",
        Upper_Lower_Frames_after_bolts_action: "",
        Upper_Lower_Frames_after_bolts_remarks: "",
        Slide_Fork_Unit_Before_Fork_body_result: "",
        Slide_Fork_Unit_Before_Fork_body_action: "",
        Slide_Fork_Unit_Before_Fork_body_remarks: "",
        Slide_Fork_Unit_Before_Fork_motor_result: "",
        Slide_Fork_Unit_Before_Fork_motor_action: "",
        Slide_Fork_Unit_Before_Fork_motor_remarks: "",
        Slide_Fork_Unit_Before_Speed_reducer_Damage_result: "",
        Slide_Fork_Unit_Before_Speed_reducer_Damage_action: "",
        Slide_Fork_Unit_Before_Speed_reducer_Damage_remarks: "",
        Slide_Fork_Unit_Before_Speed_reducer_Grease_result: "",
        Slide_Fork_Unit_Before_Speed_reducer_Grease_action: "",
        Slide_Fork_Unit_Before_Speed_reducer_Grease_remarks: "",
        Slide_Fork_Unit_Before_Electro_magnetic_brake_lining_result: "",
        Slide_Fork_Unit_Before_Electro_magnetic_brake_lining_action: "",
        Slide_Fork_Unit_Before_Electro_magnetic_brake_lining_remarks: "",
        Slide_Fork_Unit_Before_Electro_magnetic_brake_gap_result: "",
        Slide_Fork_Unit_Before_Electro_magnetic_brake_gap_action: "",
        Slide_Fork_Unit_Before_Electro_magnetic_brake_gap_remarks: "",
        Slide_Fork_Unit_Before_Fork_drive_damage_result: "",
        Slide_Fork_Unit_Before_Fork_drive_damage_action: "",
        Slide_Fork_Unit_Before_Fork_drive_damage_remarks: "",
        Slide_Fork_Unit_Before_Fork_drive_tension_result: "",
        Slide_Fork_Unit_Before_Fork_drive_tension_action: "",
        Slide_Fork_Unit_Before_Fork_drive_tension_remarks: "",
        Slide_Fork_Unit_Before_Fork_drive_lubrication_result: "",
        Slide_Fork_Unit_Before_Fork_drive_lubrication_action: "",
        Slide_Fork_Unit_Before_Fork_drive_lubrication_remarks: "",
        Slide_Fork_Unit_Before_Fork_drive_elongation_result: "",
        Slide_Fork_Unit_Before_Fork_drive_elongation_action: "",
        Slide_Fork_Unit_Before_Fork_drive_elongation_remarks: "",
        Slide_Fork_Unit_Before_Cam_followers_abrasion_result: "",
        Slide_Fork_Unit_Before_Cam_followers_abrasion_action: "",
        Slide_Fork_Unit_Before_Cam_followers_abrasion_remarks: "",
        Slide_Fork_Unit_Before_Cam_followers_lubrication_result: "",
        Slide_Fork_Unit_Before_Cam_followers_lubrication_action: "",
        Slide_Fork_Unit_Before_Cam_followers_lubrication_remarks: "",
        Slide_Fork_Unit_Before_Cam_followers_rotation_result: "",
        Slide_Fork_Unit_Before_Cam_followers_rotation_action: "",
        Slide_Fork_Unit_Before_Cam_followers_rotation_remarks: "",
        Slide_Fork_Unit_Before_Torque_Lock_nut_result: "",
        Slide_Fork_Unit_Before_Torque_Lock_nut_action: "",
        Slide_Fork_Unit_Before_Torque_Lock_nut_remarks: "",
        Slide_Fork_Unit_Before_Torque_mechanical_result: "",
        Slide_Fork_Unit_Before_Torque_mechanical_action: "",
        Slide_Fork_Unit_Before_Torque_mechanical_remarks: "",
        Slide_Fork_Unit_Before_Sprocket_result: "",
        Slide_Fork_Unit_Before_Sprocket_action: "",
        Slide_Fork_Unit_Before_Sprocket_remarks: "",
        Slide_Fork_Unit_Before_Sensing_plates_result: "",
        Slide_Fork_Unit_Before_Sensing_plates_action: "",
        Slide_Fork_Unit_Before_Sensing_plates_remarks: "",
        Slide_Fork_Unit_During_Fork_motor_result: "",
        Slide_Fork_Unit_During_Fork_motor_action: "",
        Slide_Fork_Unit_During_Fork_motor_remarks: "",
        Slide_Fork_Unit_During_Speed_reducer_result: "",
        Slide_Fork_Unit_During_Speed_reducer_action: "",
        Slide_Fork_Unit_During_Speed_reducer_remarks: "",
        Slide_Fork_Unit_During_Electro_magnetic_brake_result: "",
        Slide_Fork_Unit_During_Electro_magnetic_brake_action: "",
        Slide_Fork_Unit_During_Electro_magnetic_brake_remarks: "",
        Slide_Fork_Unit_During_Fork_plate_result: "",
        Slide_Fork_Unit_During_Fork_plate_action: "",
        Slide_Fork_Unit_During_Fork_plate_remarks: "",
        Slide_Fork_Unit_During_Sprocket_sound_result: "",
        Slide_Fork_Unit_During_Sprocket_sound_action: "",
        Slide_Fork_Unit_During_Sprocket_sound_remarks: "",
        Slide_Fork_Unit_During_Sprocket_vibrations_result: "",
        Slide_Fork_Unit_During_Sprocket_vibrations_action: "",
        Slide_Fork_Unit_During_Sprocket_vibrations_remarks: "",
        Slide_Fork_Unit_After_Fork_motor_result: "",
        Slide_Fork_Unit_After_Fork_motor_action: "",
        Slide_Fork_Unit_After_Fork_motor_remarks: "",
        Slide_Fork_Unit_After_Speed_reducer_result: "",
        Slide_Fork_Unit_After_Speed_reducer_action: "",
        Slide_Fork_Unit_After_Speed_reducer_remarks: "",
        Slide_Fork_Unit_After_Electro_magnetic_brake_result: "",
        Slide_Fork_Unit_After_Electro_magnetic_brake_action: "",
        Slide_Fork_Unit_After_Electro_magnetic_brake_remarks: "",
        Slide_Fork_Unit_After_Bolts_result: "",
        Slide_Fork_Unit_After_Bolts_action: "",
        Slide_Fork_Unit_After_Bolts_remarks: "",
        Power_Feed_Before_feed_rail_damage_result: "",
        Power_Feed_Before_feed_rail_damage_action: "",
        Power_Feed_Before_feed_rail_damage_remarks: "",
        Power_Feed_Before_feed_rail_Fastener_condition_result: "",
        Power_Feed_Before_feed_rail_Fastener_condition_action: "",
        Power_Feed_Before_feed_rail_Fastener_condition_remarks: "",
        Power_Feed_Before_feed_rail_Dust_accumulation_result: "",
        Power_Feed_Before_feed_rail_Dust_accumulation_action: "",
        Power_Feed_Before_feed_rail_Dust_accumulation_remarks: "",
        Power_Feed_Before_Collector_arm_damage_result: "",
        Power_Feed_Before_Collector_arm_damage_action: "",
        Power_Feed_Before_Collector_arm_damage_remarks: "",
        Power_Feed_Before_Collector_arm_Spring_condition_result: "",
        Power_Feed_Before_Collector_arm_Spring_condition_action: "",
        Power_Feed_Before_Collector_arm_Spring_condition_remarks: "",
        Power_Feed_Before_Collector_shoes_damage_result: "",
        Power_Feed_Before_Collector_shoes_damage_action: "",
        Power_Feed_Before_Collector_shoes_damage_remarks: "",
        Power_Feed_Before_Collector_shoes_Fastener_condition_result: "",
        Power_Feed_Before_Collector_shoes_Fastener_condition_action: "",
        Power_Feed_Before_Collector_shoes_Fastener_condition_remarks: "",
        Power_Feed_Before_Collector_shoes_Dust_accumulation_result: "",
        Power_Feed_Before_Collector_shoes_Dust_accumulation_action: "",
        Power_Feed_Before_Collector_shoes_Dust_accumulation_remarks: "",
        Power_Feed_During_Joiner_result: "",
        Power_Feed_During_Joiner_action: "",
        Power_Feed_During_Joiner_remarks: "",
        Power_Feed_During_Feed_in_result: "",
        Power_Feed_During_Feed_in_action: "",
        Power_Feed_During_Feed_in_remarks: "",
        Power_Feed_During_Current_collector_result: "",
        Power_Feed_During_Current_collector_action: "",
        Power_Feed_During_Current_collector_remarks: "",
        Power_Feed_After_Bolts_result: "",
        Power_Feed_After_Bolts_action: "",
        Power_Feed_After_Bolts_remarks: "",
        Traveling_Detectors_Before_Home_position_damages_result: "",
        Traveling_Detectors_Before_Home_position_damages_action: "",
        Traveling_Detectors_Before_Home_position_damages_remarks: "",
        Traveling_Detectors_Before_Home_position_LED_result: "",
        Traveling_Detectors_Before_Home_position_LED_action: "",
        Traveling_Detectors_Before_Home_position_LED_remarks: "",
        Traveling_Detectors_Before_Regular_position_damages_result: "",
        Traveling_Detectors_Before_Regular_position_damages_action: "",
        Traveling_Detectors_Before_Regular_position_damages_remarks: "",
        Traveling_Detectors_Before_Regular_position_LED_result: "",
        Traveling_Detectors_Before_Regular_position_LED_action: "",
        Traveling_Detectors_Before_Regular_position_LED_remarks: "",
        Traveling_Detectors_Before_Forward_Deceleration1_damages_result: "",
        Traveling_Detectors_Before_Forward_Deceleration1_damages_action: "",
        Traveling_Detectors_Before_Forward_Deceleration1_damages_remarks: "",
        Traveling_Detectors_Before_Forward_Deceleration1_LED_result: "",
        Traveling_Detectors_Before_Forward_Deceleration1_LED_action: "",
        Traveling_Detectors_Before_Forward_Deceleration1_LED_remarks: "",
        Traveling_Detectors_Before_Backward_DC1_damages_result: "",
        Traveling_Detectors_Before_Backward_DC1_damages_action: "",
        Traveling_Detectors_Before_Backward_DC1_damages_remarks: "",
        Traveling_Detectors_Before_Backward_DC1_LED_result: "",
        Traveling_Detectors_Before_Backward_DC1_LED_action: "",
        Traveling_Detectors_Before_Backward_DC1_LED_remarks: "",
        Traveling_Detectors_Before_Deceleration2_damages_result: "",
        Traveling_Detectors_Before_Deceleration2_damages_action: "",
        Traveling_Detectors_Before_Deceleration2_damages_remarks: "",
        Traveling_Detectors_Before_Over_run_detectors_damages_result: "",
        Traveling_Detectors_Before_Over_run_detectors_damages_action: "",
        Traveling_Detectors_Before_Over_run_detectors_damages_remarks: "",
        Traveling_Detectors_Before_Over_run_detectors_Spring_result: "",
        Traveling_Detectors_Before_Over_run_detectors_Spring_action: "",
        Traveling_Detectors_Before_Over_run_detectors_Spring_remarks: "",
        Traveling_Detectors_During_Home_position_result: "",
        Traveling_Detectors_During_Home_position_action: "",
        Traveling_Detectors_During_Home_position_remarks: "",
        Traveling_Detectors_During_Regular_position_result: "",
        Traveling_Detectors_During_Regular_position_action: "",
        Traveling_Detectors_During_Regular_position_remarks: "",
        Traveling_Detectors_During_Forward_Deceleration1_result: "",
        Traveling_Detectors_During_Forward_Deceleration1_action: "",
        Traveling_Detectors_During_Forward_Deceleration1_remarks: "",
        Traveling_Detectors_During_Backward_Deceleration1_result: "",
        Traveling_Detectors_During_Backward_Deceleration1_action: "",
        Traveling_Detectors_During_Backward_Deceleration1_remarks: "",
        Traveling_Detectors_During_Deceleration2_result: "",
        Traveling_Detectors_During_Deceleration2_action: "",
        Traveling_Detectors_During_Deceleration2_remarks: "",
        Traveling_Detectors_During_Over_run_detectors_result: "",
        Traveling_Detectors_During_Over_run_detectors_action: "",
        Traveling_Detectors_During_Over_run_detectors_remarks: "",
        Carriage_Unit_Before_positioning_sensors_dust_result: "",
        Carriage_Unit_Before_positioning_sensors_dust_action: "",
        Carriage_Unit_Before_positioning_sensors_dust_remarks: "",
        Carriage_Unit_Before_positioning_sensors_LED_result: "",
        Carriage_Unit_Before_positioning_sensors_LED_action: "",
        Carriage_Unit_Before_positioning_sensors_LED_remarks: "",
        Carriage_Unit_Before_Pre_occupied_load_dust_result: "",
        Carriage_Unit_Before_Pre_occupied_load_dust_action: "",
        Carriage_Unit_Before_Pre_occupied_load_dust_remarks: "",
        Carriage_Unit_Before_Pre_occupied_load_LED_result: "",
        Carriage_Unit_Before_Pre_occupied_load_LED_action: "",
        Carriage_Unit_Before_Pre_occupied_load_LED_remarks: "",
        Carriage_Unit_Before_Load_detect_dust_result: "",
        Carriage_Unit_Before_Load_detect_dust_action: "",
        Carriage_Unit_Before_Load_detect_dust_remarks: "",
        Carriage_Unit_Before_Load_detect_LED_result: "",
        Carriage_Unit_Before_Load_detect_LED_action: "",
        Carriage_Unit_Before_Load_detect_LED_remarks: "",
        Carriage_Unit_Before_Load_profile_damages_result: "",
        Carriage_Unit_Before_Load_profile_damages_action: "",
        Carriage_Unit_Before_Load_profile_damages_remarks: "",
        Carriage_Unit_Before_Load_profile_LED_result: "",
        Carriage_Unit_Before_Load_profile_LED_action: "",
        Carriage_Unit_Before_Load_profile_LED_remarks: "",
        Carriage_Unit_Before_Load_protrusion_dust_result: "",
        Carriage_Unit_Before_Load_protrusion_dust_action: "",
        Carriage_Unit_Before_Load_protrusion_dust_remarks: "",
        Carriage_Unit_Before_Load_protrusion_LED_result: "",
        Carriage_Unit_Before_Load_protrusion_LED_action: "",
        Carriage_Unit_Before_Load_protrusion_LED_remarks: "",
        Carriage_Unit_Before_Station_upper_dust_result: "",
        Carriage_Unit_Before_Station_upper_dust_action: "",
        Carriage_Unit_Before_Station_upper_dust_remarks: "",
        Carriage_Unit_Before_Station_upper_LED_result: "",
        Carriage_Unit_Before_Station_upper_LED_action: "",
        Carriage_Unit_Before_Station_upper_LED_remarks: "",
        Carriage_Unit_Before_Station_lower_dust_result: "",
        Carriage_Unit_Before_Station_lower_dust_action: "",
        Carriage_Unit_Before_Station_lower_dust_remarks: "",
        Carriage_Unit_Before_Station_lower_LED_result: "",
        Carriage_Unit_Before_Station_lower_LED_action: "",
        Carriage_Unit_Before_Station_lower_LED_remarks: "",
        Carriage_Unit_Before_Upward_deceleration1_dust_result: "",
        Carriage_Unit_Before_Upward_deceleration1_dust_action: "",
        Carriage_Unit_Before_Upward_deceleration1_dust_remarks: "",
        Carriage_Unit_Before_Upward_deceleration1_LED_result: "",
        Carriage_Unit_Before_Upward_deceleration1_LED_action: "",
        Carriage_Unit_Before_Upward_deceleration1_LED_remarks: "",
        Carriage_Unit_Before_Downward_deceleration1_dust_result: "",
        Carriage_Unit_Before_Downward_deceleration1_dust_action: "",
        Carriage_Unit_Before_Downward_deceleration1_dust_remarks: "",
        Carriage_Unit_Before_Downward_deceleration1_LED_result: "",
        Carriage_Unit_Before_Downward_deceleration1_LED_action: "",
        Carriage_Unit_Before_Downward_deceleration1_LED_remarks: "",
        Carriage_Unit_Before_Deceleration2_dust_result: "",
        Carriage_Unit_Before_Deceleration2_dust_action: "",
        Carriage_Unit_Before_Deceleration2_dust_remarks: "",
        Carriage_Unit_Before_Deceleration2_LED_result: "",
        Carriage_Unit_Before_Deceleration2_LED_action: "",
        Carriage_Unit_Before_Deceleration2_LED_remarks: "",
        Carriage_Unit_Before_Chain_tension_damages_result: "",
        Carriage_Unit_Before_Chain_tension_damages_action: "",
        Carriage_Unit_Before_Chain_tension_damages_remarks: "",
        Carriage_Unit_Before_Chain_tension_Spring_condition_result: "",
        Carriage_Unit_Before_Chain_tension_Spring_condition_action: "",
        Carriage_Unit_Before_Chain_tension_Spring_condition_remarks: "",
        Carriage_Unit_Before_Over_run_detectors_damages_result: "",
        Carriage_Unit_Before_Over_run_detectors_damages_action: "",
        Carriage_Unit_Before_Over_run_detectors_damages_remarks: "",
        Carriage_Unit_Before_Over_run_detectors_Spring_condition_result: "",
        Carriage_Unit_Before_Over_run_detectors_Spring_condition_action: "",
        Carriage_Unit_Before_Over_run_detectors_Spring_condition_remarks: "",
        Carriage_Unit_During_Carriage_positioning_result: "",
        Carriage_Unit_During_Carriage_positioning_action: "",
        Carriage_Unit_During_Carriage_positioning_remarks: "",
        Carriage_Unit_During_Pre_occupied_load_result: "",
        Carriage_Unit_During_Pre_occupied_load_action: "",
        Carriage_Unit_During_Pre_occupied_load_remarks: "",
        Carriage_Unit_During_Load_detect_result: "",
        Carriage_Unit_During_Load_detect_action: "",
        Carriage_Unit_During_Load_detect_remarks: "",
        Carriage_Unit_During_Load_profile_result: "",
        Carriage_Unit_During_Load_profile_action: "",
        Carriage_Unit_During_Load_profile_remarks: "",
        Carriage_Unit_During_Load_protrusion_result: "",
        Carriage_Unit_During_Load_protrusion_action: "",
        Carriage_Unit_During_Load_protrusion_remarks: "",
        Carriage_Unit_During_Station_upper_level_result: "",
        Carriage_Unit_During_Station_upper_level_action: "",
        Carriage_Unit_During_Station_upper_level_remarks: "",
        Carriage_Unit_During_Station_lower_level_result: "",
        Carriage_Unit_During_Station_lower_level_action: "",
        Carriage_Unit_During_Station_lower_level_remarks: "",
        Carriage_Unit_During_Upward_deceleration1_result: "",
        Carriage_Unit_During_Upward_deceleration1_action: "",
        Carriage_Unit_During_Upward_deceleration1_remarks: "",
        Carriage_Unit_During_Downward_deceleration1_result: "",
        Carriage_Unit_During_Downward_deceleration1_action: "",
        Carriage_Unit_During_Downward_deceleration1_remarks: "",
        Carriage_Unit_During_Deceleration2_result: "",
        Carriage_Unit_During_Deceleration2_action: "",
        Carriage_Unit_During_Deceleration2_remarks: "",
        Carriage_Unit_During_Chain_tension_result: "",
        Carriage_Unit_During_Chain_tension_action: "",
        Carriage_Unit_During_Chain_tension_remarks: "",
        Carriage_Unit_During_Over_run_detectors_result: "",
        Carriage_Unit_During_Over_run_detectors_action: "",
        Carriage_Unit_During_Over_run_detectors_remarks: "",
        Fork_Unit_Before_Fork_position_damages_result: "",
        Fork_Unit_Before_Fork_position_damages_action: "",
        Fork_Unit_Before_Fork_position_damages_remarks: "",
        Fork_Unit_Before_Fork_position_Sensor_condition_result: "",
        Fork_Unit_Before_Fork_position_Sensor_condition_action: "",
        Fork_Unit_Before_Fork_position_Sensor_condition_remarks: "",
        Fork_Unit_During_Fork_end_detectors_result: "",
        Fork_Unit_During_Fork_end_detectors_action: "",
        Fork_Unit_During_Fork_end_detectors_remarks: "",
        Fork_Unit_During_Fork_center_detectors_result: "",
        Fork_Unit_During_Fork_center_detectors_action: "",
        Fork_Unit_During_Fork_center_detectors_remarks: "",
        Operation_Panel_before_e_stop_button_damages_result: "",
        Operation_Panel_before_e_stop_button_damages_action: "",
        Operation_Panel_before_e_stop_button_damages_remarks: "",
        Operation_Panel_before_e_stop_button_Functionality_result: "",
        Operation_Panel_before_e_stop_button_Functionality_action: "",
        Operation_Panel_before_e_stop_button_Functionality_remarks: "",
        Operation_Panel_before_Optical_data_damages_result: "",
        Operation_Panel_before_Optical_data_damages_action: "",
        Operation_Panel_before_Optical_data_damages_remarks: "",
        Operation_Panel_before_Optical_data_Dust_result: "",
        Operation_Panel_before_Optical_data_Dust_action: "",
        Operation_Panel_before_Optical_data_Dust_remarks: "",
        Operation_Panel_before_Optical_data_Alignment_result: "",
        Operation_Panel_before_Optical_data_Alignment_action: "",
        Operation_Panel_before_Optical_data_Alignment_remarks: "",
        Operation_Panel_before_Optical_data_Functionality_result: "",
        Operation_Panel_before_Optical_data_Functionality_action: "",
        Operation_Panel_before_Optical_data_Functionality_remarks: "",
        Operation_Panel_before_4bit_sensor_damages_result: "",
        Operation_Panel_before_4bit_sensor_damages_action: "",
        Operation_Panel_before_4bit_sensor_damages_remarks: "",
        Operation_Panel_before_4bit_sensor_Dust_result: "",
        Operation_Panel_before_4bit_sensor_Dust_action: "",
        Operation_Panel_before_4bit_sensor_Dust_remarks: "",
        Operation_Panel_before_4bit_sensor_Alignment_result: "",
        Operation_Panel_before_4bit_sensor_Alignment_action: "",
        Operation_Panel_before_4bit_sensor_Alignment_remarks: "",
        Operation_Panel_before_4bit_sensor_Functionality_result: "",
        Operation_Panel_before_4bit_sensor_Functionality_action: "",
        Operation_Panel_before_4bit_sensor_Functionality_remarks: "",
        Operation_Panel_before_E_magnetic_On_Off_result: "",
        Operation_Panel_before_E_magnetic_On_Off_action: "",
        Operation_Panel_before_E_magnetic_On_Off_remarks: "",
        Operation_Panel_before_E_magnetic_Fastener_result: "",
        Operation_Panel_before_E_magnetic_Fastener_action: "",
        Operation_Panel_before_E_magnetic_Fastener_remarks: "",
        Operation_Panel_before_Breaker_damages_result: "",
        Operation_Panel_before_Breaker_damages_action: "",
        Operation_Panel_before_Breaker_damages_remarks: "",
        Operation_Panel_before_Breaker_Turn_on_off_result: "",
        Operation_Panel_before_Breaker_Turn_on_off_action: "",
        Operation_Panel_before_Breaker_Turn_on_off_remarks: "",
        Operation_Panel_before_Electric_wiring_condition_result: "",
        Operation_Panel_before_Electric_wiring_condition_action: "",
        Operation_Panel_before_Electric_wiring_condition_remarks: "",
        Operation_Panel_before_Electric_wiring_Snapped_result: "",
        Operation_Panel_before_Electric_wiring_Snapped_action: "",
        Operation_Panel_before_Electric_wiring_Snapped_remarks: "",
        Operation_Panel_before_Power_supply_result: "",
        Operation_Panel_before_Power_supply_action: "",
        Operation_Panel_before_Power_supply_remarks: "",
        Operation_Panel_before_PC_Board_result: "",
        Operation_Panel_before_PC_Board_action: "",
        Operation_Panel_before_PC_Board_remarks: "",
        Operation_Panel_before_Operation_panel_dust_result: "",
        Operation_Panel_before_Operation_panel_dust_action: "",
        Operation_Panel_before_Operation_panel_dust_remarks: "",
        Operation_Panel_before_Operation_panel_LED_result: "",
        Operation_Panel_before_Operation_panel_LED_action: "",
        Operation_Panel_before_Operation_panel_LED_remarks: "",
        Operation_Panel_before_Operation_panel_Key_result: "",
        Operation_Panel_before_Operation_panel_Key_action: "",
        Operation_Panel_before_Operation_panel_Key_remarks: "",
        Operation_Panel_before_Control_panel_dust_result: "",
        Operation_Panel_before_Control_panel_dust_action: "",
        Operation_Panel_before_Control_panel_dust_remarks: "",
        Operation_Panel_before_Control_panel_Wiring_condition_result: "",
        Operation_Panel_before_Control_panel_Wiring_condition_action: "",
        Operation_Panel_before_Control_panel_Wiring_condition_remarks: "",
        Operation_Panel_before_Operation_panel_buttons_result: "",
        Operation_Panel_before_Operation_panel_buttons_action: "",
        Operation_Panel_before_Operation_panel_buttons_remarks: "",
        Operation_Panel_before_Indicators_result: "",
        Operation_Panel_before_Indicators_action: "",
        Operation_Panel_before_Indicators_remarks: "",
        Operation_Panel_before_Ventilation_fan_result: "",
        Operation_Panel_before_Ventilation_fan_action: "",
        Operation_Panel_before_Ventilation_fan_remarks: "",
        Operation_Panel_After_Bolts_result: "",
        Operation_Panel_After_Bolts_action: "",
        Operation_Panel_After_Bolts_remarks: "",
        Inverter_Unit_Before_Inverter_damages_result: "",
        Inverter_Unit_Before_Inverter_damages_action: "",
        Inverter_Unit_Before_Inverter_damages_remarks: "",
        Inverter_Unit_Before_Inverter_Dust_result: "",
        Inverter_Unit_Before_Inverter_Dust_action: "",
        Inverter_Unit_Before_Inverter_Dust_remarks: "",
        Inverter_Unit_Before_Inverter_Wiring_condition_result: "",
        Inverter_Unit_Before_Inverter_Wiring_condition_action: "",
        Inverter_Unit_Before_Inverter_Wiring_condition_remarks: "",
        Inverter_Unit_Before_Inverter_Wiring_sound_result: "",
        Inverter_Unit_Before_Inverter_Wiring_sound_action: "",
        Inverter_Unit_Before_Inverter_Wiring_sound_remarks: "",
        Inverter_Unit_Before_Inverter_Wiring_Bolts_result: "",
        Inverter_Unit_Before_Inverter_Wiring_Bolts_action: "",
        Inverter_Unit_Before_Inverter_Wiring_Bolts_remarks: "",
        Others_Before_Mast_result: "",
        Others_Before_Mast_action: "",
        Others_Before_Mast_remarks: "",
        Others_Before_Support_result: "",
        Others_Before_Support_action: "",
        Others_Before_Support_remarks: "",
        Others_Before_Cable_result: "",
        Others_Before_Cable_action: "",
        Others_Before_Cable_remarks: "",
        Others_Before_Cable_protector_result: "",
        Others_Before_Cable_protector_action: "",
        Others_Before_Cable_protector_remarks: "",
        Others_Before_Cable_guide_result: "",
        Others_Before_Cable_guide_action: "",
        Others_Before_Cable_guide_remarks: "",
        Others_Before_Safety_plug_result: "",
        Others_Before_Safety_plug_action: "",
        Others_Before_Safety_plug_remarks: "",
        Others_Before_Safety_fence_damage_result: "",
        Others_Before_Safety_fence_damage_action: "",
        Others_Before_Safety_fence_damage_remarks: "",
        Others_Before_Safety_fence_Signages_result: "",
        Others_Before_Safety_fence_Signages_action: "",
        Others_Before_Safety_fence_Signages_remarks: "",
        Others_After_Bolts_result: "",
        Others_After_Bolts_action: "",
        Others_After_Bolts_remarks: "",
        crane14_Verified_by_MNC: "",
        crane14_REPORT_SUMMARY: ""
    })
    const [listOfCrane14CheckList, setListOfCrane14CheckList] = useState([]);
    let { id } = useParams();


    useEffect(() => {
        axios.get(`https://maintaim-db-5eb6eb864ba7.herokuapp.com/crane14checklist/byId/${id}`).then((response) => {
            setListOfCrane14CheckList(response.data)
            setInitialValues(response.data)
            console.log(response.data)
        });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(
            `https://maintaim-db-5eb6eb864ba7.herokuapp.com/crane14checklist/update/byId/${id}`, initialValues).then(res => {
                console.log(res);
                navigate('/checklists')
            }).catch(err => console.log(err));
    }

    return (

        <div>
            <form id="checklistForm" onSubmit={onSubmit}  className='bg-[#f3f5f5]'>
                <h1 className="text-3xl font-extrabold dark:text-gray-200 mb-2">CRANE 14 INSPECTION CHECKLIST (MONTHLY)</h1>

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
                        Update
                    </button>

                    <button
                        onClick={() => navigate('/checklists')}
                        className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                        style={{ backgroundColor: currentColor }}
                    >
                        Back
                    </button>
                </div>



                <table>
                    <tr>
                        <td>
                            <div class="textbox-container">
                                <label for="crane14_inspected_by">Inspected by:</label>
                                <input
                                    onChange={(e) => setInitialValues({ ...initialValues, crane14_inspected_by: e.target.value })}
                                    value={initialValues.crane14_inspected_by} type="text" id="crane14_inspected_by" name="crane14_inspected_by" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="crane14_approved_by">Approved by (Supervisor):</label>
                                <input
                                    onChange={(e) => setInitialValues({ ...initialValues, crane14_approved_by: e.target.value })}
                                    value={initialValues.crane14_approved_by} type="text" id="crane14_approved_by" name="crane14_approved_by" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="textbox-container">
                                <label for="crane14_no">Crane Number:</label>
                                <input
                                    onChange={(e) => setInitialValues({ ...initialValues, crane14_no: e.target.value })}
                                    value={initialValues.crane14_no} type="text" id="crane14_no" name="crane14_no" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="crane14_date">Date:</label>
                                <input
                                    onChange={(e) => setInitialValues({ ...initialValues, crane14_date: e.target.value })}
                                    value={initialValues.crane14_date} type="date" id="crane14_date" name="crane14_date" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="crane14_time_start">Time Start:</label>
                                <input
                                    onChange={(e) => setInitialValues({ ...initialValues, crane14_time_start: e.target.value })}
                                    value={initialValues.crane14_time_start} type="time" id="crane14_time_start" name="crane14_time_start" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="crane14_time_end">Time End:</label>
                                <input
                                    onChange={(e) => setInitialValues({ ...initialValues, crane14_time_end: e.target.value })}
                                    value={initialValues.crane14_time_end} type="time" id="crane14_time_end" name="crane14_time_end" />
                            </div>
                        </td>
                    </tr>
                </table>
                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Travel Drive Unit</h2>
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
                        <td>Travel motor</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Travel_motor_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Travel_motor_result} type="text" name="Travel_Drive_Before_Travel_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Travel_motor_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Travel_motor_action} type="text" name="Travel_Drive_Before_Travel_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Travel_motor_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Travel_motor_remarks} type="text" name="Travel_Drive_Before_Travel_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_damages_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_damages_result} type="text" name="Travel_Drive_Before_Speed_reducer_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_damages_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_damages_action} type="text" name="Travel_Drive_Before_Speed_reducer_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_damages_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_damages_remarks} type="text" name="Travel_Drive_Before_Speed_reducer_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Oil leakage</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_leakage_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_leakage_result} type="text" name="Travel_Drive_Before_Speed_reducer_leakage_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_leakage_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_leakage_action} type="text" name="Travel_Drive_Before_Speed_reducer_leakage_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_leakage_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_leakage_remarks} type="text" name="Travel_Drive_Before_Speed_reducer_leakage_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Oil level</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_level_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_level_result} type="text" name="Travel_Drive_Before_Speed_reducer_level_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_level_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_level_action} type="text" name="Travel_Drive_Before_Speed_reducer_level_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Speed_reducer_level_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Speed_reducer_level_remarks} type="text" name="Travel_Drive_Before_Speed_reducer_level_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic brake</td>
                        <td>Lining wear and tear</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_E_magnetic_brake_wear_tear_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_E_magnetic_brake_wear_tear_result} type="text" name="Travel_Drive_Before_E_magnetic_brake_wear_tear_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_E_magnetic_brake_wear_tear_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_E_magnetic_brake_wear_tear_action} type="text" name="Travel_Drive_Before_E_magnetic_brake_wear_tear_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_E_magnetic_brake_wear_tear_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_E_magnetic_brake_wear_tear_remarks} type="text" name="Travel_Drive_Before_E_magnetic_brake_wear_tear_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Brake gap (0.30mm - 1.20mm)</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_E_magnetic_brake_Brake_gap_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_E_magnetic_brake_Brake_gap_result} type="text" name="Travel_Drive_Before_E_magnetic_brake_Brake_gap_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_E_magnetic_brake_Brake_gap_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_E_magnetic_brake_Brake_gap_action} type="text" name="Travel_Drive_Before_E_magnetic_brake_Brake_gap_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_E_magnetic_brake_Brake_gap_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_E_magnetic_brake_Brake_gap_remarks} type="text" name="Travel_Drive_Before_E_magnetic_brake_Brake_gap_remarks" /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>Drive wheel</td>
                        <td>Abrasion or cracks</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Drive_wheel_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Drive_wheel_result} type="text" name="Travel_Drive_Before_Drive_wheel_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Drive_wheel_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Drive_wheel_action} type="text" name="Travel_Drive_Before_Drive_wheel_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Drive_wheel_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Drive_wheel_remarks} type="text" name="Travel_Drive_Before_Drive_wheel_remarks" /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>Free wheel</td>
                        <td>Abrasion or cracks</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Free_wheel_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Free_wheel_result} type="text" name="Travel_Drive_Before_Free_wheel_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Free_wheel_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Free_wheel_action} type="text" name="Travel_Drive_Before_Free_wheel_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Free_wheel_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Free_wheel_remarks} type="text" name="Travel_Drive_Before_Free_wheel_remarks" /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>Travel Encoder</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Travel_encoder_result: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Travel_encoder_result} type="text" name="Travel_Drive_Before_Travel_encoder_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Travel_encoder_action: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Travel_encoder_action} type="text" name="Travel_Drive_Before_Travel_encoder_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_Before_Travel_encoder_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_Before_Travel_encoder_remarks} type="text" name="Travel_Drive_Before_Travel_encoder_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Travel motor</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Travel_motor_result: e.target.value })}
                            value={initialValues.Travel_Drive_During_Travel_motor_result} type="text" name="Travel_Drive_During_Travel_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Travel_motor_action: e.target.value })}
                            value={initialValues.Travel_Drive_During_Travel_motor_action} type="text" name="Travel_Drive_During_Travel_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Travel_motor_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_During_Travel_motor_remarks} type="text" name="Travel_Drive_During_Travel_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Speed_reducer_result: e.target.value })}
                            value={initialValues.Travel_Drive_During_Speed_reducer_result} type="text" name="Travel_Drive_During_Speed_reducer_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Speed_reducer_action: e.target.value })}
                            value={initialValues.Travel_Drive_During_Speed_reducer_action} type="text" name="Travel_Drive_During_Speed_reducer_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Speed_reducer_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_During_Speed_reducer_remarks} type="text" name="Travel_Drive_During_Speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic brake</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_E_magnetic_brake_result: e.target.value })}
                            value={initialValues.Travel_Drive_During_E_magnetic_brake_result} type="text" name="Travel_Drive_During_E_magnetic_brake_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_E_magnetic_brake_action: e.target.value })}
                            value={initialValues.Travel_Drive_During_E_magnetic_brake_action} type="text" name="Travel_Drive_During_E_magnetic_brake_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_E_magnetic_brake_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_During_E_magnetic_brake_remarks} type="text" name="Travel_Drive_During_E_magnetic_brake_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Travel wheel</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Travel_wheel_result: e.target.value })}
                            value={initialValues.Travel_Drive_During_Travel_wheel_result} type="text" name="Travel_Drive_During_Travel_wheel_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Travel_wheel_action: e.target.value })}
                            value={initialValues.Travel_Drive_During_Travel_wheel_action} type="text" name="Travel_Drive_During_Travel_wheel_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Travel_wheel_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_During_Travel_wheel_remarks} type="text" name="Travel_Drive_During_Travel_wheel_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Free wheel</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Free_wheel_result: e.target.value })}
                            value={initialValues.Travel_Drive_During_Free_wheel_result} type="text" name="Travel_Drive_During_Free_wheel_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Free_wheel_action: e.target.value })}
                            value={initialValues.Travel_Drive_During_Free_wheel_action} type="text" name="Travel_Drive_During_Free_wheel_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_During_Free_wheel_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_During_Free_wheel_remarks} type="text" name="Travel_Drive_During_Free_wheel_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Travel Motor</td>
                        <td>Overheating</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Travel_motor_result: e.target.value })}
                            value={initialValues.Travel_Drive_After_Travel_motor_result} type="text" name="Travel_Drive_After_Travel_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Travel_motor_action: e.target.value })}
                            value={initialValues.Travel_Drive_After_Travel_motor_action} type="text" name="Travel_Drive_After_Travel_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Travel_motor_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_After_Travel_motor_remarks} type="text" name="Travel_Drive_After_Travel_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Overheating</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Speed_reducer_result: e.target.value })}
                            value={initialValues.Travel_Drive_After_Speed_reducer_result} type="text" name="Travel_Drive_After_Speed_reducer_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Speed_reducer_action: e.target.value })}
                            value={initialValues.Travel_Drive_After_Speed_reducer_action} type="text" name="Travel_Drive_After_Speed_reducer_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Speed_reducer_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_After_Speed_reducer_remarks} type="text" name="Travel_Drive_After_Speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Bolts_result: e.target.value })}
                            value={initialValues.Travel_Drive_After_Bolts_result} type="text" name="Travel_Drive_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Bolts_action: e.target.value })}
                            value={initialValues.Travel_Drive_After_Bolts_action} type="text" name="Travel_Drive_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Travel_Drive_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Travel_Drive_After_Bolts_remarks} type="text" name="Travel_Drive_After_Bolts_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Hoist Drive Unit</h2>
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
                        <td>Hoist motor</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_motor_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_motor_result} type="text" name="Hoist_Drive_Before_Hoisting_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_motor_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_motor_action} type="text" name="Hoist_Drive_Before_Hoisting_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_motor_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_motor_remarks} type="text" name="Hoist_Drive_Before_Hoisting_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_damages_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_damages_result} type="text" name="Hoist_Drive_Before_Speed_reducer_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_damages_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_damages_remarks} type="text" name="Hoist_Drive_Before_Speed_reducer_damages_remarks" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_damages_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_damages_action} type="text" name="Hoist_Drive_Before_Speed_reducer_damages_action" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Oil leakage</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_leakage_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_leakage_result} type="text" name="Hoist_Drive_Before_Speed_reducer_leakage_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_leakage_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_leakage_action} type="text" name="Hoist_Drive_Before_Speed_reducer_leakage_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_leakage_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_leakage_remarks} type="text" name="Hoist_Drive_Before_Speed_reducer_leakage_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Oil level</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_level_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_level_result} type="text" name="Hoist_Drive_Before_Speed_reducer_level_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_level_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_level_action} type="text" name="Hoist_Drive_Before_Speed_reducer_level_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Speed_reducer_level_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Speed_reducer_level_remarks} type="text" name="Hoist_Drive_Before_Speed_reducer_level_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic brake</td>
                        <td>Lining wear and tear</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_E_magnetic_brake_wear_tear_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_E_magnetic_brake_wear_tear_result} type="text" name="Hoist_Drive_Before_E_magnetic_brake_wear_tear_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_E_magnetic_brake_wear_tear_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_E_magnetic_brake_wear_tear_action} type="text" name="Hoist_Drive_Before_E_magnetic_brake_wear_tear_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_E_magnetic_brake_wear_tear_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_E_magnetic_brake_wear_tear_remarks} type="text" name="Hoist_Drive_Before_E_magnetic_brake_wear_tear_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Brake gap (0.60mm - 1.50mm)</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_E_magnetic_brake_Brake_gap_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_E_magnetic_brake_Brake_gap_result} type="text" name="Hoist_Drive_Before_E_magnetic_brake_Brake_gap_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_E_magnetic_brake_Brake_gap_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_E_magnetic_brake_Brake_gap_action} type="text" name="Hoist_Drive_Before_E_magnetic_brake_Brake_gap_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_E_magnetic_brake_Brake_gap_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_E_magnetic_brake_Brake_gap_remarks} type="text" name="Hoist_Drive_Before_E_magnetic_brake_Brake_gap_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hoisting chain</td>
                        <td>Abrasion, damage or rust</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Abrasion_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Abrasion_result} type="text" name="Hoist_Drive_Before_Hoisting_chain_Abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Abrasion_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Abrasion_action} type="text" name="Hoist_Drive_Before_Hoisting_chain_Abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Abrasion_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Abrasion_remarks} type="text" name="Hoist_Drive_Before_Hoisting_chain_Abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Chain tension</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Chain_tension_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Chain_tension_result} type="text" name="Hoist_Drive_Before_Hoisting_chain_Chain_tension_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Chain_tension_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Chain_tension_action} type="text" name="Hoist_Drive_Before_Hoisting_chain_Chain_tension_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Chain_tension_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Chain_tension_remarks} type="text" name="Hoist_Drive_Before_Hoisting_chain_Chain_tension_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Elongation</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Elongation_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Elongation_result} type="text" name="Hoist_Drive_Before_Hoisting_chain_Elongation_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Elongation_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Elongation_action} type="text" name="Hoist_Drive_Before_Hoisting_chain_Elongation_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_chain_Elongation_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_chain_Elongation_remarks} type="text" name="Hoist_Drive_Before_Hoisting_chain_Elongation_remarks" /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>Sprocket</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Sprocket_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Sprocket_result} type="text" name="Hoist_Drive_Before_Sprocket_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Sprocket_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Sprocket_action} type="text" name="Hoist_Drive_Before_Sprocket_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Sprocket_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Sprocket_remarks} type="text" name="Hoist_Drive_Before_Sprocket_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hoisting encoder</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_encoder_result: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_encoder_result} type="text" name="Hoist_Drive_Before_Hoisting_encoder_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_encoder_action: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_encoder_action} type="text" name="Hoist_Drive_Before_Hoisting_encoder_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_Before_Hoisting_encoder_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_Before_Hoisting_encoder_remarks} type="text" name="Hoist_Drive_Before_Hoisting_encoder_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Hoisting motor</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Hoisting_motor_result: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Hoisting_motor_result} type="text" name="Hoist_Drive_During_Hoisting_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Hoisting_motor_action: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Hoisting_motor_action} type="text" name="Hoist_Drive_During_Hoisting_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Hoisting_motor_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Hoisting_motor_remarks} type="text" name="Hoist_Drive_During_Hoisting_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Speed_reducer_result: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Speed_reducer_result} type="text" name="Hoist_Drive_During_Speed_reducer_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Speed_reducer_action: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Speed_reducer_action} type="text" name="Hoist_Drive_During_Speed_reducer_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Speed_reducer_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Speed_reducer_remarks} type="text" name="Hoist_Drive_During_Speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic brake</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_E_magnetic_brake_result: e.target.value })}
                            value={initialValues.Hoist_Drive_During_E_magnetic_brake_result} type="text" name="Hoist_Drive_During_E_magnetic_brake_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_E_magneticmagnetic_brake_action: e.target.value })}
                            value={initialValues.Hoist_Drive_During_E_magneticmagnetic_brake_action} type="text" name="Hoist_Drive_During_E_magneticmagnetic_brake_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_E_magneticmagnetic_brake_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_During_E_magneticmagnetic_brake_remarks} type="text" name="Hoist_Drive_During_E_magneticmagnetic_brake_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Sprocket_sound_result: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Sprocket_sound_result} type="text" name="Hoist_Drive_During_Sprocket_sound_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Sprocket_sound_action: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Sprocket_sound_action} type="text" name="Hoist_Drive_During_Sprocket_sound_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Sprocket_sound_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Sprocket_sound_remarks} type="text" name="Hoist_Drive_During_Sprocket_sound_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lateral vibrations</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Sprocket_vibrations_result: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Sprocket_vibrations_result} type="text" name="Hoist_Drive_During_Sprocket_vibrations_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Sprocket_vibrations_action: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Sprocket_vibrations_action} type="text" name="Hoist_Drive_During_Sprocket_vibrations_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_During_Sprocket_vibrations_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_During_Sprocket_vibrations_remarks} type="text" name="Hoist_Drive_During_Sprocket_vibrations_remarks" /></td>
                    </tr>

                    <tr>
                        <td>After</td>
                        <td>Hoisting motor</td>
                        <td>Overheating</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Hoisting_motor_result: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Hoisting_motor_result} type="text" name="Hoist_Drive_After_Hoisting_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Hoisting_motor_action: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Hoisting_motor_action} type="text" name="Hoist_Drive_After_Hoisting_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Hoisting_motor_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Hoisting_motor_remarks} type="text" name="Hoist_Drive_After_Hoisting_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Overheating</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Speed_reducer_result: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Speed_reducer_result} type="text" name="Hoist_Drive_After_Speed_reducer_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Speed_reducer_action: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Speed_reducer_action} type="text" name="Hoist_Drive_After_Speed_reducer_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Speed_reducer_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Speed_reducer_remarks} type="text" name="Hoist_Drive_After_Speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Bolts_result: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Bolts_result} type="text" name="Hoist_Drive_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Bolts_action: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Bolts_action} type="text" name="Hoist_Drive_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoist_Drive_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Hoist_Drive_After_Bolts_remarks} type="text" name="Hoist_Drive_After_Bolts_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Hoisting Carriage</h2>
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
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Carriage_frame_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Carriage_frame_result} type="text" name="Hoisting_Carriage_Before_Carriage_frame_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Carriage_frame_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Carriage_frame_action} type="text" name="Hoisting_Carriage_Before_Carriage_frame_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Carriage_frame_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Carriage_frame_remarks} type="text" name="Hoisting_Carriage_Before_Carriage_frame_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hoisting guide rollers</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_abrasion_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_abrasion_result} type="text" name="Hoisting_Carriage_Before_guide_rollers_abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_abrasion_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_abrasion_action} type="text" name="Hoisting_Carriage_Before_guide_rollers_abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_abrasion_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_abrasion_remarks} type="text" name="Hoisting_Carriage_Before_guide_rollers_abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Clearance to mast</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_mast_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_mast_result} type="text" name="Hoisting_Carriage_Before_guide_rollers_mast_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_mast_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_mast_action} type="text" name="Hoisting_Carriage_Before_guide_rollers_mast_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_mast_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_mast_remarks} type="text" name="Hoisting_Carriage_Before_guide_rollers_mast_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Diameter (over 149mm)</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_Diameter_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_Diameter_result} type="text" name="Hoisting_Carriage_Before_guide_rollers_Diameter_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_Diameter_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_Diameter_action} type="text" name="Hoisting_Carriage_Before_guide_rollers_Diameter_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_guide_rollers_Diameter_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_guide_rollers_Diameter_remarks} type="text" name="Hoisting_Carriage_Before_guide_rollers_Diameter_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hoisting face rollers</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_face_rollers_abrasion_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_face_rollers_abrasion_result} type="text" name="Hoisting_Carriage_Before_face_rollers_abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_face_rollers_abrasion_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_face_rollers_abrasion_action} type="text" name="Hoisting_Carriage_Before_face_rollers_abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_face_rollers_abrasion_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_face_rollers_abrasion_remarks} type="text" name="Hoisting_Carriage_Before_face_rollers_abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Diameter (over 85mm)</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_face_rollers_Diameter_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_face_rollers_Diameter_result} type="text" name="Hoisting_Carriage_Before_face_rollers_Diameter_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_face_rollers_Diameter_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_face_rollers_Diameter_action} type="text" name="Hoisting_Carriage_Before_face_rollers_Diameter_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_face_rollers_Diameter_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_face_rollers_Diameter_remarks} type="text" name="Hoisting_Carriage_Before_face_rollers_Diameter_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load profile detector arm</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Load_profile_damages_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Load_profile_damages_result} type="text" name="Hoisting_Carriage_Before_Load_profile_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Load_profile_damages_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Load_profile_damages_action} type="text" name="Hoisting_Carriage_Before_Load_profile_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Load_profile_damages_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Load_profile_damages_remarks} type="text" name="Hoisting_Carriage_Before_Load_profile_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Spring condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Load_profile_Spring_condition_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Load_profile_Spring_condition_result} type="text" name="Hoisting_Carriage_Before_Load_profile_Spring_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Load_profile_Spring_condition_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Load_profile_Spring_condition_action} type="text" name="Hoisting_Carriage_Before_Load_profile_Spring_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Load_profile_Spring_condition_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Load_profile_Spring_condition_remarks} type="text" name="Hoisting_Carriage_Before_Load_profile_Spring_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bay count shielding plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Bay_count_shielding_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Bay_count_shielding_result} type="text" name="Hoisting_Carriage_Before_Bay_count_shielding_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Bay_count_shielding_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Bay_count_shielding_action} type="text" name="Hoisting_Carriage_Before_Bay_count_shielding_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Bay_count_shielding_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Bay_count_shielding_remarks} type="text" name="Hoisting_Carriage_Before_Bay_count_shielding_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Home position shielding plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Home_position_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Home_position_result} type="text" name="Hoisting_Carriage_Before_Home_position_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Home_position_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Home_position_action} type="text" name="Hoisting_Carriage_Before_Home_position_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Home_position_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Home_position_remarks} type="text" name="Hoisting_Carriage_Before_Home_position_remarks" /></td>
                    </tr>
                    <tr>
                        <td>Bef.</td>
                        <td>Deceleration shielding plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Deceleration_shielding_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Deceleration_shielding_result} type="text" name="Hoisting_Carriage_Before_Deceleration_shielding_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Deceleration_shielding_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Deceleration_shielding_action} type="text" name="Hoisting_Carriage_Before_Deceleration_shielding_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Deceleration_shielding_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Deceleration_shielding_remarks} type="text" name="Hoisting_Carriage_Before_Deceleration_shielding_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Over-run flag</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Over_run_flag_damages_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Over_run_flag_damages_result} type="text" name="Hoisting_Carriage_Before_Over_run_flag_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Over_run_flag_damages_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Over_run_flag_damages_action} type="text" name="Hoisting_Carriage_Before_Over_run_flag_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Over_run_flag_damages_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Over_run_flag_damages_remarks} type="text" name="Hoisting_Carriage_Before_Over_run_flag_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Position</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Over_run_flag_Position_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Over_run_flag_Position_result} type="text" name="Hoisting_Carriage_Before_Over_run_flag_Position_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Over_run_flag_Position_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Over_run_flag_Position_action} type="text" name="Hoisting_Carriage_Before_Over_run_flag_Position_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_Before_Over_run_flag_Position_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_Before_Over_run_flag_Position_remarks} type="text" name="Hoisting_Carriage_Before_Over_run_flag_Position_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Hoisting guide rollers</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_guide_rollers_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_guide_rollers_result} type="text" name="Hoisting_Carriage_During_guide_rollers_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_guide_rollers_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_guide_rollers_action} type="text" name="Hoisting_Carriage_During_guide_rollers_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_guide_rollers_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_guide_rollers_remarks} type="text" name="Hoisting_Carriage_During_guide_rollers_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hoisting face rollers</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_face_rollers_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_face_rollers_result} type="text" name="Hoisting_Carriage_During_face_rollers_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_face_rollers_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_face_rollers_action} type="text" name="Hoisting_Carriage_During_face_rollers_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_face_rollers_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_face_rollers_remarks} type="text" name="Hoisting_Carriage_During_face_rollers_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Shielding plates</td>
                        <td>Smooth traveling at section</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_Shielding_plates_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_Shielding_plates_result} type="text" name="Hoisting_Carriage_During_Shielding_plates_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_Shielding_plates_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_Shielding_plates_action} type="text" name="Hoisting_Carriage_During_Shielding_plates_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_During_Shielding_plates_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_During_Shielding_plates_remarks} type="text" name="Hoisting_Carriage_During_Shielding_plates_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_After_Bolts_result: e.target.value })}
                            value={initialValues.Hoisting_Carriage_After_Bolts_result} type="text" name="Hoisting_Carriage_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_After_Bolts_action: e.target.value })}
                            value={initialValues.Hoisting_Carriage_After_Bolts_action} type="text" name="Hoisting_Carriage_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Hoisting_Carriage_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Hoisting_Carriage_After_Bolts_remarks} type="text" name="Hoisting_Carriage_After_Bolts_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Top & Bottom Rails</h2>
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
                        <td>Top rail</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_damages_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_damages_result} type="text" name="Top_Bottom_Rails_Before_Top_rail_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_damages_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_damages_action} type="text" name="Top_Bottom_Rails_Before_Top_rail_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_damages_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_damages_remarks} type="text" name="Top_Bottom_Rails_Before_Top_rail_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Rail joint condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_Rail_joint_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_Rail_joint_result} type="text" name="Top_Bottom_Rails_Before_Top_rail_Rail_joint_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_Rail_joint_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_Rail_joint_action} type="text" name="Top_Bottom_Rails_Before_Top_rail_Rail_joint_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_Rail_joint_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_Rail_joint_remarks} type="text" name="Top_Bottom_Rails_Before_Top_rail_Rail_joint_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Bolts and nuts</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_result} type="text" name="Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_action} type="text" name="Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_remarks} type="text" name="Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bottom rail</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bottom_rail_damages_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bottom_rail_damages_result} type="text" name="Top_Bottom_Rails_Before_Bottom_rail_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bottom_rail_damages_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bottom_rail_damages_action} type="text" name="Top_Bottom_Rails_Before_Bottom_rail_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bottom_rail_damages_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bottom_rail_damages_remarks} type="text" name="Top_Bottom_Rails_Before_Bottom_rail_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Rail joint condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_result} type="text" name="Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_action} type="text" name="Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_remarks} type="text" name="Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Shim plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shim_plates_damages_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shim_plates_damages_result} type="text" name="Top_Bottom_Rails_Before_Shim_plates_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shim_plates_damages_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shim_plates_damages_action} type="text" name="Top_Bottom_Rails_Before_Shim_plates_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shim_plates_damages_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shim_plates_damages_remarks} type="text" name="Top_Bottom_Rails_Before_Shim_plates_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Missing</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shim_plates_Missing_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shim_plates_Missing_result} type="text" name="Top_Bottom_Rails_Before_Shim_plates_Missing_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shim_plates_Missing_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shim_plates_Missing_action} type="text" name="Top_Bottom_Rails_Before_Shim_plates_Missing_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shim_plates_Missing_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shim_plates_Missing_remarks} type="text" name="Top_Bottom_Rails_Before_Shim_plates_Missing_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Anchor bolts</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Anchor_bolt_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Anchor_bolt_result} type="text" name="Top_Bottom_Rails_Before_Anchor_bolt_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Anchor_bolt_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Anchor_bolt_action} type="text" name="Top_Bottom_Rails_Before_Anchor_bolt_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Anchor_bolt_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Anchor_bolt_remarks} type="text" name="Top_Bottom_Rails_Before_Anchor_bolt_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Shielding plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shielding_plates_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shielding_plates_result} type="text" name="Top_Bottom_Rails_Before_Shielding_plates_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shielding_plates_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shielding_plates_action} type="text" name="Top_Bottom_Rails_Before_Shielding_plates_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Shielding_plates_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Shielding_plates_remarks} type="text" name="Top_Bottom_Rails_Before_Shielding_plates_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bay count shielding plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bay_count_shielding_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bay_count_shielding_result} type="text" name="Top_Bottom_Rails_Before_Bay_count_shielding_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bay_count_shielding_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bay_count_shielding_action} type="text" name="Top_Bottom_Rails_Before_Bay_count_shielding_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Bay_count_shielding_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Bay_count_shielding_remarks} type="text" name="Top_Bottom_Rails_Before_Bay_count_shielding_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Home position shielding plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Home_position_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Home_position_result} type="text" name="Top_Bottom_Rails_Before_Home_position_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Home_position_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Home_position_action} type="text" name="Top_Bottom_Rails_Before_Home_position_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Home_position_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Home_position_remarks} type="text" name="Top_Bottom_Rails_Before_Home_position_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Deceleration shielding plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Deceleration_shielding_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Deceleration_shielding_result} type="text" name="Top_Bottom_Rails_Before_Deceleration_shielding_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Deceleration_shielding_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Deceleration_shielding_action} type="text" name="Top_Bottom_Rails_Before_Deceleration_shielding_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Deceleration_shielding_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Deceleration_shielding_remarks} type="text" name="Top_Bottom_Rails_Before_Deceleration_shielding_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Over-run flag</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Over_run_flag_damages_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Over_run_flag_damages_result} type="text" name="Top_Bottom_Rails_Before_Over_run_flag_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Over_run_flag_damages_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Over_run_flag_damages_action} type="text" name="Top_Bottom_Rails_Before_Over_run_flag_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Over_run_flag_damages_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Over_run_flag_damages_remarks} type="text" name="Top_Bottom_Rails_Before_Over_run_flag_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Position</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Over_run_flag_Position_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Over_run_flag_Position_result} type="text" name="Top_Bottom_Rails_Before_Over_run_flag_Position_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Over_run_flag_Position_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Over_run_flag_Position_action} type="text" name="Top_Bottom_Rails_Before_Over_run_flag_Position_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_Before_Over_run_flag_Position_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_Before_Over_run_flag_Position_remarks} type="text" name="Top_Bottom_Rails_Before_Over_run_flag_Position_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Top rail</td>
                        <td>Smooth traveling at section</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Top_rail_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Top_rail_result} type="text" name="Top_Bottom_Rails_During_Top_rail_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Top_rail_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Top_rail_action} type="text" name="Top_Bottom_Rails_During_Top_rail_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Top_rail_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Top_rail_remarks} type="text" name="Top_Bottom_Rails_During_Top_rail_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bottom Rail</td>
                        <td>Smooth traveling at section</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Bottom_rail_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Bottom_rail_result} type="text" name="Top_Bottom_Rails_During_Bottom_rail_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Bottom_rail_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Bottom_rail_action} type="text" name="Top_Bottom_Rails_During_Bottom_rail_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Bottom_rail_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Bottom_rail_remarks} type="text" name="Top_Bottom_Rails_During_Bottom_rail_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Shielding plates</td>
                        <td>Smooth traveling at section</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Shielding_plates_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Shielding_plates_result} type="text" name="Top_Bottom_Rails_During_Shielding_plates_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Shielding_plates_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Shielding_plates_action} type="text" name="Top_Bottom_Rails_During_Shielding_plates_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_During_Shielding_plates_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_During_Shielding_plates_remarks} type="text" name="Top_Bottom_Rails_During_Shielding_plates_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_After_Bolts_result: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_After_Bolts_result} type="text" name="Top_Bottom_Rails_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_After_Bolts_action: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_After_Bolts_action} type="text" name="Top_Bottom_Rails_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Top_Bottom_Rails_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Top_Bottom_Rails_After_Bolts_remarks} type="text" name="Top_Bottom_Rails_After_Bolts_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Upper & Lower Frames</h2>
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
                        <td>Upper frame</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_frame_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_frame_result} type="text" name="Upper_Lower_Frames_Before_Upper_frame_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_frame_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_frame_action} type="text" name="Upper_Lower_Frames_Before_Upper_frame_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_frame_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_frame_remarks} type="text" name="Upper_Lower_Frames_Before_Upper_frame_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket (Upper frame)</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Sprocket_Abrasion_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Sprocket_Abrasion_result} type="text" name="Upper_Lower_Frames_Before_Sprocket_Abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Sprocket_Abrasion_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Sprocket_Abrasion_action} type="text" name="Upper_Lower_Frames_Before_Sprocket_Abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Sprocket_Abrasion_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Sprocket_Abrasion_remarks} type="text" name="Upper_Lower_Frames_Before_Sprocket_Abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Upper travel guide roller</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_result} type="text" name="Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lowerr_Frames_Before_Upper_travel_guide_Abrasion_action: e.target.value })}
                            value={initialValues.Upper_Lowerr_Frames_Before_Upper_travel_guide_Abrasion_action} type="text" name="Upper_Lowerr_Frames_Before_Upper_travel_guide_Abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_remarks} type="text" name="Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Diameter (over 95mm)</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_result} type="text" name="Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_action} type="text" name="Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_remarks} type="text" name="Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lower frame</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_frame_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_frame_result} type="text" name="Upper_Lower_Frames_Before_Lower_frame_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_frame_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_frame_action} type="text" name="Upper_Lower_Frames_Before_Lower_frame_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_frame_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_frame_remarks} type="text" name="Upper_Lower_Frames_Before_Lower_frame_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket (Lower frame)</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Sprocket_deformation_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Sprocket_deformation_result} type="text" name="Upper_Lower_Frames_Before_Sprocket_deformation_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Sprocket_deformation_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Sprocket_deformation_action} type="text" name="Upper_Lower_Frames_Before_Sprocket_deformation_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Sprocket_deformation_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Sprocket_deformation_remarks} type="text" name="Upper_Lower_Frames_Before_Sprocket_deformation_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lower travel guide roller</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_result} type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_action} type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_remarks} type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Diameter (over 159mm)</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_result} type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_action} type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_remarks} type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Upper travel guide roller</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Upper_travel_guide_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Upper_travel_guide_result} type="text" name="Upper_Lower_Frames_During_Upper_travel_guide_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Upper_travel_guide_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Upper_travel_guide_action} type="text" name="Upper_Lower_Frames_During_Upper_travel_guide_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Upper_travel_guide_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Upper_travel_guide_remarks} type="text" name="Upper_Lower_Frames_During_Upper_travel_guide_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lower travel guide roller</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Lower_travel_guide_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Lower_travel_guide_result} type="text" name="Upper_Lower_Frames_During_Lower_travel_guide_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Lower_travel_guide_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Lower_travel_guide_action} type="text" name="Upper_Lower_Frames_During_Lower_travel_guide_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Lower_travel_guide_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Lower_travel_guide_remarks} type="text" name="Upper_Lower_Frames_During_Lower_travel_guide_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Sprocket_sound_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Sprocket_sound_result} type="text" name="Upper_Lower_Frames_During_Sprocket_sound_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Sprocket_sound_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Sprocket_sound_action} type="text" name="Upper_Lower_Frames_During_Sprocket_sound_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Sprocket_sound_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Sprocket_sound_remarks} type="text" name="Upper_Lower_Frames_During_Sprocket_sound_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Lateral vibrations</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Sprocket_vibrations_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Sprocket_vibrations_result} type="text" name="Upper_Lower_Frames_During_Sprocket_vibrations_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Sprocket_vibrations_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Sprocket_vibrations_action} type="text" name="Upper_Lower_Frames_During_Sprocket_vibrations_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_During_Sprocket_vibrations_remarksnetic_brake_lining_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_During_Sprocket_vibrations_remarks} type="text" name="Upper_Lower_Frames_During_Sprocket_vibrations_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_After_Bolts_result: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_After_Bolts_result} type="text" name="Upper_Lower_Frames_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_After_Bolts_action: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_After_Bolts_action} type="text" name="Upper_Lower_Frames_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Upper_Lower_Frames_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Upper_Lower_Frames_After_Bolts_remarks} type="text" name="Upper_Lower_Frames_After_Bolts_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Slide Fork Unit</h2>
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
                        <td>Fork body frame</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Fork_Before_body_frame_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Fork_Before_body_frame_result} type="text" name="Slide_Fork_Unit_Fork_Before_body_frame_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Fork_Before_body_frame_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Fork_Before_body_frame_action} type="text" name="Slide_Fork_Unit_Fork_Before_body_frame_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Fork_Before_body_frame_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Fork_Before_body_frame_remarks} type="text" name="Slide_Fork_Unit_Fork_Before_body_frame_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork motor</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Fork_motor_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Fork_motor_result} type="text" name="Slide_Fork_Unit_Before_Fork_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Fork_motor_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Fork_motor_action} type="text" name="Slide_Fork_Unit_Before_Fork_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Fork_motor_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Fork_motor_remarks} type="text" name="Slide_Fork_Unit_Before_Fork_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Speed_reducer_Deformation_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Speed_reducer_Deformation_result} type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Deformation_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Speed_reducer_Deformation_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Speed_reducer_Deformation_action} type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Deformation_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Speed_reducer_Deformation_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Speed_reducer_Deformation_remarks} type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Deformation_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Grease amount</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Speed_reducer_Grease_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Speed_reducer_Grease_result} type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Grease_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Speed_reducer_Grease_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Speed_reducer_Grease_action} type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Grease_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Speed_reducer_Grease_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Speed_reducer_Grease_remarks} type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Grease_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic brake</td>
                        <td>Lining wear and tear</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_result} type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_action} type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_remarks} type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Brake gap (0.20mm - 0.50mm)</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_result} type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_action} type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_remarks} type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Rack and pinion</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_result} type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_action} type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_remarks} type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Lubrication</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_result} type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_action} type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_remarks} type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_remarks" /></td>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Middle rail</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Abrasion_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Abrasion_result} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Abrasion_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Abrasion_action} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Abrasion_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Abrasion_remarks} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Groove condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Groove_condition_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Groove_condition_result} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Groove_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Groove_condition_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Groove_condition_action} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Groove_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Groove_condition_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Groove_condition_remarks} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Groove_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Lubrication</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Lubrication_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Lubrication_result} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Lubrication_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Lubrication_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Lubrication_action} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Lubrication_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Middle_rail_Lubrication_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Middle_rail_Lubrication_remarks} type="text" name="Slide_Fork_Unit_Before_Middle_rail_Lubrication_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cam followers</td>
                        <td>Abrasion and deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Abrasion_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Abrasion_result} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Abrasion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Abrasion_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Abrasion_action} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Abrasion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Abrasion_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Abrasion_remarks} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Abrasion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Lubrication</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Lubrication_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Lubrication_result} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Lubrication_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Lubrication_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Lubrication_action} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Lubrication_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Lubrication_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Lubrication_remarks} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Lubrication_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Smooth rotation</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_result} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_action} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_remarks} type="text" name="Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Torque limiter</td>
                        <td>Lock nut tighteness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_result} type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_action} type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_remarks} type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Mechanical operation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Torque_limiter_Mechanical_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Torque_limiter_Mechanical_result} type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Mechanical_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Torque_limiter_Mechanical_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Torque_limiter_Mechanical_action} type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Mechanical_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Torque_limiter_Mechanical_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Torque_limiter_Mechanical_remarks} type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Mechanical_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket / idler rollers</td>
                        <td>Abrasion or deformation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sprocket_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sprocket_result} type="text" name="Slide_Fork_Unit_Before_Sprocket_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sprocket_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sprocket_action} type="text" name="Slide_Fork_Unit_Before_Sprocket_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sprocket_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sprocket_remarks} type="text" name="Slide_Fork_Unit_Before_Sprocket_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sensing plates</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sensing_plates_Deformation_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sensing_plates_Deformation_result} type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Deformation_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sensing_plates_Deformation_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sensing_plates_Deformation_action} type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Deformation_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sensing_plates_Deformation_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sensing_plates_Deformation_remarks} type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Deformation_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sensing_plates_Looseness_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sensing_plates_Looseness_result} type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Looseness_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sensing_plates_Looseness_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sensing_plates_Looseness_action} type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Looseness_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_Before_Sensing_plates_Looseness_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_Before_Sensing_plates_Looseness_remarks} type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Looseness_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Fork motor</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Fork_motor_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Fork_motor_result} type="text" name="Slide_Fork_Unit_During_Fork_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Fork_motor_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Fork_motor_action} type="text" name="Slide_Fork_Unit_During_Fork_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Fork_motor_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Fork_motor_remarks} type="text" name="Slide_Fork_Unit_During_Fork_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Speed_reducer_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Speed_reducer_result} type="text" name="Slide_Fork_Unit_During_Speed_reducer_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Speed_reducer_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Speed_reducer_action} type="text" name="Slide_Fork_Unit_During_Speed_reducer_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Speed_reducer_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Speed_reducer_remarks} type="text" name="Slide_Fork_Unit_During_Speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic brake</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_E_magnetic_brake_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_E_magnetic_brake_result} type="text" name="Slide_Fork_Unit_During_E_magnetic_brake_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_E_magnetic_brake_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_E_magnetic_brake_action} type="text" name="Slide_Fork_Unit_During_E_magnetic_brake_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_E_magnetic_brake_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_E_magnetic_brake_remarks} type="text" name="Slide_Fork_Unit_During_E_magnetic_brake_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork plate</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Fork_plate_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Fork_plate_result} type="text" name="Slide_Fork_Unit_During_Fork_plate_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Fork_plate_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Fork_plate_action} type="text" name="Slide_Fork_Unit_During_Fork_plate_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Fork_plate_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Fork_plate_remarks} type="text" name="Slide_Fork_Unit_During_Fork_plate_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Rack and pinion</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Rack_and_pinion_sound_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Rack_and_pinion_sound_result} type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_sound_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Rack_and_pinion_sound_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Rack_and_pinion_sound_action} type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_sound_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Rack_and_pinion_sound_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Rack_and_pinion_sound_remarks} type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_sound_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Lateral vibrations</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Rack_and_pinion_vibrations_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Rack_and_pinion_vibrations_result} type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_vibrations_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Rack_and_pinion_vibrations_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Rack_and_pinion_vibrations_action} type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_vibrations_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Rack_and_pinion_vibrations_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Rack_and_pinion_vibrations_remarks} type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_vibrations_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket / idler rollers</td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Sprocket_sound_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Sprocket_sound_result} type="text" name="Slide_Fork_Unit_During_Sprocket_sound_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Sprocket_sound_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Sprocket_sound_action} type="text" name="Slide_Fork_Unit_During_Sprocket_sound_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Sprocket_sound_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Sprocket_sound_remarks} type="text" name="Slide_Fork_Unit_During_Sprocket_sound_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Lateral vibrations</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Sprocket_vibrations_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Sprocket_vibrations_result} type="text" name="Slide_Fork_Unit_During_Sprocket_vibrations_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Sprocket_vibrations_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Sprocket_vibrations_action} type="text" name="Slide_Fork_Unit_During_Sprocket_vibrations_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_During_Sprocket_vibrations_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_During_Sprocket_vibrations_remarks} type="text" name="Slide_Fork_Unit_During_Sprocket_vibrations_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Fork motor</td>
                        <td>Overheating</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Fork_motor_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Fork_motor_result} type="text" name="Slide_Fork_Unit_After_Fork_motor_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Fork_motor_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Fork_motor_action} type="text" name="Slide_Fork_Unit_After_Fork_motor_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Fork_motor_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Fork_motor_remarks} type="text" name="Slide_Fork_Unit_After_Fork_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Overheating</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Speed_reducer_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Speed_reducer_result} type="text" name="Slide_Fork_Unit_After_Speed_reducer_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Speed_reducer_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Speed_reducer_action} type="text" name="Slide_Fork_Unit_After_Speed_reducer_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Speed_reducer_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Speed_reducer_remarks} type="text" name="Slide_Fork_Unit_After_Speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic brake</td>
                        <td>Overheating</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_E_magnetic_brake_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_E_magnetic_brake_result} type="text" name="Slide_Fork_Unit_After_E_magnetic_brake_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_E_magnetic_brake_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_E_magnetic_brake_action} type="text" name="Slide_Fork_Unit_After_E_magnetic_brake_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_E_magnetic_brake_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_E_magnetic_brake_remarks} type="text" name="Slide_Fork_Unit_After_E_magnetic_brake_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Bolts_result: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Bolts_result} type="text" name="Slide_Fork_Unit_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Bolts_action: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Bolts_action} type="text" name="Slide_Fork_Unit_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Slide_Fork_Unit_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Slide_Fork_Unit_After_Bolts_remarks} type="text" name="Slide_Fork_Unit_After_Bolts_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Power Feed Unit</h2>
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
                        <td>Power feed rail</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_damages_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_damages_result} type="text" name="Power_Feed_Unit_Before_power_feed_rail_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_damages_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_damages_action} type="text" name="Power_Feed_Unit_Before_power_feed_rail_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_damages_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_damages_remarks} type="text" name="Power_Feed_Unit_Before_power_feed_rail_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Fastener condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_Fastener_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_Fastener_result} type="text" name="Power_Feed_Unit_Before_power_feed_rail_Fastener_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_Fastener_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_Fastener_action} type="text" name="Power_Feed_Unit_Before_power_feed_rail_Fastener_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_Fastener_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_Fastener_remarks} type="text" name="Power_Feed_Unit_Before_power_feed_rail_Fastener_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_Dust_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_Dust_result} type="text" name="Power_Feed_Unit_Before_power_feed_rail_Dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_Dust_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_Dust_action} type="text" name="Power_Feed_Unit_Before_power_feed_rail_Dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_power_feed_rail_Dust_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_power_feed_rail_Dust_remarks} type="text" name="Power_Feed_Unit_Before_power_feed_rail_Dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Collector arm</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_arm_damages_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_arm_damages_result} type="text" name="Power_Feed_Unit_Before_Collector_arm_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_arm_damages_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_arm_damages_action} type="text" name="Power_Feed_Unit_Before_Collector_arm_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_arm_damages_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_arm_damages_remarks} type="text" name="Power_Feed_Unit_Before_Collector_arm_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Spring condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_arm_Spring_condition_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_arm_Spring_condition_result} type="text" name="Power_Feed_Unit_Before_Collector_arm_Spring_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_arm_Spring_condition_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_arm_Spring_condition_action} type="text" name="Power_Feed_Unit_Before_Collector_arm_Spring_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_arm_Spring_condition_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_arm_Spring_condition_remarks} type="text" name="Power_Feed_Unit_Before_Collector_arm_Spring_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Collector shoes</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_damages_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_damages_result} type="text" name="Power_Feed_Unit_Before_Collector_shoes_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_damages_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_damages_action} type="text" name="Power_Feed_Unit_Before_Collector_shoes_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_damages_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_damages_remarks} type="text" name="Power_Feed_Unit_Before_Collector_shoes_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Fastener condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_Fastener_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_Fastener_result} type="text" name="Power_Feed_Unit_Before_Collector_shoes_Fastener_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_Fastener_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_Fastener_action} type="text" name="Power_Feed_Unit_Before_Collector_shoes_Fastener_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_Fastener_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_Fastener_remarks} type="text" name="Power_Feed_Unit_Before_Collector_shoes_Fastener_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_Dust_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_Dust_result} type="text" name="Power_Feed_Unit_Before_Collector_shoes_Dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_Dust_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_Dust_action} type="text" name="Power_Feed_Unit_Before_Collector_shoes_Dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_Before_Collector_shoes_Dust_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_Before_Collector_shoes_Dust_remarks} type="text" name="Power_Feed_Unit_Before_Collector_shoes_Dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Joiner</td>
                        <td>Smooth traveling at section</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Joiner_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Joiner_result} type="text" name="Power_Feed_Unit_During_Joiner_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Joiner_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Joiner_action} type="text" name="Power_Feed_Unit_During_Joiner_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Joiner_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Joiner_remarks} type="text" name="Power_Feed_Unit_During_Joiner_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Feed in</td>
                        <td>Smooth traveling at section</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Feed_in_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Feed_in_result} type="text" name="Power_Feed_Unit_During_Feed_in_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Feed_in_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Feed_in_action} type="text" name="Power_Feed_Unit_During_Feed_in_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Feed_in_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Feed_in_remarks} type="text" name="Power_Feed_Unit_During_Feed_in_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Current collector</td>
                        <td>Smooth traveling at section</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Current_collector_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Current_collector_result} type="text" name="Power_Feed_Unit_During_Current_collector_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Current_collector_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Current_collector_action} type="text" name="Power_Feed_Unit_During_Current_collector_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_During_Current_collector_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_During_Current_collector_remarks} type="text" name="Power_Feed_Unit_During_Current_collector_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_After_Bolts_result: e.target.value })}
                            value={initialValues.Power_Feed_Unit_After_Bolts_result} type="text" name="Power_Feed_Unit_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_After_Bolts_action: e.target.value })}
                            value={initialValues.Power_Feed_Unit_After_Bolts_action} type="text" name="Power_Feed_Unit_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Power_Feed_Unit_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Power_Feed_Unit_After_Bolts_remarks} type="text" name="Power_Feed_Unit_After_Bolts_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Traveling Detectors & I/O Checks</h2>
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
                        <td>Home position detector</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Home_position_damages_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Home_position_damages_result} type="text" name="Traveling_Detectors_Before_Home_position_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Home_position_damages_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Home_position_damages_action} type="text" name="Traveling_Detectors_Before_Home_position_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Home_position_damages_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Home_position_damages_remarks} type="text" name="Traveling_Detectors_Before_Home_position_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Home_position_LED_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Home_position_LED_result} type="text" name="Traveling_Detectors_Before_Home_position_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Home_position_LED_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Home_position_LED_action} type="text" name="Traveling_Detectors_Before_Home_position_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Home_position_LED_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Home_position_LED_remarks} type="text" name="Traveling_Detectors_Before_Home_position_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Regular position detector
                            (Front & rear)</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Regular_position_damages_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Regular_position_damages_result} type="text" name="Traveling_Detectors_Before_Regular_position_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Regular_position_damages_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Regular_position_damages_action} type="text" name="Traveling_Detectors_Before_Regular_position_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Regular_position_damages_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Regular_position_damages_remarks} type="text" name="Traveling_Detectors_Before_Regular_position_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Regular_position_LED_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Regular_position_LED_result} type="text" name="Traveling_Detectors_Before_Regular_position_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Regular_position_LED_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Regular_position_LED_action} type="text" name="Traveling_Detectors_Before_Regular_position_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Regular_position_LED_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Regular_position_LED_remarks} type="text" name="Traveling_Detectors_Before_Regular_position_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Forward Deceleration 1</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Forward_Deceleration1_damages_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Forward_Deceleration1_damages_result} type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Forward_Deceleration1_damages_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Forward_Deceleration1_damages_action} type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Forward_Deceleration1_damages_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Forward_Deceleration1_damages_remarks} type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_damages_remarks" /></td>
                    </tr><tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Forward_Deceleration1_LED_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Forward_Deceleration1_LED_result} type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Forward_Deceleration1_LED_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Forward_Deceleration1_LED_action} type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Forward_Deceleration1_LED_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Forward_Deceleration1_LED_remarks} type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Backward Deceleration 1</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Backward_DC1_damages_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Backward_DC1_damages_result} type="text" name="Traveling_Detectors_Before_Backward_DC1_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Backward_DC1_damages_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Backward_DC1_damages_action} type="text" name="Traveling_Detectors_Before_Backward_DC1_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Backward_DC1_damages_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Backward_DC1_damages_remarks} type="text" name="Traveling_Detectors_Before_Backward_DC1_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Backward_DC1_LED_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Backward_DC1_LED_result} type="text" name="Traveling_Detectors_Before_Backward_DC1_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Backward_DC1_LED_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Backward_DC1_LED_action} type="text" name="Traveling_Detectors_Before_Backward_DC1_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Backward_DC1_LED_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Backward_DC1_LED_remarks} type="text" name="Traveling_Detectors_Before_Backward_DC1_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Deceleration 2</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Deceleration2_damages_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Deceleration2_damages_result} type="text" name="Traveling_Detectors_Before_Deceleration2_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Deceleration2_damages_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Deceleration2_damages_action} type="text" name="Traveling_Detectors_Before_Deceleration2_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Deceleration2_damages_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Deceleration2_damages_remarks} type="text" name="Traveling_Detectors_Before_Deceleration2_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Over-run detectors
                            (Limit switch)</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Over_run_detectors_damages_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Over_run_detectors_damages_result} type="text" name="Traveling_Detectors_Before_Over_run_detectors_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Over_run_detectors_damages_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Over_run_detectors_damages_action} type="text" name="Traveling_Detectors_Before_Over_run_detectors_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Over_run_detectors_damages_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Over_run_detectors_damages_remarks} type="text" name="Traveling_Detectors_Before_Over_run_detectors_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Spring condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Over_run_detectors_Spring_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Over_run_detectors_Spring_result} type="text" name="Traveling_Detectors_Before_Over_run_detectors_Spring_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Over_run_detectors_Spring_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Over_run_detectors_Spring_action} type="text" name="Traveling_Detectors_Before_Over_run_detectors_Spring_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_Before_Over_run_detectors_Spring_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_Before_Over_run_detectors_Spring_remarks} type="text" name="Traveling_Detectors_Before_Over_run_detectors_Spring_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Home position detector</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Home_position_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Home_position_result} type="text" name="Traveling_Detectors_During_Home_position_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Home_position_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Home_position_action} type="text" name="Traveling_Detectors_During_Home_position_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Home_position_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Home_position_remarks} type="text" name="Traveling_Detectors_During_Home_position_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Regular position detector</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Regular_position_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Regular_position_result} type="text" name="Traveling_Detectors_During_Regular_position_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Regular_position_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Regular_position_action} type="text" name="Traveling_Detectors_During_Regular_position_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Regular_position_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Regular_position_remarks} type="text" name="Traveling_Detectors_During_Regular_position_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Forward Deceleration 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Forward_Deceleration1_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Forward_Deceleration1_result} type="text" name="Traveling_Detectors_During_Forward_Deceleration1_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Forward_Deceleration1_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Forward_Deceleration1_action} type="text" name="Traveling_Detectors_During_Forward_Deceleration1_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Forward_Deceleration1_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Forward_Deceleration1_remarks} type="text" name="Traveling_Detectors_During_Forward_Deceleration1_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Backward Deceleration 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Backward_Deceleration1_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Backward_Deceleration1_result} type="text" name="Traveling_Detectors_During_Backward_Deceleration1_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Backward_Deceleration1_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Backward_Deceleration1_action} type="text" name="Traveling_Detectors_During_Backward_Deceleration1_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Backward_Deceleration1_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Backward_Deceleration1_remarks} type="text" name="Traveling_Detectors_During_Backward_Deceleration1_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Deceleration 2</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Deceleration2_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Deceleration2_result} type="text" name="Traveling_Detectors_During_Deceleration2_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Deceleration2_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Deceleration2_action} type="text" name="Traveling_Detectors_During_Deceleration2_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Deceleration2_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Deceleration2_remarks} type="text" name="Traveling_Detectors_During_Deceleration2_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Over-run detectors (2 directions)</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Over_run_detectors_result: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Over_run_detectors_result} type="text" name="Traveling_Detectors_During_Over_run_detectors_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Over_run_detectors_action: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Over_run_detectors_action} type="text" name="Traveling_Detectors_During_Over_run_detectors_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Traveling_Detectors_During_Over_run_detectors_remarks: e.target.value })}
                            value={initialValues.Traveling_Detectors_During_Over_run_detectors_remarks} type="text" name="Traveling_Detectors_During_Over_run_detectors_remarks" /></td>
                    </tr>
                </table>

                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Carriage Unit Detectors & I/O Checks</h2>
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
                        <td>Carriage positioning sensors (Up & down)</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_positioning_sensors_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_positioning_sensors_dust_result} type="text" name="Carriage_Unit_Before_positioning_sensors_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_positioning_sensors_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_positioning_sensors_dust_action} type="text" name="Carriage_Unit_Before_positioning_sensors_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_positioning_sensors_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_positioning_sensors_dust_remarks} type="text" name="Carriage_Unit_Before_positioning_sensors_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_positioning_sensors_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_positioning_sensors_LED_result} type="text" name="Carriage_Unit_Before_positioning_sensors_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_positioning_sensors_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_positioning_sensors_LED_action} type="text" name="Carriage_Unit_Before_positioning_sensors_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_positioning_sensors_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_positioning_sensors_LED_remarks} type="text" name="Carriage_Unit_Before_positioning_sensors_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Pre-occupied load sensors</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Pre_occupied_load_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Pre_occupied_load_dust_result} type="text" name="Carriage_Unit_Before_Pre_occupied_load_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Pre_occupied_load_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Pre_occupied_load_dust_action} type="text" name="Carriage_Unit_Before_Pre_occupied_load_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Pre_occupied_load_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Pre_occupied_load_dust_remarks} type="text" name="Carriage_Unit_Before_Pre_occupied_load_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Pre_occupied_load_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Pre_occupied_load_LED_result} type="text" name="Carriage_Unit_Before_Pre_occupied_load_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Pre_occupied_load_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Pre_occupied_load_LED_action} type="text" name="Carriage_Unit_Before_Pre_occupied_load_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Pre_occupied_load_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Pre_occupied_load_LED_remarks} type="text" name="Carriage_Unit_Before_Pre_occupied_load_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load detect sensors</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_detect_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_detect_dust_result} type="text" name="Carriage_Unit_Before_Load_detect_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_detect_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_detect_dust_action} type="text" name="Carriage_Unit_Before_Load_detect_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_detect_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_detect_dust_remarks} type="text" name="Carriage_Unit_Before_Load_detect_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_detect_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_detect_LED_result} type="text" name="Carriage_Unit_Before_Load_detect_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_detect_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_detect_LED_action} type="text" name="Carriage_Unit_Before_Load_detect_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_detect_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_detect_LED_remarks} type="text" name="Carriage_Unit_Before_Load_detect_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load profile detectors
                            (Proximity type)</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_profile_damages_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_profile_damages_result} type="text" name="Carriage_Unit_Before_Load_profile_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_profile_damages_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_profile_damages_action} type="text" name="Carriage_Unit_Before_Load_profile_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_profile_damages_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_profile_damages_remarks} type="text" name="Carriage_Unit_Before_Load_profile_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_profile_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_profile_LED_result} type="text" name="Carriage_Unit_Before_Load_profile_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_profile_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_profile_LED_action} type="text" name="Carriage_Unit_Before_Load_profile_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_profile_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_profile_LED_remarks} type="text" name="Carriage_Unit_Before_Load_profile_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load protrusion sensors</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_protrusion_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_protrusion_dust_result} type="text" name="Carriage_Unit_Before_Load_protrusion_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_protrusion_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_protrusion_dust_action} type="text" name="Carriage_Unit_Before_Load_protrusion_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_protrusion_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_protrusion_dust_remarks} type="text" name="Carriage_Unit_Before_Load_protrusion_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_protrusion_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_protrusion_LED_result} type="text" name="Carriage_Unit_Before_Load_protrusion_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_protrusion_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_protrusion_LED_action} type="text" name="Carriage_Unit_Before_Load_protrusion_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Load_protrusion_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Load_protrusion_LED_remarks} type="text" name="Carriage_Unit_Before_Load_protrusion_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Station upper level</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_upper_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_upper_dust_result} type="text" name="Carriage_Unit_Before_Station_upper_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_upper_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_upper_dust_action} type="text" name="Carriage_Unit_Before_Station_upper_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_upper_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_upper_dust_remarks} type="text" name="Carriage_Unit_Before_Station_upper_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_upper_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_upper_LED_result} type="text" name="Carriage_Unit_Before_Station_upper_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_upper_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_upper_LED_action} type="text" name="Carriage_Unit_Before_Station_upper_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_upper_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_upper_LED_remarks} type="text" name="Carriage_Unit_Before_Station_upper_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Station lower level</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_lower_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_lower_dust_result} type="text" name="Carriage_Unit_Before_Station_lower_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_lower_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_lower_dust_action} type="text" name="Carriage_Unit_Before_Station_lower_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_lower_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_lower_dust_remarks} type="text" name="Carriage_Unit_Before_Station_lower_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_lower_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_lower_LED_result} type="text" name="Carriage_Unit_Before_Station_lower_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_lower_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_lower_LED_action} type="text" name="Carriage_Unit_Before_Station_lower_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Station_lower_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Station_lower_LED_remarks} type="text" name="Carriage_Unit_Before_Station_lower_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Upward deceleration 1</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Upward_deceleration1_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Upward_deceleration1_dust_result} type="text" name="Carriage_Unit_Before_Upward_deceleration1_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Upward_deceleration1_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Upward_deceleration1_dust_action} type="text" name="Carriage_Unit_Before_Upward_deceleration1_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Upward_deceleration1_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Upward_deceleration1_dust_remarks} type="text" name="Carriage_Unit_Before_Upward_deceleration1_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Upward_deceleration1_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Upward_deceleration1_LED_result} type="text" name="Carriage_Unit_Before_Upward_deceleration1_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Upward_deceleration1_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Upward_deceleration1_LED_action} type="text" name="Carriage_Unit_Before_Upward_deceleration1_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Upward_deceleration1_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Upward_deceleration1_LED_remarks} type="text" name="Carriage_Unit_Before_Upward_deceleration1_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Downward deceleration 1</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Downward_deceleration1_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Downward_deceleration1_dust_result} type="text" name="Carriage_Unit_Before_Downward_deceleration1_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Downward_deceleration1_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Downward_deceleration1_dust_action} type="text" name="Carriage_Unit_Before_Downward_deceleration1_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Downward_deceleration1_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Downward_deceleration1_dust_remarks} type="text" name="Carriage_Unit_Before_Downward_deceleration1_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Downward_deceleration1_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Downward_deceleration1_LED_result} type="text" name="Carriage_Unit_Before_Downward_deceleration1_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Downward_deceleration1_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Downward_deceleration1_LED_action} type="text" name="Carriage_Unit_Before_Downward_deceleration1_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Downward_deceleration1_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Downward_deceleration1_LED_remarks} type="text" name="Carriage_Unit_Before_Downward_deceleration1_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Deceleration 2</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Deceleration2_dust_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Deceleration2_dust_result} type="text" name="Carriage_Unit_Before_Deceleration2_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Deceleration2_dust_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Deceleration2_dust_action} type="text" name="Carriage_Unit_Before_Deceleration2_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Deceleration2_dust_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Deceleration2_dust_remarks} type="text" name="Carriage_Unit_Before_Deceleration2_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Deceleration2_LED_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Deceleration2_LED_result} type="text" name="Carriage_Unit_Before_Deceleration2_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Deceleration2_LED_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Deceleration2_LED_action} type="text" name="Carriage_Unit_Before_Deceleration2_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Deceleration2_LED_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Deceleration2_LED_remarks} type="text" name="Carriage_Unit_Before_Deceleration2_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Chain tension detectors
                            (Limit switch)</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Chain_tension_damages_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Chain_tension_damages_result} type="text" name="Carriage_Unit_Before_Chain_tension_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Chain_tension_damages_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Chain_tension_damages_action} type="text" name="Carriage_Unit_Before_Chain_tension_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Chain_tension_damages_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Chain_tension_damages_remarks} type="text" name="Carriage_Unit_Before_Chain_tension_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Spring condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Chain_tension_Spring_condition_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Chain_tension_Spring_condition_result} type="text" name="Carriage_Unit_Before_Chain_tension_Spring_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Chain_tension_Spring_condition_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Chain_tension_Spring_condition_action} type="text" name="Carriage_Unit_Before_Chain_tension_Spring_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Chain_tension_Spring_condition_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Chain_tension_Spring_condition_remarks} type="text" name="Carriage_Unit_Before_Chain_tension_Spring_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Overun detectors
                            (Limit switch)</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Over_run_detectors_damages_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Over_run_detectors_damages_result} type="text" name="Carriage_Unit_Before_Over_run_detectors_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Over_run_detectors_damages_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Over_run_detectors_damages_action} type="text" name="Carriage_Unit_Before_Over_run_detectors_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Over_run_detectors_damages_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Over_run_detectors_damages_remarks} type="text" name="Carriage_Unit_Before_Over_run_detectors_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Spring condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Over_run_detectors_Spring_condition_result: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Over_run_detectors_Spring_condition_result} type="text" name="Carriage_Unit_Before_Over_run_detectors_Spring_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Over_run_detectors_Spring_condition_action: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Over_run_detectors_Spring_condition_action} type="text" name="Carriage_Unit_Before_Over_run_detectors_Spring_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_Before_Over_run_detectors_Spring_condition_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_Before_Over_run_detectors_Spring_condition_remarks} type="text" name="Carriage_Unit_Before_Over_run_detectors_Spring_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Carriage positioning sensors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Carriage_positioning_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Carriage_positioning_result} type="text" name="Carriage_Unit_During_Carriage_positioning_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Carriage_positioning_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Carriage_positioning_action} type="text" name="Carriage_Unit_During_Carriage_positioning_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Carriage_positioning_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Carriage_positioning_remarks} type="text" name="Carriage_Unit_During_Carriage_positioning_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Pre-occupied load sensors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Pre_occupied_load_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Pre_occupied_load_result} type="text" name="Carriage_Unit_During_Pre_occupied_load_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Pre_occupied_load_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Pre_occupied_load_action} type="text" name="Carriage_Unit_During_Pre_occupied_load_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Pre_occupied_load_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Pre_occupied_load_remarks} type="text" name="Carriage_Unit_During_Pre_occupied_load_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load detect sensors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_detect_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_detect_result} type="text" name="Carriage_Unit_During_Load_detect_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_detect_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_detect_action} type="text" name="Carriage_Unit_During_Load_detect_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_detect_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_detect_remarks} type="text" name="Carriage_Unit_During_Load_detect_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load profile detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_profile_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_profile_result} type="text" name="Carriage_Unit_During_Load_profile_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_profile_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_profile_action} type="text" name="Carriage_Unit_During_Load_profile_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_profile_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_profile_remarks} type="text" name="Carriage_Unit_During_Load_profile_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load protrusion sensors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_protrusion_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_protrusion_result} type="text" name="Carriage_Unit_During_Load_protrusion_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_protrusion_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_protrusion_action} type="text" name="Carriage_Unit_During_Load_protrusion_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Load_protrusion_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Load_protrusion_remarks} type="text" name="Carriage_Unit_During_Load_protrusion_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Station upper level</td>
                        <td>I/O check</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Station_upper_level_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Station_upper_level_result} type="text" name="Carriage_Unit_During_Station_upper_level_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Station_upper_level_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Station_upper_level_action} type="text" name="Carriage_Unit_During_Station_upper_level_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Station_upper_level_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Station_upper_level_remarks} type="text" name="Carriage_Unit_During_Station_upper_level_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Station lower level</td>
                        <td>I/O check</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Station_lower_level_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Station_lower_level_result} type="text" name="Carriage_Unit_During_Station_lower_level_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Station_lower_level_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Station_lower_level_action} type="text" name="Carriage_Unit_During_Station_lower_level_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Station_lower_level_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Station_lower_level_remarks} type="text" name="Carriage_Unit_During_Station_lower_level_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Upward deceleration 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Upward_deceleration1_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Upward_deceleration1_result} type="text" name="Carriage_Unit_During_Upward_deceleration1_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Upward_deceleration1_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Upward_deceleration1_action} type="text" name="Carriage_Unit_During_Upward_deceleration1_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Upward_deceleration1_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Upward_deceleration1_remarks} type="text" name="Carriage_Unit_During_Upward_deceleration1_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Downward deceleration 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Downward_deceleration1_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Downward_deceleration1_result} type="text" name="Carriage_Unit_During_Downward_deceleration1_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Downward_deceleration1_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Downward_deceleration1_action} type="text" name="Carriage_Unit_During_Downward_deceleration1_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Downward_deceleration1_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Downward_deceleration1_remarks} type="text" name="Carriage_Unit_During_Downward_deceleration1_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Deceleration 2</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Deceleration2_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Deceleration2_result} type="text" name="Carriage_Unit_During_Deceleration2_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Deceleration2_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Deceleration2_action} type="text" name="Carriage_Unit_During_Deceleration2_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Deceleration2_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Deceleration2_remarks} type="text" name="Carriage_Unit_During_Deceleration2_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Chain tension detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Chain_tension_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Chain_tension_result} type="text" name="Carriage_Unit_During_Chain_tension_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Chain_tension_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Chain_tension_action} type="text" name="Carriage_Unit_During_Chain_tension_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Chain_tension_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Chain_tension_remarks} type="text" name="Carriage_Unit_During_Chain_tension_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Over-run detectors
                            (2 directions)</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Over_run_detectors_result: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Over_run_detectors_result} type="text" name="Carriage_Unit_During_Over_run_detectors_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Over_run_detectors_action: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Over_run_detectors_action} type="text" name="Carriage_Unit_During_Over_run_detectors_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Carriage_Unit_During_Over_run_detectors_remarks: e.target.value })}
                            value={initialValues.Carriage_Unit_During_Over_run_detectors_remarks} type="text" name="Carriage_Unit_During_Over_run_detectors_remarks" /></td>
                    </tr>
                </table>
                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Fork Unit Detectors & I/O Checks</h2>
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
                        <td>Fork position detectors
                            (Limit switch/ proximity sensor)</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_Before_Fork_position_damages_result: e.target.value })}
                            value={initialValues.Fork_Unit_Before_Fork_position_damages_result} type="text" name="Fork_Unit_Before_Fork_position_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_Before_Fork_position_damages_action: e.target.value })}
                            value={initialValues.Fork_Unit_Before_Fork_position_damages_action} type="text" name="Fork_Unit_Before_Fork_position_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_Before_Fork_position_damages_remarks: e.target.value })}
                            value={initialValues.Fork_Unit_Before_Fork_position_damages_remarks} type="text" name="Fork_Unit_Before_Fork_position_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Sensor condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_Before_Fork_position_Sensor_condition_result: e.target.value })}
                            value={initialValues.Fork_Unit_Before_Fork_position_Sensor_condition_result} type="text" name="Fork_Unit_Before_Fork_position_Sensor_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_Before_Fork_position_Sensor_condition_action: e.target.value })}
                            value={initialValues.Fork_Unit_Before_Fork_position_Sensor_condition_action} type="text" name="Fork_Unit_Before_Fork_position_Sensor_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_Before_Fork_position_Sensor_condition_remarks: e.target.value })}
                            value={initialValues.Fork_Unit_Before_Fork_position_Sensor_condition_remarks} type="text" name="Fork_Unit_Before_Fork_position_Sensor_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Fork end detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_During_Fork_end_detectors_result: e.target.value })}
                            value={initialValues.Fork_Unit_During_Fork_end_detectors_result} type="text" name="Fork_Unit_During_Fork_end_detectors_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_During_Fork_end_detectors_action: e.target.value })}
                            value={initialValues.Fork_Unit_During_Fork_end_detectors_action} type="text" name="Fork_Unit_During_Fork_end_detectors_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_During_Fork_end_detectors_remarks: e.target.value })}
                            value={initialValues.Fork_Unit_During_Fork_end_detectors_remarks} type="text" name="Fork_Unit_During_Fork_end_detectors_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork center detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_During_Fork_center_detectors_result: e.target.value })}
                            value={initialValues.Fork_Unit_During_Fork_center_detectors_result} type="text" name="Fork_Unit_During_Fork_center_detectors_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_During_Fork_center_detectors_action: e.target.value })}
                            value={initialValues.Fork_Unit_During_Fork_center_detectors_action} type="text" name="Fork_Unit_During_Fork_center_detectors_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Fork_Unit_During_Fork_center_detectors_remarks: e.target.value })}
                            value={initialValues.Fork_Unit_During_Fork_center_detectors_remarks} type="text" name="Fork_Unit_During_Fork_center_detectors_remarks" /></td>
                    </tr>
                </table>
                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Operation Panel and Controller</h2>
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
                        <td>Emergency-stop button
                            (Crane & controller)</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_e_stop_button_damages_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_e_stop_button_damages_result} type="text" name="Operation_Panel_before_e_stop_button_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_e_stop_button_damages_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_e_stop_button_damages_action} type="text" name="Operation_Panel_before_e_stop_button_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_e_stop_button_damages_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_e_stop_button_damages_remarks} type="text" name="Operation_Panel_before_e_stop_button_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Functionality</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_e_stop_button_Functionality_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_e_stop_button_Functionality_result} type="text" name="Operation_Panel_before_e_stop_button_Functionality_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_e_stop_button_Functionality_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_e_stop_button_Functionality_action} type="text" name="Operation_Panel_before_e_stop_button_Functionality_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_e_stop_button_Functionality_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_e_stop_button_Functionality_remarks} type="text" name="Operation_Panel_before_e_stop_button_Functionality_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Optical data transmitter</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_damages_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_damages_result} type="text" name="Operation_Panel_before_Optical_data_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_damages_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_damages_action} type="text" name="Operation_Panel_before_Optical_data_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_damages_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_damages_remarks} type="text" name="Operation_Panel_before_Optical_data_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Dust_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Dust_result} type="text" name="Operation_Panel_before_Optical_data_Dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Dust_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Dust_action} type="text" name="Operation_Panel_before_Optical_data_Dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Dust_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Dust_remarks} type="text" name="Operation_Panel_before_Optical_data_Dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Alignment</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Alignment_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Alignment_result} type="text" name="Operation_Panel_before_Optical_data_Alignment_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Alignment_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Alignment_action} type="text" name="Operation_Panel_before_Optical_data_Alignment_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Alignment_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Alignment_remarks} type="text" name="Operation_Panel_before_Optical_data_Alignment_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Functionality</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Functionality_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Functionality_result} type="text" name="Operation_Panel_before_Optical_data_Functionality_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Functionality_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Functionality_action} type="text" name="Operation_Panel_before_Optical_data_Functionality_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Optical_data_Functionality_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Optical_data_Functionality_remarks} type="text" name="Operation_Panel_before_Optical_data_Functionality_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>4 bit sensor</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_damages_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_damages_result} type="text" name="Operation_Panel_before_4bit_sensor_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_damages_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_damages_action} type="text" name="Operation_Panel_before_4bit_sensor_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_damages_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_damages_remarks} type="text" name="Operation_Panel_before_4bit_sensor_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Dust_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Dust_result} type="text" name="Operation_Panel_before_4bit_sensor_Dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Dust_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Dust_action} type="text" name="Operation_Panel_before_4bit_sensor_Dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Dust_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Dust_remarks} type="text" name="Operation_Panel_before_4bit_sensor_Dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Alignment</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Alignment_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Alignment_result} type="text" name="Operation_Panel_before_4bit_sensor_Alignment_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Alignment_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Alignment_action} type="text" name="Operation_Panel_before_4bit_sensor_Alignment_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Alignment_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Alignment_remarks} type="text" name="Operation_Panel_before_4bit_sensor_Alignment_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Functionality</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Functionality_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Functionality_result} type="text" name="Operation_Panel_before_4bit_sensor_Functionality_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Functionality_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Functionality_action} type="text" name="Operation_Panel_before_4bit_sensor_Functionality_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_4bit_sensor_Functionality_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_4bit_sensor_Functionality_remarks} type="text" name="Operation_Panel_before_4bit_sensor_Functionality_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electro-magnetic contactors</td>
                        <td>On / Off condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_E_magnetic_On_Off_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_E_magnetic_On_Off_result} type="text" name="Operation_Panel_before_E_magnetic_On_Off_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_E_magnetic_On_Off_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_E_magnetic_On_Off_action} type="text" name="Operation_Panel_before_E_magnetic_On_Off_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_E_magnetic_On_Off_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_E_magnetic_On_Off_remarks} type="text" name="Operation_Panel_before_E_magnetic_On_Off_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Fastener condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_E_magnetic_Fastener_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_E_magnetic_Fastener_result} type="text" name="Operation_Panel_before_E_magnetic_Fastener_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_E_magnetic_Fastener_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_E_magnetic_Fastener_action} type="text" name="Operation_Panel_before_E_magnetic_Fastener_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_E_magnetic_Fastener_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_E_magnetic_Fastener_remarks} type="text" name="Operation_Panel_before_E_magnetic_Fastener_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Breaker</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Breaker_damages_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Breaker_damages_result} type="text" name="Operation_Panel_before_Breaker_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Breaker_damages_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Breaker_damages_action} type="text" name="Operation_Panel_before_Breaker_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Breaker_damages_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Breaker_damages_remarks} type="text" name="Operation_Panel_before_Breaker_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Turn on and off properly</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Breaker_Turn_on_off_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Breaker_Turn_on_off_result} type="text" name="Operation_Panel_before_Breaker_Turn_on_off_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Breaker_Turn_on_off_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Breaker_Turn_on_off_action} type="text" name="Operation_Panel_before_Breaker_Turn_on_off_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Breaker_Turn_on_off_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Breaker_Turn_on_off_remarks} type="text" name="Operation_Panel_before_Breaker_Turn_on_off_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Electric wiring</td>
                        <td>Wiring condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Electric_wiring_condition_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Electric_wiring_condition_result} type="text" name="Operation_Panel_before_Electric_wiring_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Electric_wiring_condition_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Electric_wiring_condition_action} type="text" name="Operation_Panel_before_Electric_wiring_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Electric_wiring_condition_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Electric_wiring_condition_remarks} type="text" name="Operation_Panel_before_Electric_wiring_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Snapped/ broken wire</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Electric_wiring_Snapped_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Electric_wiring_Snapped_result} type="text" name="Operation_Panel_before_Electric_wiring_Snapped_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Electric_wiring_Snapped_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Electric_wiring_Snapped_action} type="text" name="Operation_Panel_before_Electric_wiring_Snapped_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Electric_wiring_Snapped_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Electric_wiring_Snapped_remarks} type="text" name="Operation_Panel_before_Electric_wiring_Snapped_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Power supply</td>
                        <td>Voltage measurement</td>
                        <td>Measure</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Power_supply_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Power_supply_result} type="text" name="Operation_Panel_before_Power_supply_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Power_supply_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Power_supply_action} type="text" name="Operation_Panel_before_Power_supply_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Power_supply_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Power_supply_remarks} type="text" name="Operation_Panel_before_Power_supply_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>P.C. Board</td>
                        <td>Connectors connection</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_PC_Board_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_PC_Board_result} type="text" name="Operation_Panel_before_PC_Board_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_PC_Board_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_PC_Board_action} type="text" name="Operation_Panel_before_PC_Board_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_PC_Board_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_PC_Board_remarks} type="text" name="Operation_Panel_before_PC_Board_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Operation panel</td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_dust_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_dust_result} type="text" name="Operation_Panel_before_Operation_panel_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_dust_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_dust_action} type="text" name="Operation_Panel_before_Operation_panel_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_dust_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_dust_remarks} type="text" name="Operation_Panel_before_Operation_panel_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>LED indicator</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_LED_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_LED_result} type="text" name="Operation_Panel_before_Operation_panel_LED_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_LED_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_LED_action} type="text" name="Operation_Panel_before_Operation_panel_LED_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_LED_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_LED_remarks} type="text" name="Operation_Panel_before_Operation_panel_LED_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Key switch functionality</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_Key_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_Key_result} type="text" name="Operation_Panel_before_Operation_panel_Key_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_Key_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_Key_action} type="text" name="Operation_Panel_before_Operation_panel_Key_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_Key_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_Key_remarks} type="text" name="Operation_Panel_before_Operation_panel_Key_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Operation/Control panel</td>
                        <td>Dust accumulation</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Control_panel_dust_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Control_panel_dust_result} type="text" name="Operation_Panel_before_Control_panel_dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Control_panel_dust_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Control_panel_dust_action} type="text" name="Operation_Panel_before_Control_panel_dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Control_panel_dust_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Control_panel_dust_remarks} type="text" name="Operation_Panel_before_Control_panel_dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Wiring condition</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Control_panel_Wiring_condition_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Control_panel_Wiring_condition_result} type="text" name="Operation_Panel_before_Control_panel_Wiring_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Control_panel_Wiring_condition_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Control_panel_Wiring_condition_action} type="text" name="Operation_Panel_before_Control_panel_Wiring_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Control_panel_Wiring_condition_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Control_panel_Wiring_condition_remarks} type="text" name="Operation_Panel_before_Control_panel_Wiring_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Operation panel buttons</td>
                        <td>Functionality</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_buttons_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_buttons_result} type="text" name="Operation_Panel_before_Operation_panel_buttons_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_buttons_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_buttons_action} type="text" name="Operation_Panel_before_Operation_panel_buttons_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Operation_panel_buttons_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Operation_panel_buttons_remarks} type="text" name="Operation_Panel_before_Operation_panel_buttons_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Indicators</td>
                        <td>Functionality</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Indicators_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Indicators_result} type="text" name="Operation_Panel_before_Indicators_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Indicators_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Indicators_action} type="text" name="Operation_Panel_before_Indicators_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Indicators_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Indicators_remarks} type="text" name="Operation_Panel_before_Indicators_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Ventilation fan</td>
                        <td>Functionality</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Ventilation_fan_result: e.target.value })}
                            value={initialValues.Operation_Panel_before_Ventilation_fan_result} type="text" name="Operation_Panel_before_Ventilation_fan_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Ventilation_fan_action: e.target.value })}
                            value={initialValues.Operation_Panel_before_Ventilation_fan_action} type="text" name="Operation_Panel_before_Ventilation_fan_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_before_Ventilation_fan_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_before_Ventilation_fan_remarks} type="text" name="Operation_Panel_before_Ventilation_fan_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_After_Bolts_result: e.target.value })}
                            value={initialValues.Operation_Panel_After_Bolts_result} type="text" name="Operation_Panel_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_After_Bolts_action: e.target.value })}
                            value={initialValues.Operation_Panel_After_Bolts_action} type="text" name="Operation_Panel_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Operation_Panel_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Operation_Panel_After_Bolts_remarks} type="text" name="Operation_Panel_After_Bolts_remarks" /></td>
                    </tr>
                </table>
                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Inverter Unit</h2>
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
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_damages_result: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_damages_result} type="text" name="Inverter_Unit_Before_Inverter_damages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_damages_action: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_damages_action} type="text" name="Inverter_Unit_Before_Inverter_damages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_damages_remarks: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_damages_remarks} type="text" name="Inverter_Unit_Before_Inverter_damages_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Dust accumulation</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Dust_result: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Dust_result} type="text" name="Inverter_Unit_Before_Inverter_Dust_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Dust_action: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Dust_action} type="text" name="Inverter_Unit_Before_Inverter_Dust_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Dust_remarks: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Dust_remarks} type="text" name="Inverter_Unit_Before_Inverter_Dust_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Wiring condition</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_condition_result: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_condition_result} type="text" name="Inverter_Unit_Before_Inverter_Wiring_condition_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_condition_action: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_condition_action} type="text" name="Inverter_Unit_Before_Inverter_Wiring_condition_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_condition_remarks: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_condition_remarks} type="text" name="Inverter_Unit_Before_Inverter_Wiring_condition_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td></td>
                        <td>Abnormal sound</td>
                        <td>Sound</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_sound_result: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_sound_result} type="text" name="Inverter_Unit_Before_Inverter_Wiring_sound_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_sound_action: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_sound_action} type="text" name="Inverter_Unit_Before_Inverter_Wiring_sound_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_sound_remarks: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_sound_remarks} type="text" name="Inverter_Unit_Before_Inverter_Wiring_sound_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td></td>
                        <td>Bolts / screws looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_Bolts_result: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_Bolts_result} type="text" name="Inverter_Unit_Before_Inverter_Wiring_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_Bolts_action: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_Bolts_action} type="text" name="Inverter_Unit_Before_Inverter_Wiring_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Inverter_Unit_Before_Inverter_Wiring_Bolts_remarks: e.target.value })}
                            value={initialValues.Inverter_Unit_Before_Inverter_Wiring_Bolts_remarks} type="text" name="Inverter_Unit_Before_Inverter_Wiring_Bolts_remarks" /></td>
                    </tr>
                </table>
                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Others</h2>
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
                        <td>Mast</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Mast_result: e.target.value })}
                            value={initialValues.Others_Before_Mast_result} type="text" name="Others_Before_Mast_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Mast_action: e.target.value })}
                            value={initialValues.Others_Before_Mast_action} type="text" name="Others_Before_Mast_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Mast_remarks: e.target.value })}
                            value={initialValues.Others_Before_Mast_remarks} type="text" name="Others_Before_Mast_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Support</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Support_result: e.target.value })}
                            value={initialValues.Others_Before_Support_result} type="text" name="Others_Before_Support_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Support_action: e.target.value })}
                            value={initialValues.Others_Before_Support_action} type="text" name="Others_Before_Support_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Support_remarks: e.target.value })}
                            value={initialValues.Others_Before_Support_remarks} type="text" name="Others_Before_Support_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cable</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_result: e.target.value })}
                            value={initialValues.Others_Before_Cable_result} type="text" name="Others_Before_Cable_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_action: e.target.value })}
                            value={initialValues.Others_Before_Cable_action} type="text" name="Others_Before_Cable_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_remarks: e.target.value })}
                            value={initialValues.Others_Before_Cable_remarks} type="text" name="Others_Before_Cable_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cable protector</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_protector_result: e.target.value })}
                            value={initialValues.Others_Before_Cable_protector_result} type="text" name="Others_Before_Cable_protector_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_protector_action: e.target.value })}
                            value={initialValues.Others_Before_Cable_protector_action} type="text" name="Others_Before_Cable_protector_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_protector_remarks: e.target.value })}
                            value={initialValues.Others_Before_Cable_protector_remarks} type="text" name="Others_Before_Cable_protector_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cable guide</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_guide_result: e.target.value })}
                            value={initialValues.Others_Before_Cable_guide_result} type="text" name="Others_Before_Cable_guide_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_guide_action: e.target.value })}
                            value={initialValues.Others_Before_Cable_guide_action} type="text" name="Others_Before_Cable_guide_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Cable_guide_remarks: e.target.value })}
                            value={initialValues.Others_Before_Cable_guide_remarks} type="text" name="Others_Before_Cable_guide_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Safety plug</td>
                        <td>Functionality</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_plug_result: e.target.value })}
                            value={initialValues.Others_Before_Safety_plug_result} type="text" name="Others_Before_Safety_plug_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_plug_action: e.target.value })}
                            value={initialValues.Others_Before_Safety_plug_action} type="text" name="Others_Before_Safety_plug_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_plug_remarks: e.target.value })}
                            value={initialValues.Others_Before_Safety_plug_remarks} type="text" name="Others_Before_Safety_plug_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Safety fence</td>
                        <td>Deformation or damages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_fence_damage_result: e.target.value })}
                            value={initialValues.Others_Before_Safety_fence_damage_result} type="text" name="Others_Before_Safety_fence_damage_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_fence_damage_action: e.target.value })}
                            value={initialValues.Others_Before_Safety_fence_damage_action} type="text" name="Others_Before_Safety_fence_damage_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_fence_damage_remarks: e.target.value })}
                            value={initialValues.Others_Before_Safety_fence_damage_remarks} type="text" name="Others_Before_Safety_fence_damage_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Signages</td>
                        <td>Visual</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_fence_Signages_result: e.target.value })}
                            value={initialValues.Others_Before_Safety_fence_Signages_result} type="text" name="Others_Before_Safety_fence_Signages_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_fence_Signages_action: e.target.value })}
                            value={initialValues.Others_Before_Safety_fence_Signages_action} type="text" name="Others_Before_Safety_fence_Signages_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_Before_Safety_fence_Signages_remarks: e.target.value })}
                            value={initialValues.Others_Before_Safety_fence_Signages_remarks} type="text" name="Others_Before_Safety_fence_Signages_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Bolts / screws</td>
                        <td>Looseness</td>
                        <td>Touch</td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_After_Bolts_result: e.target.value })}
                            value={initialValues.Others_After_Bolts_result} type="text" name="Others_After_Bolts_result" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_After_Bolts_action: e.target.value })}
                            value={initialValues.Others_After_Bolts_action} type="text" name="Others_After_Bolts_action" /></td>
                        <td><input
                            onChange={(e) => setInitialValues({ ...initialValues, Others_After_Bolts_remarks: e.target.value })}
                            value={initialValues.Others_After_Bolts_remarks} type="text" name="Others_After_Bolts_remarks" /></td>
                    </tr>



                    <tr>
                        <td><b>Result</b> O=Good ∆=Fair X=Defective</td>

                    </tr>
                    <tr>
                        <td><b>Action</b> A=Adjust C=Clean R=Replace M=Make repair T=Tighten O=Overhaul L=Lubricate</td>
                    </tr>
                </table>
                <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">CHAIN ELONGATION MEASUREMENT:</h2>
                <img src={crane14image} alt="Chain Elongation Crane 14" width="[100%]" height="50" />

                <h2 className="mt-10 text-2xl font-extrabold dark:text-gray-200 mb-2">INSPECTION SUMMARY/RECOMMENDATION:</h2>
                <div class="inspection-summary">
                    <textarea id="crane14_REPORT_SUMMARY" name="crane14_REPORT_SUMMARY"></textarea>
                </div>

                <td>
                    <div class="textbox-container">
                        <label for="crane14_Verified_by_MNC">Verified by (MNC):</label>
                        <input
                            onChange={(e) => setInitialValues({ ...initialValues, crane14_Verified_by_MNC: e.target.value })}
                            value={initialValues.crane14_Verified_by_MNC} type="text" id="crane14_Verified_by_MNC" name="crane14_Verified_by_MNC" />
                    </div>
                </td>
            </form>
        </div>
    )
}

export default MonthlyPM14Update
