import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white shadow-md md:flex h-14 items-center justify-between font-semibold hidden'>
            <div className='bg-[#FF7777] flex items-center h-full px-2'>
                Interview QnA
            </div>
            <ul className='flex gap-10 relative'>
                <li><Link href="/" className='px-2 py-1 hover:text-[#fe7070]'>Home</Link></li>
                <li className='relative group'>
                    <Link href="/" className='hover:text-[#fe7070]'>Frontend Interview QnA</Link>
                    <ul className='absolute z-20 left-0 hidden space-y-2 bg-white border rounded-sm group-hover:block'>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/html5qna">HTML5</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/css3qna">CSS3</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/javascriptqna">JAVASCRIPT</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/reactqna">REACT</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/nextjsqna">NEXTJS</Link></li>
                        <li className='px-4 py-2 hover:text-[#FF7777]'><Link href="/reduxqna">REDUX</Link></li>
                    </ul>
                </li>
                <li className='relative group'>
                    <Link href="/" className='hover:text-[#fe7070]'>Backend Interview QnA</Link>
                    <ul className='absolute z-20 left-0 hidden space-y-2 bg-white border rounded-sm group-hover:block'>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/nodejsqna">NODEJS</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/expressjsqna">EXPRESSJS</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/mongodbqna">MONGODB</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/mongooseqna">MONGOOSE</Link></li>
                        <li className='px-4 py-2 border-b border-gray-200 hover:text-[#FF7777]'><Link href="/jwtqna">JWT</Link></li>
                        
                    </ul>
                </li>
             
                <li><Link href="/" className='px-2 py-1 hover:text-[#fe7070]'>Others</Link></li>
                <li><Link href="/admin" className='px-2 py-1 hover:text-[#fe7070]'>Admin</Link></li>
            </ul>
            <div className='bg-[#FF7777] flex items-center h-full px-2'>
                Login
            </div>
        </div>
    );
};

export default Navbar;
