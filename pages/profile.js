import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { AuthContext } from "../Auth/auth";
import Layout from "../Components/Layout";
import CartModal from "../Components/Modal/CartModal/CartModal";
import CardProfile from "../Components/profile/CardProfile";
import Link from "next/Link";
import CardUser from "./Profile/CardUser";
import {useRouter} from "next/router";

export default function Profile() {
    const router = useRouter()
    const { Auth, setAuth } = useContext(AuthContext);
    let [modal, setModal] = useState(false);
    let [user, setUser] = useState()
    if (Auth.user) {
        const { name, email, cart, _id } = Auth.user;
        const item = () => {
            return (
                <div className="flex flex-col gap-5 mx-auto ">
                    {cart.map((a, i) => (
                        <div key={i + 1} tabIndex="0" className="collapse w-96 mx-auto border rounded-box border-base-300">
                            <div className="collapse-title text-xl font-medium">{a.name}</div>
                            <div className="collapse-content bg-base-100 ">
                                <div className="flex flex-row items-center justify-around px-4 ">
                                    <p> {a.description} </p>
                                    <div onClick={() => removeCart(a)} className="btn btn-sm btn-error">Remove</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        };
    }
    const cartModal = () => {
        setModal(!modal);
    };
    const removeCart = async (a) => {
       try {
        const response = await axios.delete(`http://localhost:3002/cart/${_id}`,{
            data: a
        })   
        const user = await axios.get(`http://localhost:3002/user/${_id}`)
        setAuth({
            user: user.data,
            token: Auth.token
        })
        sessionStorage.setItem('user',JSON.stringify(user.data)),
                    sessionStorage.setItem('token',Auth.token)
       } catch (error) {
           console.log(error)
       }
    }
    const getUser = async () => {
        try {
            await axios.get('http://localhost:3002/user')
            .then(res => {return res.data})
            .then(user => {return setUser(user)})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()
    },[])
    const userDetail = (a) => {
        router.push('/Profile/'+ a )
    }

    const follow = async (a) => {
        const following = Auth.user.following.filter((x) => x==a)
        if(following){
            return(<button className="btn btn-success">unFollow</button>)
        }
        console.log(following)
        // const response = await axios.post(`http://localhost:3002/follow/${Auth.user._id}`,{"id":a})
        // console.log(response)


    }
        console.log(Auth.user.length)
    return (
        <Layout>
            {modal && <CartModal item={item()} close={() => setModal(!modal)} />}
            <div className=" container w-3/4 mx-auto mt-10">
            {Auth.user ? <CardProfile
                    followers={Auth.user.followers.length}
                    following={Auth.user.following.length}
                    cartModal={cartModal}
                    name={Auth.user.name}
                    cart={cart ? cart.length : "0"}
                    email={email}
            />
            : <div className="text-center text-5xl"><Link href="/login">Login here. . .</Link></div>}
            </div>
                {user ? 
                <div className="container mx-auto mt-10 flex flex-col gap-8 items-center justify-center">
                    <div className="container mx-auto overflow-x-scroll border-2 border-gray-200 rounded-3xl shadow-2xl ">
                    <h1 className=" text-3xl font-bold text-gray-600 text-center mt-4 ">Explore User</h1>
                        <div className="inline-flex gap-8 p-8">
                        {user.map((a) => (
                            <CardUser follow={(e) => follow(a._id)} testfollow={'unfollow'} key={a._id} name={a.name} onClick={() => userDetail(a._id)} />
                        ))}
                        </div>
                    </div>
                </div>
               :<h1 className="text-center mt-20 text-3xl text-gray-600">Loading...</h1> }
        </Layout>
    );
}
