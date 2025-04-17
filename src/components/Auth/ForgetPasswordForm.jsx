import React from 'react'
import { useForm } from 'react-hook-form'

export const ForgetPasswordForm = ({ onSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Mock API call to send reset email
            await fakeSendResetEmail(data.email);
            onSuccess(); // Show success message
        } catch (errors) {
            console.error('Error:', errors);
        }
    };

    return (
        <section className='flex  w-fit p-20 border-gray-500 m-auto'>
            <div>
            <div className='w-xl bg-cyan-950 text-amber-50 p-7 rounded-lg'>
                <h2 className='font-bold text-2xl text-center pb-5'>Forget Password</h2>
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
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email format',
                                        },
                                    })}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type='submit' disabled='isSubmitting' className='bg-teal-700 hover:bg-teal-500 cursor-pointer w-full rounded-3xl border-none p-2'>
                            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
}

// Mock API function
const fakeSendResetEmail = (email) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Reset link sent to ${email}`);
            resolve();
        }, 1500);
    });
};
