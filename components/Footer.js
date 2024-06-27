import React from 'react'

const Footer = () => {
    return (
        <footer>
        <section className="footrow">
            <div className="f1" id="fb">
                <a className="f2" href="https://www.youtube.com/channel/UCNaHDMLiuWCrKtYi0sTJVzQ" target="_main">
                    <img src="/YT.png" alt="fb" />
                </a>
            </div>
            <div className="f1" id="ig">
                <a className="f2" href="https://www.instagram.com/fitwithrupamdas/" target="_main">
                    <img src="/IG.png" alt="Ig" />
                </a>
            </div>
            <div className="f1" id="yt">
                <a className="f2" href="https://www.youtube.com/channel/UCNaHDMLiuWCrKtYi0sTJVzQ" target="_main">
                    <img src="/YT.png" alt="Yt" />
                </a>
            </div>
        </section>
        <section className="footrow">
            Made by Rupam Das
        </section>
    </footer>
    )
}

export default Footer