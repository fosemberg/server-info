import {IAction} from "../../utils/redux";
import {fetchStateJson} from "../index";
import {SYNCHRONIZE} from "./constants";

export const synchronize = () => (dispatch: any) => {
  fetchStateJson()
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