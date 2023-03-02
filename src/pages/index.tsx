import Head from 'next/head'
import { useState, useEffect } from 'react';
import { MockUserData } from '@/mocks/mockUserData';
import AppHeader from '@/components/AppHeader/AppHeader';
import Link from 'next/link';
import UserCard from '@/components/cards/UserCard';
import { UserType } from '@/types/user.type';
import useListUsers from '@/hooks/useListUsers';

export default function Home() {

  const listUsers = useListUsers();

  return (
    <>
      <AppHeader
        title="ホームページ "
      />

      <div className='text-center'>
        <div className="flex py-4 justify-center">
          <a href='https://vinhisme.site/' target='_blank' className='font-semibold text-green-600 text-lg hover:underline'>
            TNVINH00
          </a>
        </div>
        {listUsers.map((user) => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </>
  )
}
