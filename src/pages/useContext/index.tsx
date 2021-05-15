import React, { createContext, useState } from 'react'
import Context from '@/components/UseContextExample/UseContextExampleA'

export const UserContext = createContext()
export const HobbyContext = createContext()

const IndexPage = () => {
  return <Context />
}

export default IndexPage
