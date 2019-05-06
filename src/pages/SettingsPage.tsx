import React from 'react';
import SettingsEdit from "../components/SettingsEdit/SettingsEdit";
import SettingsView from "../components/SettingsView/SettingsView";

const SettingsPage = () => {
  return (
    <div className='settings-page'>
      <SettingsEdit/>
      <SettingsView/>
    </div>
  );
};

export default SettingsPage;