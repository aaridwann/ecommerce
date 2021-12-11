import React from 'react'

export default function CardProducts(props) {
    return (
        <div>
            <div className="card text-center shadow-2xl lg:w-80 lg:h-auto sm:w-52 sm:h-96">
                <figure className="px-10 h-64 pt-10 items-center flex ">
                    <img onClick={props.clickDetail} alt="/" src={props.img} className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title truncate ">{props.name}</h2>
                    <p className="truncate lg:block sm:hidden ">{props.description}</p>
                    <p className=" text-gray-600 font-bold text-xl truncate">Rp.{props.price}</p>
                    <div className="justify-center card-actions">
                        <button onClick={props.onClick} className="btn lg:btn-md sm:btn-sm btn-outline btn-accent">Add to cart</button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
