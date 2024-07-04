"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import localfont from "next/font/local";
const gazpacho = localfont({src:"./gazpacho.ttf"});

const Header = () => {
    const { data: session } = useSession()
    return (
        <header>
            <div className="logbox">
                <button className="cross" id="logcross" onClick={() => {document.querySelector(".logbox").classList.remove("active");}}>x</button>
                <h2>Log in </h2>
                <label>Email</label>
                <input type="text" placeholder="Email Id"></input>
                <label>Password</label>
                <input type="text" placeholder="Password"></input>
                <button onClick={() => {document.querySelector(".logbox").classList.remove("active");}}className={`ent ${gazpacho.className}`}>Enter</button>
                <hr className="linebar"></hr>
                <button className={`ent ${gazpacho.className}`} id="gitgit" onClick={() => { signIn("github");document.querySelector(".logbox").classList.remove("active"); }} >GitHub</button>
                <button className={`ent ${gazpacho.className}`} id="googoo" onClick={() => { signIn("google");document.querySelector(".logbox").classList.remove("active");}} >Google</button>
                
            </div>
            <div className="glow">
                <div id="backcircle"></div>
                <img className="emblem" src="/emblem.png"></img>
            </div>
            <div className="user" >
                {!session && <Link href={" "}  className="sinup" onClick={() => {document.querySelector(".logbox").classList.add("active")}}>Log in</Link>}
                {!session && <Link href={" "}  className="sinup">Dash</Link>}
                {session && <Link href={"/profile"} className="sinup">Profile</Link>}
                {session && <Link href={" "}  className="sinup" onClick={() => { signOut() }}>Sign out</Link>}
            </div>
            {
                session &&
                <div className="glow2" id="displaypicture">
                    <div className="visiual_01">
                        <div id="backcircle"></div>
                        <img id="logopic" src={session.user.image}></img>
                    </div>
                    <b>{session.user.name}</b>
                </div>
            }

        </header>
    )
}

export default Header