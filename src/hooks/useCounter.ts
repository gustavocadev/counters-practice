import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
const MAXIMUN_COUNT = 10

type Props = {
  maxCount: number
}

const useCounter = ({ maxCount }: Props) => {
  const [counter, setCounter] = useState(5)
  const elementToAnimate = useRef<any>(null)
  const timeline = useRef(gsap.timeline())

  const handleClick = () => {
    setCounter((currentCounter) => Math.min(currentCounter + 1, MAXIMUN_COUNT))
  }

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return
    timeline.current.to(elementToAnimate.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    })
    timeline.current.to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    })
  }, [])

  useEffect(() => {
    // if (counter < MAXIMUN_COUNT) return
    timeline.current.play(0)
  }, [counter])

  return {
    counter,
    handleClick,
    elementToAnimate,
  }
}
export { useCounter }
