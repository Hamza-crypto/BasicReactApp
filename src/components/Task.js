import { FaTimes } from 'react-icons/fa';
import React from 'react';

const Task = ({ task , onDelete }) => {

    return (
        <div className='task'>
            <h3 key={task.id}> {task.text }
                <FaTimes style={{
                color: 'red',
                cursor: 'pointer' }}
                onClick={() => onDelete(task.id)} />
            </h3>
            <p> {task.day} </p>
        </div>
    )
}
export default Task