import { useReducer, useState } from "react"

type Props = {
  initialValue?: number
}

type CounterState = {
  counter: number
  previous: number
  changes: number
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

type ActionCounter =
  | {
      type: "increaseBy"
      payload: number
    }
  | {
      type: "reset"
    }

const counterReducer = (state: CounterState, action: ActionCounter) => {
  switch (action.type) {
    case "increaseBy":
      return {
        ...state,
        previous: state.counter,
        counter: state.counter + action.payload,
        changes: state.changes + 1,
      }
    case "reset":
      return {
        ...state,
        counter: 0,
        previous: 0,
        changes: 0,
      }
    default:
      return state
  }
}

const CounterReducerComponent = ({}: Props) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  const { counter } = state

  // actions
  const handleReset = () => {
    dispatch({ type: "reset" })
  }
  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: value })
  }

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
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
