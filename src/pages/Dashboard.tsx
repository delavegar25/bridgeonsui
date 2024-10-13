import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NFT  { // structure the object of the NFT name, image, and ID
    id: string;
    name: string;
    image: string;
}

const Dashboard: React.FC = () => {
    const [nfts, setNFTs] = useState<NFT[]>([]);
    const [userName, setUserName] = useState("John doe");
    const [profileImage, setProfileImage] = useState("./images/default-image.jpg");
    const navigate = useNavigate();

    useEffect(() => {
        // Placeholder NFT data
        const MockNFTs = [
            { id: "1", name: "Studio mirai", image: "./images/Sui-image.jpg"},
          ];
        setNFTs(MockNFTs)
    }, []);

    const handleSignOut = () => {
      console.log("Signing out....");
      navigate('/'); // redirect to home page
    }

    const handleEditProfile = () => {
      // logic for editing the profile here
    }

    

    return (
        <div className='min-h-screen bg-black p-8'>
          {/* Header section */}
           <div className='flex justiy-between items-center mb-8'>
            <div className='flex items-center space-x-4'>
             <img src="./images/Sui-image.jpg" alt="bg-image" 
             className='w-280 h-40'
             />
            </div>

            <div className='absolute right-80'>
              <img
               src = './images/sui play.jpg'
               alt = "Profile"
               className='w-16 h-16 rounded-full object-cover cursor-pointer'
               onClick={handleEditProfile}
                />
            
              <h1 className='text-2xl font-bold text-gray-800'>{userName}</h1>
              <button
              onClick={handleEditProfile}
              className='text-indigo-600 underline text-sm' 
              >
                Edit Profile 
              </button>
        
          <button 
          onClick={handleSignOut}
          className='bg-red-500 text-white px-2 py-2 rounded-lg shadow-md hover:bg-red-600'>
            Sign out 
          </button>
           </div>
          </div>  
          <Link to='/collection' className='mb-2 inline-block text-indigo-600'>
            View Collections 
          </Link>

        </div>
    )
}

export default Dashboard;