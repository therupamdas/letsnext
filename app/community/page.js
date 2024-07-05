import React from "react";
import { reqs } from "@/db/connectDb";
import Sidebar from "@/components/Sidebar";
import Postcom from "@/components/Postcom";






const Community = () => {
  

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="postbar">


          <Postcom />
          






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