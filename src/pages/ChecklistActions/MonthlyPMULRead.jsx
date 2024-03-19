import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { useReactToPrint } from 'react-to-print'
import axios from 'axios';
import ulimage from '../../assets/images/UL.jpg'
function MonthlyPMULRead() {

    let navigate = useNavigate();
    const { currentColor, activeMenu, setActiveMenu } = useStateContext();
    const [listOfCraneULCheckList, setListOfCraneULCheckList] = useState([]);
    let { id } = useParams();
    const componentPdf = useRef();


    useEffect(() => {
        axios.get(`https://maintaimdb-044f7fcd2d92.herokuapp.com/ulchecklist/byId/${id}`).then((response) => {
            setListOfCraneULCheckList(response.data)
            console.log(response.data)
        });
    }, []);

    const generatePDF = useReactToPrint({
        content: () => componentPdf.current,
        documentTitle: `Monthly PM Crane 13`,
        onAfterPrint: () => alert("Data saved in PDF")
    });

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
            <div className='flex justify-end mt-20 mr-4 md:mt-10'>
            {(authState.role === "Admin" || authState.role === "Manager") && (
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
            )}
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

            <form id="checklistForm"  className='bg-[#f3f5f5]'>
                <div ref={componentPdf} style={{ width: '100%' }}>
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
                                    <input
                                        onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, ul_crane_inspected_by: e.target.value })}
                                        value={listOfCraneULCheckList.ul_crane_inspected_by} type="text" id="ul_crane_inspected_by" name="ul_crane_inspected_by" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_approved_by">Approved by (Supervisor):</label>
                                    <input
                                        onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, ul_crane_approved_by: e.target.value })}
                                        value={listOfCraneULCheckList.ul_crane_approved_by} type="text" id="ul_crane_approved_by" name="ul_crane_approved_by" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_no">Crane Number:</label>
                                    <input type="text" id="ul_crane_no" name="ul_crane_no" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_date">Date:</label>
                                    <input
                                        onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, ul_crane_date: e.target.value })}
                                        value={listOfCraneULCheckList.ul_crane_date} type="date" id="ul_crane_date" name="ul_crane_date" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_time_start">Time Start:</label>
                                    <input
                                        onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, ul_crane_time_start: e.target.value })}
                                        value={listOfCraneULCheckList.ul_crane_time_start} type="time" id="ul_crane_time_start" name="ul_crane_time_start" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="ul_crane_time_end">Time End:</label>
                                    <input
                                        onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, ul_crane_time_end: e.target.value })}
                                        value={listOfCraneULCheckList.ul_crane_time_end} type="time" id="ul_crane_time_end" name="ul_crane_time_end" />
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_Before_Crane_motor_Result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_Before_Crane_motor_Result} type="text" name="Crane_Drive_Unit_Before_Crane_motor_Result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_Before_Crane_motor_Actions: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_Before_Crane_motor_Actions} type="text" name="Crane_Drive_Unit_Before_Crane_motor_Actions" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_Before_Crane_motor_Remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_Before_Crane_motor_Remarks} type="text" name="Crane_Drive_Unit_Before_Crane_motor_Remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_cracks_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_cracks_result} type="text" name="Crane_Drive_Unit_before_reducer_cracks_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_cracks_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_cracks_action} type="text" name="Crane_Drive_Unit_before_reducer_cracks_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_cracks_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_cracks_remarks} type="text" name="Crane_Drive_Unit_before_reducer_cracks_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease leaking</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_leaking_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_leaking_result} type="text" name="Crane_Drive_Unit_before_reducer_leaking_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_leaking_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_leaking_action} type="text" name="Crane_Drive_Unit_before_reducer_leaking_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_leaking_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_leaking_remarks} type="text" name="Crane_Drive_Unit_before_reducer_leaking_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease quantity/level</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_level_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_level_result} type="text" name="Crane_Drive_Unit_before_reducer_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_level_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_level_action} type="text" name="Crane_Drive_Unit_before_reducer_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_reducer_level_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_reducer_level_remarks} type="text" name="Crane_Drive_Unit_before_reducer_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Brake gap</td>
                            <td>Check clearance. (KB=0.3 - 0.8) (XB-4=0.25 - 0.6) mm</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_break_gap_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_break_gap_result} type="text" name="Crane_Drive_Unit_before_break_gap_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_break_gap_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_break_gap_remarks} type="text" name="Crane_Drive_Unit_before_break_gap_remarks" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_break_gap_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_break_gap_action} type="text" name="Crane_Drive_Unit_before_break_gap_action" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Traveling guide roller</td>
                            <td>Check for diameter. (over 98mm)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_guide_roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_guide_roller_result} type="text" name="Crane_Drive_Unit_before_guide_roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_guide_roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_guide_roller_action} type="text" name="Crane_Drive_Unit_before_guide_roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_guide_roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_guide_roller_remarks} type="text" name="Crane_Drive_Unit_before_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Crane wheels</td>
                            <td>Check for diameter (limit 196mm)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_crane_wheels_diameter_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_crane_wheels_diameter_result} type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_crane_wheels_diameter_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_crane_wheels_diameter_action} type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_crane_wheels_diameter_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_crane_wheels_diameter_remarks} type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if there is any damage or deformation to the crane wheels</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_crane_wheels_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_crane_wheels_damage_result} type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_crane_wheels_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_crane_wheels_damage_action} type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_before_crane_wheels_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_before_crane_wheels_damage_remarks} type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Crane Motor</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_crane_motor_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_crane_motor_result} type="text" name="Crane_Drive_Unit_during_crane_motor_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_crane_motor_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_crane_motor_action} type="text" name="Crane_Drive_Unit_during_crane_motor_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_crane_motor_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_crane_motor_remarks} type="text" name="Crane_Drive_Unit_during_crane_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_speed_reducer_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_speed_reducer_result} type="text" name="Crane_Drive_Unit_during_speed_reducer_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_speed_reducer_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_speed_reducer_action} type="text" name="Crane_Drive_Unit_during_speed_reducer_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_speed_reducer_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_speed_reducer_remarks} type="text" name="Crane_Drive_Unit_during_speed_reducer_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Traveling guide roller</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_guide_Roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_guide_Roller_result} type="text" name="Crane_Drive_Unit_during_guide_Roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_guide_Roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_guide_Roller_action} type="text" name="Crane_Drive_Unit_during_guide_Roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_during_guide_Roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_during_guide_Roller_remarks} type="text" name="Crane_Drive_Unit_during_guide_Roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Crane Motor</td>
                            <td>Check for overheating</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_crane_motor_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_crane_motor_result} type="text" name="Crane_Drive_Unit_after_crane_motor_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_crane_motor_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_crane_motor_action} type="text" name="Crane_Drive_Unit_after_crane_motor_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_crane_motor_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_crane_motor_remarks} type="text" name="Crane_Drive_Unit_after_crane_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for overheating</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_speed_reducer_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_speed_reducer_result} type="text" name="Crane_Drive_Unit_after_speed_reducer_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_speed_reducer_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_speed_reducer_action} type="text" name="Crane_Drive_Unit_after_speed_reducer_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_speed_reducer_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_speed_reducer_remarks} type="text" name="Crane_Drive_Unit_after_speed_reducer_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_screws_result} type="text" name="Crane_Drive_Unit_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_screws_action} type="text" name="Crane_Drive_Unit_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Drive_Unit_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Drive_Unit_after_screws_remarks} type="text" name="Crane_Drive_Unit_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_carriage_motor_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_carriage_motor_result} type="text" name="Carriage_Drive_Unit_before_carriage_motor_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_carriage_motor_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_carriage_motor_action} type="text" name="Carriage_Drive_Unit_before_carriage_motor_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_carriage_motor_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_carriage_motor_remarks} type="text" name="Carriage_Drive_Unit_before_carriage_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Speed reducer</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_cracks_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_cracks_result} type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_cracks_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_cracks_action} type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_cracks_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_cracks_remarks} type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease leaking</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_leaking_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_leaking_result} type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_leaking_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_leaking_action} type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_leaking_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_leaking_remarks} type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for grease qty</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_grease_qty_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_grease_qty_result} type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_grease_qty_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_grease_qty_action} type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_speed_reducer_grease_qty_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_speed_reducer_grease_qty_remarks} type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Brake gap</td>
                            <td>Check clearance. (within 0.4 - 0.5mm)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_break_gap_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_break_gap_result} type="text" name="Carriage_Drive_Unit_before_break_gap_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_break_gap_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_break_gap_action} type="text" name="Carriage_Drive_Unit_before_break_gap_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_break_gap_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_break_gap_remarks} type="text" name="Carriage_Drive_Unit_before_break_gap_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire rope</td>
                            <td>Check damage, abrasion, rust and worn out</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_damage_result} type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_damage_action} type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_damage_remarks} type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for proper installation on drum groove</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_installation_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_installation_result} type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_installation_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_installation_action} type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_installation_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_installation_remarks} type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_lubrication_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_lubrication_result} type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_lubrication_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_lubrication_action} type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_lubrication_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_lubrication_remarks} type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for extra rope held on drum at least 2 times</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_extra_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_extra_result} type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_extra_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_extra_action} type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wire_rope_extra_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wire_rope_extra_remarks} type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wiring drum</td>
                            <td>Check for damage and abrasion</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wiring_drum_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wiring_drum_result} type="text" name="Carriage_Drive_Unit_before_wiring_drum_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wiring_drum_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wiring_drum_action} type="text" name="Carriage_Drive_Unit_before_wiring_drum_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_wiring_drum_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_wiring_drum_remarks} type="text" name="Carriage_Drive_Unit_before_wiring_drum_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Carriage encoder</td>
                            <td>Check for Installation</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_carriage_encoder_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_carriage_encoder_result} type="text" name="Carriage_Drive_Unit_before_carriage_encoder_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_carriage_encoder_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_carriage_encoder_action} type="text" name="Carriage_Drive_Unit_before_carriage_encoder_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_before_carriage_encoder_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_before_carriage_encoder_remarks} type="text" name="Carriage_Drive_Unit_before_carriage_encoder_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Motor & drum</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_motor_drum_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_motor_drum_result} type="text" name="Carriage_Drive_Unit_during_motor_drum_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_motor_drum_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_motor_drum_action} type="text" name="Carriage_Drive_Unit_during_motor_drum_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_motor_drum_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_motor_drum_remarks} type="text" name="Carriage_Drive_Unit_during_motor_drum_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wiring drum</td>
                            <td>Check for horizontal vibration</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_wiring_drum_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_wiring_drum_result} type="text" name="Carriage_Drive_Unit_during_wiring_drum_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_wiring_drum_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_wiring_drum_action} type="text" name="Carriage_Drive_Unit_during_wiring_drum_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_wiring_drum_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_wiring_drum_remarks} type="text" name="Carriage_Drive_Unit_during_wiring_drum_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire rope</td>
                            <td>Check if rope is winded smoothly</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_wire_rope_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_wire_rope_result} type="text" name="Carriage_Drive_Unit_during_wire_rope_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_wire_rope_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_wire_rope_action} type="text" name="Carriage_Drive_Unit_during_wire_rope_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_during_wire_rope_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_during_wire_rope_remarks} type="text" name="Carriage_Drive_Unit_during_wire_rope_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Carriage motor</td>
                            <td>Check for overheating</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_after_carriage_motor_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_after_carriage_motor_result} type="text" name="Carriage_Drive_Unit_after_carriage_motor_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_after_carriage_motor_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_after_carriage_motor_action} type="text" name="Carriage_Drive_Unit_after_carriage_motor_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_after_carriage_motor_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_after_carriage_motor_remarks} type="text" name="Carriage_Drive_Unit_after_carriage_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_after_screws_result} type="text" name="Carriage_Drive_Unit_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_after_screws_action} type="text" name="Carriage_Drive_Unit_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Drive_Unit_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Drive_Unit_after_screws_remarks} type="text" name="Carriage_Drive_Unit_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_Carriage_frame_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_Carriage_frame_result} type="text" name="Hoisting_Carriage_before_Carriage_frame_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_Carriage_frame_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_Carriage_frame_action} type="text" name="Hoisting_Carriage_before_Carriage_frame_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_Carriage_frame_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_Carriage_frame_remarks} type="text" name="Hoisting_Carriage_before_Carriage_frame_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire rope</td>
                            <td>Check for damage, abrasion and rust</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_rope_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_rope_damage_result} type="text" name="Hoisting_Carriage_before_wire_rope_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_rope_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_rope_damage_action} type="text" name="Hoisting_Carriage_before_wire_rope_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_rope_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_rope_damage_remarks} type="text" name="Hoisting_Carriage_before_wire_rope_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_rope_lubrication_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_rope_lubrication_result} type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_rope_lubrication_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_rope_lubrication_action} type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_rope_lubrication_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_rope_lubrication_remarks} type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Hoisting guide roller</td>
                            <td>Check diameter. (over 119mm)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_guide_roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_guide_roller_result} type="text" name="Hoisting_Carriage_before_guide_roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_guide_roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_guide_roller_action} type="text" name="Hoisting_Carriage_before_guide_roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_guide_roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_guide_roller_remarks} type="text" name="Hoisting_Carriage_before_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Hoisting face roller</td>
                            <td>Check diameter. (over 59mm)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_face_roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_face_roller_result} type="text" name="Hoisting_Carriage_before_face_roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_face_roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_face_roller_action} type="text" name="Hoisting_Carriage_before_face_roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_face_roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_face_roller_remarks} type="text" name="Hoisting_Carriage_before_face_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load displacement detection wire</td>
                            <td>Check function</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_displacement_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_displacement_result} type="text" name="Hoisting_Carriage_before_displacement_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_displacement_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_displacement_action} type="text" name="Hoisting_Carriage_before_displacement_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_displacement_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_displacement_remarks} type="text" name="Hoisting_Carriage_before_displacement_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Count plate</td>
                            <td>Check for deformation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_count_plate_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_count_plate_result} type="text" name="Hoisting_Carriage_before_count_plate_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_count_plate_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_count_plate_action} type="text" name="Hoisting_Carriage_before_count_plate_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_count_plate_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_count_plate_remarks} type="text" name="Hoisting_Carriage_before_count_plate_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dog on dec. sensor</td>
                            <td>Check for deformation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_dog_on_dec_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_dog_on_dec_result} type="text" name="Hoisting_Carriage_before_dog_on_dec_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_dog_on_dec_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_dog_on_dec_action} type="text" name="Hoisting_Carriage_before_dog_on_dec_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_dog_on_dec_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_dog_on_dec_remarks} type="text" name="Hoisting_Carriage_before_dog_on_dec_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dog on Emg. Stop sensor</td>
                            <td>Check for deformation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_dog_on_Emg_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_dog_on_Emg_result} type="text" name="Hoisting_Carriage_before_dog_on_Emg_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_dog_on_Emg_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_dog_on_Emg_action} type="text" name="Hoisting_Carriage_before_dog_on_Emg_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_dog_on_Emg_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_dog_on_Emg_remarks} type="text" name="Hoisting_Carriage_before_dog_on_Emg_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Carriage positioning sensor</td>
                            <td>Check for damage and rust accumulation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_positioning_sensor_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_positioning_sensor_damage_result} type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_positioning_sensor_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_positioning_sensor_damage_action} type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_positioning_sensor_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_positioning_sensor_damage_remarks} type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if lamp comes on</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_positioning_sensor_lamp_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_positioning_sensor_lamp_result} type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_positioning_sensor_lamp_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_positioning_sensor_lamp_action} type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_positioning_sensor_lamp_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_positioning_sensor_lamp_remarks} type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load detector</td>
                            <td>Check if lamp comes on</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_load_detector_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_load_detector_result} type="text" name="Hoisting_Carriage_before_load_detector_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_load_detector_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_load_detector_action} type="text" name="Hoisting_Carriage_before_load_detector_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_load_detector_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_load_detector_remarks} type="text" name="Hoisting_Carriage_before_load_detector_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Emergency stop sensor</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_emergency_looseness_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_emergency_looseness_result} type="text" name="Hoisting_Carriage_before_emergency_looseness_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_emergency_looseness_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_emergency_looseness_action} type="text" name="Hoisting_Carriage_before_emergency_looseness_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_emergency_looseness_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_emergency_looseness_remarks} type="text" name="Hoisting_Carriage_before_emergency_looseness_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for function</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_emergency_function_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_emergency_function_result} type="text" name="Hoisting_Carriage_before_emergency_function_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_emergency_function_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_emergency_function_action} type="text" name="Hoisting_Carriage_before_emergency_function_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_emergency_function_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_emergency_function_remarks} type="text" name="Hoisting_Carriage_before_emergency_function_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Limit switch for detecting wire tension</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_limit_switch_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_limit_switch_result} type="text" name="Hoisting_Carriage_before_limit_switch_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_limit_switch_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_limit_switch_action} type="text" name="Hoisting_Carriage_before_limit_switch_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_limit_switch_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_limit_switch_remarks} type="text" name="Hoisting_Carriage_before_limit_switch_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wire clip</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_clip_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_clip_result} type="text" name="Hoisting_Carriage_before_wire_clip_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_clip_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_clip_action} type="text" name="Hoisting_Carriage_before_wire_clip_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_before_wire_clip_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_before_wire_clip_remarks} type="text" name="Hoisting_Carriage_before_wire_clip_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Hoisting guide roller</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_during_guide_roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_during_guide_roller_result} type="text" name="Hoisting_Carriage_during_guide_roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_during_guide_roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_during_guide_roller_action} type="text" name="Hoisting_Carriage_during_guide_roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_during_guide_roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_during_guide_roller_remarks} type="text" name="Hoisting_Carriage_during_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load displacement detection wire</td>
                            <td>Check if error occurs correctly</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_during_displacement_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_during_displacement_result} type="text" name="Hoisting_Carriage_during_displacement_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_during_displacement_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_during_displacement_action} type="text" name="Hoisting_Carriage_during_displacement_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_during_displacement_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_during_displacement_remarks} type="text" name="Hoisting_Carriage_during_displacement_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_after_screws_result} type="text" name="Hoisting_Carriage_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_after_screws_action} type="text" name="Hoisting_Carriage_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Hoisting_Carriage_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Hoisting_Carriage_after_screws_remarks} type="text" name="Hoisting_Carriage_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_result} type="text" name="Slide_Fork_before_fork_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_action} type="text" name="Slide_Fork_before_fork_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_remarks} type="text" name="Slide_Fork_before_fork_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Pre-occupied load detector</td>
                            <td>Check for damage and dust accumulation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_load_detector_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_load_detector_result} type="text" name="Slide_Fork_before_load_detector_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_load_detector_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_load_detector_action} type="text" name="Slide_Fork_before_load_detector_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_load_detector_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_load_detector_remarks} type="text" name="Slide_Fork_before_load_detector_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork drive chain</td>
                            <td>Check for damage abrasion or rust</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_damage_result} type="text" name="Slide_Fork_before_drive_chain_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_damage_action} type="text" name="Slide_Fork_before_drive_chain_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_damage_remarks} type="text" name="Slide_Fork_before_drive_chain_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for chain slack. (within 5mm)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_slack_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_slack_result} type="text" name="Slide_Fork_before_drive_chain_slack_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_slack_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_slack_action} type="text" name="Slide_Fork_before_drive_chain_slack_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_slack_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_slack_remarks} type="text" name="Slide_Fork_before_drive_chain_slack_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_lubrication_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_lubrication_result} type="text" name="Slide_Fork_before_drive_chain_lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_lubrication_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_lubrication_action} type="text" name="Slide_Fork_before_drive_chain_lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_lubrication_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_lubrication_remarks} type="text" name="Slide_Fork_before_drive_chain_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check Elongation</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_elongation_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_elongation_result} type="text" name="Slide_Fork_before_drive_chain_elongation_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_elongation_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_elongation_action} type="text" name="Slide_Fork_before_drive_chain_elongation_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_drive_chain_elongation_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_drive_chain_elongation_remarks} type="text" name="Slide_Fork_before_drive_chain_elongation_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Cam follower</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_damage_result} type="text" name="Slide_Fork_before_cam_follower_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_damage_action} type="text" name="Slide_Fork_before_cam_follower_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_damage_remarks} type="text" name="Slide_Fork_before_cam_follower_damage_remarks" /></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for lubrication</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_lubrication_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_lubrication_result} type="text" name="Slide_Fork_before_cam_follower_lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_lubrication_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_lubrication_action} type="text" name="Slide_Fork_before_cam_follower_lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_lubrication_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_lubrication_remarks} type="text" name="Slide_Fork_before_cam_follower_lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check it it rotates smoothly</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_rotates_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_rotates_result} type="text" name="Slide_Fork_before_cam_follower_rotates_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_rotates_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_rotates_action} type="text" name="Slide_Fork_before_cam_follower_rotates_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_cam_follower_rotates_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_cam_follower_rotates_remarks} type="text" name="Slide_Fork_before_cam_follower_rotates_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Limit SW for detecting side end and range</td>
                            <td>Check for looseness</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_limit_sw_looseness_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_limit_sw_looseness_result} type="text" name="Slide_Fork_before_limit_sw_looseness_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_limit_sw_looseness_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_limit_sw_looseness_action} type="text" name="Slide_Fork_before_limit_sw_looseness_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_limit_sw_looseness_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_limit_sw_looseness_remarks} type="text" name="Slide_Fork_before_limit_sw_looseness_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for function</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_limit_sw_function_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_limit_sw_function_result} type="text" name="Slide_Fork_before_limit_sw_function_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_limit_sw_function_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_limit_sw_function_action} type="text" name="Slide_Fork_before_limit_sw_function_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_limit_sw_function_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_limit_sw_function_remarks} type="text" name="Slide_Fork_before_limit_sw_function_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Sprocket</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_sprocket_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_sprocket_result} type="text" name="Slide_Fork_before_sprocket_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_sprocket_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_sprocket_action} type="text" name="Slide_Fork_before_sprocket_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_sprocket_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_sprocket_remarks} type="text" name="Slide_Fork_before_sprocket_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork motor</td>
                            <td>Check for cracks</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_motor_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_motor_result} type="text" name="Slide_Fork_before_fork_motor_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_motor_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_motor_action} type="text" name="Slide_Fork_before_fork_motor_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_motor_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_motor_remarks} type="text" name="Slide_Fork_before_fork_motor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Brake gap</td>
                            <td>Check clearance. (FB05=0.2-0.5) (FBIA=0.15-0.5)mm</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_break_gap_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_break_gap_result} type="text" name="Slide_Fork_before_break_gap_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_break_gap_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_break_gap_action} type="text" name="Slide_Fork_before_break_gap_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_break_gap_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_break_gap_remarks} type="text" name="Slide_Fork_before_break_gap_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Torque limitter</td>
                            <td>Check for damage cracks</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_torque_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_torque_damage_result} type="text" name="Slide_Fork_before_torque_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_torque_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_torque_damage_action} type="text" name="Slide_Fork_before_torque_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_torque_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_torque_damage_remarks} type="text" name="Slide_Fork_before_torque_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for set value. (within 235N-m)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_torque_set_value_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_torque_set_value_result} type="text" name="Slide_Fork_before_torque_set_value_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_torque_set_value_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_torque_set_value_action} type="text" name="Slide_Fork_before_torque_set_value_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_torque_set_value_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_torque_set_value_remarks} type="text" name="Slide_Fork_before_torque_set_value_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork</td>
                            <td>Extract the fork with load to empty cell. Check  if there is proper clearance of 15mm between fork end and the cell</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_extract_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_extract_result} type="text" name="Slide_Fork_before_fork_extract_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_extract_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_extract_action} type="text" name="Slide_Fork_before_fork_extract_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_before_fork_extract_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_before_fork_extract_remarks} type="text" name="Slide_Fork_before_fork_extract_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Fork</td>
                            <td>Check for abnormal sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_fork_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_fork_result} type="text" name="Slide_Fork_during_fork_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_fork_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_fork_action} type="text" name="Slide_Fork_during_fork_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_fork_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_fork_remarks} type="text" name="Slide_Fork_during_fork_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Sprocket</td>
                            <td>Check for horizontal vibration</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_sprocket_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_sprocket_result} type="text" name="Slide_Fork_during_sprocket_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_sprocket_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_sprocket_action} type="text" name="Slide_Fork_during_sprocket_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_sprocket_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_sprocket_remarks} type="text" name="Slide_Fork_during_sprocket_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Pre-occupied load detector</td>
                            <td>Check if it detects the load correctly</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_load_detector_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_load_detector_result} type="text" name="Slide_Fork_during_load_detector_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_load_detector_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_load_detector_action} type="text" name="Slide_Fork_during_load_detector_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_during_load_detector_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_during_load_detector_remarks} type="text" name="Slide_Fork_during_load_detector_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_after_screws_result} type="text" name="Slide_Fork_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_after_screws_action} type="text" name="Slide_Fork_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Slide_Fork_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Slide_Fork_after_screws_remarks} type="text" name="Slide_Fork_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_guide_roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_guide_roller_result} type="text" name="Frames_before_guide_roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_guide_roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_guide_roller_action} type="text" name="Frames_before_guide_roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_guide_roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_guide_roller_remarks} type="text" name="Frames_before_guide_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upper sheave</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_upper_sheave_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_upper_sheave_result} type="text" name="Frames_before_upper_sheave_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_upper_sheave_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_upper_sheave_action} type="text" name="Frames_before_upper_sheave_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_upper_sheave_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_upper_sheave_remarks} type="text" name="Frames_before_upper_sheave_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Power feed rail</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_feed_rail_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_feed_rail_result} type="text" name="Frames_before_feed_rail_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_feed_rail_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_feed_rail_action} type="text" name="Frames_before_feed_rail_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_feed_rail_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_feed_rail_remarks} type="text" name="Frames_before_feed_rail_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Current collector</td>
                            <td>Check for damage or abrasion</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_collector_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_collector_result} type="text" name="Frames_before_collector_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_collector_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_collector_action} type="text" name="Frames_before_collector_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_collector_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_collector_remarks} type="text" name="Frames_before_collector_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upper frame</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_upper_frame_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_upper_frame_result} type="text" name="Frames_before_upper_frame_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_upper_frame_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_upper_frame_action} type="text" name="Frames_before_upper_frame_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_upper_frame_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_upper_frame_remarks} type="text" name="Frames_before_upper_frame_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Lower frame</td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_lower_frame_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_lower_frame_result} type="text" name="Frames_before_lower_frame_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_lower_frame_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_lower_frame_action} type="text" name="Frames_before_lower_frame_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_before_lower_frame_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_before_lower_frame_remarks} type="text" name="Frames_before_lower_frame_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Upper guide roller</td>
                            <td>Check for abnormal sound</td>
                            <td>sound</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_during_upper_guide_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_during_upper_guide_result} type="text" name="Frames_during_upper_guide_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_during_upper_guide_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_during_upper_guide_action} type="text" name="Frames_during_upper_guide_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_during_upper_guide_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_during_upper_guide_remarks} type="text" name="Frames_during_upper_guide_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Frames_after_screws_result} type="text" name="Frames_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Frames_after_screws_action} type="text" name="Frames_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Frames_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Frames_after_screws_remarks} type="text" name="Frames_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_Bottom_roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_Bottom_roller_result} type="text" name="Rails_and_Countplate_before_Bottom_roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_Bottom_roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_Bottom_roller_action} type="text" name="Rails_and_Countplate_before_Bottom_roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_Bottom_roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_Bottom_roller_remarks} type="text" name="Rails_and_Countplate_before_Bottom_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Top guide roller</td>
                            <td>Check for damage or deformation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_Top_roller_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_Top_roller_result} type="text" name="Rails_and_Countplate_before_Top_roller_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_Top_roller_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_Top_roller_action} type="text" name="Rails_and_Countplate_before_Top_roller_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_Top_roller_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_Top_roller_remarks} type="text" name="Rails_and_Countplate_before_Top_roller_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Count plate</td>
                            <td>Check for damage or deformation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_count_plate_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_count_plate_result} type="text" name="Rails_and_Countplate_before_count_plate_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_count_plate_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_count_plate_action} type="text" name="Rails_and_Countplate_before_count_plate_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_count_plate_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_count_plate_remarks} type="text" name="Rails_and_Countplate_before_count_plate_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dog on Emg. Stop sensor</td>
                            <td>Check deformation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_dog_emg_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_dog_emg_result} type="text" name="Rails_and_Countplate_before_dog_emg_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_dog_emg_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_dog_emg_action} type="text" name="Rails_and_Countplate_before_dog_emg_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_before_dog_emg_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_before_dog_emg_remarks} type="text" name="Rails_and_Countplate_before_dog_emg_remarks" /></td>
                        </tr>
                        <tr>
                            <td>During</td>
                            <td>Bottom guide rail</td>
                            <td>Check for smooth travelling at sections</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_bottom_rail_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_bottom_rail_result} type="text" name="Rails_and_Countplate_during_bottom_rail_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_bottom_rail_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_bottom_rail_action} type="text" name="Rails_and_Countplate_during_bottom_rail_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_bottom_rail_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_bottom_rail_remarks} type="text" name="Rails_and_Countplate_during_bottom_rail_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Top guide rail</td>
                            <td>Check for smooth travelling at sections</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_top_rail_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_top_rail_result} type="text" name="Rails_and_Countplate_during_top_rail_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_top_rail_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_top_rail_action} type="text" name="Rails_and_Countplate_during_top_rail_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_top_rail_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_top_rail_remarks} type="text" name="Rails_and_Countplate_during_top_rail_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Count plate</td>
                            <td>Check for smooth travelling at count plate</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_count_plate_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_count_plate_result} type="text" name="Rails_and_Countplate_during_count_plate_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_count_plate_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_count_plate_action} type="text" name="Rails_and_Countplate_during_count_plate_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_during_count_plate_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_during_count_plate_remarks} type="text" name="Rails_and_Countplate_during_count_plate_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_after_screws_result} type="text" name="Rails_and_Countplate_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_after_screws_action} type="text" name="Rails_and_Countplate_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Rails_and_Countplate_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Rails_and_Countplate_after_screws_remarks} type="text" name="Rails_and_Countplate_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_Crane_sensor_result: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_Crane_sensor_result} type="text" name="Sensors_before_Crane_sensor_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_Crane_sensor_action: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_Crane_sensor_action} type="text" name="Sensors_before_Crane_sensor_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_Crane_sensor_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_Crane_sensor_remarks} type="text" name="Sensors_before_Crane_sensor_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>LW for Emg. Stop</td>
                            <td>Check for function</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_LW_result: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_LW_result} type="text" name="Sensors_before_LW_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_LW_action: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_LW_action} type="text" name="Sensors_before_LW_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_LW_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_LW_remarks} type="text" name="Sensors_before_LW_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Optical data transmiiter</td>
                            <td>Check for damage and dust accumulation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_Optical_result: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_Optical_result} type="text" name="Sensors_before_Optical_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_Optical_action: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_Optical_action} type="text" name="Sensors_before_Optical_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_before_Optical_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_before_Optical_remarks} type="text" name="Sensors_before_Optical_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_after_screws_result} type="text" name="Sensors_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_after_screws_action} type="text" name="Sensors_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Sensors_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Sensors_after_screws_remarks} type="text" name="Sensors_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_cleaning_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_cleaning_result} type="text" name="Panels_and_Ladder_before_operational_cleaning_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_cleaning_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_cleaning_action} type="text" name="Panels_and_Ladder_before_operational_cleaning_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_cleaning_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_cleaning_remarks} type="text" name="Panels_and_Ladder_before_operational_cleaning_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if lamp comes on</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_lamp_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_lamp_result} type="text" name="Panels_and_Ladder_before_operational_lamp_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_lamp_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_lamp_action} type="text" name="Panels_and_Ladder_before_operational_lamp_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_lamp_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_lamp_remarks} type="text" name="Panels_and_Ladder_before_operational_lamp_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if all keys activate correctly</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_keys_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_keys_result} type="text" name="Panels_and_Ladder_before_operational_keys_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_keys_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_keys_action} type="text" name="Panels_and_Ladder_before_operational_keys_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_operational_keys_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_operational_keys_remarks} type="text" name="Panels_and_Ladder_before_operational_keys_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Operational/Control panel</td>
                            <td>Check for cleaning</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_control_cleaning_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_control_cleaning_result} type="text" name="Panels_and_Ladder_before_control_cleaning_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_control_cleaning_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_control_cleaning_action} type="text" name="Panels_and_Ladder_before_control_cleaning_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_control_cleaning_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_control_cleaning_remarks} type="text" name="Panels_and_Ladder_before_control_cleaning_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for wiring</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_control_wiring_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_control_wiring_result} type="text" name="Panels_and_Ladder_before_control_wiring_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_control_wiring_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_control_wiring_action} type="text" name="Panels_and_Ladder_before_control_wiring_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_control_wiring_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_control_wiring_remarks} type="text" name="Panels_and_Ladder_before_control_wiring_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Safety plug</td>
                            <td>Check if message is displayed correctly</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_safety_plug_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_safety_plug_result} type="text" name="Panels_and_Ladder_before_safety_plug_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_safety_plug_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_safety_plug_action} type="text" name="Panels_and_Ladder_before_safety_plug_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_safety_plug_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_safety_plug_remarks} type="text" name="Panels_and_Ladder_before_safety_plug_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Safety fence</td>
                            <td>Check if the sign is fixed on the fence</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_safety_fence_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_safety_fence_result} type="text" name="Panels_and_Ladder_before_safety_fence_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_safety_fence_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_safety_fence_action} type="text" name="Panels_and_Ladder_before_safety_fence_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_before_safety_fence_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_before_safety_fence_remarks} type="text" name="Panels_and_Ladder_before_safety_fence_remarks" /></td>
                        </tr>
                        <tr>
                            <td>After</td>
                            <td>Screws</td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_after_screws_result: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_after_screws_result} type="text" name="Panels_and_Ladder_after_screws_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_after_screws_action: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_after_screws_action} type="text" name="Panels_and_Ladder_after_screws_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Panels_and_Ladder_after_screws_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Panels_and_Ladder_after_screws_remarks} type="text" name="Panels_and_Ladder_after_screws_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_wiring_result: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_wiring_result} type="text" name="Inverter_Unit_Before_Inverter_wiring_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_wiring_action: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_wiring_action} type="text" name="Inverter_Unit_Before_Inverter_wiring_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_wiring_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_wiring_remarks} type="text" name="Inverter_Unit_Before_Inverter_wiring_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check if bolts/screws are loose</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_bolts_result: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_bolts_result} type="text" name="Inverter_Unit_Before_Inverter_bolts_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_bolts_action: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_bolts_action} type="text" name="Inverter_Unit_Before_Inverter_bolts_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_bolts_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_bolts_remarks} type="text" name="Inverter_Unit_Before_Inverter_bolts_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for abnormal sound</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_sound_result: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_sound_result} type="text" name="Inverter_Unit_Before_Inverter_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_sound_action: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_sound_action} type="text" name="Inverter_Unit_Before_Inverter_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_sound_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_sound_remarks} type="text" name="Inverter_Unit_Before_Inverter_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for cleaning</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_cleaning_result: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_cleaning_result} type="text" name="Inverter_Unit_Before_Inverter_cleaning_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_cleaning_action: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_cleaning_action} type="text" name="Inverter_Unit_Before_Inverter_cleaning_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_cleaning_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_cleaning_remarks} type="text" name="Inverter_Unit_Before_Inverter_cleaning_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for damage</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_damage_result: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_damage_result} type="text" name="Inverter_Unit_Before_Inverter_damage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_damage_action: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_damage_action} type="text" name="Inverter_Unit_Before_Inverter_damage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_damage_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_damage_remarks} type="text" name="Inverter_Unit_Before_Inverter_damage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Check for function of moving parts</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_function_result: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_function_result} type="text" name="Inverter_Unit_Before_Inverter_function_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_function_action: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_function_action} type="text" name="Inverter_Unit_Before_Inverter_function_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Inverter_Unit_Before_Inverter_function_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Inverter_Unit_Before_Inverter_function_remarks} type="text" name="Inverter_Unit_Before_Inverter_function_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_load_detectors_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_load_detectors_result} type="text" name="Carriage_Fork_during_load_detectors_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_load_detectors_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_load_detectors_action} type="text" name="Carriage_Fork_during_load_detectors_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_load_detectors_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_load_detectors_remarks} type="text" name="Carriage_Fork_during_load_detectors_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Load profile detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_load_profile_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_load_profile_result} type="text" name="Carriage_Fork_during_load_profile_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_load_profile_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_load_profile_action} type="text" name="Carriage_Fork_during_load_profile_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_load_profile_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_load_profile_remarks} type="text" name="Carriage_Fork_during_load_profile_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork loaded sensor</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_loaded_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_loaded_result} type="text" name="Carriage_Fork_during_fork_loaded_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_loaded_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_loaded_action} type="text" name="Carriage_Fork_during_fork_loaded_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_loaded_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_loaded_remarks} type="text" name="Carriage_Fork_during_fork_loaded_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Carriage chain loose detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_chain_loose_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_chain_loose_result} type="text" name="Carriage_Fork_during_chain_loose_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_chain_loose_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_chain_loose_action} type="text" name="Carriage_Fork_during_chain_loose_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_chain_loose_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_chain_loose_remarks} type="text" name="Carriage_Fork_during_chain_loose_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork end detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_end_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_end_result} type="text" name="Carriage_Fork_during_fork_end_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_end_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_end_action} type="text" name="Carriage_Fork_during_fork_end_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_end_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_end_remarks} type="text" name="Carriage_Fork_during_fork_end_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork centering detectors</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_centering_result: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_centering_result} type="text" name="Carriage_Fork_during_fork_centering_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_centering_action: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_centering_action} type="text" name="Carriage_Fork_during_fork_centering_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Carriage_Fork_during_fork_centering_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Carriage_Fork_during_fork_centering_remarks} type="text" name="Carriage_Fork_during_fork_centering_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_home_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_home_result} type="text" name="Crane_Travelling_Detectors_during_home_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_home_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_home_action} type="text" name="Crane_Travelling_Detectors_during_home_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_home_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_home_remarks} type="text" name="Crane_Travelling_Detectors_during_home_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Regular position (front)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_regular_front_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_regular_front_result} type="text" name="Crane_Travelling_Detectors_during_regular_front_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_regular_front_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_regular_front_action} type="text" name="Crane_Travelling_Detectors_during_regular_front_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_regular_front_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_regular_front_remarks} type="text" name="Crane_Travelling_Detectors_during_regular_front_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Regular position (rear)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_regular_rear_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_regular_rear_result} type="text" name="Crane_Travelling_Detectors_during_regular_rear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_regular_rear_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_regular_rear_action} type="text" name="Crane_Travelling_Detectors_during_regular_rear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_regular_rear_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_regular_rear_remarks} type="text" name="Crane_Travelling_Detectors_during_regular_rear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Forward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Forward_decel1_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Forward_decel1_result} type="text" name="Crane_Travelling_Detectors_during_Forward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Forward_decel1_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Forward_decel1_action} type="text" name="Crane_Travelling_Detectors_during_Forward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Forward_decel1_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Forward_decel1_remarks} type="text" name="Crane_Travelling_Detectors_during_Forward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Backward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Backward_decel1_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Backward_decel1_result} type="text" name="Crane_Travelling_Detectors_during_Backward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Backward_decel1_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Backward_decel1_action} type="text" name="Crane_Travelling_Detectors_during_Backward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Backward_decel1_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Backward_decel1_remarks} type="text" name="Crane_Travelling_Detectors_during_Backward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Decel 2</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_decel2_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_decel2_result} type="text" name="Crane_Travelling_Detectors_during_decel2_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_decel2_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_decel2_action} type="text" name="Crane_Travelling_Detectors_during_decel2_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_decel2_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_decel2_remarks} type="text" name="Crane_Travelling_Detectors_during_decel2_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>End limit (emergency)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_end_limit_emergency_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_end_limit_emergency_result} type="text" name="Crane_Travelling_Detectors_during_end_limit_emergency_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_end_limit_emergency_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_end_limit_emergency_action} type="text" name="Crane_Travelling_Detectors_during_end_limit_emergency_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_end_limit_emergency_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_end_limit_emergency_remarks} type="text" name="Crane_Travelling_Detectors_during_end_limit_emergency_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upper level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_upper_level_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_upper_level_result} type="text" name="Crane_Travelling_Detectors_during_upper_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_upper_level_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_upper_level_action} type="text" name="Crane_Travelling_Detectors_during_upper_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_upper_level_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_upper_level_remarks} type="text" name="Crane_Travelling_Detectors_during_upper_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Lower level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_lower_level_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_lower_level_result} type="text" name="Crane_Travelling_Detectors_during_lower_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_lower_level_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_lower_level_action} type="text" name="Crane_Travelling_Detectors_during_lower_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_lower_level_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_lower_level_remarks} type="text" name="Crane_Travelling_Detectors_during_lower_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Fork level zone</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_fork_level_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_fork_level_result} type="text" name="Crane_Travelling_Detectors_during_fork_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_fork_level_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_fork_level_action} type="text" name="Crane_Travelling_Detectors_during_fork_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_fork_level_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_fork_level_remarks} type="text" name="Crane_Travelling_Detectors_during_fork_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Station upper level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_station_upper_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_station_upper_result} type="text" name="Crane_Travelling_Detectors_during_station_upper_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_station_upper_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_station_upper_action} type="text" name="Crane_Travelling_Detectors_during_station_upper_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_station_upper_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_station_upper_remarks} type="text" name="Crane_Travelling_Detectors_during_station_upper_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Station lower level</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_station_lower_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_station_lower_result} type="text" name="Crane_Travelling_Detectors_during_station_lower_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_station_lower_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_station_lower_action} type="text" name="Crane_Travelling_Detectors_during_station_lower_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_station_lower_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_station_lower_remarks} type="text" name="Crane_Travelling_Detectors_during_station_lower_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Upward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Upward_decel1_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Upward_decel1_result} type="text" name="Crane_Travelling_Detectors_during_Upward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Upward_decel1_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Upward_decel1_action} type="text" name="Crane_Travelling_Detectors_during_Upward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Upward_decel1_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Upward_decel1_remarks} type="text" name="Crane_Travelling_Detectors_during_Upward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Downward decel 1</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Downward_decel1_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Downward_decel1_result} type="text" name="Crane_Travelling_Detectors_during_Downward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Downward_decel1_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Downward_decel1_action} type="text" name="Crane_Travelling_Detectors_during_Downward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_Downward_decel1_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_Downward_decel1_remarks} type="text" name="Crane_Travelling_Detectors_during_Downward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>End limit (emergency)</td>
                            <td>I/O check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_End_limit_result: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_End_limit_result} type="text" name="Crane_Travelling_Detectors_during_End_limit_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_End_limit_action: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_End_limit_action} type="text" name="Crane_Travelling_Detectors_during_End_limit_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, Crane_Travelling_Detectors_during_End_limit_remarks: e.target.value })}
                                value={listOfCraneULCheckList.Crane_Travelling_Detectors_during_End_limit_remarks} type="text" name="Crane_Travelling_Detectors_during_End_limit_remarks" /></td>
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

                    <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>INSPECTION SUMMARY/RECOMMENDATION:</h2>
                    <div class="inspection-summary">

                        onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, UL_crane_INSPECTION_SUMMARY_RECOMMENDATION: e.target.value })}
                        value={listOfCraneULCheckList.UL_crane_INSPECTION_SUMMARY_RECOMMENDATION}  <textarea  value={listOfCraneULCheckList.UL_crane_INSPECTION_SUMMARY_RECOMMENDATION} as="textarea" className='border-black border w-[100%]' id="UL_crane_INSPECTION_SUMMARY_RECOMMENDATION" name="UL_crane_INSPECTION_SUMMARY_RECOMMENDATION"></textarea>
                    </div>

                    <td>
                        <div class="textbox-container">
                            <label for="UL_crane_Verified_by_MNC">Verified by (MNC):</label>
                            <input onChange={(e) => setlistOfCraneULCheckList({ ...listOfCraneULCheckList, UL_crane_Verified_by_MNC: e.target.value })}
                                value={listOfCraneULCheckList.UL_crane_Verified_by_MNC} type="text" id="UL_crane_Verified_by_MNC" name="UL_crane_Verified_by_MNC" />
                        </div>
                    </td>
                </div>
            </form>
        </div>
    )
}

export default MonthlyPMULRead
