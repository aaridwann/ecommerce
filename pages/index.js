import React, { useContext } from 'react'
import { AuthContext } from '../Auth/auth'
import Layout from '../Components/Layout'
import CardUser from './Profile/CardUser'
import TestCard from './TestCard'

export default function Index() {
  const {Auth, setAuth} = useContext(AuthContext)
  const user = Auth.user

  return (
      <Layout>
        <h1 className="text-center">Home</h1>
        <TestCard user={user}/>
      </Layout>
  )
}
