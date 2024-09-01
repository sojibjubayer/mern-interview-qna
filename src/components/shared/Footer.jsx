import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white shadow-md h-28 mt-10'>
            <p className='text-center pt-10'>Developed by <Link className='text-[#FF7777] ' href="https://jubayer-hossain-portfolio.web.app/">Jubayer Hossain</Link></p>
            <p className="text-black text-center py-3 text-sm ">Copyright © webdevelopment-qna. All rights reserved. 2024</p>
        </div>
    );
};

export default Footer;