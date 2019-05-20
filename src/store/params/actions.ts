import {IAction} from "../../utils/redux";
import {fetchStateJson, IStoreState} from "../index";
import {checkConnectionStatusAction} from "../settings/actions";
import {SYNCHRONIZE} from "./constants";

export const synchronize = () => (dispatch: any, getState: () => IStoreState) => {
  fetchStateJson(getState().settings.ip)
    .then(
      json => {
        if (json) {
          dispatch(checkConnectionStatusAction(true))
          dispatch(synchronizeAction(json))
        } else {
          dispatch(checkConnectionStatusAction(false))
        }
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