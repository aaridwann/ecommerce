import axios from 'axios';
import { setCookies } from 'cookies-next'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Auth/auth';
import Layout from '../Components/Layout'
import CardLogin from '../Components/Login/CardLogin'
import {useRouter} from 'next/router'
let url = "http://localhost:3002/login";

export default function Login() {
    const router = useRouter()
    const {Auth, setAuth} = useContext(AuthContext);
    const [user, setUser] = useState({
        name:'',
        password:''
    })
    const data = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    const submit = async (e)=>{
            e.preventDefault();
            const response = await axios.post('http://localhost:3002/login', user)
            .then(res => {
                return res.data
            })
            .then(user => {
                    sessionStorage.setItem('user',JSON.stringify(user.response)),
                    sessionStorage.setItem('token',user.token),
                    setAuth({
                        user: user.response,
                        token: user.token
                    })
                })
                router.push('/profile')
        }
        
   
   
    return (
        <Layout>
            <div className="container w-3/4 mx-auto mt-20">
            <CardLogin name={data} password={data} onSubmit={submit}/>
            </div>

        </Layout>
    )
}
