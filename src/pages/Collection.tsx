import React, { useState, useEffect } from 'react';

interface NFT {
    id: string;
    name: string;
    image: string;
}

const Collection: React.FC = () => {
    const [collection, setCollection] = useState<NFT[]>([]);

    useEffect(() => {
        // placeholder NFT collection data
        const mockCollection = [
            { id: "1", name: "Art block", image: "./images/nfts1.jpg"},
            { id: "2", name: "Bond bears", image: "./images/Bond bears.png"},
            { id: "3", name: "Abstract art", image: "./images/abstract art.jpg"},
            { id: "4", name: "Studio mirai", image: "./images/Sui-image.jpg"}  
          ];
        setCollection(mockCollection);
    }, []);

    return (
        <div className='min-h-screen bg-black p-8'>
          <h1 className='text-3xl font-bold mb-8'> NFT Collection</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {collection.map((nft) => 
              <div key={nft.id} className="bg-gray-100 p-4 shadow-lg rounded-lg">
              <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover mb-4 rounded cursor-pointer" />
              <h2 className="text-xl font-semibold">{nft.name}</h2>
            </div>
            )}
          </div>
        </div>
    )
}

export default Collection;