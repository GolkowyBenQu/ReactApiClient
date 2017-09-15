import React from 'react'

const OneItem = (props) => {
  return (
    <li>
      {props.item} <a data-value={props.item} onClick={props.onClick}>usuń</a>
    </li>
  )
}

export default OneItem