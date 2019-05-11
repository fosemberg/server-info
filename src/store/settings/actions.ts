import {IAction} from "../../utils/redux";
import {SET_IP, SET_IS_WORKING, SET_TIME_DELAY} from "./constants";

export const setIp = (ip: string) => (dispatch: any) => {
  dispatch(setIpAction(ip))
}

export const setIpAction = (ip: string): IAction =>
  ({
    type: SET_IP,
    payload: {
      ip
    }
  })

export const setIsWorking = (isWorking: boolean) => (dispatch: any) => {
  dispatch(setIsWorkingAction(isWorking))
}

export const setIsWorkingAction = (isWorking: boolean): IAction =>
  ({
    type: SET_IS_WORKING,
    payload: {
      isWorking
    }
  })

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