import React from 'react'
import UseReducerExample1 from '@/components/UseReducerExample/UseReducerExample1'
import UseReducerExample2 from '@/components/UseReducerExample/UseReducerExample2'

const IndexPage = () => {
  return (
    <>
      <h1>stateが1つの場合</h1>
      <UseReducerExample1 />
      <h1>stateが複数の場合</h1>
      <UseReducerExample2 />
    </>
  )
}

export default IndexPage
