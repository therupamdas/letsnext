"use client"
import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDebounceValue } from 'usehooks-ts';

const Postcom = () => {
    const [username, setUsername] = useState('');
    const [usernameMessage, setUsernameMessage] = useState('');
    const [isCheckingUsername, setIsCheckingUsername] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const debouncedUsername = useDebounceValue(username,300);
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