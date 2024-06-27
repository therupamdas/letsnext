"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
const Profile = () => {

  const { data: session } = useSession();

  if (!session) {
    const router = useRouter();
    router.push('/')
  }
  else
    {return (
      <div className='profile'>
        <Image src={session.user.image}></Image>
        <div className="info">
          <h1>{session.user.name}</h1>
          <h4>Email:  {session.user.email}</h4>
          <h4>Username:  {session.user.username}</h4>

        </div>

      </div>
    )}
}

export default Profile