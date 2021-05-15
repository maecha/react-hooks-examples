import React, { createContext, useState } from 'react'
import ContextA from '@/components/UseContextExample/UseContextExampleA'

type UserContextData = {
  name: string
  age: number | null
}

const userContextData: UserContextData = {
  name: '',
  age: null,
}

export const UserContext = createContext(userContextData)
export const HobbyContext = createContext('')

const IndexPage = () => {
  userContextData.name = 'せいや'
  userContextData.age = 32
  const [user] = useState(userContextData)
  const [hobby] = useState('キャンプ')
  return (
    <div className="IndexPage">
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <ContextA />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default IndexPage
