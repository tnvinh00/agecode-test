import { UserType } from "@/types/user.type"
import { useState, useEffect } from 'react';

const useListUsers = () => {
  const [listUsers, setListUsers] = useState<UserType[]>([])
  
  useEffect(() => {
    const getUsers = async () => {
      const { users } = await fetch('/api/users').then((res) => res.json())
      setListUsers(users)
    }
    getUsers()
  }, [])

  return listUsers
}

export default useListUsers