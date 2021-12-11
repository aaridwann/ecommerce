import { React, useState, useContext, useEffect } from 'react'
import Layout from '../../Components/Layout'
import { AuthContext } from "../../Auth/auth";
import CardProducts from '../../Components/Products/CardProducts';
import axios from 'axios';
import { useRouter } from 'next/router'
import Link from 'next/Link';
import CartModal from '../../Components/Modal/CartModal/CartModal';
import Pagination from '../../Components/Products/Pagination';

export default function Products() {
    let [products, setProducts] = useState()
    let [paginate, setPaginate] = useState(0)
    const router = useRouter()
    const { Auth, setAuth } = useContext(AuthContext)
    const [detailModal, setDetailModal] = useState(false)
    if (Auth.user) {
        const { name, email, _id, cart } = Auth.user
    }
    let getProducts = async () => {
        try {
            const res = await axios.get('http://localhost:3002/products', {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const addCart = async (a) => {
        try {
            await axios.post(`http://localhost:3002/cart/${_id}`, a)
            await axios.get(`http://localhost:3002/user/${_id}`).then(res => {
                // console.log(res.data)
                setAuth({
                    user: res.data,
                    token: Auth.token
                })
                console.log(Auth)
            })


        } catch (error) {
            console.log(error)
        }
    }
    const detail = async (a) => {
        router.push('/Products/' + a)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Layout>
            <div className="container mx-auto p-4">
                {detailModal && <CartModal item={'hello'} close={() => setDetailModal(!detailModal)} />}
                {!Auth.user && <div className="text-5xl text-center"><Link href="/login">Login here...</Link></div>}
                {Auth.user && <h1 className="text-center text-4xl font-bold text-gray-700 uppercase">products</h1>}
                <div className="mt-10 flex flex-row flex-wrap justify-center mx-auto items-center gap-4 w-full">
                    {products && products.slice(paginate, paginate + 4).map((a) => (
                        <CardProducts clickDetail={() => detail(a.name)} key={a._id} name={a.name} price={a.price} description={a.description}
                            img={a.img} onClick={() => addCart(a)}
                        />
                    ))}
                    <div className="mt-4">
                        <div className="btn-group">
                            {paginate}
                            {/* {products.length} */}
                            <button onClick={() => setPaginate(paginate == 0 ? paginate : paginate - 4)} className="btn btn-outline btn-wide">Previous Page</button>
                            <button onClick={() => setPaginate(paginate == 4*products.length/4-products.length%4 ?  paginate : paginate + 4 )} className="btn btn-outline btn-wide">Next Page</button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
