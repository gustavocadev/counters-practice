export type ActionCounter =
  | { type: "increaseBy"; payload: number }
  | { type: "RESET" }

export const doReset = (): ActionCounter => ({
  type: "RESET",
})

export const doIncreaseBy = (value: number): ActionCounter => ({
  type: "increaseBy",
  payload: value,
})
