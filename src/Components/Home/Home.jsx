import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdCastForEducation } from "react-icons/md";
import { GrArticle } from "react-icons/gr";

const Home = () => {
    return (
        <div class="flex">
            <aside class="h-screen sticky top-0 bg-gray-100 p-5">
                <div>
                <header className=' flex justify-between items-center gap-'>
                    <div className="">
                        <h1 className='text-2xl font-bold text-blue-700'>Mentalthy.</h1>
                    </div>
                    <div className=" p-2 rounded bg-gray-300">
                        <FaAngleRight className=' font-bold' />
                    </div>
                </header>
                <section className=' mt-8'>
                    <h1 className=' text-slate-400'>General</h1>
                    <ul className='flex justify-center flex-col gap-6 ml-2'>
                        <li className='flex items-center text-slate-700 font-semibold '> <FaUserDoctor /> Psycologist</li>
                        <li className='flex items-center text-slate-700 font-semibold '> <MdOutlineDashboard  /> Dashboard</li>
                        <li className='flex items-center text-slate-700 font-semibold '> <SlCalender /> Calender</li>
                        <li className='flex items-center text-slate-700 font-semibold '> <MdCastForEducation /> Education</li>
                        <li className='flex items-center text-slate-700 font-semibold '> <GrArticle /> Blog</li>
                        
                        <h1 className='text-slate-400 -ml-2'>Task</h1>

                        <li className='flex items-center text-slate-700 font-semibold '> <FaUserDoctor /> Chat</li>
                        <li className='flex items-center text-slate-700 font-semibold '> <FaUserDoctor /> Settings</li>
                    </ul>
                </section>
                </div>
            </aside>

            <main>
      
            </main>
        </div>
    )
}

export default Home
