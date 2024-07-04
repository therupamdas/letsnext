import React from "react";
import { reqs } from "@/db/connectDb";
import Sidebar from "@/components/Sidebar";




const Community = () => {

  return (
    <>
      <div className="container">
        {/* <div className="sidebar">
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
                  <img id="circle" src={userimage} alt="ok"></img>
                </div>
                <b className="nomt">
                  {userkaname}
                </b>
              </div>
            }
          </ul>


        </div> */}
        <Sidebar/>
        <div className="postbar">
          <div className="apost">
            <div className="clientbox">
              Post as
            </div>
            <input placeholder="How can we help you?" className="inputorder"></input>
            <button className="cbt subutton" >Submit</button>
          </div>
          {reqs.map((user, index) => (

          <div className="apost">
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