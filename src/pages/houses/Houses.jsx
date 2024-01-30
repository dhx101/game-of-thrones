import React, { useContext } from 'react'
import { ApiContext } from '../../context/Context'

const Houses = () => {
    const {houses} = useContext(ApiContext)
    console.log(houses.data);
  return (
    <div>
      Houses
    </div>
  )
}

export default Houses
