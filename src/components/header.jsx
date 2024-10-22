import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <div className='header-container'>
            <div className='w-full h-auto head'>
                <div className="filtre w-full h-auto py-8">
                    <h1 className="text-center text-5xl font-bold mb-2 text-white">MENU & PRICING</h1>
                    <h2 className="text-center text-4xl font-bold mb-8 text-[#da9f5b]">Competitive Pricing</h2>
                </div>
            </div>
            <div className="torn-paper py-8"></div>
        </div>
    );
}

export default Header;