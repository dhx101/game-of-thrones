import React, { useContext } from 'react'
import { ApiContext } from '../../context/Context'

const Characters = () => {
    const characters = useContext(ApiContext)
    console.log(characters);
  return (
    <div>
      Character
    </div>
  )
}

export default Characters
