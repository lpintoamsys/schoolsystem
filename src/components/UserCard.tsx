import React from 'react'
import Image from 'next/image';
import morepng from '../../public/more.png';

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-[11px] bg-white px-2 py-2 rounded-full text-green-600'>2024/25</span>
        <Image src={morepng} alt='more' width={20} height={20} />
      </div>
      <h1 className='text-2xl font-semibold my-4'>2,234</h1>
      <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  )
}

export default UserCard