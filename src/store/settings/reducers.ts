import {IAction} from "../../utils/redux";
import {SET_IP, SET_IS_WORKING, SET_TIME_DELAY} from "./constants";
import {ISettings} from "./stateDeclaration";

const defaultState: ISettings = {
  ip: '-',
  isWorking: true,
  timeDelay: 2,
}

export const settings = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case SET_IP:
      return {
        ...state,
        ip: action.payload.ip
      }
    case SET_IS_WORKING:
      return {
        ...state,
        isWorking: action.payload.isWorking
      }
    case SET_TIME_DELAY:
      return {
        ...state,
        timeDelay: action.payload.timeDelay
      }
    default:
      return state
  }
}