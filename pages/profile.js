import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { AuthContext } from "../Auth/auth";
import Layout from "../Components/Layout";
import CartModal from "../Components/Modal/CartModal/CartModal";
import CardProfile from "../Components/profile/CardProfile";
import Link from "next/Link";
import CardUser from "./Profile/CardUser";
import { useRouter } from "next/router";
import ModalFollow from "../Components/profile/ModalFollow";

export default function Profile() {
    const router = useRouter()
    const [seeFollow, setSeeFollow] = useState({ state: '', follow: '' })
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
            const response = await axios.delete(`http://localhost:3002/cart/${_id}`, {
                data: a
            })
            const user = await axios.get(`http://localhost:3002/user/${_id}`)
            setAuth({
                user: user.data,
                token: Auth.token
            })
            sessionStorage.setItem('user', JSON.stringify(user.data)),
                sessionStorage.setItem('token', Auth.token)
        } catch (error) {
            console.log(error)
        }
    }
    const getUser = async () => {
        try {
            await axios.get('http://localhost:3002/user')
                .then(res => { return res.data })
                .then(result => { return setUser(result) })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    const userDetail = (a) => {
        router.push('/Profile/' + a)
    }
    const testfollow = (a) => {
        if (Auth.user) {
            const following = Auth.user.following.find((x) => x == a)
        }
        if (following) {
            return (
                <button onClick={() => unFollow(a)} className="btn btn-md btn-outline btn-info mt-4">unFollow</button>
            )
        } else { return <button onClick={() => follow(a)} className="btn btn-md btn-info mt-4">Follow</button> }
    }
    const follow = async (a) => {
        const response = await axios.post(`http://localhost:3002/follow/${Auth.user._id}`, { "id": a })
        await axios.get(`http://localhost:3002/user/${_id}`).then(res => { setAuth({ user: res.data, token: Auth.token }) })

    }
    const unFollow = async (a) => {
        const response = await axios.post(`http://localhost:3002/unfollow/${Auth.user._id}`, { "id": a })
        await axios.get(`http://localhost:3002/user/${_id}`).then(res => { setAuth({ user: res.data, token: Auth.token }) })

    }
    const notifFollow = (a) => {
        if (Auth.user) {
            const b = Auth.user.followers.map((b) => b)
            const c = Auth.user.following.map((b) => b)
            const filter = b.filter((b) => b == a)
            if (a == b) {
                return (
                    <div className="alert alert-info">
                        <div className="flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <label>Is following you</label>
                        </div>
                    </div>
                )
            } else return ''
        }
    }
    const seeFollowing = async (a) => {
        const res = await axios.post(`http://localhost:3002/seeFollowing`, { "id": a })
            .then(res => {
                return (<div className="container max-h-96 overflow-y-scroll">
                    <h1 className="text-3xls text-center font-bold text-gray-500 mb-8 mt-4">FOLLOWING LIST</h1>
                    {res.data.map((a) =>
                        <div className="card-body flex-col flex p-4 border-2 justify-between border-gray-200 m-4 rounded-xl shadow-md " key={a.id}>
                            <div className="flex flex-row gap-2 items-center justify-between ">
                                <div className=" avatar ">
                                    <img className="rounded-full w-14 h-14" src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
                                </div>
                                <h1 className=" text-gray-500 text-2xls font-bold text-center">{a.name}</h1>
                                {testfollow(a._id)}
                                {/* <button onClick={() => unFollow(a._id).then(() => seeFollowing(Auth.user.following))} className=" justify-self-end btn btn-sm btn-outline btn-primary">Unfollow</button> */}
                            </div>
                        </div>)}
                </div>
                )
            })

            .then(result => { return setSeeFollow({ state: 'seeFollowing', follow: result }) })
    }
    const seeFollowers = async (a) => {
        const res = await axios.post(`http://localhost:3002/seeFollowers`, { "id": a })
            .then(res => {
                return (<div className="container max-h-96 overflow-y-scroll">
                    <h1 className="text-3xls text-center font-bold text-gray-500 mb-8 mt-4">FOLLOWERS LIST</h1>
                    {res.data.map((a) =>
                        <div className="card-body flex-col flex p-4 border-2 justify-between border-gray-200 m-4 rounded-xl shadow-md " key={a.id}>
                            <div className="flex flex-row gap-2 items-center justify-between ">
                                <div className=" avatar ">
                                    <img className="rounded-full w-14 h-14" src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
                                </div>
                                <h1 className=" text-gray-500 text-2xls font-bold text-center">{a.name}</h1>
                                {testfollow(a._id)}
                                {/* <button onClick={() => unFollow(a._id).then(() => seeFollowing(Auth.user.following))} className=" justify-self-end btn btn-sm btn-outline btn-primary">Unfollow</button> */}
                            </div>
                        </div>)}
                </div>
                )
            })

            .then(result => { return setSeeFollow({ state: 'seeFollowing', follow: result }) })
    }

    return (
        <Layout>

            {/* Modal Cart */}
            {modal && <CartModal item={item()} close={() => setModal(!modal)} />}
            {/* END Modal Cart */}


            {/* Card Profile */}
            <div className=" container w-3/4 mx-auto mt-10">
                {Auth.user ? <CardProfile
                    clickFollowing={() => seeFollowing(Auth.user.following)}
                    clickFollowers={() => seeFollowers(Auth.user.followers)}
                    followers={Auth.user.followers.length}
                    following={Auth.user.following.length}
                    cartModal={cartModal}
                    name={Auth.user.name}
                    cart={cart ? cart.length : "0"}
                    email={email}
                />
                    : <div className="text-center text-5xl"><Link href="/login">Login here. . .</Link></div>}
            </div>
            {/* End Card Profile  */}

            {/* Card Explore User  */}
            {user ?
                <div className="container mx-auto mt-10 flex flex-col gap-8 items-center justify-center">
                    <div className="container mx-auto overflow-x-scroll border-2 border-gray-200 rounded-3xl shadow-2xl ">
                        <h1 className=" text-3xl font-bold text-gray-600 text-center mt-4 ">Explore User</h1>
                        <div className="inline-flex gap-8 p-8">
                            {user.map((a) => (
                                <CardUser follow={testfollow(a._id)} notifFollow={notifFollow(a._id)}
                                    key={a._id} name={a.name} clickDetail={() => userDetail(a._id)} />
                            ))}
                        </div>
                    </div>
                </div>
                : <h1 className="text-center mt-20 text-3xl text-gray-600">Loading...</h1>
            }
            {/* End Card User */}
            {/* See Followers && Following */}
            {/* <ModalFollow/> */}
            {seeFollow.state == 'seeFollowing' ? <ModalFollow item={seeFollow.follow} close={() => setSeeFollow({ state: '' })} /> :
            seeFollow.state == 'seeFollowers' ? <ModalFollow item={seeFollow.follow} close={() => setSeeFollow({ state: '' })} />
                    : ''
            }
            {/* END See Followers && Following  */}

        </Layout>
    );
}
