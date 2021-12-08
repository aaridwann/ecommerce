import React from 'react'

export default function ModalFollow() {
    return (
        <div className="inset-0 fixed z-50 mx-auto justify-center items-center flex bg-gray-800 bg-opacity-30 flex-wrap ">
            <div className="modal-box">
                <p>
                    {props.item}
                </p>
                <div className="modal-action">
                    <a className="btn btn-primary">
                        Accept
                    </a>
                    <a onClick={props.close} className="btn">
                        Close
                    </a>
                </div>
            </div>
        </div>
    )
}
