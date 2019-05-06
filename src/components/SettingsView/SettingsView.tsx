import React from 'react';

interface IProps {
  connectionStatus?: string;
  runStatus?: string;
  timeDelay?: number;
}

const SettingsView = (
  {
    connectionStatus = 'off',
    runStatus = 'off',
    timeDelay = 60
  }: IProps
) => {
  return (
    <div className='settings-view'>
      <div>Статус соединения: <span>{connectionStatus}</span></div>
      <div>Текущий статус выполнения: <span>{runStatus}</span></div>
      <div>Время заддержки: <span>{timeDelay}</span></div>
    </div>
  );
};

export default SettingsView;