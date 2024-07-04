"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"

const Community = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Careers</li>
              {
                session &&
                <div>
                    <div className="visiual_01">
                        <div id="backcircle"></div>
                        <img id="logopic" src={session.user.image} alt="ok"></img>
                    </div>
                    <b>{session.user.name}</b>
                </div>
              }
          </ul>
            

        </div>
        <div className="postbar">
          <div className="apost">
            <div className="clientbox">
              Rupam Das
            </div>
            <div className="order">
              ok
            </div>
          </div>
          <div className="apost">
            <div className="clientbox">
              Rupam Das
            </div>
            <div className="order">
              ok
            </div>
          </div>
          <div className="apost">
            <div className="clientbox">
              Rupam Das
            </div>
            <div className="order">
              ok
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Community