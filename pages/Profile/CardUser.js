import React, { useContext } from 'react'
import { AuthContext } from '../../Auth/auth'

export default function CardUser(props) {
    const {Auth,setAuth} = useContext(AuthContext)
    console.log(Auth.user.following)
    return (
        <div className="card shadow-2xl border-2 border-gray-200 w-80 ">
            <div className="card-body ">
                <div className="avatar flex flex-row items-center justify-around gap-4 ">
                    <div className="mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img alt="hore" src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                    </div>
                  <h1 onClick={props.onClick} className="text-lg font-bold text-gray-600">{props.name}</h1>
                </div>
                <h2 classNameName="card-title">no border with shadow</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
                <div className="flex flex-row gap-2 justify-around">
                        <button onClick={props.follow} className="btn btn-md btn-info mt-4">{props.testfollow}</button>
                        <button className="btn btn-md btn-outline  btn-success mt-4">Mesasge</button>
                </div>
            </div>
        </div>
    )
}
