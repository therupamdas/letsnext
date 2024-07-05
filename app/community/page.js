import React from "react";
import { reqs } from "@/db/connectDb";
import Sidebar from "@/components/Sidebar";




const Community = () => {

  return (
    <>
      <div className="container">
        <Sidebar/>
        <div className="postbar">
          <div className="apost">
            <div className="clientbox">
              Post a Request 
            </div>
            <textarea placeholder="How can we help you?" className="inputorder"></textarea>
            <button className="cbt subutton" >Submit</button>
          </div>
          {reqs.map((user, index) => (

          <div key={index} className="apost">
            <div className="clientbox">
              <img className="clientpic" src={user.image} alt="ok" />
              <p className="clientname">{user.username}</p>
            </div>
            <div className="order">
            <p>{user.orderofclient}</p>
            </div>
            <button className="cbt greenbutton" >Accept</button>
            <button className="cbt redbutton" >Decline</button>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Community