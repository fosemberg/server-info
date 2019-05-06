import React from 'react';

interface IProps {
  ip?: string;
  isWorking?: boolean;
  timeDelay?: number;
}

const SettingsEdit = (
  {
    ip = '-',
    isWorking = false,
    timeDelay = 60,
  }: IProps
) => {
  return (
    <div className='settings-edit'>
      <form>
        <div>
          <label>Подключиться</label>
          <input type='text' value={ip}/>
        </div>
        <div>
          <label>Работает</label>
          <input type='checkbox' checked={isWorking}/>
        </div>
        <div>
          <label>Задержка</label>
          <input type='text' value={timeDelay}/>
        </div>
      </form>
    </div>
  );
};

export default SettingsEdit;