import React from 'react'

const Title = React.memo(() => {
  console.log('Title Component')
  return <h2>useCallBackTest</h2>
})

export default Title
