import { useState } from "react"

type Props = {
  initialValue?: number
}

type CounterState = {
  counter: number
  clicks: number
}

const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  })

  const { counter, clicks } = counterState

  const handleClick = (count: number) => {
    setCounterState({
      counter: counter + count,
      clicks: clicks + 1,
    })
  }

  return (
    <>
      <h1>Counter By: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}

export default CounterBy
