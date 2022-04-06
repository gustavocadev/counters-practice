import { useReducer } from "react"
import { doIncreaseBy, doReset } from "./actionsCreators/actions"
import { counterReducer } from "./state/counterReducer"
import { CounterState } from "./types/types"

type Props = {
  initialValue?: number
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

const CounterReducerComponent = ({}: Props) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  const { counter } = state

  // actions
  const handleReset = () => {
    dispatch(doReset())
  }
  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value))
  }

  return (
    <>
      <h1>Counter Reducer Segmentado: {counter}</h1>
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default CounterReducerComponent
