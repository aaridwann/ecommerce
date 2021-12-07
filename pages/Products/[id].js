import { useRouter } from "next/router"

const Product = () => {
    const router = useRouter()
    const { id } = router.query
      console.log(id)
    return <p>Product: 
      {/* {id} */}
      </p>
  }

  export default Product