import React from 'react'
import connectDB from '@/db/connectDb';
import { findUserByUsername } from '@/db/paramwala';

const Username = async ({ params }) => {
    connectDB;
    const user = await findUserByUsername(params.username);
    console.log(user);
    return (
        <>
            <section className="fmn">
                <img className="usercoverpic" src={`${user.coverimage}`} alt="coverpic" ></img>
                <img className="userpic" src={`${user.image}`} alt="coverpic" ></img>

                <h2>{params.username}</h2>
                <div>{`${params.username.toLowerCase()}@gmail.com`}</div>
                <p>Welcome to Vring, your all-in-one destination for unleashing creativity through video editing, photo editing, and website design. At Vring, we believe in transforming ideas into captivating visual experiences that resonate with your audience.</p>
            </section>
        </>

    )
}
//72gPQEixYPCV37qj
export default Username

