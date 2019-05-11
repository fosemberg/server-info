import {IAction} from "../../utils/redux";
import {fetchStateJson, IStoreState} from "../index";
import {SYNCHRONIZE} from "./constants";

export const synchronize = () => (dispatch: any, getState: () => IStoreState) => {
  fetchStateJson(getState().settings.ip)
    .then(
      json => {
        dispatch(synchronizeAction(json))
      }
    )
}

export const synchronizeAction = (json: any): IAction =>
  ({
    type: SYNCHRONIZE,
    payload: {
      json
    }
  })