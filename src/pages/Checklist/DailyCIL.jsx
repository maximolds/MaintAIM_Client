import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import "./DailyCIL.css"
import axios from 'axios';



function DailyCIL() {

  let navigate = useNavigate();
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();
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
          // Set the initial values here after fetching data
          setInitialValues(() => ({
            Daily_CIL_inspected_by: response.data.firstname,
          }));
        }
      });
  }, []);




  const [initialValues, setInitialValues] = useState({
    Daily_CIL_inspected_by: authState.firstname,
    Daily_CIL_approved_by: "",
    Daily_CIL_Crane_Number: "",
    Daily_CIL_date: "",
    Crane_Control_Panel_Result: "",
    Crane_Control_Panel_Action: "",
    Crane_Stationary_Operation_Tower_Result: "",
    Crane_Stationary_Operation_Tower_Action: "",
    Crane_Remote_Controller_Result: "",
    Crane_Remote_Controller_Action: "",
    Crane_Guard_fence_Result: "",
    Crane_Guard_fence_Action: "",
    Crane_Travel_Mechanisms_Result: "",
    Crane_Travel_Mechanisms_Action: "",
    Crane_Hoisting_Mechanisms_Result: "",
    Crane_Hoisting_Mechanisms_Action: "",
    Crane_Fork_Mechanisms_Result: "",
    Crane_Fork_Mechanisms_Action: "",
    Crane_Wire_Rope_Result: "",
    Crane_Wire_Rope_Action: "",
    Crane_Optical_Transmitter_Result: "",
    Crane_Optical_Transmitter_Action: "",
    Crane_Load_profile_Result: "",
    Crane_Load_profile_Action: "",
    Crane_Upper_rail_Result: "",
    Crane_Upper_rail_Action: "",
    Crane_Lower_rail_Result: "",
    Crane_Lower_rail_Action: "",
    Crane_Rack_aisle_Result: "",
    Crane_Rack_aisle_Action: "",
    Crane_Rack_Result: "",
    Crane_Rack_Action: "",
    F1_Conveyor_Frame_Result: "",
    F1_Conveyor_Frame_Action: "",
    F1_Conveyor_Chain_Result: "",
    F1_Conveyor_Chain_Action: "",
    F1_Conveyor_Motors_Result: "",
    F1_Conveyor_Motors_Action: "",
    F1_Conveyor_Limit_Switches_Result: "",
    F1_Conveyor_Limit_Switches_Action: "",
    F1_Conveyor_Photo_Sensors_Result: "",
    F1_Conveyor_Photo_Sensors_Action: "",
    F1_Conveyor_Terminal_Box_Result: "",
    F1_Conveyor_Terminal_Box_Action: "",
    F1_Conveyor_Cable_Tray_Result: "",
    F1_Conveyor_Cable_Tray_Action: "",
    F1_Conveyor_Wiring_and_Cable_Result: "",
    F1_Conveyor_Wiring_and_Cable_Action: "",
    F1_Conveyor_Floor_Result: "",
    F1_Conveyor_Floor_Action: "",
    F2_Conveyor_Frame_Result: "",
    F2_Conveyor_Frame_Action: "",
    F2_Conveyor_Chain_Result: "",
    F2_Conveyor_Chain_Action: "",
    F2_Conveyor_Motors_Result: "",
    F2_Conveyor_Motors_Action: "",
    F2_Conveyor_Limit_Switches_Result: "",
    F2_Conveyor_Limit_Switches_Action: "",
    F2_Conveyor_Photo_Sensors_Result: "",
    F2_Conveyor_Photo_Sensors_Action: "",
    F2_Conveyor_Terminal_Box_Result: "",
    F2_Conveyor_Terminal_Box_Action: "",
    F2_Conveyor_Cable_Tray_Result: "",
    F2_Conveyor_Cable_Tray_Action: "",
    F2_Conveyor_Wiring_and_Cable_Result: "",
    F2_Conveyor_Wiring_and_Cable_Action: "",
    F2_Conveyor_Floor_Result: "",
    F2_Conveyor_Floor_Action: "",
    Anti_Home_Conveyor_Frame_Result: "",
    Anti_Home_Conveyor_Frame_Action: "",
    Anti_Home_Conveyor_Chain_Result: "",
    Anti_Home_Conveyor_Chain_Action: "",
    Anti_Home_Conveyor_Motors_Result: "",
    Anti_Home_Conveyor_Motors_Action: "",
    Anti_Home_Conveyor_Limit_Switches_Result: "",
    Anti_Home_Conveyor_Limit_Switches_Action: "",
    Anti_Home_Conveyor_Photo_Sensors_Result: "",
    Anti_Home_Conveyor_Photo_Sensors_Action: "",
    Anti_Home_Conveyor_Terminal_Box_Result: "",
    Anti_Home_Conveyor_Terminal_Box_Action: "",
    Anti_Home_Conveyor_Cable_Tray_Result: "",
    Anti_Home_Conveyor_Cable_Tray_Action: "",
    Anti_Home_Conveyor_Wiring_and_Cable_Result: "",
    Anti_Home_Conveyor_Wiring_and_Cable_Action: "",
    Anti_Home_Conveyor_Floor_Result: "",
    Anti_Home_Conveyor_Floor_Action: "",
    Daily_CIL_Verified_by_MNC: "",
    DAILY_CIL_REMARKS: ""
  });

  const validationSchema = Yup.object().shape({
    Daily_CIL_inspected_by: Yup.string().required("Please click field and press space.")
  });

  const onSubmit = (data) => {
    axios.post("https://maintaimdb-044f7fcd2d92.herokuapp.com/dailychecklist", data,
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







  return (
    <div className=''>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >

        <Form id="checklistForm" className='bg-[#f3f5f5] container mx-auto px-2 sm:px-4 lg:px-8'>
          <h1 className='text-3xl font-extrabold dark:text-gray-200 mb-5'>Daily CIL</h1>

          <div className='flex flex-col sm:flex-row mt-2 mb-4'>
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


          <table className='w-full mb-4'>
            <tbody className="text-[10px] sm:text-base"><tr className="center-text text-[10px] sm:text-base">
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="Daily_CIL_inspected_by">Inspected by:</label>
                  <ErrorMessage className='text-red-500' name="Daily_CIL_inspected_by" component="span" />
                  <Field type="text" id="Daily_CIL_inspected_by" name="Daily_CIL_inspected_by"
                    value={authState.firstname}
                  />
                </div>
              </td>
              <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                <div class="textbox-container">
                  <label for="Daily_CIL_approved_by">Approved by (Supervisor):</label>
                  <Field type="text" id="Daily_CIL_approved_by" name="Daily_CIL_approved_by" />
                </div>
              </td>
            </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <div class="textbox-container">
                    <label for="Daily_CIL_Crane_Number">Crane Number:</label>
                    <Field type="text" id="Daily_CIL_Crane_Number" name="Daily_CIL_Crane_Number" />
                  </div>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <div class="textbox-container">
                    <label for="Daily_CIL_date">Date:</label>
                    <Field type="date" id="Daily_CIL_date" name="Daily_CIL_date" />
                  </div>
                </td>
              </tr>
            </tbody></table>

          <h2 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>Crane</h2>
          <table className="">
            <tbody className="text-[10px] sm:text-base">
              <tr className="center-text text-[10px] sm:text-base">
                <th className='text-[10px] sm:text-base'>Parts for Inspection</th>
                <th className='text-[10px] sm:text-base'>Inspection Point</th>
                <th className='text-[10px] sm:text-base'>Method</th>
                <th className='text-[10px] sm:text-base'>Result</th>
                <th className='text-[10px] sm:text-base'>Action</th>
              </tr>

              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Control Panel, DCU, MCU</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Control_Panel_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field></td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Control_Panel_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field></td>

              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Stationary Operation Tower</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation, alignment</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Stationary_Operation_Tower_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Stationary_Operation_Tower_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Remote Controller</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check remote and cable for damages</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Remote_Controller_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Remote_Controller_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Guard fence</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Guard_fence_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Guard_fence_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Travel Mechanisms</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, motor and wheel rotating abnormal sound</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T, S</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Travel_Mechanisms_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Travel_Mechanisms_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Hoisting Mechanisms</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage cable, chain tension, lubrication, motor abnormal sound</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T, S</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Hoisting_Mechanisms_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Hoisting_Mechanisms_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Fork Mechanisms</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, chain tension &amp; lubrication, table fork and anti-slip surface, motor for abnormal sound</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T, S</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Fork_Mechanisms_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Fork_Mechanisms_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wire Rope</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for damage, tension, and lubrication</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Wire_Rope_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Wire_Rope_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Optical Transmitter</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for accumulation of dust and LED light condition</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Optical_Transmitter_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Optical_Transmitter_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Load profile</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check cable alignment and tension</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Load_profile_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Load_profile_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Upper rail</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check alignment of upper rail</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Upper_rail_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Upper_rail_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Lower rail</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check alignment of lower rail and check for bolt tightness</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Lower_rail_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Lower_rail_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rack aisle</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness of rack aisle areas (No fallen stocks, and waste)</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Rack_aisle_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Rack_aisle_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Rack</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for damage misaligned rack</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Rack_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-xs sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Crane_Rack_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
            </tbody></table>
          <h2 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>1F Conveyor</h2>
          <table>
            <tbody className="text-[10px] sm:text-base"><tr className="center-text text-[10px] sm:text-base">
              <th>Parts for Inspection</th>
              <th>Inspection Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Frame</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Frame_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Frame_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Chain</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check chain tension and lubrication</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Chain_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Chain_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Motors</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T, S</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Motors_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Motors_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Limit Switches</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, and misalignment</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Limit_Switches_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Limit_Switches_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Photo Sensors</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, and misalignment</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Photo_Sensors_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Photo_Sensors_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Terminal Box</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation, check cover</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Terminal_Box_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Terminal_Box_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cable Tray</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation, check cover</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Cable_Tray_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Cable_Tray_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wiring and Cable</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for damaged wires and harnessing</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Wiring_and_Cable_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Wiring_and_Cable_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Floor</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Floor_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F1_Conveyor_Floor_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
            </tbody></table>
          <h2 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>2F Conveyor</h2>
          <table>
            <tbody className="text-[10px] sm:text-base"><tr className="center-text text-[10px] sm:text-base">
              <th>Parts for Inspection</th>
              <th>Inspection Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Frame</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Frame_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Frame_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Chain</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check chain tension and lubrication</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Chain_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Chain_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Motors</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T, S</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Motors_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Motors_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Limit Switches</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, and misalignment</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Limit_Switches_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Limit_Switches_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Photo Sensors</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, and misalignment</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Photo_Sensors_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Photo_Sensors_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Terminal Box</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation, check cover</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Terminal_Box_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Terminal_Box_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field></td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cable Tray</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation, check cover</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Cable_Tray_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Cable_Tray_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wiring and Cable</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for damaged wires and harnessing</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Wiring_and_Cable_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Wiring_and_Cable_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Floor</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Floor_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="F2_Conveyor_Floor_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
            </tbody></table>

          <h2 className='mt-10 sm:mt-5 text-2xl font-extrabold dark:text-gray-200'>Anti-Home Conveyor</h2>
          <table>
            <tbody className="text-[10px] sm:text-base"><tr className="center-text text-[10px] sm:text-base">
              <th>Parts for Inspection</th>
              <th>Inspection Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Frame</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Frame_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Frame_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Chain</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check chain tension and lubrication</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Chain_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Chain_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Motors</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T, S</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Motors_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Motors_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Limit Switches</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, and misalignment</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Limit_Switches_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Limit_Switches_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Photo Sensors</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage, and misalignment</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Photo_Sensors_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Photo_Sensors_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Terminal Box</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation, check cover</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Terminal_Box_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Terminal_Box_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Cable Tray</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness, damage or deformation, check cover</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Cable_Tray_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Cable_Tray_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Wiring and Cable</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for damaged wires and harnessing</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Wiring_and_Cable_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Wiring_and_Cable_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Floor</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>Check for cleanliness</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>V, T</td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Floor_Result" >
                  <option value="" disabled selected>Select option</option>
                  <option value="G">G</option>
                  <option value="NG">NG</option>
                </Field>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'><Field className="w-[80px] sm:w-full h-[35px] text-center" as="select" name="Anti_Home_Conveyor_Floor_Action" >
                  <option value="" disabled selected>Select option</option>
                  <option value="A">A</option>
                  <option value="C">C</option>
                  <option value="M">M</option>
                  <option value="R">R</option>
                </Field>
                </td>
              </tr>
            </tbody></table>


          <div class="textbox-container">
            <h2>Remarks:</h2>
          </div>


          <table>

            <tbody className="text-[10px] sm:text-base"><tr className="center-text text-[10px] sm:text-base">
              <td colspan="2">

                <Field as="textarea" className='border-black border w-[100%]' id="DAILY_CIL_REMARKS" name="DAILY_CIL_REMARKS" rows="6" cols="50"></Field>
              </td>
            </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <p><strong>Method</strong> (M = Measure, S = Sound, T = Touch, V = Visual)</p>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <p><strong>Result</strong> (G = Good, NG = Not Good)</p>
                </td>
              </tr>
              <tr className="center-text text-[10px] sm:text-base">
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <p><strong>Action</strong> (A - Adjust, C - Cleaned, M - Make Repair, R - Replace)</p>
                </td>
                <td className='text-[10px] sm:text-base pb-2 w-1/4 sm:w-auto'>
                  <div class="textbox-container">
                    <strong>Verified by (MNC)</strong>
                    <Field type="text" id="Daily_CIL_Verified_by_MNC" name="Daily_CIL_Verified_by_MNC" />
                  </div>
                </td>

              </tr>

            </tbody></table>

        </Form>
      </Formik>

    </div>
  )
}

export default DailyCIL