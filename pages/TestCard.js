import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Auth/auth'

export default function TestCard({user}) {
    let [follower, setFollower] = useState()
    const followers = async () => {
        try {
        const response = await axios.post('http://localhost:3002/seeFollowers',{'id':user.followers})
           setFollower(follower = response.data)
        } catch (error) {
    console.log(error)            
        }
    }
    useEffect(() => {
        followers()
    },[user])
    console.log(follower)
    console.log(user.followers)
    
    return (
        <div>
            <button className='btn btn-md btn-primary' onClick={() => change({user})}>{user.name}</button>
            {follower && 
            <h1>{follower.map((a) =>(
                <button className="btn btn-md btn-secondary m-4" key={a._id}>{a.name}</button>
                
                ))}</h1>
                 }
        </div>
    )
}
