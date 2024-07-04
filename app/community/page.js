"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";


const Community = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li className="dim">Home</li>
            <li className="dim">About</li>
            <li className="dim">Services</li>
            <li className="dim">Contact</li>
            <li className="dim">Blog</li>
            <li className="dim">Portfolio</li>
            <li className="dim" >Careers</li>
            {
              !session &&
              <div className="bod1 roe dim">
                <div >
                  <img id="circle" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="ok"></img>
                </div>
                <b className="nomt">
                  Please Login
                </b>
              </div>
            }
            {
              session &&
              <div className=" bod1 roe dim">
                <div >
                  <img id="circle" src={session.user.image} alt="ok"></img>
                </div>
                <b className="nomt">
                  {session.user.name}
                </b>
              </div>
            }
          </ul>


        </div>
        <div className="postbar">
          <div className="apost">
            <div className="clientbox">
              Post
            </div>
            <input placeholder="How can we help you?"className="inputorder"></input>
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