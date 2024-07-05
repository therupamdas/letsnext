"use client"
import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

const Postcom = () => {
    const [username, setUsername] = useState('')
    return (
        <div className="apost">
            <div className="clientbox">
                Post a Request
            </div>
            <textarea placeholder="How can we help you?" className="inputorder"></textarea>
            <button className="cbt subutton" >
                Submit
            </button>
        </div>
    )
}

export default Postcom