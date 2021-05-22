import React from 'react'

const Count = React.memo(({ text, countState }) => {
  console.log('Count child component', text)
  return (
    <p>
      {text}: {countState}
    </p>
  )
})

export default Count
