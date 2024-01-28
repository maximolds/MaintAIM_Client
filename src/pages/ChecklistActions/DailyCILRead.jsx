import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { useReactToPrint } from 'react-to-print'
import axios from 'axios';
function DailyCILRead() {
    const [listOfDailyCheckList, setListOfDailyCheckList] = useState([]);
    const { currentColor, activeMenu, setActiveMenu } = useStateContext();
    const componentPdf = useRef();

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://maintaim-db-5eb6eb864ba7.herokuapp.com/dailychecklist/byId/${id}`).then((response) => {
            setListOfDailyCheckList(response.data)
            console.log(response.data)
        });
    }, []);

    const generatePDF = useReactToPrint({
        content: () => componentPdf.current,
        documentTitle: `Daily CIL`,
        onAfterPrint: () => alert("Data saved in PDF")
    });


    return (
        <div>
            <div className='flex justify-end mt-2 mr-4'>
                <Link
                    to={`/daily/update/${id}`}
                    //onClick={()=>navigate(-1)}
                    className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4 mr-2  
              bg-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                    style={{ color: currentColor }}
                >
                    Edit
                </Link>

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
                <button
                    onClick={generatePDF}
                    className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  ml-2
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center bg-red-700`}

                >
                    Export as PDF
                </button>
            </div>



            <form id="checklistForm">



                <div ref={componentPdf} style={{ width: '100%' }}>
                    <h1 className='text-3xl font-extrabold dark:text-gray-200 mb-5'>DailyCIL
                        <span style={{ color: currentColor }}> {id}</span>
                    </h1>
                    <table>
                        <tbody><tr>
                            <td>
                                <div class="textbox-container">
                                    <label for="Daily_CIL_inspected_by">Inspected by:</label>
                                    <input value={listOfDailyCheckList.Daily_CIL_inspected_by} type="text" id="Daily_CIL_inspected_by" name="Daily_CIL_inspected_by" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="Daily_CIL_approved_by">Approved by (Supervisor):</label>
                                    <input value={listOfDailyCheckList.Daily_CIL_approved_by} type="text" id="Daily_CIL_approved_by" name="Daily_CIL_approved_by" />
                                </div>
                            </td>
                        </tr>
                            <tr>
                                <td>
                                    <div class="textbox-container">
                                        <label for="Daily_CIL_Crane_Number">Crane Number:</label>
                                        <input value={listOfDailyCheckList.Daily_CIL_Crane_Number} type="text" id="Daily_CIL_Crane_Number" name="Daily_CIL_Crane_Number" />
                                    </div>
                                </td>
                                <td>
                                    <div class="textbox-container">
                                        <label for="Daily_CIL_date">Date:</label>
                                        <input value={listOfDailyCheckList.Daily_CIL_date} type="date" id="Daily_CIL_date" name="Daily_CIL_date" />
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
                                <td><input value={listOfDailyCheckList.Crane_Control_Panel_Result} type="text" name="Crane_Control_Panel_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Control_Panel_Action} type="text" name="Crane_Control_Panel_Action" /></td>
                            </tr>
                            <tr>
                                <td>Stationary Operation Tower</td>
                                <td>Check for cleanliness, damage or deformation, alignment</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Stationary_Operation_Tower_Result} type="text" name="Crane_Stationary_Operation_Tower_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Stationary_Operation_Tower_Action} type="text" name="Crane_Stationary_Operation_Tower_Action" /></td>
                            </tr>
                            <tr>
                                <td>Remote Controller</td>
                                <td>Check remote and cable for damages</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Remote_Controller_Result} type="text" name="Crane_Remote_Controller_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Remote_Controller_Action} type="text" name="Crane_Remote_Controller_Action" /></td>
                            </tr>
                            <tr>
                                <td>Guard fence</td>
                                <td>Check for cleanliness, damage or deformation</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Guard_fence_Result} type="text" name="Crane_Guard_fence_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Guard_fence_Action} type="text" name="Crane_Guard_fence_Action" /></td>
                            </tr>
                            <tr>
                                <td>Travel Mechanisms</td>
                                <td>Check for cleanliness, damage, motor and wheel rotating abnormal sound</td>
                                <td>V, T, S</td>
                                <td><input value={listOfDailyCheckList.Crane_Travel_Mechanisms_Result} type="text" name="Crane_Travel_Mechanisms_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Travel_Mechanisms_Action} type="text" name="Crane_Travel_Mechanisms_Action" /></td>
                            </tr>
                            <tr>
                                <td>Hoisting Mechanisms</td>
                                <td>Check for cleanliness, damage cable, chain tension, lubrication, motor abnormal sound</td>
                                <td>V, T, S</td>
                                <td><input value={listOfDailyCheckList.Crane_Hoisting_Mechanisms_Result} type="text" name="Crane_Hoisting_Mechanisms_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Hoisting_Mechanisms_Action} type="text" name="Crane_Hoisting_Mechanisms_Action" /></td>
                            </tr>
                            <tr>
                                <td>Fork Mechanisms</td>
                                <td>Check for cleanliness, damage, chain tension &amp; lubrication, table fork and anti-slip surface, motor for abnormal sound</td>
                                <td>V, T, S</td>
                                <td><input value={listOfDailyCheckList.Crane_Fork_Mechanisms_Result} type="text" name="Crane_Fork_Mechanisms_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Fork_Mechanisms_Action} type="text" name="Crane_Fork_Mechanisms_Action" /></td>
                            </tr>
                            <tr>
                                <td>Wire Rope</td>
                                <td>Check for damage, tension, and lubrication</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Wire_Rope_Result} type="text" name="Crane_Wire_Rope_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Wire_Rope_Action} type="text" name="Crane_Wire_Rope_Action" /></td>
                            </tr>
                            <tr>
                                <td>Optical Transmitter</td>
                                <td>Check for accumulation of dust and LED light condition</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Optical_Transmitter_Result} type="text" name="Crane_Optical_Transmitter_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Optical_Transmitter_Action} type="text" name="Crane_Optical_Transmitter_Action" /></td>
                            </tr>
                            <tr>
                                <td>Load profile</td>
                                <td>Check cable alignment and tension</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Load_profile_Result} type="text" name="Crane_Load_profile_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Load_profile_Action} type="text" name="Crane_Load_profile_Action" /></td>
                            </tr>
                            <tr>
                                <td>Upper rail</td>
                                <td>Check alignment of upper rail</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Upper_rail_Result} type="text" name="Crane_Upper_rail_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Upper_rail_Action} type="text" name="Crane_Upper_rail_Action" /></td>
                            </tr>
                            <tr>
                                <td>Lower rail</td>
                                <td>Check alignment of lower rail and check for bolt tightness</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Lower_rail_Result} type="text" name="Crane_Lower_rail_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Lower_rail_Action} type="text" name="Crane_Lower_rail_Action" /></td>
                            </tr>
                            <tr>
                                <td>Rack aisle</td>
                                <td>Check for cleanliness of rack aisle areas (No fallen stocks, and waste)</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Rack_aisle_Result} type="text" name="Crane_Rack_aisle_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Rack_aisle_Action} type="text" name="Crane_Rack_aisle_Action" /></td>
                            </tr>
                            <tr>
                                <td>Rack</td>
                                <td>Check for damage misaligned rack</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Crane_Rack_Result} type="text" name="Crane_Rack_Result" /></td>
                                <td><input value={listOfDailyCheckList.Crane_Rack_Action} type="text" name="Crane_Rack_Action" /></td>
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
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Frame_Result} type="text" name="F1_Conveyor_Frame_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Frame_Action} type="text" name="F1_Conveyor_Frame_Action" /></td>
                            </tr>
                            <tr>
                                <td>Chain</td>
                                <td>Check chain tension and lubrication</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Chain_Result} type="text" name="F1_Conveyor_Chain_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Chain_Action} type="text" name="F1_Conveyor_Chain_Action" /></td>
                            </tr>
                            <tr>
                                <td>Motors</td>
                                <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                                <td>V, T, S</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Motors_Result} type="text" name="F1_Conveyor_Motors_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Motors_Action} type="text" name="F1_Conveyor_Motors_Action" /></td>
                            </tr>
                            <tr>
                                <td>Limit Switches</td>
                                <td>Check for cleanliness, damage, and misalignment</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Limit_Switches_Result} type="text" name="F1_Conveyor_Limit_Switches_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Limit_Switches_Action} type="text" name="F1_Conveyor_Limit_Switches_Action" /></td>
                            </tr>
                            <tr>
                                <td>Photo Sensors</td>
                                <td>Check for cleanliness, damage, and misalignment</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Photo_Sensors_Result} type="text" name="F1_Conveyor_Photo_Sensors_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Photo_Sensors_Action} type="text" name="F1_Conveyor_Photo_Sensors_Action" /></td>
                            </tr>
                            <tr>
                                <td>Terminal Box</td>
                                <td>Check for cleanliness, damage or deformation, check cover</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Terminal_Box_Result} type="text" name="F1_Conveyor_Terminal_Box_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Terminal_Box_Action} type="text" name="F1_Conveyor_Terminal_Box_Action" /></td>
                            </tr>
                            <tr>
                                <td>Cable Tray</td>
                                <td>Check for cleanliness, damage or deformation, check cover</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Cable_Tray_Result} type="text" name="F1_Conveyor_Cable_Tray_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Cable_Tray_Action} type="text" name="F1_Conveyor_Cable_Tray_Action" /></td>
                            </tr>
                            <tr>
                                <td>Wiring and Cable</td>
                                <td>Check for damaged wires and harnessing</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Wiring_and_Cable_Result} type="text" name="F1_Conveyor_Wiring_and_Cable_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Wiring_and_Cable_Action} type="text" name="F1_Conveyor_Wiring_and_Cable_Action" /></td>
                            </tr>
                            <tr>
                                <td>Floor</td>
                                <td>Check for cleanliness</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Floor_Result} type="text" name="F1_Conveyor_Floor_Result" /></td>
                                <td><input value={listOfDailyCheckList.F1_Conveyor_Floor_Action} type="text" name="F1_Conveyor_Floor_Action" /></td>
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
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Frame_Result} type="text" name="F2_Conveyor_Frame_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Frame_Action} type="text" name="F2_Conveyor_Frame_Action" /></td>
                            </tr>
                            <tr>
                                <td>Chain</td>
                                <td>Check chain tension and lubrication</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Chain_Result} type="text" name="F2_Conveyor_Chain_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Chain_Action} type="text" name="F2_Conveyor_Chain_Action" /></td>
                            </tr>
                            <tr>
                                <td>Motors</td>
                                <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                                <td>V, T, S</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Motors_Result} type="text" name="F2_Conveyor_Motors_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Motors_Action} type="text" name="F2_Conveyor_Motors_Action" /></td>
                            </tr>
                            <tr>
                                <td>Limit Switches</td>
                                <td>Check for cleanliness, damage, and misalignment</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Limit_Switches_Result} type="text" name="F2_Conveyor_Limit_Switches_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Limit_Switches_Action} type="text" name="F2_Conveyor_Limit_Switches_Action" /></td>
                            </tr>
                            <tr>
                                <td>Photo Sensors</td>
                                <td>Check for cleanliness, damage, and misalignment</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Photo_Sensors_Result} type="text" name="F2_Conveyor_Photo_Sensors_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Photo_Sensors_Action} type="text" name="F2_Conveyor_Photo_Sensors_Action" /></td>
                            </tr>
                            <tr>
                                <td>Terminal Box</td>
                                <td>Check for cleanliness, damage or deformation, check cover</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Terminal_Box_Result} type="text" name="F2_Conveyor_Terminal_Box_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Terminal_Box_Action} type="text" name="F2_Conveyor_Terminal_Box_Action" /></td>
                            </tr>
                            <tr>
                                <td>Cable Tray</td>
                                <td>Check for cleanliness, damage or deformation, check cover</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Cable_Tray_Result} type="text" name="F2_Conveyor_Cable_Tray_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Cable_Tray_Action} type="text" name="F2_Conveyor_Cable_Tray_Action" /></td>
                            </tr>
                            <tr>
                                <td>Wiring and Cable</td>
                                <td>Check for damaged wires and harnessing</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Wiring_and_Cable_Result} type="text" name="F2_Conveyor_Wiring_and_Cable_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Wiring_and_Cable_Action} type="text" name="F2_Conveyor_Wiring_and_Cable_Action" /></td>
                            </tr>
                            <tr>
                                <td>Floor</td>
                                <td>Check for cleanliness</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Floor_Result} type="text" name="F2_Conveyor_Floor_Result" /></td>
                                <td><input value={listOfDailyCheckList.F2_Conveyor_Floor_Action} type="text" name="F2_Conveyor_Floor_Action" /></td>
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
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Frame_Result} type="text" name="Anti_Home_Conveyor_Frame_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Frame_Action} type="text" name="Anti_Home_Conveyor_Frame_Action" /></td>
                            </tr>
                            <tr>
                                <td>Chain</td>
                                <td>Check chain tension and lubrication</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Chain_Result} type="text" name="Anti_Home_Conveyor_Chain_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Chain_Action} type="text" name="Anti_Home_Conveyor_Chain_Action" /></td>
                            </tr>
                            <tr>
                                <td>Motors</td>
                                <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
                                <td>V, T, S</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Motors_Result} type="text" name="Anti_Home_Conveyor_Motors_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Motors_Action} type="text" name="Anti_Home_Conveyor_Motors_Action" /></td>
                            </tr>
                            <tr>
                                <td>Limit Switches</td>
                                <td>Check for cleanliness, damage, and misalignment</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Limit_Switches_Result} type="text" name="Anti_Home_Conveyor_Limit_Switches_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Limit_Switches_Action} type="text" name="Anti_Home_Conveyor_Limit_Switches_Action" /></td>
                            </tr>
                            <tr>
                                <td>Photo Sensors</td>
                                <td>Check for cleanliness, damage, and misalignment</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Photo_Sensors_Result} type="text" name="Anti_Home_Conveyor_Photo_Sensors_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Photo_Sensors_Action} type="text" name="Anti_Home_Conveyor_Photo_Sensors_Action" /></td>
                            </tr>
                            <tr>
                                <td>Terminal Box</td>
                                <td>Check for cleanliness, damage or deformation, check cover</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Terminal_Box_Result} type="text" name="Anti_Home_Conveyor_Terminal_Box_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Terminal_Box_Action} type="text" name="Anti_Home_Conveyor_Terminal_Box_Action" /></td>
                            </tr>
                            <tr>
                                <td>Cable Tray</td>
                                <td>Check for cleanliness, damage or deformation, check cover</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Cable_Tray_Result} type="text" name="Anti_Home_Conveyor_Cable_Tray_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Cable_Tray_Action} type="text" name="Anti_Home_Conveyor_Cable_Tray_Action" /></td>
                            </tr>
                            <tr>
                                <td>Wiring and Cable</td>
                                <td>Check for damaged wires and harnessing</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Wiring_and_Cable_Result} type="text" name="Anti_Home_Conveyor_Wiring_and_Cable_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Wiring_and_Cable_Action} type="text" name="Anti_Home_Conveyor_Wiring_and_Cable_Action" /></td>
                            </tr>
                            <tr>
                                <td>Floor</td>
                                <td>Check for cleanliness</td>
                                <td>V, T</td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Floor_Result} type="text" name="Anti_Home_Conveyor_Floor_Result" /></td>
                                <td><input value={listOfDailyCheckList.Anti_Home_Conveyor_Floor_Action} type="text" name="Anti_Home_Conveyor_Floor_Action" /></td>
                            </tr>
                        </tbody></table>


                    <div class="textbox-container">
                        <h2>Remarks:</h2>
                    </div>


                    <table>

                        <tbody><tr>
                            <td colspan="2">
                                <textarea value={listOfDailyCheckList.DAILY_CIL_REMARKS} className='border-black border w-[100%]' id="DAILY_CIL_REMARKS" name="DAILY_CIL_REMARKS" rows="6" cols="50"></textarea>
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
                                        <input value={listOfDailyCheckList.Daily_CIL_Verified_by_MNC} type="text" id="Daily_CIL_Verified_by_MNC" name="Daily_CIL_Verified_by_MNC" />
                                    </div>
                                </td>

                            </tr>

                        </tbody></table>
                </div>


            </form>


        </div>
    )
}

export default DailyCILRead