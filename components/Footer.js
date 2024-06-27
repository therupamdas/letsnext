import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
        <section className="footrow">
            <div className="f1" id="fb">
                <Link className="f2" href="https://www.youtube.com/channel/UCNaHDMLiuWCrKtYi0sTJVzQ" target="_main">
                    <img src="/YT.png" alt="fb" ></img>
                </Link>
            </div>
            <div className="f1" id="ig">
                <Link className="f2" href="https://www.instagram.com/fitwithrupamdas/" target="_main">
                    <img src="/IG.png" alt="Ig" ></img>
                </Link>
            </div>
            <div className="f1" id="yt">
                <Link className="f2" href="https://www.youtube.com/channel/UCNaHDMLiuWCrKtYi0sTJVzQ" target="_main">
                    <img src="/YT.png" alt="Yt" ></img>
                </Link>
            </div>
        </section>
        <section className="footrow">
            Made by Rupam Das
        </section>
    </footer>
    )
}

export default Footer