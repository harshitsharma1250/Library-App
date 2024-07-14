import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Sign up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-4 space-y-2'>
                <label>Email</label>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-sm text-red-500">Email is required.</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <label>Name</label>
                <input
                  type="text"
                  placeholder='Enter your full name'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-sm text-red-500">Name is required.</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <label>Password</label>
                <input
                  type="password"
                  placeholder='Enter your password'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-sm text-red-500">Password is required.</span>}
              </div>

              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' type="submit">Signup</button>
              </div>
            </form>
            <div className='flex justify-around mt-4'>
              <p className='text-xl'>Have an account? 
                <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>
                  Login
                </button>
              </p>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
