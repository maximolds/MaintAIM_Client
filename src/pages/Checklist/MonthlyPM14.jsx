import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./DailyCIL.css"
import axios from 'axios';
import crane14image from '../../assets/images/crane14.jpg'

function MonthlyPM14() {

  let navigate = useNavigate();
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const validationSchema = Yup.object().shape({
    crane14_inspected_by: Yup.string().required("Please click field and press space.")
  });

  const initialValues = {
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
  }

  const onSubmit = (data) => {
    axios.post("https://maintaimdb-044f7fcd2d92.herokuapp.com/crane14checklist", data,
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
        validationSchema={validationSchema} >
        <Form id="checklistForm" className='bg-[#f3f5f5] container mx-auto px-2 sm:px-4 lg:px-8'>
          <h1 className="text-3xl font-extrabold dark:text-gray-200 mb-2">CRANE 14 INSPECTION CHECKLIST (MONTHLY)</h1>

          <div className='flex mt-2'>
            <button

              className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
rounded-xl buttonShadow mt-4 mr-2  
bg-white hover:text-black flex justify-center border-1 border-fade-blue
items-center text-center`}
              style={{ color: currentColor }}
              type='submit'
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
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="crane14_inspected_by">Inspected by:</label>
                  <ErrorMessage className='text-red-500' name="crane14_inspected_by" component="span" />
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="crane14_inspected_by"
                    name="crane14_inspected_by"
                    value={authState.firstname}
                  />
                </div>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="crane14_approved_by">Approved by (Supervisor):</label>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="crane14_approved_by" name="crane14_approved_by" />
                </div>
              </td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="crane14_no">Crane Number:</label>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="crane14_no" name="crane14_no" />
                </div>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="crane14_date">Date:</label>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" type="date" id="crane14_date" name="crane14_date" />
                </div>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="crane14_time_start">Time Start:</label>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" type="time" id="crane14_time_start" name="crane14_time_start" />
                </div>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="crane14_time_end">Time End:</label>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" type="time" id="crane14_time_end" name="crane14_time_end" />
                </div>
              </td>
            </tr>
          </table>
          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Travel Drive Unit</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Travel motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Travel_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Travel_motor_action">
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_Travel_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Speed_reducer_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Speed_reducer_damages_action">
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_Speed_reducer_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Oil leakage</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Speed_reducer_leakage_result">
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Speed_reducer_leakage_action">
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_Speed_reducer_leakage_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Oil level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Speed_reducer_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Speed_reducer_level_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_Speed_reducer_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining wear and tear</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_E-magnetic_brake_wear&tear_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_E-magnetic_brake_wear&tear_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_E-magnetic_brake_wear&tear_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Brake gap (0.30mm - 1.20mm)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_E-magnetic_brake_Brake_gap_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_E-magnetic_brake_Brake_gap_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_E-magnetic_brake_Brake_gap_remarks" /></td>
            </tr>

            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Drive wheel</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or cracks</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Drive_wheel_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Drive_wheel_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_Drive_wheel_remarks" /></td>
            </tr>

            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Free wheel</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or cracks</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Free_wheel_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Free_wheel_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_Free_wheel_remarks" /></td>
            </tr>

            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Travel Encoder</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Travel_encoder_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_Before_Travel_encoder_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_Before_Travel_encoder_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Travel motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Travel_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Travel_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_During_Travel_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Speed_reducer_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Speed_reducer_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_During_Speed_reducer_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_E_magnetic_brake_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_E_magnetic_brake_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_During_E_magnetic_brake_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Travel wheel</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Travel_wheel_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Travel_wheel_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_During_Travel_wheel_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Free wheel</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Free_wheel_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_During_Free_wheel_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_During_Free_wheel_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Travel Motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overheating</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_After_Travel_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_After_Travel_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_After_Travel_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overheating</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_After_Speed_reducer_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_After_Speed_reducer_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_After_Speed_reducer_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Travel_Drive_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Travel_Drive_After_Bolts_remarks" /></td>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Hoist Drive Unit</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoist motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Hoisting_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Speed_reducer_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Speed_reducer_damages_remarks" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Speed_reducer_damages_action" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Oil leakage</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Speed_reducer_leakage_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Speed_reducer_leakage_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Speed_reducer_leakage_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Oil level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Speed_reducer_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Speed_reducer_level_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Speed_reducer_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining wear and tear</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_E_magnetic_brake_wear_tear_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_E_magnetic_brake_wear_tear_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_E_magnetic_brake_wear_tear_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Brake gap (0.60mm - 1.50mm)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_E_magnetic_brake_Brake_gap_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_E_magnetic_brake_Brake_gap_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_E_magnetic_brake_Brake_gap_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting chain</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion, damage or rust</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_chain_Abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_chain_Abrasion_action" >

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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Hoisting_chain_Abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Chain tension</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_chain_Chain_tension_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_chain_Chain_tension_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Hoisting_chain_Chain_tension_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Elongation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_chain_Elongation_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_chain_Elongation_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Hoisting_chain_Elongation_remarks" /></td>
            </tr>

            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Sprocket_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Sprocket_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Sprocket_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting encoder</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_encoder_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_Before_Hoisting_encoder_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_Before_Hoisting_encoder_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Hoisting_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Hoisting_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_During_Hoisting_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Speed_reducer_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Speed_reducer_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_During_Speed_reducer_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_E_magnetic_brake_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_E_magneticmagnetic_brake_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_During_E_magneticmagnetic_brake_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Sprocket_sound_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Sprocket_sound_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_During_Sprocket_sound_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lateral vibrations</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Sprocket_vibrations_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_During_Sprocket_vibrations_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_During_Sprocket_vibrations_remarks" /></td>
            </tr>

            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overheating</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_After_Hoisting_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_After_Hoisting_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_After_Hoisting_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overheating</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_After_Speed_reducer_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_After_Speed_reducer_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_After_Speed_reducer_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoist_Drive_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoist_Drive_After_Bolts_remarks" /></td>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Hoisting Carriage</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Carriage frame</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Carriage_frame_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Carriage_frame_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Carriage_frame_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting guide rollers</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_guide_rollers_abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_guide_rollers_abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_guide_rollers_abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Clearance to mast</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_guide_rollers_mast_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_guide_rollers_mast_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_guide_rollers_mast_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Diameter (over 149mm)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_guide_rollers_Diameter_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_guide_rollers_Diameter_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_guide_rollers_Diameter_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting face rollers</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_face_rollers_abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_face_rollers_abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_face_rollers_abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Diameter (over 85mm)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_face_rollers_Diameter_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_face_rollers_Diameter_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_face_rollers_Diameter_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load profile detector arm</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Load_profile_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Load_profile_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Load_profile_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Spring condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Load_profile_Spring_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Load_profile_Spring_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Load_profile_Spring_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bay count shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Bay_count_shielding_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Bay_count_shielding_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Bay_count_shielding_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Home position shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Home_position_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Home_position_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Home_position_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bef.</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deceleration shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Deceleration_shielding_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Deceleration_shielding_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Deceleration_shielding_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Over-run flag</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Over_run_flag_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Over_run_flag_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Over_run_flag_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Position</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Over_run_flag_Position_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_Before_Over_run_flag_Position_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_Before_Over_run_flag_Position_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting guide rollers</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_During_guide_rollers_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_During_guide_rollers_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_During_guide_rollers_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting face rollers</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_During_face_rollers_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_During_face_rollers_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_During_face_rollers_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth traveling at section</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_During_Shielding_plates_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_During_Shielding_plates_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_During_Shielding_plates_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Hoisting_Carriage_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Hoisting_Carriage_After_Bolts_remarks" /></td>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Top & Bottom Rails</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Top rail</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Top_rail_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Top_rail_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Top_rail_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rail joint condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Top_rail_Rail_joint_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Top_rail_Rail_joint_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Top_rail_Rail_joint_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts and nuts</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bottom rail</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Bottom_rail_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Bottom_rail_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Bottom_rail_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rail joint condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Shim plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Shim_plates_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Shim_plates_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Shim_plates_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Missing</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Shim_plates_Missing_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Shim_plates_Missing_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Shim_plates_Missing_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Anchor bolts</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Anchor_bolt_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Anchor_bolt_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Anchor_bolt_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Shielding_plates_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Shielding_plates_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Shielding_plates_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bay count shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Bay_count_shielding_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Bay_count_shielding_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Bay_count_shielding_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Home position shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Bay_count_shielding_remarks" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Home_position_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Home_position_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deceleration shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Deceleration_shielding_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Deceleration_shielding_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Deceleration_shielding_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Over-run flag</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Over_run_flag_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Over_run_flag_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Over_run_flag_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Position</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Over_run_flag_Position_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_Before_Over_run_flag_Position_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_Before_Over_run_flag_Position_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Top rail</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth traveling at section</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_During_Top_rail_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_During_Top_rail_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_During_Top_rail_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bottom Rail</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth traveling at section</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_During_Bottom_rail_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_During_Bottom_rail_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_During_Bottom_rail_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Shielding plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth traveling at section</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_During_Shielding_plates_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_During_Shielding_plates_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_During_Shielding_plates_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Top_Bottom_Rails_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Top_Bottom_Rails_After_Bolts_remarks" /></td>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Upper & Lower Frames</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upper frame</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Upper_frame_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Upper_frame_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Upper_frame_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket (Upper frame)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Sprocket_Abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Sprocket_Abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Sprocket_Abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upper travel guide roller</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lowerr_Frames_Before_Upper_travel_guide_Abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Diameter (over 95mm)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lower frame</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Lower_frame_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Lower_frame_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Lower_frame_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket (Lower frame)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Sprocket_deformation_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Sprocket_deformation_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Sprocket_deformation_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lower travel guide roller</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Diameter (over 159mm)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upper travel guide roller</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Upper_travel_guide_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>

              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Upper_travel_guide_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_During_Upper_travel_guide_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lower travel guide roller</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Lower_travel_guide_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Lower_travel_guide_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_During_Lower_travel_guide_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Sprocket_sound_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Sprocket_sound_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_During_Sprocket_sound_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lateral vibrations</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Sprocket_vibrations_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_During_Sprocket_vibrations_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_During_Sprocket_vibrations_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Upper_Lower_Frames_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Upper_Lower_Frames_After_Bolts_remarks" /></td>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Slide Fork Unit</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork body frame</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Fork_Before_body_frame_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Fork_Before_body_frame_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Fork_Before_body_frame_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Fork_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Fork_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Fork_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Speed_reducer_Deformation_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Speed_reducer_Deformation_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Deformation_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Grease amount</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Speed_reducer_Grease_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Speed_reducer_Grease_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Speed_reducer_Grease_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lining wear and tear</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Brake gap (0.20mm - 0.50mm)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rack and pinion</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_action" >
                <option value="" disabled selected>Select option</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="R">R</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="O">O</option>
                <option value="L">L</option>
              </Field></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Middle rail</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Middle_rail_Abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Middle_rail_Abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Middle_rail_Abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Groove condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Middle_rail_Groove_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Middle_rail_Groove_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Middle_rail_Groove_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Middle_rail_Lubrication_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Middle_rail_Lubrication_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Middle_rail_Lubrication_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cam followers</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion and deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Cam_followers_Abrasion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Cam_followers_Abrasion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Cam_followers_Abrasion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lubrication</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Cam_followers_Lubrication_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Cam_followers_Lubrication_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Cam_followers_Lubrication_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth rotation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Torque limiter</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lock nut tighteness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Mechanical operation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Torque_limiter_Mechanical_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Torque_limiter_Mechanical_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Torque_limiter_Mechanical_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket / idler rollers</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abrasion or deformation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Sprocket_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Sprocket_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Sprocket_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sensing plates</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Sensing_plates_Deformation_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Sensing_plates_Deformation_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Deformation_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Sensing_plates_Looseness_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_Before_Sensing_plates_Looseness_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_Before_Sensing_plates_Looseness_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Fork_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Fork_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_Fork_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Speed_reducer_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Speed_reducer_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_Speed_reducer_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_E_magnetic_brake_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_E_magnetic_brake_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_E_magnetic_brake_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork plate</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Fork_plate_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Fork_plate_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_Fork_plate_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rack and pinion</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Rack_and_pinion_sound_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Rack_and_pinion_sound_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_sound_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lateral vibrations</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Rack_and_pinion_vibrations_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Rack_and_pinion_vibrations_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_Rack_and_pinion_vibrations_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sprocket / idler rollers</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Sprocket_sound_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Sprocket_sound_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_Sprocket_sound_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lateral vibrations</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Sprocket_vibrations_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_During_Sprocket_vibrations_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_During_Sprocket_vibrations_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork motor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overheating</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_Fork_motor_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_Fork_motor_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_After_Fork_motor_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Speed reducer</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overheating</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_Speed_reducer_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_Speed_reducer_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_After_Speed_reducer_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic brake</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overheating</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_E_magnetic_brake_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_E_magnetic_brake_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_After_E_magnetic_brake_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Slide_Fork_Unit_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Slide_Fork_Unit_After_Bolts_remarks" /></td>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Power Feed Unit</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Power feed rail</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_power_feed_rail_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_power_feed_rail_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_power_feed_rail_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fastener condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_power_feed_rail_Fastener_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_power_feed_rail_Fastener_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_power_feed_rail_Fastener_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_power_feed_rail_Dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_power_feed_rail_Dust_result" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_power_feed_rail_Dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Collector arm</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_arm_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_arm_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_Collector_arm_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Spring condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_arm_Spring_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_arm_Spring_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_Collector_arm_Spring_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Collector shoes</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_shoes_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_shoes_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_Collector_shoes_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fastener condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_shoes_Fastener_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_shoes_Fastener_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_Collector_shoes_Fastener_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_shoes_Dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_Before_Collector_shoes_Dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_Before_Collector_shoes_Dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Joiner</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth traveling at section</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_During_Joiner_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_During_Joiner_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_During_Joiner_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Feed in</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth traveling at section</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_During_Feed_in_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_During_Feed_in_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_During_Feed_in_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Current collector</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Smooth traveling at section</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_During_Current_collector_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_During_Current_collector_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_During_Current_collector_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Power_Feed_Unit_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Power_Feed_Unit_After_Bolts_remarks" /></td>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Traveling Detectors & I/O Checks</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Home position detector</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Home_position_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Home_position_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Home_position_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Home_position_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Home_position_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Home_position_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Regular position detector
                (Front & rear)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Regular_position_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Regular_position_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Regular_position_damages_remarks" /></td>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Regular_position_LED_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Regular_position_LED_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Regular_position_LED_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Forward Deceleration 1</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Forward_Deceleration1_damages_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Forward_Deceleration1_damages_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_damages_remarks" /></td>
              </tr><tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Forward_Deceleration1_LED_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Forward_Deceleration1_LED_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Forward_Deceleration1_LED_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Backward Deceleration 1</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Backward_DC1_damages_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Backward_DC1_damages_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Backward_DC1_damages_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Backward_DC1_LED_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Backward_DC1_LED_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Backward_DC1_LED_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deceleration 2</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Deceleration2_damages_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Deceleration2_damages_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Deceleration2_damages_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Over-run detectors
                  (Limit switch)</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Over_run_detectors_damages_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Over_run_detectors_damages_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Over_run_detectors_damages_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Spring condition</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Over_run_detectors_Spring_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_Before_Over_run_detectors_Spring_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_Before_Over_run_detectors_Spring_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Home position detector</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Home_position_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Home_position_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_During_Home_position_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Regular position detector</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Regular_position_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Regular_position_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_During_Regular_position_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Forward Deceleration 1</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Forward_Deceleration1_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Forward_Deceleration1_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_During_Forward_Deceleration1_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Backward Deceleration 1</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Backward_Deceleration1_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Backward_Deceleration1_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_During_Backward_Deceleration1_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deceleration 2</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Deceleration2_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Deceleration2_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_During_Deceleration2_remarks" /></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Over-run detectors (2 directions)</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Over_run_detectors_result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="O">O</option>
                  <option value="∆">∆</option>
                  <option value="X">X</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Traveling_Detectors_During_Over_run_detectors_action" >
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
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Traveling_Detectors_During_Over_run_detectors_remarks" /></td>
              </tr>
            </tr>
          </table>

          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Carriage Unit Detectors & I/O Checks</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Carriage positioning sensors (Up & down)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_positioning_sensors_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_positioning_sensors_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_positioning_sensors_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_positioning_sensors_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_positioning_sensors_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_positioning_sensors_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Pre-occupied load sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Pre_occupied_load_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Pre_occupied_load_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Pre_occupied_load_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Pre_occupied_load_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Pre_occupied_load_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Pre_occupied_load_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load detect sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_detect_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_detect_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Load_detect_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_detect_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_detect_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Load_detect_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load profile detectors
                (Proximity type)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_profile_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_profile_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Load_profile_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_profile_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_profile_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Load_profile_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load protrusion sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_protrusion_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_protrusion_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Load_protrusion_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_protrusion_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Load_protrusion_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Load_protrusion_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Station upper level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_upper_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_upper_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Station_upper_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_upper_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_upper_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Station_upper_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Station lower level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_lower_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_lower_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Station_lower_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_lower_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Station_lower_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Station_lower_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upward deceleration 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Upward_deceleration1_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Upward_deceleration1_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Upward_deceleration1_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Upward_deceleration1_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Upward_deceleration1_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Upward_deceleration1_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Downward deceleration 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Downward_deceleration1_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Downward_deceleration1_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Downward_deceleration1_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Downward_deceleration1_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Downward_deceleration1_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Downward_deceleration1_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deceleration 2</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Deceleration2_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Deceleration2_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Deceleration2_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Deceleration2_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Deceleration2_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Deceleration2_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Chain tension detectors
                (Limit switch)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Chain_tension_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Chain_tension_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Chain_tension_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Spring condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Chain_tension_Spring_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Chain_tension_Spring_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Chain_tension_Spring_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Overun detectors
                (Limit switch)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Over_run_detectors_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Over_run_detectors_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Over_run_detectors_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Spring condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Over_run_detectors_Spring_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_Before_Over_run_detectors_Spring_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_Before_Over_run_detectors_Spring_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Carriage positioning sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Carriage_positioning_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Carriage_positioning_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Carriage_positioning_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Pre-occupied load sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Pre_occupied_load_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Pre_occupied_load_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Pre_occupied_load_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load detect sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Load_detect_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Load_detect_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Load_detect_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load profile detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Load_profile_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Load_profile_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Load_profile_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load protrusion sensors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Load_protrusion_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Load_protrusion_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Load_protrusion_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Station upper level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Station_upper_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Station_upper_level_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Station_upper_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Station lower level</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Station_lower_level_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Station_lower_level_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Station_lower_level_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upward deceleration 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Upward_deceleration1_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Upward_deceleration1_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Upward_deceleration1_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Downward deceleration 1</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Downward_deceleration1_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Downward_deceleration1_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Downward_deceleration1_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deceleration 2</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Deceleration2_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Deceleration2_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Deceleration2_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Chain tension detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Chain_tension_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Chain_tension_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Chain_tension_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Over-run detectors
                (2 directions)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Over-run_detectors_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Carriage_Unit_During_Over-run_detectors_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Carriage_Unit_During_Over-run_detectors_remarks" /></td>
            </tr>
          </table>
          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Fork Unit Detectors & I/O Checks</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork position detectors
                (Limit switch/ proximity sensor)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_Before_Fork_position_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_Before_Fork_position_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_Unit_Before_Fork_position_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sensor condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_Before_Fork_position_Sensor_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_Before_Fork_position_Sensor_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_Unit_Before_Fork_position_Sensor_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork end detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_During_Fork_end_detectors_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_During_Fork_end_detectors_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_Unit_During_Fork_end_detectors_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork center detectors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>I/O check</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_During_Fork_center_detectors_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Fork_Unit_During_Fork_center_detectors_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Fork_Unit_During_Fork_center_detectors_remarks" /></td>
            </tr>
          </table>
          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Operation Panel and Controller</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Emergency-stop button
                (Crane & controller)</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_e_stop_button_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_e_stop_button_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_e_stop_button_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_e_stop_button_Functionality_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_e_stop_button_Functionality_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_e_stop_button_Functionality_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Optical data transmitter</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Optical_data_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_Dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_Dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Optical_data_Dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Alignment</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_Alignment_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_Alignment_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Optical_data_Alignment_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_Functionality_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Optical_data_Functionality_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Optical_data_Functionality_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>4 bit sensor</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_4bit_sensor_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_Dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_Dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_4bit_sensor_Dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Alignment</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_Alignment_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_Alignment_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_4bit_sensor_Alignment_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_Functionality_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_4bit_sensor_Functionality_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_4bit_sensor_Functionality_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electro-magnetic contactors</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>On / Off condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_E-magnetic_On_Off_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_E-magnetic_On_Off_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_E-magnetic_On_Off_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fastener condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_E_magnetic_Fastener_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_E_magnetic_Fastener_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_E_magnetic_Fastener_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Breaker</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Breaker_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Breaker_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Breaker_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Turn on and off properly</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Breaker_Turn_on&off_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Breaker_Turn_on&off_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Breaker_Turn_on&off_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Electric wiring</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wiring condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Electric_wiring_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Electric_wiring_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Electric_wiring_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Snapped/ broken wire</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Electric_wiring_Snapped_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Electric_wiring_Snapped_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Electric_wiring_Snapped_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Power supply</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Voltage measurement</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Measure</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Power_supply_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Power_supply_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Power_supply_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>P.C. Board</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Connectors connection</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_PC_Board_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_PC_Board_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_PC_Board_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Operation panel</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Operation_panel_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>LED indicator</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_LED_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_LED_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Operation_panel_LED_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Key switch functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_Key_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_Key_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Operation_panel_Key_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Operation/Control panel</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Control_panel_dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Control_panel_dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Control_panel_dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wiring condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Control_panel_Wiring_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Control_panel_Wiring_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Control_panel_Wiring_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Operation panel buttons</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_buttons_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Operation_panel_buttons_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Operation_panel_buttons_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Indicators</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Indicators_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Indicators_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Indicators_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Ventilation fan</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Ventilation_fan_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_before_Ventilation_fan_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_before_Ventilation_fan_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Operation_Panel_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Operation_Panel_After_Bolts_remarks" /></td>
            </tr>
          </table>
          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Inverter Unit</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Inverter</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_damages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_damages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Inverter_Unit_Before_Inverter_damages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Dust accumulation</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Dust_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Dust_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Inverter_Unit_Before_Inverter_Dust_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wiring condition</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Wiring_condition_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Wiring_condition_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Inverter_Unit_Before_Inverter_Wiring_condition_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>During</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Abnormal sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Sound</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Wiring_sound_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Wiring_sound_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Inverter_Unit_Before_Inverter_Wiring_sound_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Wiring_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Inverter_Unit_Before_Inverter_Wiring_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Inverter_Unit_Before_Inverter_Wiring_Bolts_remarks" /></td>
            </tr>
          </table>
          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">Others</h2>
          <table>
            <tr className="center-text text-[10px] sm:text-base">
              <th className='text-[10px] sm:text-base'>Op</th>
              <th className='text-[10px] sm:text-base'>Inspection Item</th>
              <th className='text-[10px] sm:text-base'>Check Point</th>
              <th className='text-[10px] sm:text-base'>Method</th>
              <th className='text-[10px] sm:text-base'>Result</th>
              <th className='text-[10px] sm:text-base'>Action</th>
              <th className='text-[10px] sm:text-base'>Remarks</th>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Before</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Mast</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Mast_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Mast_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Mast_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Support</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Support_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Support_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Support_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cable</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Cable_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Cable_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Cable_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cable protector</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Cable_protector_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Cable_protector_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Cable_protector_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cable guide</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Cable_guide_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Cable_guide_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Cable_guide_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Safety plug</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Functionality</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Safety_plug_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Safety_plug_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Safety_plug_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Safety fence</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Deformation or damages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Safety_fence_damage_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Safety_fence_damage_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Safety_fence_damage_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'></td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Signages</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Visual</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Safety_fence_Signages_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_Before_Safety_fence_Signages_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_Before_Safety_fence_Signages_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>After</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Bolts / screws</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Looseness</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Touch</td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_After_Bolts_result" >
                <option value="" disabled selected>Select option</option>
                <option value="O">O</option>
                <option value="∆">∆</option>
                <option value="X">X</option>
              </Field>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Others_After_Bolts_action" >
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
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" name="Others_After_Bolts_remarks" /></td>
            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><b>Result</b> O=Good ∆=Fair X=Defective</td>

            </tr>
            <tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><b>Action</b> A=Adjust C=Clean R=Replace M=Make repair T=Tighten O=Overhaul L=Lubricate</td>
            </tr>
          </table>
          <h2 className="text-2xl font-extrabold dark:text-gray-200 mb-2">CHAIN ELONGATION MEASUREMENT:</h2>
          <img src={crane14image} alt="Chain Elongation Crane 14" width="[100%]" height="50" />

          <h2 className="mt-10 text-2xl font-extrabold dark:text-gray-200 mb-2">INSPECTION SUMMARY/RECOMMENDATION:</h2>
          <div class="inspection-summary">
            <Field as="textarea" className='border-black border w-[100%]' id="crane14_REPORT_SUMMARY" name="crane14_REPORT_SUMMARY"></Field>
          </div>

          <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
            <div class="textbox-container">
              <label for="crane14_Verified_by_MNC">Verified by (MNC):</label>
              <Field className="w-[80px] sm:w-full h-[35px] text-center" type="text" id="crane14_Verified_by_MNC" name="crane14_Verified_by_MNC" />
            </div>
          </td>
        </Form>


      </Formik>

    </div>
  )
}

export default MonthlyPM14