import React from 'react';
import Event from './EventRow';
import { AiFillFileAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';

function EventList({ events, onDelete, onEdit }) {
    return (
        <table id="events">
            <caption>Events</caption>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Venue</th>
                    <th>Days</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="../add-event"><AiFillFileAdd></AiFillFileAdd></Link></th>
                </tr>
            </thead>
            <tbody>
                {events.map((event, i) => 
                    <Event 
                        event={event} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default EventList;
