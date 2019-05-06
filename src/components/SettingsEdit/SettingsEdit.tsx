import React from 'react';
import {Form} from "react-bootstrap";
import './SettingsEdit.css';

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
      <div className='container'>
        <Form>
          <Form.Group>
            <Form.Label>
              Подключиться
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="192.168.1.1"
              defaultValue={ip}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type='checkbox'
              label='Работает'
              defaultChecked={isWorking}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Задержка
            </Form.Label>
            <Form.Control
              placeholder="60"
              defaultValue={timeDelay.toString()}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SettingsEdit;