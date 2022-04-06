import { ActionCounter } from "../actionsCreators/actions"
import { CounterState } from "../types/types"

const counterReducer = (state: CounterState, action: ActionCounter) => {
  switch (action.type) {
    case "increaseBy":
      return {
        ...state,
        previous: state.counter,
        counter: state.counter + action.payload,
        changes: state.changes + 1,
      }
    case "RESET":
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
export { counterReducer }
