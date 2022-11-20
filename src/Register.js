import React, { useState} from 'react';
import CrudData from './Cruddata';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        student: [],
        name: '',
        class: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        var response = await axios.post(
            'https://637a6aea10a6f23f7f93c9e7.mockapi.io/students',{
                name: data.name,
                class: data.class
            });
            console.log(response.data);
    }
    return (
        <div >
             <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;
            <div className="table">
                <CrudData />&nbsp;
            </div>
           
                <p>Register student</p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name : </label>
                        <input 
                        type="text" 
                        name="name" 
                        value={data.name} 
                        onChange={e => setData({name : e.target.value})} /><br /><br />
                        <label>Class : </label>
                        <input type="text" name="class" value={data.class} 
                        onChange={e => setData({class : e.target.value})}/><br /><br />
                        <button type="submit" >Update</button><br /><br />
                    </div>
                </form>
           
        </div>
    )
}