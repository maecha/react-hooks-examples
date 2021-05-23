import React, { useRef } from 'react'

const IndexPage = () => {
  const inputElm = useRef(null)
  const handleClick = () => {
    inputElm.current.focus()
    console.log('inputEl.current:', inputElm.current)
  }

  return (
    <>
      <input ref={inputElm} type="text" />
      <button onClick={handleClick}>入力エリアをフォーカスする</button>
    </>
  )
}

export default IndexPage
