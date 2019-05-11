import {connect} from "react-redux";
import {IStoreState} from "../../store";
import {setTimeDelay} from "../../store/settings";
import ui from './SettingsEdit';

export default connect(
  (state: IStoreState) =>
    ({
      timeDelay: state.settings.timeDelay,
    }),
  {
    setTimeDelay,
  }
)(ui)