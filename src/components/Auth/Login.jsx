import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Mail, Lock, Loader2 } from 'lucide-react'

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            console.log('Form submitted', data)
            // Add your login logic here
            await new Promise(resolve => setTimeout(resolve, 1000))
        } finally {
            setIsLoading(false)
        }
    }

    return (<>
        <section className='min-h-screen flex items-center justify-center p-4 bg-gray-50'>
            <div className='w-full max-w-md bg-white shadow-xl rounded-2xl p-8'>
                <h2 className='font-bold text-3xl text-gray-900 text-center mb-6'>Welcome Back</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex justify-between items-center text-white'>
                        <div className='w-full'>
                            <div className='relative'>
                                <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="Email">Email</label>
                                <div className='relative'>
                                    <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5' />
                                    <input
                                        type="email"
                                        className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition-colors'
                                        id='Email'
                                        placeholder='Enter your email'
                                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div className='relative mt-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="Password">Password</label>
                                <div className='relative'>
                                    <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5' />
                                    <input 
                                        type="password"
                                        className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition-colors'
                                        id='Password'
                                        placeholder='Enter your password'
                                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                                    />
                                </div>
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 space-y-4'>
                        <button 
                            type='submit' 
                            disabled={isLoading}
                            className=' cursor-pointer flex items-center justify-center w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                            {isLoading ? (
                                <>
                                    <Loader2 className='animate-spin -ml-1 mr-2 h-5 w-5' />
                                    Processing...
                                </>
                            ) : 'Login'}
                        </button>
                        <p className="text-sm text-center text-gray-600">
                            <Link to='/forget-password' className="text-blue-600 hover:text-blue-700 font-medium">Forgot your password?</Link>
                            <span className='px-2 text-gray-400'>|</span>
                            <Link to='/signup' className="text-blue-600 hover:text-blue-700 font-medium">Sign up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>

    </>
    )
}