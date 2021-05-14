import React, { useState, useEffect } from 'react'

const EffectFunc = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState({
    lastName: '',
    firstName: '',
  })

  useEffect(() => {
    document.title = `${count}回クリックされました`
    console.log(`再レンダーされました`)
    return () => {
      console.log('clean-upします')
    }
  }, [count])

  return (
    <>
      <h1>カウンター</h1>
      <p>{`${count}回クリックされました`}</p>
      <button onClick={() => setCount((prevState: number) => prevState + 1)}>
        + 1
      </button>
      <button onClick={() => setCount(0)}>0</button>

      <br />
      <br />

      <h1>名前はなあに</h1>
      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form noValidate autoComplete="off">
        <input
          type="text"
          placeholder="Last name"
          value={name.lastName}
          name="lastName"
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value })
          }}
        />
        <input
          type="text"
          placeholder="First name"
          value={name.firstName}
          name="firstName"
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value })
          }}
        />
      </form>
    </>
  )
}

export default EffectFunc
