import React, { useState } from 'react';
import axios from 'axios';

export default function Studentdata() {
    const [rollno, setRollno] = useState('');
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [year, setYear] = useState('');
    const [msd, setMsd] = useState('');

    const addstudent = () => {
        const data = {
            rollno: rollno,
            name: name,
            department: dept,
            year: year
        };

        axios.post(`http://localhost:5000/students/post`, data)
            .then(response => {
                console.log(response);
                setMsd("Data was added");
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <div>Student-data</div>

            <form onSubmit={addstudent}>
                <input type='text' onChange={(e) => setRollno(e.target.value)} placeholder='Roll-no' />
                <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Name' />
                <input type='text' onChange={(e) => setDept(e.target.value)} placeholder='Department' />
                <input type='number' onChange={(e) => setYear(e.target.value)} placeholder='Year' />
                <button type='submit'>Add the data</button> {msd}
            </form>
        </>
    );
}
