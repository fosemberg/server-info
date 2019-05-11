import {IAction} from "../../utils/redux";
import {SET_TIME_DELAY} from "./constants";


export const setTimeDelay = (timeDelay: number) => (dispatch: any) => {
  dispatch(setTimeDelayAction(timeDelay))
}

export const setTimeDelayAction = (timeDelay: number): IAction =>
  ({
    type: SET_TIME_DELAY,
    payload: {
      timeDelay
    }
  })