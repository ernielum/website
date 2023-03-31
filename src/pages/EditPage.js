import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

export const EditPage = ({ eventToEdit }) => {

    const [event, setEvent] = useState(eventToEdit.event);
    const [city, setCity] = useState(eventToEdit.city);
    const [state, setState] = useState(eventToEdit.state);
    const [venue, setVenue] = useState(eventToEdit.venue);
    const [days, setDays] = useState(eventToEdit.days);
    const [date, setDate] = useState(eventToEdit.date.slice(0, 10));


    const redirect = useNavigate();

    const editEvent = async () => {
        const response = await fetch(`/log/${eventToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                event: event,
                city: city,
                state: state,
                venue: venue,
                days: days,
                date: date
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the event");
        } else {
            const errMessage = await response.json()
            alert(`Failed to add a row due to invalid input. Status code = ${response.status} ${errMessage.Error}`);
        }
        redirect("/log")
    };


    return (
        <>
            <article>
                <h2>Edit an event in the collection</h2>
                <p>Paragraph about this page.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Which event are you editing?</legend>
                        <label for="event">Event</label>
                        <input
                            type="text"
                            placeholder="Name of the event"
                            value={event}
                            onChange={e => setEvent(e.target.value)}
                            id="event" />

                        <label for="city">City</label>
                        <input
                            type="text"
                            value={city}
                            placeholder="City of the event"
                            onChange={e => setCity(e.target.value)}
                            id="date" />

                        <label for="state">State</label>
                        <input
                            type="text"
                            placeholder="State of the city"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            id="state" />

                        <label for="venue">Venue</label>
                        <input
                            type="text"
                            placeholder="Name of the venue"
                            value={venue}
                            onChange={e => setVenue(e.target.value)}
                            id="venue" />

                        <label for="days">Days</label>
                        <input
                            type="number"
                            placeholder="Number of days of the event"
                            value={days}
                            onChange={e => setDays(e.target.value)}
                            id="days" />

                        <label for="date">Date</label>
                        <input
                            type="date"
                            placeholder="Date of the event"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="state"
                            pattern="\d{2}-\d{2}-\d{2}" />

                        <label for="submit">
                            <button
                                type="submit"
                                onClick={editEvent}
                                id="submit"
                            >Save</button>updates to the collection</label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditPage;