import React from "react";
import { useRouter } from "next/router";

export default function CardLogin(props) {
  const router = useRouter();
  return (
    <div>
      <div className="card bg-center image-full h-1/4 w-1/2 mx-auto overflow-hidden">
        <figure className="overflow-hidden bg-center">
          <img
            alt="default"
            className="bg-center"
            src="https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </figure>
        <div className="justify-start card-body shadow-2xl">
          <h2 className="card-title">Please login..</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div className=" w-full ">
            <form onSubmit={props.onSubmit} className="form-control">
              <label className="label">
                <span className="label-text text-white">Username</span>
                <a href="#" className="label-text-alt text-white">
                  Need help?
                </a>
              </label>
              <input
              onChange={props.name}
              name='name'
                type="text"
                placeholder="username"
                className="input bg-opacity-20 text-white font-semibold text-center  input-bordered"
              />
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
              onChange={props.password}
              name='password'
                type="text"
                placeholder="Password"
                className="input bg-opacity-20 text-white font-semibold text-center input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt text-white">
                  Forgot username?
                </a>
              </label>
              <button type="submit" className="btn btn-md btn-outline btn-info">
                Submit
              </button>
            </form>
          </div>

          <div className="card-actions">
            <button onClick={() => router.push('/register')} className="btn btn-md btn-info">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
