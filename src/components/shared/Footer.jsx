import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white shadow-md md:h-28 mt-10'>
            <p className='text-center text-sm md:pt-10 pt-5'>Developed by <Link className='text-[#FF7777] ' href="https://jubayer-hossain-portfolio.web.app/">Jubayer Hossain</Link></p>
            <p className="text-black text-center py-3 text-sm ">copyright © webdevelopment-qna - 2024 </p>
        </div>
    );
};

export default Footer;