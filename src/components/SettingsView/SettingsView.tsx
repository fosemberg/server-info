import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";
import './SettingsView.css';

interface IProps {
  connectionStatus?: 'off' | 'on';
  runStatus?: 'off' | 'on';
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
      <div className='container'>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Статус соединения
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={connectionStatus}
            disabled={true}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Текущий статус выполнения
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={runStatus}
            disabled={true}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Текущее время заддержки
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={timeDelay.toString()}
            disabled={true}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default SettingsView;