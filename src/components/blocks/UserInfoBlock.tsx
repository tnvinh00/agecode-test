import Avatar from '@/components/common/Avatar';
import { UserType } from '@/types/user.type';
import { convertDateFromNow } from '@/utils/function';
import Image from 'next/image';
import { useRouter } from 'next/router';

export type IUserInfoBlockProps = {
  user: UserType
}

const UserInfoBlock = (props: IUserInfoBlockProps) => {
  const { user } = props
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0 bg-white flex items-center shadow z-10 w-full py-3 px-2">
        <Image
          src='/images/chevron_left.svg'
          width={20}
          height={20}
          alt=""
          onClick={() => router.back()}
          className='h-7 w-7 cursor-pointer hover:scale-105 hover:shadow rounded-full transform transition duration-300 ease-in-out'
        />
        <h1 className='text-base w-full text-center font-bold text-gray-900'>
          {user?.role}
        </h1>
      </div>
      <Image
        width={500}
        height={500}
        className="object-cover w-full h-32 -mb-8 mt-12"
        src={user.cover || ''}
        alt=""
      />
      <div className="px-4 mb-6">
        <Avatar
          size='md'
          src={user.avatar}
        />
        <h2 className='text-base font-bold text-gray-900 mt-4'>
          {user.name}
        </h2>
        <p className='text-xss mt-2 text-gray-400'>
          最終ログイン：{convertDateFromNow(user.lastLogin)}
        </p>
      </div>
    </>
  )
}

const defaultProps: IUserInfoBlockProps = {
  user: {
    id: '1',
    name: '梅村 さおり',
    avatar: 'https://images.unsplash.com/photo-1677629828138-3794ff1653c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    email: 'TNVINH99@gmail.com',
    lastLogin: '2021-03-28T09:00:00.000Z',
    audios: [],
    role: 'カウンセラー',
    videos: [],
    links: [],
    bio: 'User Bio',
    cover: 'https://images.unsplash.com/photo-1677607240655-3bc840ede271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  }
}

UserInfoBlock.defaultProps = defaultProps

export default UserInfoBlock