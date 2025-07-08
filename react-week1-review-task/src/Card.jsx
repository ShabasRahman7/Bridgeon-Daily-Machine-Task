import React from 'react'

function Card({datas}) {
  return (
    <div>
        {datas.map((element,index)=>{
            return <p key={index}>{JSON.stringify(element)}</p>
        })}
    </div>
  )
}

export default Card;