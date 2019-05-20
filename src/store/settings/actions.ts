import {IAction} from "../../utils/redux";
import {fetchStateJson, IStoreState} from "../index";
import {CHECK_CONNECTION_STATUS, SET_IP, SET_IS_WORKING, SET_TIME_DELAY} from "./constants";

export const checkConnectionStatus = (ip?: string) => (dispatch: any, getState: () => IStoreState) => {
  fetchStateJson(ip ? ip : getState().settings.ip, 'shallow=true')
    .then(
      json => {
        dispatch(checkConnectionStatusAction(!!json))
      }
    )
}

export const checkConnectionStatusAction = (isConnected: boolean): IAction =>
  ({
    type: CHECK_CONNECTION_STATUS,
    payload: {
      isConnected
    }
  })

export const setIp = (ip: string) => (dispatch: any, getState: () => IStoreState) => {
  dispatch(setIpAction(ip))
  checkConnectionStatus(ip)(dispatch, getState)
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