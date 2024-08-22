"use client"
import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDebounceValue } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { Form } from 'react-hook-form';

const Postcom = () => {
    const [username, setUsername] = useState('');
    const [usernameMessage, setUsernameMessage] = useState('');
    const [isCheckingUsername, setIsCheckingUsername] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const debouncedUsername = useDebounceValue(username,300);
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(reqpostSchema),
        defaultValues:{
            username:'',
            name:'',
            email:'',
            image:'',
            orderofclient:'',

        }
        
    })
    const onSubmit = async() =>{

    }
    return (
        <Form className="apost">
            <div className="clientbox">
                Post a Request
            </div>
            <textarea placeholder="How can we help you?" className="inputorder"></textarea>
            <button className="cbt subutton" >
                Submit
            </button>
        </Form>
    )
}

export default Postcom