import {React, useState, useContext, useEffect} from 'react'
import Layout from '../../Components/Layout'
import { AuthContext } from "../../Auth/auth";
import CardProducts from '../../Components/Products/CardProducts';
import axios from 'axios';
import { useRouter } from 'next/router'
import Link from 'next/Link';
import CartModal from '../../Components/Modal/CartModal/CartModal';

export default function Products() {
    const router = useRouter()
    const {Auth, setAuth} = useContext(AuthContext)
    const [detailModal, setDetailModal] =  useState(false)
    if(Auth.user) {
        const {name,email,_id,cart} = Auth.user
    }
   
    let [products, setProducts] = useState()

    let getProducts = async () =>{
        try {
            const res = await axios.get('http://localhost:3002/products', {
                headers : {
                    Authorization : `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            setProducts(res.data)
        } catch (error) {
            console.log(error)            
        }
}
    const addCart = async (a) => {
        try {
            await axios.post(`http://localhost:3002/cart/${_id}`,a)
            await axios.get(`http://localhost:3002/user/${_id}`).then(res => {
                // console.log(res.data)
                setAuth({user : res.data,
                    token : Auth.token
                })
                console.log(Auth)
            } )
            
            
        } catch (error) {
            console.log(error)
        }
    }
    const detail = async (a) => {
        router.push('/Products/' + a)
        // setDetailModal(!detailModal)
    }
    useEffect(() => {
        getProducts()
    },[])
    console.log(Auth)
    return (
        <Layout>
        <div className="container mx-auto p-4">
             {detailModal && <CartModal item={'hello'} close={() => setDetailModal(!detailModal)} />}
            {!Auth.user && <div className="text-5xl text-center"><Link href="/login">Login here...</Link></div>}
               {Auth.user &&  <h1 className="text-center text-4xl font-bold text-gray-700 uppercase">products</h1>}
                <div className="mt-10 flex flex-row flex-wrap justify-center mx-auto items-center gap-4 w-full">
                  {products  && products.map((a,i) => (
                      <CardProducts clickDetail={() => detail(a.name)}  key={a._id} name={a.name} price={a.price} description={a.description}
                      img={a.img} onClick={() => addCart(a)}
                      />
                  ))}
        </div>
      </div>
            
        </Layout>
    )
}
