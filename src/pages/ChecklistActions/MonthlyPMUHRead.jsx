import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { useReactToPrint } from 'react-to-print'
import axios from 'axios';
function MonthlyPMUHRead() {

    let navigate = useNavigate();
    const { currentColor, activeMenu, setActiveMenu } = useStateContext();
    const [listOfUHCheckList, setListOfUHCheckList] = useState([]);
    let { id } = useParams();
    const componentPdf = useRef();


    useEffect(() => {
        axios.get(`https://maintaim-db-5eb6eb864ba7.herokuapp.com/uhchecklist/byId/${id}`).then((response) => {
            setListOfUHCheckList(response.data)

            console.log(response.data)
        });
    }, []);

    const generatePDF = useReactToPrint({
        content: () => componentPdf.current,
        documentTitle: `Monthly PM Crane 13`,
        onAfterPrint: () => alert("Data saved in PDF")
    });


    return (

        <div>
            <div className='flex justify-end mt-20 mr-4 md:mt-10'>
                <Link
                    to={`/pmuh/update/${id}`}
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
                    <h1 classname="text-3xl font-extrabold dark:text-gray-200 mb-2">Crane UH 1 & 2 INSPECTION CHECKLIST (MONTHLY)</h1>
                    <table>
                        <tr>
                            <td>
                                <div class="textbox-container">
                                    <label for="UH_crane_inspected_by">Inspected by:</label>
                                    <input
                                        onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, UH_crane_inspected_by: e.target.value })}
                                        value={listOfUHCheckList.UH_crane_inspected_by} type="text" id="UH_crane_inspected_by" name="UH_crane_inspected_by" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="UH_crane_approved_by">Approved by (Supervisor):</label>
                                    <input
                                        onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, UH_crane_approved_by: e.target.value })}
                                        value={listOfUHCheckList.UH_crane_approved_by} type="text" id="UH_crane_approved_by" name="UH_crane_approved_by" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="textbox-container">
                                    <label for="UH_crane_no">Crane Number:</label>
                                    <input
                                        onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, UH_crane_no: e.target.value })}
                                        value={listOfUHCheckList.UH_crane_no} type="text" id="UH_crane_no" name="UH_crane_no" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="UH_crane_date">Date:</label>
                                    <input
                                        onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, UH_crane_date: e.target.value })}
                                        value={listOfUHCheckList.UH_crane_date} type="date" id="UH_crane_date" name="UH_crane_date" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="UH_crane_time_start">Time Start:</label>
                                    <input
                                        onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, UH_crane_time_start: e.target.value })}
                                        value={listOfUHCheckList.UH_crane_time_start} type="time" id="UH_crane_time_start" name="UH_crane_time_start" />
                                </div>
                            </td>
                            <td>
                                <div class="textbox-container">
                                    <label for="UH_crane_time_end">Time End:</label>
                                    <input
                                        onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, UH_crane_time_end: e.target.value })}
                                        value={listOfUHCheckList.UH_crane_time_end} type="time" id="UH_crane_time_end" name="UH_crane_time_end" />
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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Motor_sound_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Motor_sound_result} type="text" name="Hoisting_Drive_Motor_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Motor_sound_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Motor_sound_action} type="text" name="Hoisting_Drive_Motor_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Motor_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Motor_sound_remarks} type="text" name="Hoisting_Drive_Motor_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Temperature</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Motor_Temperature_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Motor_Temperature_result} type="text" name="Hoisting_Drive_Motor_Temperature_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Motor_Temperature_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Motor_Temperature_action} type="text" name="Hoisting_Drive_Motor_Temperature_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Motor_Temperature_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Motor_Temperature_remarks} type="text" name="Hoisting_Drive_Motor_Temperature_remarks" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Electro-magnetic brake (Gap: 0.5mm Limit: 2mm)</td>
                            <td>Lining gap</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_E_magnetic_brake_gap_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_E_magnetic_brake_gap_result} type="text" name="Hoisting_Drive_E_magnetic_brake_gap_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_E_magnetic_brake_gap_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_E_magnetic_brake_gap_action} type="text" name="Hoisting_Drive_E_magnetic_brake_gap_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_E_magnetic_brake_gap_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_E_magnetic_brake_gap_remarks} type="text" name="Hoisting_Drive_E_magnetic_brake_gap_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Lining wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_E_magnetic_brake_wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_E_magnetic_brake_wear_tear_result} type="text" name="Hoisting_Drive_E_magnetic_brake_wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_E_magnetic_brake_wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_E_magnetic_brake_wear_tear_action} type="text" name="Hoisting_Drive_E_magnetic_brake_wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_E_magnetic_brake_wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_E_magnetic_brake_wear_tear_remarks} type="text" name="Hoisting_Drive_E_magnetic_brake_wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 27Litres)</td>
                            <td>Rotating sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_sound_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_sound_result} type="text" name="Hoisting_Drive_Cyclo_gear_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_sound_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_sound_action} type="text" name="Hoisting_Drive_Cyclo_gear_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_sound_remarks} type="text" name="Hoisting_Drive_Cyclo_gear_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Oil level / leakage</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_leakage_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_leakage_result} type="text" name="Hoisting_Drive_Cyclo_gear_leakage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_leakage_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_leakage_action} type="text" name="Hoisting_Drive_Cyclo_gear_leakage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_leakage_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_leakage_remarks} type="text" name="Hoisting_Drive_Cyclo_gear_leakage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Grease amount</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_Grease_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_Grease_result} type="text" name="Hoisting_Drive_Cyclo_gear_Grease_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_Grease_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_Grease_action} type="text" name="Hoisting_Drive_Cyclo_gear_Grease_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Cyclo_gear_Grease_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Cyclo_gear_Grease_remarks} type="text" name="Hoisting_Drive_Cyclo_gear_Grease_remarks" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Hoisting wire ropes (new : 12.5 mm)</td>
                            <td>Lubrication</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_wire_ropes_Lubrication_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_wire_ropes_Lubrication_result} type="text" name="Hoisting_Drive_wire_ropes_Lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_wire_ropes_Lubrication_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_wire_ropes_Lubrication_action} type="text" name="Hoisting_Drive_wire_ropes_Lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_wire_ropes_Lubrication_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_wire_ropes_Lubrication_remarks} type="text" name="Hoisting_Drive_wire_ropes_Lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_wire_ropes_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_wire_ropes_Wear_tear_result} type="text" name="Hoisting_Drive_wire_ropes_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_wire_ropes_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_wire_ropes_Wear_tear_action} type="text" name="Hoisting_Drive_wire_ropes_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_wire_ropes_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_wire_ropes_Wear_tear_remarks} type="text" name="Hoisting_Drive_wire_ropes_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Traction sheaves</td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Traction_sheaves_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Traction_sheaves_result} type="text" name="Hoisting_Drive_Traction_sheaves_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Traction_sheaves_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Traction_sheaves_action} type="text" name="Hoisting_Drive_Traction_sheaves_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_Traction_sheaves_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_Traction_sheaves_remarks} type="text" name="Hoisting_Drive_Traction_sheaves_remarks" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Hoisting sensing plate</td>
                            <td>Home position</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_home_position_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_home_position_result} type="text" name="Hoisting_Drive_sensing_plate_home_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_home_position_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_home_position_action} type="text" name="Hoisting_Drive_sensing_plate_home_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_home_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_home_position_remarks} type="text" name="Hoisting_Drive_sensing_plate_home_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Slowdown position</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_Slowdown_position_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_Slowdown_position_result} type="text" name="Hoisting_Drive_sensing_plate_Slowdown_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_Slowdown_position_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_Slowdown_position_action} type="text" name="Hoisting_Drive_sensing_plate_Slowdown_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_Slowdown_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_Slowdown_position_remarks} type="text" name="Hoisting_Drive_sensing_plate_Slowdown_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Over-run limit position</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_Over_run_limit_position_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_Over_run_limit_position_result} type="text" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_Over_run_limit_position_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_Over_run_limit_position_action} type="text" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_sensing_plate_Over_run_limit_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_sensing_plate_Over_run_limit_position_remarks} type="text" name="Hoisting_Drive_sensing_plate_Over_run_limit_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Hoist stop position</td>
                            <td>Lower level</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_stop_position_Lower_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_stop_position_Lower_result} type="text" name="Hoisting_Drive_stop_position_Lower_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_stop_position_Lower_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_stop_position_Lower_action} type="text" name="Hoisting_Drive_stop_position_Lower_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_stop_position_Lower_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_stop_position_Lower_remarks} type="text" name="Hoisting_Drive_stop_position_Lower_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Upper level</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_stop_position_Upper_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_stop_position_Upper_result} type="text" name="Hoisting_Drive_stop_position_Upper_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_stop_position_Upper_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_stop_position_Upper_action} type="text" name="Hoisting_Drive_stop_position_Upper_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_stop_position_Upper_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_stop_position_Upper_remarks} type="text" name="Hoisting_Drive_stop_position_Upper_remarks" /></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Hoisting guide rollers (new : dia 172 mm)</td>
                            <td>Clearance to mast</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_guide_rollers_Clearance_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_guide_rollers_Clearance_result} type="text" name="Hoisting_Drive_guide_rollers_Clearance_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_guide_rollers_Clearance_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_guide_rollers_Clearance_action} type="text" name="Hoisting_Drive_ guide_rollers_Clearance_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_guide_rollers_Clearance_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_guide_rollers_Clearance_remarks} type="text" name="Hoisting_Drive_guide_rollers_Clearance_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_guide_rollers_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_guide_rollers_Wear_tear_result} type="text" name="Hoisting_Drive_guide_rollers_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_guide_rollers_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_guide_rollers_Wear_tear_action} type="text" name="Hoisting_Drive_guide_rollers_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Hoisting_Drive_guide_rollers_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Hoisting_Drive_guide_rollers_Wear_tear_remarks} type="text" name="Hoisting_Drive_ guide_rollers_Wear_tear_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Motor_sound_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Motor_sound_result} type="text" name="Travel_Drive_Motor_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Motor_sound_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Motor_sound_action} type="text" name="Travel_Drive_Motor_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Motor_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Motor_sound_remarks} type="text" name="Travel_Drive_Motor_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Temperature</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Motor_Temperature_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Motor_Temperature_result} type="text" name="Travel_Drive_Motor_Temperature_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Motor_Temperature_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Motor_Temperature_action} type="text" name="Travel_Drive_Motor_Temperature_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Motor_Temperature_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Motor_Temperature_remarks} type="text" name="Travel_Drive_Motor_Temperature_remarks" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.7mm)</td>
                            <td>Lining gap</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_E_magnetic_brake_gap_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_E_magnetic_brake_gap_result} type="text" name="Travel_Drive_E_magnetic_brake_gap_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_E_magnetic_brake_gap_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_E_magnetic_brake_gap_action} type="text" name="Travel_Drive_E_magnetic_brake_gap_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_E_magnetic_brake_gap_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_E_magnetic_brake_gap_remarks} type="text" name="Travel_Drive_E_magnetic_brake_gap_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Lining wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_E_magnetic_brake_wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_E_magnetic_brake_wear_tear_result} type="text" name="Travel_Drive_E_magnetic_brake_wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_E_magnetic_brake_wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_E_magnetic_brake_wear_tear_action} type="text" name="Travel_Drive_E_magnetic_brake_wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_E_magnetic_brake_wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_E_magnetic_brake_wear_tear_remarks} type="text" name="Travel_Drive_E_magnetic_brake_wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 9.5Litres)</td>
                            <td>Rotating sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_sound_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_sound_result} type="text" name="Travel_Drive_Cyclo_gear_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_sound_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_sound_action} type="text" name="Travel_Drive_Cyclo_gear_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_sound_remarks} type="text" name="Travel_Drive_Cyclo_gear_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Oil level / leakage</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_leakage_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_leakage_result} type="text" name="Travel_Drive_Cyclo_gear_leakage_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_leakage_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_leakage_action} type="text" name="Travel_Drive_Cyclo_gear_leakage_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_leakage_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_leakage_remarks} type="text" name="Travel_Drive_Cyclo_gear_leakage_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Grease amount</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_Grease_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_Grease_result} type="text" name="Travel_Drive_Cyclo_gear_Grease_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_Grease_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_Grease_action} type="text" name="Travel_Drive_Cyclo_gear_Grease_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Cyclo_gear_Grease_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Cyclo_gear_Grease_remarks} type="text" name="Travel_Drive_Cyclo_gear_Grease_remarks" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Front wheel</td>
                            <td>Rotating sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Front_wheel_sound_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Front_wheel_sound_result} type="text" name="Travel_Drive_Front_wheel_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Front_wheel_sound_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Front_wheel_sound_action} type="text" name="Travel_Drive_Front_wheel_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Front_wheel_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Front_wheel_sound_remarks} type="text" name="Travel_Drive_Front_wheel_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Front_wheel_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Front_wheel_Wear_tear_result} type="text" name="Travel_Drive_Front_wheel_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Front_wheel_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Front_wheel_Wear_tear_action} type="text" name="Travel_Drive_Front_wheel_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Front_wheel_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Front_wheel_Wear_tear_remarks} type="text" name="Travel_Drive_Front_wheel_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Result: e.target.value })}
                                value={listOfUHCheckList.Result} type="text" name="Result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Action: e.target.value })}
                                value={listOfUHCheckList.Action} type="text" name="Action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Remarks: e.target.value })}
                                value={listOfUHCheckList.Remarks} type="text" name="Remarks" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Rear wheel</td>
                            <td>Rotating sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_sound_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_sound_result} type="text" name="Travel_Drive_Rear_wheel_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_sound_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_sound_action} type="text" name="Travel_Drive_Rear_wheel_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_sound_remarks} type="text" name="Travel_Drive_Rear_wheel_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_Wear_tear_result} type="text" name="Travel_Drive_Rear_wheel_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_Wear_tear_action} type="text" name="Travel_Drive_Rear_wheel_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_Wear_tear_remarks} type="text" name="Travel_Drive_Rear_wheel_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_Wear_tear_measure_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_Wear_tear_measure_result} type="text" name="Travel_Drive_Rear_wheel_Wear_tear_measure_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_Wear_tear_measure_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_Wear_tear_measure_action} type="text" name="Travel_Drive_Rear_wheel_Wear_tear_measure_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Rear_wheel_Wear_tear_measure_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Rear_wheel_Wear_tear_measure_remarks} type="text" name="Travel_Drive_Rear_wheel_Wear_tear_measure_remarks" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Top guide rollers (dia 98 mm or more)</td>
                            <td>Wear & tear</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_top_guide_rollers_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_top_guide_rollers_result} type="text" name="Travel_Drive_top_guide_rollers_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_top_guide_rollers_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_top_guide_rollers_action} type="text" name="Travel_Drive_top_guide_rollers_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_top_guide_rollers_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_top_guide_rollers_remarks} type="text" name="Travel_Drive_top_guide_rollers_remarks" /></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Bottom guide rollers (dia172 mm or more)</td>
                            <td>Wear & tear</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bottom_guide_rollers_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bottom_guide_rollers_result} type="text" name="Travel_Drive_Bottom_guide_rollers_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bottom_guide_rollers_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bottom_guide_rollers_action} type="text" name="Travel_Drive_Bottom_guide_rollers_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bottom_guide_rollers_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bottom_guide_rollers_remarks} type="text" name="Travel_Drive_Bottom_guide_rollers_remarks" /></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Travelling sensing plate (at both end of travel)</td>
                            <td>Home position</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_home_position_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_home_position_result} type="text" name="Travel_Drive_sensing_plate_home_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_home_position_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_home_position_action} type="text" name="Travel_Drive_sensing_plate_home_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_home_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_home_position_remarks} type="text" name="Travel_Drive_sensing_plate_home_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Slowdown position</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_Slowdown_position_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_Slowdown_position_result} type="text" name="Travel_Drive_sensing_plate_Slowdown_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_Slowdown_position_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_Slowdown_position_action} type="text" name="Travel_Drive_sensing_plate_Slowdown_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_Slowdown_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_Slowdown_position_remarks} type="text" name="Travel_Drive_sensing_plate_Slowdown_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Over-run limit position</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_Over_run_limit_position_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_Over_run_limit_position_result} type="text" name="Travel_Drive_sensing_plate_Over_run_limit_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_Over_run_limit_position_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_Over_run_limit_position_action} type="text" name="Travel_Drive_sensing_plate_Over_run_limit_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_sensing_plate_Over_run_limit_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_sensing_plate_Over_run_limit_position_remarks} type="text" name="Travel_Drive_sensing_plate_Over_run_limit_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Bay centering</td>
                            <td>Bay stop position</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_centering_stop_position_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_centering_stop_position_result} type="text" name="Travel_Drive_Bay_centering_stop_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_centering_stop_position_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_centering_stop_position_action} type="text" name="Travel_Drive_Bay_centering_stop_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_centering_stop_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_centering_stop_position_remarks} type="text" name="Travel_Drive_Bay_centering_stop_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>(X1/X2 measurement)</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_centering_measurement_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_centering_measurement_result} type="text" name="Travel_Drive_Bay_centering_measurement_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_centering_measurement_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_centering_measurement_action} type="text" name="Travel_Drive_Bay_centering_measurement_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_centering_measurement_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_centering_measurement_remarks} type="text" name="Travel_Drive_Bay_centering_measurement_remarks" /></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Bottom rail</td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Wear_tear_result} type="text" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Wear_tear_action} type="text" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Wear_tear_remarks} type="text" name="Travel_Drive_Bay_Bottom_rail_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Rail joint condition</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Rail_joint_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Rail_joint_result} type="text" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Rail_joint_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Rail_joint_action} type="text" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Rail_joint_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Rail_joint_remarks} type="text" name="Travel_Drive_Bay_Bottom_rail_Rail_joint_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Shim plate / Anchor bolt</td>
                            <td>Retighten</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Shim_plate_result: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Shim_plate_result} type="text" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Shim_plate_action: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Shim_plate_action} type="text" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Travel_Drive_Bay_Bottom_rail_Shim_plate_remarks: e.target.value })}
                                value={listOfUHCheckList.Travel_Drive_Bay_Bottom_rail_Shim_plate_remarks} type="text" name="Travel_Drive_Bay_Bottom_rail_Shim_plate_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Motor_sound_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Motor_sound_result} type="text" name="Slide_Fork_Motor_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Motor_sound_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Motor_sound_action} type="text" name="Slide_Fork_Motor_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Motor_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Motor_sound_remarks} type="text" name="Slide_Fork_Motor_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Temperature</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Motor_Temperature_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Motor_Temperature_result} type="text" name="Slide_Fork_Motor_Temperature_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Motor_Temperature_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Motor_Temperature_action} type="text" name="Slide_Fork_Motor_Temperature_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Motor_Temperature_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Motor_Temperature_remarks} type="text" name="Slide_Fork_Motor_Temperature_remarks" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.5mm)</td>
                            <td>Lining gap</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_E_magnetic_brake_gap_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_E_magnetic_brake_gap_result} type="text" name="Slide_Fork_E_magnetic_brake_gap_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_E_magnetic_brake_gap_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_E_magnetic_brake_gap_action} type="text" name="Slide_Fork_E_magnetic_brake_gap_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_E_magnetic_brake_gap_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_E_magnetic_brake_gap_remarks} type="text" name="Slide_Fork_E_magnetic_brake_gap_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Lining wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_E_magnetic_brake_wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_E_magnetic_brake_wear_tear_result} type="text" name="Slide_Fork_E_magnetic_brake_wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_E_magnetic_brake_wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_E_magnetic_brake_wear_tear_action} type="text" name="Slide_Fork_E_magnetic_brake_wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_E_magnetic_brake_wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_E_magnetic_brake_wear_tear_remarks} type="text" name="Slide_Fork_E_magnetic_brake_wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cyclo gear reducer</td>
                            <td>Rotating sound</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Cyclo_gear_sound_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Cyclo_gear_sound_result} type="text" name="Slide_Fork_Cyclo_gear_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Cyclo_gear_sound_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Cyclo_gear_sound_action} type="text" name="Slide_Fork_Cyclo_gear_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Cyclo_gear_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Cyclo_gear_sound_remarks} type="text" name="Slide_Fork_Cyclo_gear_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Grease amount</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Cyclo_gear_Grease_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Cyclo_gear_Grease_result} type="text" name="Slide_Fork_Cyclo_gear_Grease_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Cyclo_gear_Grease_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Cyclo_gear_Grease_action} type="text" name="Slide_Fork_Cyclo_gear_Grease_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Cyclo_gear_Grease_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Cyclo_gear_Grease_remarks} type="text" name="Slide_Fork_Cyclo_gear_Grease_remarks" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Rack & pinion</td>
                            <td>Rotating sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_sound_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_sound_result} type="text" name="Slide_Fork_Rack_pinion_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_sound_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_sound_action} type="text" name="Slide_Fork_Rack_pinion_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_sound_remarks} type="text" name="Slide_Fork_Rack_pinion_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Lubrication</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Lubrication_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Lubrication_result} type="text" name="Slide_Fork_Rack_pinion_Lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Lubrication_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Lubrication_action} type="text" name="Slide_Fork_Rack_pinion_Lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Lubrication_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Lubrication_remarks} type="text" name="Slide_Fork_Rack_pinion_Lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Wear_tear_result} type="text" name="Slide_Fork_Rack_pinion_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Wear_tear_action} type="text" name="Slide_Fork_Rack_pinion_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Wear_tear_remarks} type="text" name="Slide_Fork_Rack_pinion_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Backlash</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Backlash_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Backlash_result} type="text" name="Slide_Fork_Rack_pinion_Backlash_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Backlash_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Backlash_action} type="text" name="Slide_Fork_Rack_pinion_Backlash_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_pinion_Backlash_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_pinion_Backlash_remarks} type="text" name="Slide_Fork_Rack_pinion_Backlash_remarks" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Torque limiter</td>
                            <td>Locknut tightness</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Torque_limiter_Locknut_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Torque_limiter_Locknut_result} type="text" name="Slide_Fork_Torque_limiter_Locknut_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Torque_limiter_Locknut_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Torque_limiter_Locknut_action} type="text" name="Slide_Fork_Torque_limiter_Locknut_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Torque_limiter_Locknut_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Torque_limiter_Locknut_remarks} type="text" name="Slide_Fork_Torque_limiter_Locknut_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Mechanic operation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Torque_limiter_Mechanic_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Torque_limiter_Mechanic_result} type="text" name="Slide_Fork_Torque_limiter_Mechanic_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Torque_limiter_Mechanic_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Torque_limiter_Mechanic_action} type="text" name="Slide_Fork_Torque_limiter_Mechanic_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Torque_limiter_Mechanic_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Torque_limiter_Mechanic_remarks} type="text" name="Slide_Fork_Torque_limiter_Mechanic_remarks" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Rack gear</td>
                            <td>Lubrication</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Lubrication_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Lubrication_result} type="text" name="Slide_Fork_Rack_gear_Lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Lubrication_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Lubrication_action} type="text" name="Slide_Fork_Rack_gear_Lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Lubrication_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Lubrication_remarks} type="text" name="Slide_Fork_Rack_gear_Lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Deformation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Deformation_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Deformation_result} type="text" name="Slide_Fork_Rack_gear_Deformation_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Deformation_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Deformation_action} type="text" name="Slide_Fork_Rack_gear_Deformation_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Deformation_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Deformation_remarks} type="text" name="Slide_Fork_Rack_gear_Deformation_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Wear_tear_result} type="text" name="Slide_Fork_Rack_gear_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Wear_tear_action} type="text" name="Slide_Fork_Rack_gear_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Rack_gear_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Rack_gear_Wear_tear_remarks} type="text" name="Slide_Fork_Rack_gear_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Sprocket / idler gears</td>
                            <td>Rotating sound</td>
                            <td>Sound</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Sprocket_sound_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Sprocket_sound_result} type="text" name="Slide_Fork_Sprocket_sound_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Sprocket_sound_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Sprocket_sound_action} type="text" name="Slide_Fork_Sprocket_sound_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Sprocket_sound_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Sprocket_sound_remarks} type="text" name="Slide_Fork_Sprocket_sound_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Sprocket_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Sprocket_Wear_tear_result} type="text" name="Slide_Fork_Sprocket_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Sprocket_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Sprocket_Wear_tear_action} type="text" name="Slide_Fork_Sprocket_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Sprocket_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Sprocket_Wear_tear_remarks} type="text" name="Slide_Fork_Sprocket_Wear_tear_remarks" /></td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Stopping sensing plate</td>
                            <td>Fork centering</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Stopping_sensing_Fork_centering_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Stopping_sensing_Fork_centering_result} type="text" name="Slide_Fork_Stopping_sensing_Fork_centering_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Stopping_sensing_Fork_centering_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Stopping_sensing_Fork_centering_action} type="text" name="Slide_Fork_Stopping_sensing_Fork_centering_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Stopping_sensing_Fork_centering_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Stopping_sensing_Fork_centering_remarks} type="text" name="Slide_Fork_Stopping_sensing_Fork_centering_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Fork stroke</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Stopping_sensing_Fork_stroke_result: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Stopping_sensing_Fork_stroke_result} type="text" name="Slide_Fork_Stopping_sensing_Fork_stroke_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Stopping_sensing_Fork_stroke_action: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Stopping_sensing_Fork_stroke_action} type="text" name="Slide_Fork_Stopping_sensing_Fork_stroke_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Slide_Fork_Stopping_sensing_Fork_stroke_remarks: e.target.value })}
                                value={listOfUHCheckList.Slide_Fork_Stopping_sensing_Fork_stroke_remarks} type="text" name="Slide_Fork_Stopping_sensing_Fork_stroke_remarks" /></td>
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
                            <td>a) Middle rail</td>
                            <td>Grove wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Middle_rail_Grove_wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Middle_rail_Grove_wear_tear_result} type="text" name="Fork_body_Middle_rail_Grove_wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Middle_rail_Grove_wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Middle_rail_Grove_wear_tear_action} type="text" name="Fork_body_Middle_rail_Grove_wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Middle_rail_Grove_wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Middle_rail_Grove_wear_tear_remarks} type="text" name="Fork_body_Middle_rail_Grove_wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Lubrication</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Middle_rail_Lubrication_result: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Middle_rail_Lubrication_result} type="text" name="Fork_body_Middle_rail_Lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Middle_rail_Lubrication_action: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Middle_rail_Lubrication_action} type="text" name="Fork_body_Middle_rail_Lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Middle_rail_Lubrication_remarks: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Middle_rail_Lubrication_remarks} type="text" name="Fork_body_Middle_rail_Lubrication_remarks" /></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>b) Cam followers</td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Cam_followers_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Cam_followers_Wear_tear_result} type="text" name="Fork_body_Cam_followers_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Cam_followers_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Cam_followers_Wear_tear_action} type="text" name="Fork_body_Cam_followers_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Cam_followers_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Cam_followers_Wear_tear_remarks} type="text" name="Fork_body_Cam_followers_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Lubrication</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Cam_followers_Lubrication_result: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Cam_followers_Lubrication_result} type="text" name="Fork_body_Cam_followers_Lubrication_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Cam_followers_Lubrication_action: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Cam_followers_Lubrication_action} type="text" name="Fork_body_Cam_followers_Lubrication_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Fork_body_Cam_followers_Lubrication_remarks: e.target.value })}
                                value={listOfUHCheckList.Fork_body_Cam_followers_Lubrication_remarks} type="text" name="Fork_body_Cam_followers_Lubrication_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Fasteners_result: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Fasteners_result} type="text" name="Trolley_Unit_Collector_arm_Fasteners_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Fasteners_action: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Fasteners_action} type="text" name="Trolley_Unit_Collector_arm_Fasteners_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Fasteners_remarks: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Fasteners_remarks} type="text" name="Trolley_Unit_Collector_arm_Fasteners_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wear & tear</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Wear_tear_result: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Wear_tear_result} type="text" name="Trolley_Unit_Collector_arm_Wear_tear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Wear_tear_action: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Wear_tear_action} type="text" name="Trolley_Unit_Collector_arm_Wear_tear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Wear_tear_remarks: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Wear_tear_remarks} type="text" name="Trolley_Unit_Collector_arm_Wear_tear_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Dust accumulation</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Dust_result: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Dust_result} type="text" name="Trolley_Unit_Collector_arm_Dust_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Dust_action: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Dust_action} type="text" name="Trolley_Unit_Collector_arm_Dust_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Trolley_Unit_Collector_arm_Dust_remarks: e.target.value })}
                                value={listOfUHCheckList.Trolley_Unit_Collector_arm_Dust_remarks} type="text" name="Trolley_Unit_Collector_arm_Dust_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_E_magnetic_contactors_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_E_magnetic_contactors_result} type="text" name="Control_Panel_E_magnetic_contactors_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_E_magnetic_contactors_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_E_magnetic_contactors_action} type="text" name="Control_Panel_E_magnetic_contactors_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_E_magnetic_contactors_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_E_magnetic_contactors_remarks} type="text" name="Control_Panel_E_magnetic_contactors_remarks" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Electric wiring</td>
                            <td>Snapped / broken wire</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Electric_wiring_Snapped_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Electric_wiring_Snapped_result} type="text" name="Control_Panel_Electric_wiring_Snapped_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Electric_wiring_Snapped_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Electric_wiring_Snapped_action} type="text" name="Control_Panel_Electric_wiring_Snapped_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Electric_wiring_Snapped_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Electric_wiring_Snapped_remarks} type="text" name="Control_Panel_Electric_wiring_Snapped_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wiring connection</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Electric_wiring_connection_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Electric_wiring_connection_result} type="text" name="Control_Panel_Electric_wiring_connection_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Electric_wiring_connection_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Electric_wiring_connection_action} type="text" name="Control_Panel_Electric_wiring_connection_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Electric_wiring_connection_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Electric_wiring_connection_remarks} type="text" name="Control_Panel_Electric_wiring_connection_remarks" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Transformer / Power supply</td>
                            <td>Voltage measurement</td>
                            <td>Measure</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Transformer_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Transformer_result} type="text" name="Control_Panel_Transformer_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Transformer_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Transformer_action} type="text" name="Control_Panel_Transformer_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Transformer_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Transformer_remarks} type="text" name="Control_Panel_Transformer_remarks" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>P.C. Board</td>
                            <td>Connectors connection</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_PC_Board_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_PC_Board_result} type="text" name="Control_Panel_PC_Board_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_PC_Board_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_PC_Board_action} type="text" name="Control_Panel_PC_Board_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_PC_Board_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_PC_Board_remarks} type="text" name="Control_Panel_PC_Board_remarks" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Operation panel buttons</td>
                            <td>Functionality</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_panel_buttons_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_panel_buttons_result} type="text" name="Control_Panel_panel_buttons_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_panel_buttons_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_panel_buttons_action} type="text" name="Control_Panel_panel_buttons_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_panel_buttons_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_panel_buttons_remarks} type="text" name="Control_Panel_panel_buttons_remarks" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Indicator</td>
                            <td>Functionality</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Indicator_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Indicator_result} type="text" name="Control_Panel_Indicator_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Indicator_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Indicator_action} type="text" name="Control_Panel_Indicator_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Indicator_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Indicator_remarks} type="text" name="Control_Panel_Indicator_remarks" /></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Emergency stop button</td>
                            <td>Functionality</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_E_stop_button_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_E_stop_button_result} type="text" name="Control_Panel_E_stop_button_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_E_stop_button_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_E_stop_button_action} type="text" name="Control_Panel_E_stop_button_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_E_stop_button_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_E_stop_button_remarks} type="text" name="Control_Panel_E_stop_button_remarks" /></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Ventilation fan</td>
                            <td>Functionality</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Ventilation_fan_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Ventilation_fan_result} type="text" name="Control_Panel_Ventilation_fan_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Ventilation_fan_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Ventilation_fan_action} type="text" name="Control_Panel_Ventilation_fan_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Ventilation_fan_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Ventilation_fan_remarks} type="text" name="Control_Panel_Ventilation_fan_remarks" /></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>4-bit sensor</td>
                            <td>Functionality</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_4bit_sensor_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_4bit_sensor_result} type="text" name="Control_Panel_4bit_sensor_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_4bit_sensor_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_4bit_sensor_action} type="text" name="Control_Panel_4bit_sensor_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_4bit_sensor_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_4bit_sensor_remarks} type="text" name="Control_Panel_4bit_sensor_remarks" /></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Optical transmitter</td>
                            <td>Alignment</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Optical_transmitter_Alignment_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Optical_transmitter_Alignment_result} type="text" name="Control_Panel_Optical_transmitter_Alignment_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Optical_transmitter_Alignment_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Optical_transmitter_Alignment_action} type="text" name="Control_Panel_Optical_transmitter_Alignment_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Optical_transmitter_Alignment_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Optical_transmitter_Alignment_remarks} type="text" name="Control_Panel_Optical_transmitter_Alignment_remarks" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>LED light condition</td>
                            <td>Visual</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Optical_transmitter_LED_result: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Optical_transmitter_LED_result} type="text" name="Control_Panel_Optical_transmitter_LED_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Optical_transmitter_LED_action: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Optical_transmitter_LED_action} type="text" name="Control_Panel_Optical_transmitter_LED_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Control_Panel_Optical_transmitter_LED_remarks: e.target.value })}
                                value={listOfUHCheckList.Control_Panel_Optical_transmitter_LED_remarks} type="text" name="Control_Panel_Optical_transmitter_LED_remarks" /></td>
                        </tr>
                    </table>

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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Pre_occupied_load_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Pre_occupied_load_result} type="text" name="Detectors_Pre_occupied_load_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Pre_occupied_load_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Pre_occupied_load_action} type="text" name="Detectors_Pre_occupied_load_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Pre_occupied_load_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Pre_occupied_load_remarks} type="text" name="Detectors_Pre_occupied_load_remarks" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Load profile limit switch</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_profile_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_profile_result} type="text" name="Detectors_Load_profile_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_profile_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_profile_action} type="text" name="Detectors_Load_profile_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_profile_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_profile_remarks} type="text" name="Detectors_Load_profile_remarks" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>High load sensors</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_High_load_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_High_load_result} type="text" name="Detectors_High_load_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_High_load_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_High_load_action} type="text" name="Detectors_High_load_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_High_load_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_High_load_remarks} type="text" name="Detectors_High_load_remarks" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Fork loaded sensor</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_loaded_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_loaded_result} type="text" name="Detectors_Fork_loaded_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_loaded_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_loaded_action} type="text" name="Detectors_Fork_loaded_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_loaded_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_loaded_remarks} type="text" name="Detectors_Fork_loaded_remarks" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Carriage chain loose detectors</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Carriage_chain_loose_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Carriage_chain_loose_result} type="text" name="Detectors_Carriage_chain_loose_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Carriage_chain_loose_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Carriage_chain_loose_action} type="text" name="Detectors_Carriage_chain_loose_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Carriage_chain_loose_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Carriage_chain_loose_remarks} type="text" name="Detectors_Carriage_chain_loose_remarks" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Load overhanged sensors</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_overhanged_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_overhanged_result} type="text" name="Detectors_Load_overhanged_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_overhanged_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_overhanged_action} type="text" name="Detectors_Load_overhanged_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_overhanged_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_overhanged_remarks} type="text" name="Detectors_Load_overhanged_remarks" /></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Load projection sensors</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_projection_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_projection_result} type="text" name="Detectors_Load_projection_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_projection_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_projection_action} type="text" name="Detectors_Load_projection_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Load_projection_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Load_projection_remarks} type="text" name="Detectors_Load_projection_remarks" /></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Fork end detectors</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_end_detectors_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_end_detectors_result} type="text" name="Detectors_Fork_end_detectors_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_end_detectors_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_end_detectors_action} type="text" name="Detectors_Fork_end_detectors_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_end_detectors_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_end_detectors_remarks} type="text" name="Detectors_Fork_end_detectors_remarks" /></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Fork centering detectors</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_centering_detectors_result: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_centering_detectors_result} type="text" name="Detectors_Fork_centering_detectors_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_centering_detectors_action: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_centering_detectors_action} type="text" name="Detectors_Fork_centering_detectors_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Detectors_Fork_centering_detectors_remarks: e.target.value })}
                                value={listOfUHCheckList.Detectors_Fork_centering_detectors_remarks} type="text" name="Detectors_Fork_centering_detectors_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Home_position_result: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Home_position_result} type="text" name="Crane_travelling_Home_position_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Home_position_action: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Home_position_action} type="text" name="Crane_travelling_Home_position_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Home_position_remarks: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Home_position_remarks} type="text" name="Crane_travelling_Home_position_remarks" /></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Regular position (front)</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Regular_position_front_result: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Regular_position_front_result} type="text" name="Crane_travelling_Regular_position_front_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Regular_position_front_action: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Regular_position_front_action} type="text" name="Crane_travelling_Regular_position_front_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Regular_position_front_remarks: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Regular_position_front_remarks} type="text" name="Crane_travelling_Regular_position_front_remarks" /></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Regular position (rear)</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Regular_position_rear_result: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Regular_position_rear_result} type="text" name="Crane_travelling_Regular_position_rear_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Regular_position_rear_action: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Regular_position_rear_action} type="text" name="Crane_travelling_Regular_position_rear_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Regular_position_rear_remarks: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Regular_position_rear_remarks} type="text" name="Crane_travelling_Regular_position_rear_remarks" /></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Forward decel 1</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Forward_decel1_result: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Forward_decel1_result} type="text" name="Crane_travelling_Forward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Forward_decel1_action: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Forward_decel1_action} type="text" name="Crane_travelling_Forward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Forward_decel1_remarks: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Forward_decel1_remarks} type="text" name="Crane_travelling_Forward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Backward decel 1</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Backward_decel1_result: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Backward_decel1_result} type="text" name="Crane_travelling_Backward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Backward_decel1_action: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Backward_decel1_action} type="text" name="Crane_travelling_Backward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Backward_decel1_remarks: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Backward_decel1_remarks} type="text" name="Crane_travelling_Backward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Dece1 2</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Dec_1_2_result: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Dec_1_2_result} type="text" name="Crane_travelling_Dec_1_2_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Dec_1_2_action: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Dec_1_2_action} type="text" name="Crane_travelling_Dec_1_2_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_Dec_1_2_remarks: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_Dec_1_2_remarks} type="text" name="Crane_travelling_Dec_1_2_remarks" /></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>End limit (emergency)</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_End_limit_result: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_End_limit_result} type="text" name="Crane_travelling_End_limit_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_End_limit_action: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_End_limit_action} type="text" name="Crane_travelling_End_limit_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Crane_travelling_End_limit_remarks: e.target.value })}
                                value={listOfUHCheckList.Crane_travelling_End_limit_remarks} type="text" name="Crane_travelling_End_limit_remarks" /></td>
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
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Upper_level_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Upper_level_result} type="text" name="Carriage_hoisting_Upper_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Upper_level_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Upper_level_action} type="text" name="Carriage_hoisting_Upper_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Upper_level_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Upper_level_remarks} type="text" name="Carriage_hoisting_Upper_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Lower level</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Lower_level_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Lower_level_result} type="text" name="Carriage_hoisting_Lower_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Lower_level_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Lower_level_action} type="text" name="Carriage_hoisting_Lower_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Lower_level_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Lower_level_remarks} type="text" name="Carriage_hoisting_Lower_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Fork level zone</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Fork_level_zone_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Fork_level_zone_result} type="text" name="Carriage_hoisting_Fork_level_zone_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Fork_level_zonel_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Fork_level_zonel_action} type="text" name="Carriage_hoisting_Fork_level_zonel_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Fork_level_zone_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Fork_level_zone_remarks} type="text" name="Carriage_hoisting_Fork_level_zone_remarks" /></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Station upper level</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_upper_level_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_upper_level_result} type="text" name="Carriage_hoisting_Station_upper_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_upper_level_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_upper_level_action} type="text" name="Carriage_hoisting_Station_upper_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_upper_level_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_upper_level_remarks} type="text" name="Carriage_hoisting_Station_upper_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Station lower level</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_lower_level_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_lower_level_result} type="text" name="Carriage_hoisting_Station_lower_level_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_lower_level_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_lower_level_action} type="text" name="Carriage_hoisting_Station_lower_level_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_lower_level_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_lower_level_remarks} type="text" name="Carriage_hoisting_Station_lower_level_remarks" /></td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Upward decel 1</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_Upward_decel1_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_Upward_decel1_result} type="text" name="Carriage_hoisting_Station_Upward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_Upward_decel1_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_Upward_decel1_action} type="text" name="Carriage_hoisting_Station_Upward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_Upward_decel1_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_Upward_decel1_remarks} type="text" name="Carriage_hoisting_Station_Upward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Downward decel 1</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_Downward_decel1_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_Downward_decel1_result} type="text" name="Carriage_hoisting_Station_Downward_decel1_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_Downward_decel1_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_Downward_decel1_action} type="text" name="Carriage_hoisting_Station_Downward_decel1_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Station_Downward_decel1_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Station_Downward_decel1_remarks} type="text" name="Carriage_hoisting_Station_Downward_decel1_remarks" /></td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Decel 2</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Decel2_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Decel2_result} type="text" name="Carriage_hoisting_Decel2_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Decel2_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Decel2_action} type="text" name="Carriage_hoisting_Decel2_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_Decel2_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_Decel2_remarks} type="text" name="Carriage_hoisting_Decel2_remarks" /></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>End limit (emergency)</td>
                            <td>I/O Check</td>
                            <td>Touch</td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_End_limit_result: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_End_limit_result} type="text" name="Carriage_hoisting_End_limit_result" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_End_limit_action: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_End_limit_action} type="text" name="Carriage_hoisting_End_limit_action" /></td>
                            <td><input
                                onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, Carriage_hoisting_End_limit_remarks: e.target.value })}
                                value={listOfUHCheckList.Carriage_hoisting_End_limit_remarks} type="text" name="Carriage_hoisting_End_limit_remarks" /></td>
                        </tr>
                    </table>





                    <div class="textbox-container">
                        <h2>Remarks:</h2>
                    </div>


                    <table>

                        <tbody><tr>
                            <td colspan="2">
                                <textarea id="UH_Crane_INSPECTION_SUMMARY" name="UH_Crane_INSPECTION_SUMMARY" rows="6" cols="50" />
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
                                        <input
                                            onChange={(e) => setlistOfUHCheckList({ ...listOfUHCheckList, UH_Crane_Verified_by_MNC: e.target.value })}
                                            value={listOfUHCheckList.UH_Crane_Verified_by_MNC} type="text" id="UH_Crane_Verified_by_MNC" name="UH_Crane_Verified_by_MNC" />
                                    </div>
                                </td>

                            </tr>

                        </tbody></table >

                </div>
            </form >
        </div >
    )
}

export default MonthlyPMUHRead
