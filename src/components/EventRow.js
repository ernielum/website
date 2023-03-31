import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function EventRow({ event, onEdit, onDelete }) {
    return (
        <tr>
            <td>{event.event}</td>
            <td>{event.city}</td>
            <td>{event.state}</td>
            <td>{event.venue}</td>
            <td>{event.days}</td>
            <td>{event.date}</td>
            <td><MdDeleteForever onClick={() => onDelete(event._id)} /></td>
            <td><MdEdit onClick={() => onEdit(event)} /></td>
        </tr>
    );
}

export default EventRow;