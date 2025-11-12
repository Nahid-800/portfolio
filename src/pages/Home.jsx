import React from 'react';
import { Link } from 'react-router-dom';
import Hiro from './Hiro';
import Vision from './Vision';
import Offer from './Offer';
import DebitCard from './DebitCard';
import PerfectCard from './PerfectCard';
import UserComment from './UserComment';
import IIiit from './IIiit';
// Navber ইম্পোর্ট এবং ব্যবহারের অংশটি এখান থেকে সরানো হয়েছে
import { IoStar } from "react-icons/io5";

function HomePage() {
  return (
    <div>
      {/* Navbar এখন আর এখানে নেই */}

      <div className='md:pt-0'>
        <Hiro />
        <Vision />
        <Offer />
        <DebitCard />
        <PerfectCard />
        <UserComment />
        <IIiit />
      </div>

      <div className='flex justify-center items-center'>
        <div className='h-72 w-72  rounded-full bg-cyan-500 relative ani '>
          <div className='absolute rounded-full top-0 w-72 h-64 bg-gray-900 z-40 '>
            <div className=' absolute  top-[20%] left-[50%] transorm -translate-x-1/2 translate-y-1/2'>
              <Link to="/admin-login" > <IoStar className='text-8xl' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;