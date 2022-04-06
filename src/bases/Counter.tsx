import { useState } from "react"

type Props = {
  initialValue: number
}

const Counter = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  )
}

export default Counter
