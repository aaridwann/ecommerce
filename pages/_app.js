import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className=" mx-auto bg-gray-100 h-screen w-screen">
    <Component {...pageProps} />
  </div>)
}

export default MyApp
