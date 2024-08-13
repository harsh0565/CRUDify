import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: ""
    })
    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put(`https://crudify-backend.onrender.com/api/update/${id}`, user).then((response) => {
            console.log(response);
            toast(response.data.msg);
            navigate("/");
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOne/${id}`).then((response) => {
            console.log(response);
            setUser(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [id]);
    return (
        <div className='updateUser container'>

            <h1 className='text-capitalize text-center mt-5 mb-5 heading'>Update User</h1>
            <form onSubmit={submitForm} >
                <Link className='btn btn-secondary mb-3' to={"/"}>Back</Link>
                <div class="mb-3">
                    <label htmlFor="fname" class="form-label">First Name</label>
                    <input onChange={inputChangeHandler} value={user.fname} class="form-control" type="text" id='fname' name='fname' placeholder='First name' />
                </div>
                <div class="mb-3">
                    <label htmlFor="lname" class="form-label">Last Name</label>
                    <input onChange={inputChangeHandler} value={user.lname} class="form-control" type="text" id='lname' name='lname' placeholder='Last name' />
                </div>
                <div class="mb-3">
                    <label htmlFor="email" class="form-label">Email</label>
                    <input onChange={inputChangeHandler} value={user.email} class="form-control" type="email" id='email' name='email' placeholder='Email' />
                </div>
                <div className='d-flex justify-content-center'>
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Edit
