import React, { useContext, useState } from "react";
import { AuthContext } from "../Auth/auth";
import Layout from "../Components/Layout";
import CartModal from "../Components/Modal/CartModal/CartModal";
import CardProfile from "../Components/profile/CardProfile";

export default function Profile() {
    const {Auth, setAuth} = useContext(AuthContext)
    if(Auth.user){
        const {name,email,cart} = Auth.user
    }
    let [modal, setModal] = useState(false)
    const cartModal = () => {
        setModal(!modal)
    }
    const item = () => {
        return cart.map((a) => a.name)
    }
    console.log(item)
  return (
    <Layout>
      
      {modal && <CartModal item={item} close={() => setModal(!modal)} /> }
      <div className=" container w-3/4 mx-auto">
        <CardProfile cartModal={cartModal} name={name} cart={cart ? cart.length : '0'}  email={email} />
      </div>
    </Layout>
  );
}
