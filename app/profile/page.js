"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Profile = () => {

  const { data: session } = useSession()

  if (!session) {
    const router = useRouter()
    router.push('/')
  }
  else
  return (
    <div className='profile'>
      <img src={session.user.image}></img>
      <h1>{session.user.name}</h1>
      <h4>{session.user.email}</h4>
      <h4>{session.user.username}</h4>
    </div>
  )
}

export default Profile