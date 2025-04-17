import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log('Form submitted', data)
    }

    return (<>
        <section className='p-10 w-fit border-gray-500 mx-auto'>
            <div className='w-xl mx-auto bg-cyan-950 text-amber-50 p-7 rounded-lg'>
                <h2 className='font-bold text-2xl text-center pb-5'>Create an Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex justify-between items-center text-white'>
                        <div className='w-full'>
                            <div>
                                <label className='flex ' htmlFor="Email">Email</label>
                                <input
                                    type="email"
                                    className='w-full p-3 mt-2 border border-gray-300 rounded-lg mb-4 text-amber-100'
                                    id='Email'
                                    placeholder='Enter your Email'
                                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className='flex ' htmlFor="Password">Password</label>
                                <input 
                                    type="text"
                                    className='w-full p-3 mt-2 border border-gray-300 rounded-lg mb-4 text-amber-100'
                                    id='Password'
                                    placeholder='Enter your Password'
                                    {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='bg-teal-700 hover:bg-teal-500 cursor-pointer w-full rounded-3xl border-none p-2'>Login</button>
                        <p className="p-1 text-md flex justify-end text-gray-500 sm:mt-0 ">

                            <Link to='/forget-password' className="text-gray-300 underline"> Forget Password?</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </section>

    </>
    )
}