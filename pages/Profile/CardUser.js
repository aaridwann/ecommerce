import React from 'react'

export default function CardUser(props) {
    return (
        <div className="card shadow-2xl border-2 border-gray-200 w-80 ">
            <div className="card-body ">
                <div className="avatar flex flex-row items-center justify-around gap-4 ">
                    <div className="mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img alt="hore" src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                    </div>
                  <h1 onClick={props.onClick} className="text-2xls font-semibold text-gray-800">{props.name}</h1>
                </div>
                <h2 classNameName="card-title">no border with shadow</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
            </div>
        </div>
    )
}
