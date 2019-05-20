import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";
import './SettingsView.css';

interface IProps {
  isConnected?: boolean;
  isWorking?: boolean;
  timeDelay?: number;
}

const SettingsView = (
  {
    isConnected = false,
    isWorking = false,
    timeDelay = 2
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
            value={isConnected ? 'on' : 'off'}
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
            value={isWorking ? 'on' : 'off'}
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