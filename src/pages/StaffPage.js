import React, { useState } from "react";
import StaffRow from "../components/StaffRow.js"

function StaffPage() {
    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                setResults(response.results);
            })
            .catch(() => {
                alert("Unable to retrive staff information at the moment. Please try again later.")
            });
    };
    return (
        <>
            <h2>Staff List</h2>
            <article>
                <p>Click the button below to call the API and display random person data from the <a href="https://randomuser.me/">Random User Generator</a> website.</p>
                <p class="staffbuttonsection">
                    <button class="staffbutton" id="server-request" onClick={fetchResults}>Staff Request</button>
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((person, index) => <StaffRow person={person} key={index} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;