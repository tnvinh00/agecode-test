import { UserType } from '@/types/user.type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserCard = ({ user }: { user: UserType }) => {
  return (
    <div className="flex items-center justify-center p-2">
      <Link href={`/user/${user.id}`} className=''>
        <Image
          src={user?.avatar || ''}
          alt=""
          width={1000}
          height={1000}
          className="object-cover mx-auto cursor-pointer w-16 h-16 shadow-sm rounded-full hover:opacity-90 transition duration-150 ease-in-out hover:shadow-lg hover:scale-105"
        />
        <h5 className="mt-4 mb-1 text-sm font-medium text-gray-900 dark:text-white">
          {user.name}
        </h5>
      </Link>
    </div>
  )
}

export default UserCard