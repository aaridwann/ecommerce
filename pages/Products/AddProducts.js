import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Auth/auth'

export default function AddProducts(props) {
    const {Auth, setAuth} = useContext(AuthContext)
    const [data, setData] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        quantity: '',
        img: ''
    })
    const change = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }
    const reset = (e) => {
        setData({name:'',price:'',category:'',description:'',quantity:'',img:''})
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3002/products/${Auth.user._id}`,data)
            const user =  await axios.get(`http://localhost:3002/user/${Auth.user._id}`)
            setAuth({ user: user.data, token: Auth.token }) 
            sessionStorage.setItem('user', JSON.stringify(user.data)),
            sessionStorage.setItem('token', Auth.token)
            reset()
            console.log(Auth)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div className="inset-0 fixed z-50 mx-auto justify-center items-center flex bg-gray-800 bg-opacity-30 flex-wrap ">
            <div className="modal-box">
                <div>
                    <div className="p-10 card bg-base-200">
                        <div>
                        <button onClick={props.close} className="btn btn-sm btn-error float-right z-50 font-extrabold btn-outline " >X</button>
                        <h1 className="text-center text-2xl font-bold text-gray-500">Add Product</h1>
                        </div>
                        <form onSubmit={submit} className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={change} name="name" type="text" placeholder="name" value={data.name} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group ">
                                <span>Rp.</span>
                                <input onChange={change} name="price" type="text" placeholder="12.000" value={data.price} className="input input-bordered" />
                                <span>USD</span>
                            </label>
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select value={data.category}  onChange={change} name="category" className="select select-bordered w-full max-w-xs "  >
                                <option disabled="disabled" selected="selected">Choose Category</option>
                                <option>Makanan</option>
                                <option>Minuman</option>
                                <option>Mobil</option>
                                <option>kebutuhan rumah tangga</option>
                            </select>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input value={data.description} onChange={change} name="description" type="text" placeholder="description" className="textarea h-24 textarea-bordered" />
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input value={data.quantity} onChange={change} name="quantity" type="number" placeholder="Quantity" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input value={data.img} onChange={change} name="img" type="text" className="file" />
                            <button onClick={submit} type="submit" className=" m-4 w-7/12 mx-auto btn btn-md btn-info" >Submit</button>
                        </form>
                            <div className="flex justify-between">
                            <button  onClick={reset} className=" m-4  mx-auto btn btn-md btn-error btn-outline " >Reset</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
