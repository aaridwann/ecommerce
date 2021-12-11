import React from 'react'

export default function ProductsDetail(props) {
    return (
        <div>
            <div className="inset-0 fixed z-50 mx-auto justify-center items-center flex bg-gray-800 bg-opacity-30 flex-wrap  ">
                <div className="w-10/12 h-3/5 bg-base-200 flex flex-row p-4 mx-auto items-center justify-center content-center rounded-3xl overflow-hidden">
                    <figure className="px-10 h-64 items-center flex justify-center">
                        <img alt="/" src={props.img} className="rounded-xl max-w-xl" />
                    </figure>
                    <div className="flex-col flex mx-auto items-center justify-center w-11/12 bg-blue-200 p-4 rounded-tl-full rounded-bl-full border-2 border-gray-200 shadow-2xl ">
                        <p className="text-center text-lg font-bold italic text-gray-400 ">Product detail</p>
                        <div className=" grid gap-2 grid-cols-4  w-full p-4">

                            <div className="col-span-2 flex justify-center items-center text-left gap-5 "><label> Nama : </label><p className="text-4xl font-bold text-white">{props.name}</p></div>
                            <div className="col-span-2 flex justify-center items-center text-left gap-5 "> harga: <p className="text-4xl font-bold text-white">Rp. {props.price}</p> </div>
                            <div className="col-span-1  flex justify-center items-center  text-right gap-5 "> Quantity<div className="text-4xl font-bold text-white">{props.quantity}</div>   </div>
                            <div className="col-span-3 flex justify-center items-center  text-left gap-5 "> Description : <p className="text-2xls italic font-bold text-white">{props.description}</p> </div>
                            <div className="col-span-2 flex justify-center items-center text-left gap-5 "> Category : <p className="text-2xls italic font-bold text-white">{props.category}</p> </div>
                            <div className="col-span-1  flex justify-center items-center text-left gap-5 "> Date {props.date} </div>

                            <div className="col-span-1  flex justify-center items-center  text-left gap-5 ">
                                <button type="submit" onClick={props.editProduct} className="btn btn-md btn-warning">EDIT</button>
                                <button className="btn btn-md btn-error">Delete</button>  </div>
                        </div>
                        <div  className="modal-action">
                            <button type="submit" onClick={props.submit} className="btn btn-primary">
                                Save
                            </button>
                            <a onClick={props.close} className="btn">
                                Close
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
