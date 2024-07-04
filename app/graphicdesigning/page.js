import React from 'react'
import { reqs } from '@/db/connectDb'
import Link from 'next/link'

const graphicdesigning = () => {
  return (
    <div>
        {reqs.map((user, index) => (
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

export default graphicdesigning