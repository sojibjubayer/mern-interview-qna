import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white shadow-md md:flex h-14 items-center justify-between font-semibold hidden'>
            <div className='bg-[#FF7777] flex items-center h-full px-2'>
                Interview QnA
            </div>
            <ul className='flex gap-10 relative'>
                <li><Link href="/" className='px-2 py-1'>Home</Link></li>
                <li className='relative group'>
                    <Link href="/" className=''>Frontend Interview QnA</Link>
                    <ul className='absolute left-0 top-full bg-white border border-gray-200 rounded-md shadow-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                        <li className='px-4 py-2 border-b border-gray-200'><Link href="/">HTML5</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200'><Link href="/">CSS3</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200'><Link href="/">JAVASCRIPT</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200'><Link href="/">REACT</Link></li>
                        <li className='px-4 py-2'><Link href="/">NEXTJS</Link></li>
                    </ul>
                </li>
                <li><Link href="/" className='px-2 py-1'>Backend Interview QnA</Link></li>
                <li><Link href="/" className='px-2 py-1'>Others</Link></li>
            </ul>
            <div className='bg-[#FF7777] flex items-center h-full px-2'>
                Login
            </div>
        </div>
    );
};

export default Navbar;
