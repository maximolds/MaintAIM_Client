import React, { useState, useEffect, useRef } from 'react'
import ReactModal from 'react-modal'
import Datetime from 'react-datetime'

function AddEventModal({ isOpen, onClose, onEventAdded }) {

    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (e) => {
        e.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })

        onClose();
    }

    return (
        <div className='bg-white z-[9999999]'>
            <ReactModal isOpen={isOpen} onRequestClose={onClose}>
                <form onSubmit={onSubmit}>
                    <input
                        className='w-[50%]'
                        type="text"
                        placeholder='Title'
                        value={title}
                        name='Title'
                        id='Title'
                        onChange={e => setTitle(e.target.value)} />

                    <div>
                        <label>Start Date</label>
                        <Datetime
                            name="StartTime"
                            id="StartTime"
                            value={start}
                            onChange={date => setStart(date)} />
                    </div>

                    <div>
                        <label>End Date</label>
                        <Datetime
                            name="EndTime"
                            id="EndTime"
                            value={end}
                            onChange={date => setEnd(date)} />
                    </div>

                    <button>Add Event</button>

                </form>
            </ReactModal>
        </div>

    )
}

export default AddEventModal