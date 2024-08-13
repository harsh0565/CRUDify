import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    })
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
        // console.log(name);
        // console.log(value);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", user).then((response) => {
            console.log(response);
            toast(response.data.msg);
            navigate("/");
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='addUser container'>
            <h1 className='text-capitalize text-center mt-5 mb-5 heading'>Add new User</h1>
            <form onSubmit={submitForm}>
                <Link className='btn btn-secondary mb-3' to={"/"}>Back</Link>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input onChange={inputHandler} className="form-control" autoComplete='off' type="text" id='fname' name='fname' placeholder='First name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input onChange={inputHandler} className="form-control" type="text" autoComplete='off' id='lname' name='lname' placeholder='Last name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={inputHandler} className="form-control" autoComplete='off' type="email" id='email' name='email' placeholder='Email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={inputHandler} className="form-control" autoComplete='off' type="password" id='password' name='password' placeholder='Password' />
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Add
