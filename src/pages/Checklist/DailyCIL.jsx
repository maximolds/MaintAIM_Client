import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./DailyCIL.css"
import axios from 'axios';


function DailyCIL() {

  let navigate = useNavigate();
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const initialValues = {
    Daily_CIL_inspected_by: "",
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
  };


  const onSubmit = (data) => {
    axios.post("http://localhost:3001/dailychecklist", data,
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



  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}>
        <Form id="checklistForm">
          <h1 className='text-3xl font-extrabold dark:text-gray-200 mb-5'>Daily CIL</h1>

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
            <tbody><tr>
              <td>
                <div class="textbox-container">
                  <label for="Daily_CIL_inspected_by">Inspected by:</label>
                  <Field type="text" id="Daily_CIL_inspected_by" name="Daily_CIL_inspected_by" />
                </div>
              </td>
              <td>
                <div class="textbox-container">
                  <label for="Daily_CIL_approved_by">Approved by (Supervisor):</label>
                  <Field type="text" id="Daily_CIL_approved_by" name="Daily_CIL_approved_by" />
                </div>
              </td>
            </tr>
              <tr>
                <td>
                  <div class="textbox-container">
                    <label for="Daily_CIL_Crane_Number">Crane Number:</label>
                    <Field type="text" id="Daily_CIL_Crane_Number" name="Daily_CIL_Crane_Number" />
                  </div>
                </td>
                <td>
                  <div class="textbox-container">
                    <label for="Daily_CIL_date">Date:</label>
                    <Field type="date" id="Daily_CIL_date" name="Daily_CIL_date" />
                  </div>
                </td>
              </tr>
            </tbody></table>

          <h2 className='text-2xl font-extrabold dark:text-gray-200'>Crane</h2>
          <table>
            <tbody><tr class="center-text">
              <th>Parts for Inspection</th>
              <th>Inspection Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
            </tr>

              <tr>
                <td>Control Panel, DCU, MCU</td>
                <td>Check for cleanliness, damage or deformation</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Control_Panel_Result" /></td>
                <td><Field type="text" name="Crane_Control_Panel_Action" /></td>
              </tr>
              <tr>
                <td>Stationary Operation Tower</td>
                <td>Check for cleanliness, damage or deformation, alignment</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Stationary_Operation_Tower_Result" /></td>
                <td><Field type="text" name="Crane_Stationary_Operation_Tower_Action" /></td>
              </tr>
              <tr>
                <td>Remote Controller</td>
                <td>Check remote and cable for damages</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Remote_Controller_Result" /></td>
                <td><Field type="text" name="Crane_Remote_Controller_Action" /></td>
              </tr>
              <tr>
                <td>Guard fence</td>
                <td>Check for cleanliness, damage or deformation</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Guard_fence_Result" /></td>
                <td><Field type="text" name="Crane_Guard_fence_Action" /></td>
              </tr>
              <tr>
                <td>Travel Mechanisms</td>
                <td>Check for cleanliness, damage, motor and wheel rotating abnormal sound</td>
                <td>V, T, S</td>
                <td><Field type="text" name="Crane_Travel_Mechanisms_Result" /></td>
                <td><Field type="text" name="Crane_Travel_Mechanisms_Action" /></td>
              </tr>
              <tr>
                <td>Hoisting Mechanisms</td>
                <td>Check for cleanliness, damage cable, chain tension, lubrication, motor abnormal sound</td>
                <td>V, T, S</td>
                <td><Field type="text" name="Crane_Hoisting_Mechanisms_Result" /></td>
                <td><Field type="text" name="Crane_Hoisting_Mechanisms_Action" /></td>
              </tr>
              <tr>
                <td>Fork Mechanisms</td>
                <td>Check for cleanliness, damage, chain tension &amp; lubrication, table fork and anti-slip surface, motor for abnormal sound</td>
                <td>V, T, S</td>
                <td><Field type="text" name="Crane_Fork_Mechanisms_Result" /></td>
                <td><Field type="text" name="Crane_Fork_Mechanisms_Action" /></td>
              </tr>
              <tr>
                <td>Wire Rope</td>
                <td>Check for damage, tension, and lubrication</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Wire_Rope_Result" /></td>
                <td><Field type="text" name="Crane_Wire_Rope_Action" /></td>
              </tr>
              <tr>
                <td>Optical Transmitter</td>
                <td>Check for accumulation of dust and LED light condition</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Optical_Transmitter_Result" /></td>
                <td><Field type="text" name="Crane_Optical_Transmitter_Action" /></td>
              </tr>
              <tr>
                <td>Load profile</td>
                <td>Check cable alignment and tension</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Load_profile_Result" /></td>
                <td><Field type="text" name="Crane_Load_profile_Action" /></td>
              </tr>
              <tr>
                <td>Upper rail</td>
                <td>Check alignment of upper rail</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Upper_rail_Result" /></td>
                <td><Field type="text" name="Crane_Upper_rail_Action" /></td>
              </tr>
              <tr>
                <td>Lower rail</td>
                <td>Check alignment of lower rail and check for bolt tightness</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Lower_rail_Result" /></td>
                <td><Field type="text" name="Crane_Lower_rail_Action" /></td>
              </tr>
              <tr>
                <td>Rack aisle</td>
                <td>Check for cleanliness of rack aisle areas (No fallen stocks, and waste)</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Rack_aisle_Result" /></td>
                <td><Field type="text" name="Crane_Rack_aisle_Action" /></td>
              </tr>
              <tr>
                <td>Rack</td>
                <td>Check for damage misaligned rack</td>
                <td>V, T</td>
                <td><Field type="text" name="Crane_Rack_Result" /></td>
                <td><Field type="text" name="Crane_Rack_Action" /></td>
              </tr>
            </tbody></table>
          <h2 className='text-2xl font-extrabold dark:text-gray-200'>1F Conveyor</h2>
          <table>
            <tbody><tr>
              <th>Parts for Inspection</th>
              <th>Inspection Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
              <tr>
                <td>Frame</td>
                <td>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Frame_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Frame_Action" /></td>
              </tr>
              <tr>
                <td>Chain</td>
                <td>Check chain tension and lubrication</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Chain_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Chain_Action" /></td>
              </tr>
              <tr>
                <td>Motors</td>
                <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                <td>V, T, S</td>
                <td><Field type="text" name="F1_Conveyor_Motors_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Motors_Action" /></td>
              </tr>
              <tr>
                <td>Limit Switches</td>
                <td>Check for cleanliness, damage, and misalignment</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Limit_Switches_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Limit_Switches_Action" /></td>
              </tr>
              <tr>
                <td>Photo Sensors</td>
                <td>Check for cleanliness, damage, and misalignment</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Photo_Sensors_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Photo_Sensors_Action" /></td>
              </tr>
              <tr>
                <td>Terminal Box</td>
                <td>Check for cleanliness, damage or deformation, check cover</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Terminal_Box_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Terminal_Box_Action" /></td>
              </tr>
              <tr>
                <td>Cable Tray</td>
                <td>Check for cleanliness, damage or deformation, check cover</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Cable_Tray_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Cable_Tray_Action" /></td>
              </tr>
              <tr>
                <td>Wiring and Cable</td>
                <td>Check for damaged wires and harnessing</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Wiring_and_Cable_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Wiring_and_Cable_Action" /></td>
              </tr>
              <tr>
                <td>Floor</td>
                <td>Check for cleanliness</td>
                <td>V, T</td>
                <td><Field type="text" name="F1_Conveyor_Floor_Result" /></td>
                <td><Field type="text" name="F1_Conveyor_Floor_Action" /></td>
              </tr>
            </tbody></table>
          <h2 className='text-2xl font-extrabold dark:text-gray-200'>2F Conveyor</h2>
          <table>
            <tbody><tr>
              <th>Parts for Inspection</th>
              <th>Inspection Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
              <tr>
                <td>Frame</td>
                <td>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Frame_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Frame_Action" /></td>
              </tr>
              <tr>
                <td>Chain</td>
                <td>Check chain tension and lubrication</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Chain_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Chain_Action" /></td>
              </tr>
              <tr>
                <td>Motors</td>
                <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                <td>V, T, S</td>
                <td><Field type="text" name="F2_Conveyor_Motors_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Motors_Action" /></td>
              </tr>
              <tr>
                <td>Limit Switches</td>
                <td>Check for cleanliness, damage, and misalignment</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Limit_Switches_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Limit_Switches_Action" /></td>
              </tr>
              <tr>
                <td>Photo Sensors</td>
                <td>Check for cleanliness, damage, and misalignment</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Photo_Sensors_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Photo_Sensors_Action" /></td>
              </tr>
              <tr>
                <td>Terminal Box</td>
                <td>Check for cleanliness, damage or deformation, check cover</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Terminal_Box_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Terminal_Box_Action" /></td>
              </tr>
              <tr>
                <td>Cable Tray</td>
                <td>Check for cleanliness, damage or deformation, check cover</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Cable_Tray_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Cable_Tray_Action" /></td>
              </tr>
              <tr>
                <td>Wiring and Cable</td>
                <td>Check for damaged wires and harnessing</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Wiring_and_Cable_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Wiring_and_Cable_Action" /></td>
              </tr>
              <tr>
                <td>Floor</td>
                <td>Check for cleanliness</td>
                <td>V, T</td>
                <td><Field type="text" name="F2_Conveyor_Floor_Result" /></td>
                <td><Field type="text" name="F2_Conveyor_Floor_Action" /></td>
              </tr>
            </tbody></table>

          <h2 className='text-2xl font-extrabold dark:text-gray-200'>Anti-Home Conveyor</h2>
          <table>
            <tbody><tr>
              <th>Parts for Inspection</th>
              <th>Inspection Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
              <tr>
                <td>Frame</td>
                <td>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Frame_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Frame_Action" /></td>
              </tr>
              <tr>
                <td>Chain</td>
                <td>Check chain tension and lubrication</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Chain_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Chain_Action" /></td>
              </tr>
              <tr>
                <td>Motors</td>
                <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                <td>V, T, S</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Motors_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Motors_Action" /></td>
              </tr>
              <tr>
                <td>Limit Switches</td>
                <td>Check for cleanliness, damage, and misalignment</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Limit_Switches_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Limit_Switches_Action" /></td>
              </tr>
              <tr>
                <td>Photo Sensors</td>
                <td>Check for cleanliness, damage, and misalignment</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Photo_Sensors_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Photo_Sensors_Action" /></td>
              </tr>
              <tr>
                <td>Terminal Box</td>
                <td>Check for cleanliness, damage or deformation, check cover</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Terminal_Box_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Terminal_Box_Action" /></td>
              </tr>
              <tr>
                <td>Cable Tray</td>
                <td>Check for cleanliness, damage or deformation, check cover</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Cable_Tray_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Cable_Tray_Action" /></td>
              </tr>
              <tr>
                <td>Wiring and Cable</td>
                <td>Check for damaged wires and harnessing</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Wiring_and_Cable_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Wiring_and_Cable_Action" /></td>
              </tr>
              <tr>
                <td>Floor</td>
                <td>Check for cleanliness</td>
                <td>V, T</td>
                <td><Field type="text" name="Anti_Home_Conveyor_Floor_Result" /></td>
                <td><Field type="text" name="Anti_Home_Conveyor_Floor_Action" /></td>
              </tr>
            </tbody></table>


          <div class="textbox-container">
            <h2>Remarks:</h2>
          </div>


          <table>

            <tbody><tr>
              <td colspan="2">
                
                <Field as="textarea" className='border-black border w-[100%]'  id="DAILY_CIL_REMARKS" name="DAILY_CIL_REMARKS" rows="6" cols="50"></Field>
              </td>
            </tr>
              <tr>
                <td>
                  <p><strong>Method</strong> (M = Measure, S = Sound, T = Touch, V = Visual)</p>
                </td>
                <td>
                  <p><strong>Result</strong> (G = Good, NG = Not Good)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p><strong>Action</strong> (A - Adjust, C - Cleaned, M - Make Repair, R - Replace)</p>
                </td>
                <td>
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