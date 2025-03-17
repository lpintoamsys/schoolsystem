import React from 'react'
import searchpng from '../../public/search.png';
import messagepng from '../../public/message.png';
import announcementpng from '../../public/announcement.png';
import avatarpng from '../../public/avatar.png';
import Image from 'next/image';


const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* Search Bar */}
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
                <Image src={searchpng} alt="search" width={14} height={14} />
                <input type="text" placeholder='Search...' className='rounded-full px-4 h-6 outline-none w-[200px] font-bold' />
            </div>
            {/* User and Icons */}
            <div className='flex items-center gap-6'>
                
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <Image src={messagepng} alt="message" width={20} height={20} />
                </div>

                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                    <Image src={announcementpng} alt="message" width={20} height={20} />
                    <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>2</div>
                </div>


                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-bold text-md'>John Doe</span>
                    <span className='text-[12px] text-grey-500 text-right'>Admin</span>
                </div>
                <Image src={avatarpng} alt=''width={36} height={36} className='rounded-full' />

            </div>
        </div>
    )
}

export default Navbar