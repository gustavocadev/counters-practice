import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

type Props = {}

const MAXIMUN_COUNT = 10

const CounterEffect = ({}: Props) => {
  const [counter, setCounter] = useState(5)
  const counterRef = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    setCounter((currentCounter) => Math.min(currentCounter + 1, MAXIMUN_COUNT))
  }

  useEffect(() => {
    if (counter < 10) return
    console.log(counterRef)
    console.log(
      "%cSe llego al valor máximo!",
      "color: yellow; background-color: black"
    )
    const timeline = gsap.timeline()

    timeline
      .to(counterRef.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(counterRef.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause()
  }, [counter])

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterRef}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  )
}

export default CounterEffect
