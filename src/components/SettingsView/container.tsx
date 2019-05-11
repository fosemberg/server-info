import {connect} from "react-redux";
import {IStoreState} from "../../store";
import ui from './SettingsView';

export default connect(
  (state: IStoreState) =>
    ({
      timeDelay: state.settings.timeDelay,
    })
)(ui)