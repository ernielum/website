import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from '../components/EventList.js'

function EventPage({ setEvent }) {
    const redirect = useNavigate();
    
    const [events, setEvents] = useState([]);

    // retrieve

    const loadEvents = async () => {
        const response = await fetch('/log');
        const events = await response.json();
        setEvents(events);
    }

    // update

    const onEditEvent = async event => {
        setEvent(event);
        redirect("/edit-event");
    }

    // delete

    const onDeleteEvent = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const events = await getResponse.json();
            setEvents(events);
        } else {
            console.error(`Failed to delete event with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the events
    useEffect(() => {
        loadEvents();
    }, []);

    return (
        <>
            <h2>List of Events</h2>
            <p>Paragraph about this page.</p>
            <EventList
                events={events}
                onEdit={onEditEvent}
                onDelete={onDeleteEvent}
            />
        </>
    );
}

export default EventPage;