import React, { useContext } from 'react'
import { AuthContext } from '../Auth/auth'
import Layout from '../Components/Layout'

export default function Index() {
  const {Auth, setAuth} = useContext(AuthContext)

  return (
      <Layout>
        <h1 className="text-center">Home</h1>
       
      </Layout>
      
  )
}
