import React from 'react';
import { useNavigate } from 'react-router-dom';


const Onboarding: React.FC = () => {
    const navigate = useNavigate();
    
    const handleConnectWallet = async () => {
        // placeholder logic for wallet connection
        console.log("Connecting to wallet...");
        navigate('/dashboard');
};

 return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500'
    style={{ backgroundImage: `url("./images/sui wallpaper.jpeg")`,
        backgroundSize: "cover", // Ensure the image covers the screen
        backgroundPosition: "center", // Centre the image 
        backgroundAttachment: "fixed", // Keep the background fixed on scroll
    }}
    role='main'
    aria-label='Sui Wallpaper'
    >
        <div className='text-center bg-white bg-opacity-20 p-10 rounded-xl shadow-2xl max-w-md'>
            <h1 className='text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg'>Welcome to Sui Market</h1>
            <p className='text-lg text-gray-400 mb-10 leading-relaxed'>Connect your wallet to get started.</p>
            <button
            className='bg-gray-500 text-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105'
            onClick={handleConnectWallet}
            >
               Connect Wallet 
            </button>
        </div>
    </div>
 )

}

export default Onboarding;