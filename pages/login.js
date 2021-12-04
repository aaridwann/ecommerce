import React, { useState } from 'react'
import Layout from '../Components/Layout'
import CardLogin from '../Components/Login/CardLogin'

export default function Login() {

    const [user, setUser] = useState({
        name:'',
        password:''
    })
    const data = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submit = async (e)=>{
            e.preventDefault();
            console.log(user)
    }

    return (
        <Layout>
            <div className="container w-3/4 mx-auto mt-40">
            <CardLogin name={data} password={data} onSubmit={submit}/>
            </div>

        </Layout>
    )
}
