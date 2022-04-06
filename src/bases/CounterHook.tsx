import { useCounter } from "../hooks/useCounter"

type Props = {}

const CounterHook = ({}: Props) => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 1,
  })

  return (
    <>
      <h1 ref={elementToAnimate}>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleClick} ref={elementToAnimate}>
        +1
      </button>
    </>
  )
}

export default CounterHook
