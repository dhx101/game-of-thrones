import React, { useContext } from 'react'
import { ApiContext } from '../../context/Context'
import { useParams } from 'react-router'

function DetailHouses() {
  const { houses} = useContext(ApiContext)
  const {id} = useParams()
  // console.log(houses[id])
  const newId = id-1;
  console.log(houses[newId])
  return (
    <div >
      
      <div  className="fondo2"key={houses.id}>
        <h1> {houses[newId].name}</h1>
        <h1>SEDE</h1>
        <p>{houses[newId].settlement}</p>
        <h1>REGION</h1>
        <p>{houses[newId].region}</p>
        <h1>ALIANZAS</h1>
        <p>{houses[newId].alliances}</p>
        <h1>RELIGICIONES</h1>
        <p>{houses[newId].religions}</p>
        <h1>FUNDACION</h1>
        <p>{houses[newId].foundation}</p>
        <div >    
        <img  src={houses[newId].image} alt={houses[newId].name} />
        </div>
      </div>
    
  </div>
  )
}

export default DetailHouses
