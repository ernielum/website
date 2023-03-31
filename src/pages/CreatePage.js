import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

export const CreatePage = () => {

    const [event, setEvent] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [venue, setVenue] = useState();
    const [days, setDays] = useState();
    const [date, setDate] = useState();

    const redirect = useNavigate();

    const addFestival = async () => {
        const newFestival = { event, city, state, venue, days, date };
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newFestival),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added a festival to the list.");
        } else {
            alert(`Failed to add a row due to invalid input. Status code = ${response.status}`);
        }
        redirect("/log")
    };


    return (
        <>
            <article>
                <h2>Add Event</h2>
                <p>Please use the following form to add an event to the collection.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>What event are you adding?</legend>
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
                            id="date"
                            pattern="\d{2}-\d{2}-\d{2}" />

                        <label for="submit">
                            <button
                                type="submit"
                                onClick={addFestival}
                                id="submit"
                            >Add</button></label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;