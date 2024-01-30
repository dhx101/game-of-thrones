import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <ul>
            <li><Link to={"/characters"}>Personajes</Link></li>
            <li><Link to={"/houses"}>Houses</Link></li>
            <li><Link to={"/chronology"}>Chronology</Link></li>
        </ul>
  )
}

export default Links
