import React from "react";
import Image from "next/image";

export default function cardProfile(props) {

  const myLoader = ({src, width, quality}) => {
    return `https://images.pexels.com/photos/10004698/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div>
      <div className="card lg:card-side border-2 border-gray-200 shadow-2xl">
        <figure>
          {/* <img className="w-60" alt="" src="pexels-photo-10004698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260" /> */}
          <Image alt="heheh" loader={myLoader} width={300} src="pexels-photo-10004698.jpeg" height={400} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-2xl">{props.name}</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div className="card-actions">
            <button onClick={props.cartModal} className="btn btn-primary">Your Cart have {props.cart} items</button>
            <button className="btn btn-ghost">{props.email}</button>
          </div>
          <div className=" flex flex-row w-full gap-8 mx-auto mt-4 text-2xl font-bold text-gray-700">
              <div className="flex-col items-center justify-center bg-gray-300 rounded-xl p-4 text-center">
              <h1>Followers</h1>
              <p>1.5M</p>
              </div>
              <div className="flex-col items-center justify-center bg-gray-300 rounded-xl p-4 text-center">
              <h1>Following</h1>
              <p>679</p>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}
