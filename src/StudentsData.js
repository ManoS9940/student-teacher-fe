import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'



export default function CrudData() {

    const [data, setData] = useState({ teacher: [] });

    useEffect(() => {

        const getData = async () => {
            var response = await axios.get(
                'https://637a6aea10a6f23f7f93c9e7.mockapi.io/students'
            );            
            setData({ teacher: response.data });
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
                    {data.teacher.map((data) => (
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
        </div>
    )
}