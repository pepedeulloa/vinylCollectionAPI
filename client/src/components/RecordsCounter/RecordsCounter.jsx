import "./RecordsCounter.css"

import React from 'react'

const RecordsCounter = ({ text, counter }) => {
 return (
  <h2>
   {text} - {counter}
  </h2>
 )
}

export default RecordsCounter