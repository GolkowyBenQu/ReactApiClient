import React from 'react'
import OneItem from './OneItem'

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map(
        (item, index) => {
          return <OneItem
            key={index}
            item={item}
            onClick={props.onDeleteClick}
          />
        })}
    </ul>
  )
}

export default ItemList