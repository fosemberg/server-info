import React from 'react';
import {Button, Form} from "react-bootstrap";
import './SettingsEdit.css';

interface IProps {
  ip?: string;
  isWorking?: boolean;
  timeDelay?: number;

  setTimeDelay: (timeDelay: number) => void;
}

interface IState {
  ip: string;
  isWorking: boolean;
  timeDelay: number;
}

class SettingsEdit extends React.PureComponent<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    ip: '-',
    isWorking: false,
    timeDelay: 2,
    setTimeDelay: (timeDelay) => undefined
  }

  constructor(props: IProps) {
    super(props)

    this.state = {
      ip: props.ip!,
      isWorking: props.isWorking!,
      timeDelay: props.timeDelay!,
    }
  }

  public render() {
    const {
      state: {
        ip,
        isWorking,
        timeDelay,
      }
    } = this
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
                defaultValue={timeDelay!.toString()}
                onChange={this.handleTimeDelayChange}
              />
            </Form.Group>
            <Button
              variant="outline-secondary"
              onClick={this.onSave}
            >
              Сохранить
            </Button>
          </Form>
        </div>
      </div>
    );
  };

  private onSave = () => {
    const {
      state: {
        // ip,
        // isWorking,
        timeDelay,
      }
    } = this
    this.props.setTimeDelay(timeDelay)
  }

  private handleTimeDelayChange = (event: any) => {
    this.setState({
      timeDelay: event.target.value
    });
  }
}

export default SettingsEdit;