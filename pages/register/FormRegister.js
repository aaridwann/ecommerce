import axios from 'axios'
import React, { useState } from 'react'
import {useRouter} from 'next/router'

export default function FormRegister() {
    const router = useRouter()
    const [user, setUser] =  useState({
        name:'',
        email:'',
        password:''
    })
    const data = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const submit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/user', user)
        .then(res => console.log(res))
    }

    return (
        <div>
            <div className="p-10 card bg-base-200 border-gray-200 border-2 shadow-2xl  ">
                <h1 className="text-center font-bold mb-8 text-gray-500">Registration Form</h1>
                <form onSubmit={submit} className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input name="name" onChange={data} type="text" placeholder="Username" className="input" />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" onChange={data} type="text" placeholder="Email" className="input" />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" onChange={data} type="text" placeholder="Password" className="input" />
                    <button type="submit" className="btn btn-md btn-info mt-4">Submit</button>
                </form>
                <span className="inline mt-4 text-center ">
                <p onClick={() => router.push('/login')} className='classNamelink link-accent'>Already register ?, Login</p>
                </span>
            </div>
        </div>
    )
}
