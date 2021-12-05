import {React, useState, useContext} from 'react'
import Layout from '../Components/Layout'
import { AuthContext } from "../Auth/auth";

export default function Products() {
    const {Auth, setAuth} = useContext(AuthContext)
    const {name,email} = Auth.user
console.log(name)
console.log(email)
    return (
        <Layout>
            <h1>products</h1>
            
        </Layout>
    )
}
