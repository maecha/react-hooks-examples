import React, { useState, useCallback } from 'react'
import Title from '@/components/UseCalbackExample/UseCallbackExampleTitle'
import Button from '@/components/UseCalbackExample/UseCallbackExampleButton'
import Count from '@/components/UseCalbackExample/UseCallbackExampleCount'

const IndexPage = () => {
  const [firstCountState, setFirstCountState] = useState(0)
  const [secondCountState, setSecondCountState] = useState(10)

  // +1 ボタンの state セット用関数
  const incrementFirstCounter = useCallback(
    () => setFirstCountState(firstCountState + 1),
    [firstCountState],
  )
  // +10 ボタンの state セット用関数
  const incrementSecondCounter = useCallback(() =>
    setSecondCountState(secondCountState + 10), [secondCountState])

  return (
    <>
      <Title />
      <Count text="+ 1 ボタン" countState={firstCountState} />
      <Count text="+ 10 ボタン" countState={secondCountState} />
      <Button handleClick={incrementFirstCounter} value={'+1 ボタン'} />
      <Button handleClick={incrementSecondCounter} value={'+10 ボタン'} />
    </>
  )
}

export default IndexPage
