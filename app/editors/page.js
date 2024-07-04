import React from 'react';
import Link from 'next/link';
import connectDB,{ users } from '@/db/connectDb';


const Editors = () => {
    connectDB();
    return (
        <div className="edilist">
            {users.map((user, index) => (
                <Link key={index} className="ed" href={`/editors/${user.username}`}>
                    <div className="glow2">
                        <div id="backcircle"></div>
                        <img src={user.image} alt={user.name}></img>
                    </div>
                    <div className="ediname">
                        {user.name}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Editors