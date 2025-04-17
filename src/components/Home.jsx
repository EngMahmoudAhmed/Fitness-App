import React from 'react';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
// src/components/Home.js

const Home = () => {
    return (
        <section className="flex items-center justify-center bg-black">
                <div className='flex flex-col items-start justify-center h-140 text-white p-36'>
                    <h1 className='font-bold text-4xl pb-10 tracking-wide poppins-bold'>Build Your <br></br><span className='text-teal-500 mt-10'> Dream Physique </span></h1>
                    <p className='loading-<5> font-sans'>Lorem ipsum dolor sit, bus earum, aliquam ipsa repellat iusto esse laudantium animi vitae consectetur obcaecati.</p>
                    <Link to='/signup' >
                    <button className='bg-teal-500 hover:bg-teal-700 text-white px-10 py-2 mt-8 rounded-3xl cursor-pointer'>Join Us</button>
                    </Link>
                    </div>
            <img className='h-140 bg-cover' src={hero} height={10} />
        </section>
    );
};

export default Home;