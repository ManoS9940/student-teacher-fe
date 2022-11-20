import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



export default function CrudData() {

    const [data, setData] = useState({ student: [] });

    useEffect(() => {

        const getData = async () => {
            var response = await axios.get(
                'https://637a6aea10a6f23f7f93c9e7.mockapi.io/students'
            );            
            setData({ student: response.data });
        };
        getData();
    }, []);

    return (
        <div className="table">
            <div>
        <h1>Student's Details</h1>
           
            <table border={1}>
                <thead>
                    <tr>
                        <td>firstName</td>
                        <td>lastName</td>
                        <td>mobile</td>
                        <td>email</td>
                        <td>location</td>

                    </tr>
                </thead>

                <tbody>
                    {data.student.map((data) => (
                        <tr key={data.id}>
                            <td> {data.firstName} </td>
                            <td> {data.lastName} </td>
                            <td> {data.mobile} </td>
                            <td> {data.email} </td>
                            <td> {data.location} </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            </div>
            <div className="table1">

                &nbsp;<br /><Button variant="contained" component={Link} to="/registerstudent">Register Student</Button> &nbsp;
                
            </div>
        </div>
    )
}