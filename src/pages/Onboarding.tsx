import React from 'react';
import { useNavigate } from 'react-router-dom';
import { walletAdapter } from '@mysten/sui';

const Onboarding: React.FC = () => {
    const navigate = useNavigate();
    
    const handleConnectWallet = async () => {
        // placeholder logic for wallet connection
        console.log("Connecting to wallet...");
        navigate('/dashboard');
};

 return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500'>
        <div className='text-center'>
            <h1 className='text-white text-4xl font-bold mb-4'>Welcome to Sui Market</h1>
            <p className='text-gray-300 mb-8'>Connect your wallet to get started.</p>
            <button
            className='bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-md hover:bg-indigo-100'
            onClick={handleConnectWallet}
            >
               Connect Wallet 
            </button>
        </div>
    </div>
 )

}

export default Onboarding;