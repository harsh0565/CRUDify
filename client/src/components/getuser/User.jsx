import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const User = () => {
    const [users, setUsers] = useState([]);

    const deleteUser = async (id) => {
        await axios.delete(`https://crudify-backend.onrender.com/api/delete/${id}`).then((response) => {
            console.log(response);
            setUsers((prev) => prev.filter((user) => user._id !== id));
            toast.success(response.data.msg);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://crudify-backend.onrender.com/api/getAll")
            setUsers(response.data);
        }
        fetchData();
    }, []);
    return (
        <div>
            <div className="m-5 userTable">
                <h1 className='text-center heading'>User Data</h1>
                <Link className='btn btn-success m-3' to="/add">Add User</Link>
                <table className='table' border={3} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr >
                            <th>S.no</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e, index) => {
                            return (

                                <tr key={e._id}>
                                    <td>{index + 1}</td>
                                    <td className='text-capitalize'>{e.fname} {e.lname}</td>
                                    <td>{e.email}</td>
                                    <td>
                                        <button onClick={() => { deleteUser(e._id) }} className='btn btn-danger m-3'><i class="fa-solid fa-trash"></i></button>
                                        <Link className='btn btn-success' to={`/edit/` + e._id}><i class="fa-solid fa-pen-to-square"></i></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

          

        </div>
    )
}

export default User
