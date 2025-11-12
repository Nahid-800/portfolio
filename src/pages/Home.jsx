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

     
    </div>
  );
}

export default HomePage;