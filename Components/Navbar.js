import Link from 'next/Link'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Auth/auth';
import {useRouter} from 'next/router'

export default function Navbar() {
  const router = useRouter()
const {Auth, setAuth} = useContext(AuthContext)

const logout = () => {
  sessionStorage.clear()
  setAuth({
    user:'',
    token:''
  })
  router.push('/login')
}

  return (
    <div>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">{Auth.user ? Auth.user.name : 'Ecommerce Example'}</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            <Link href="/"><a className="btn btn-ghost btn-sm rounded-btn">Home</a></Link>
            <Link href="/products"><a className="btn btn-ghost btn-sm rounded-btn">Products</a></Link>
            {Auth.user && 
            <Link href="/profile"><a className="btn btn-ghost btn-sm rounded-btn">Profile</a></Link>
            }

            {Auth.user ? 
            <button onClick={logout} className="btn btn-ghost btn-sm rounded-btn">Logout</button>
            :
            <Link href="/login"><a className="btn btn-ghost btn-sm rounded-btn">Login</a></Link>
            }
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
