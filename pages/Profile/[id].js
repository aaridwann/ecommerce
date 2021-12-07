import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from 'axios'
import Layout from "../../Components/Layout"
import CardUser from "./CardUser"

const User = () => {
let [name,setname] = useState()
let password = ''
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState()
    const [editMode, setEditMode] = useState(false)
    const [user, setUser] = useState({
        name:'',
        password:'',
        email:'',
        address:{
            city: 'serang',
            provincy :''
        },
        contact:{
            instagram:'',
            phone:''
        }
    })
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:3002/user/${id}`)
                .then(res => { return res.data })
                .then(result => setData(result))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    console.log(editMode)
    return (
        <Layout>
            {data ?
                <div className="card lg:card-side border-2 border-gray-200 shadow-2xl mt-20  ">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title" >{data.name}
                            <div className="badge mx-2">Serang</div>
                        </h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Instagram</button>
                            <label className="label"> 
                                <input type="text" placeholder={data.password}  disabled={editMode} className="input input-info input-bordered"/>
                                <button onClick={() => setEditMode(!editMode)} className="btn btn-sm btn-info mx-4">Click for edit</button>
                           {!editMode && <span className="label-text-alt bg-red-500 p-2 rounded-xl text-lg text-white ">Save</span>}
                            </label>
                                <div className="form-control">
                                    {/* <input type="text" placeholder={data.password} className="input input-info input-bordered" />
                                    <label className="label">
                                        <span className="label-text-alt">Edit Mode On !</span>
                                        <span onClick={() => setEditMode(!editMode)} className="btn btn-sm btn-primary">Cancel</span>
                                    </label> */}
                                </div>
                        </div>
                          
                    </div>
                </div>
                : <h1 className="text-center mt-20 text-3xl text-gray-600">Loading...</h1>}

        </Layout>
    )
}

export default User