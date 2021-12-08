import React from 'react'
import FormRegister from './FormRegister'

export default function Register() {
    return (
            <div className="flex flex-row items-center max-h-screen overflow-hidden">
                <div className="w-9/12 bg-gray-400 overflow-hidden image-full ">
                    <img className="min-w-full" alt="" src="https://images.unsplash.com/photo-1524946274118-e7680e33ccc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>

                <div className="mx-auto ">
                    <FormRegister/>
                </div>

            </div>
    )

            
}
