"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

const Profile = () => {

  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push('/')
  }
  else
    {return (
      <div className='profile'>
        <img src={session.user.image}></img>
        <div className="info">
          <h1>{session.user.name}</h1>
          <h4>Email:  {session.user.email}</h4>
          <h4>Username:  {session.user.username}</h4>

        </div>

      </div>
    )}
}

export default Profile