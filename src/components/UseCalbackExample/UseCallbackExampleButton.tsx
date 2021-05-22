import React from 'react'

const Button = React.memo(({ handleClick, value }) => {
  console.log('Button child component', value)
  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  )
})

export default Button
