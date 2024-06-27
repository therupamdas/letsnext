import React from 'react'
import connectDB from '@/db/connectDb';
import { findUserByUsername } from '@/db/paramwala';
import Image from 'next/image';

const Username = async ({ params }) => {
    connectDB;
    const user = await findUserByUsername(params.username);
    console.log(user);
    return (
        <>
            <section className="fmn">
                <Image className="usercoverpic" src={`${user.coverimage}`} alt="coverpic" ></Image>
                <Image className="userpic" src={`${user.image}`} alt="coverpic" ></Image>

                <h2>{params.username}</h2>
                <div>{`${params.username.toLowerCase()}@gmail.com`}</div>
                <p>Welcome to Vring, your all-in-one destination for unleashing creativity through video editing, photo editing, and website design. At Vring, we believe in transforming ideas into captivating visual experiences that resonate with your audience.</p>
            </section>
        </>

    )
}

export default Username