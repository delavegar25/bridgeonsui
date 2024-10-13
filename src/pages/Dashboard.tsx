import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NFT  { // structure the object of the NFT name, image, and ID
    id: string;
    name: string;
    image: string;
}

const Dashboard: React.FC = () => {
    const [nfts, setNFTs] = useState<NFT[]>([]);

    useEffect(() => {
        // Placeholder NFT data
        const MockNFTs = [
            { id: "1", name: "Cool dude", image: "./images/nfts.jpg"},
        ];
        setNFTs(MockNFTs)
    }, []);

    return (
        <div className='min-h-screen bg-gray-500 p-8'>
          <h1 className='text-3xl font-bold mb-8'>My Dashboard</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {nfts.map((nft: { id: React.Key | null | undefined; image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => (
                <div key={nft.id} className='bg-white p-4 shadow-lg rounded-lg'>
                   <img src={nft.image} className='w-full h-64 object-cover mb-4 rounded cursor-pointer' />
                   <h2 className='text-xl font-semibold'>{nft.name}</h2>
                    </div>
            ))}
          </div>
          <Link to='/collection' className='mt-8 inline-block text-indigo-600'>
            View Collections 
          </Link>

        </div>
    )
}

export default Dashboard;