import {IAction} from "../../utils/redux";
import {SET_TIME_DELAY} from "./constants";
import {ISettings} from "./stateDeclaration";

const defaultState: ISettings = {
  timeDelay: 2
}

export const settings = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case SET_TIME_DELAY:
      return {
        ...state,
        timeDelay: action.payload.timeDelay
      }
    default:
      return state
  }
}