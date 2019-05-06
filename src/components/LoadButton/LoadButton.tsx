import React from 'react';
import {Button} from "react-bootstrap";
import {stateUrl} from "../../store";
import './LoadButton.css';


const LoadButton = () => {
  return (
    <div className='load-button'>
      <Button
        variant="outline-secondary"
        href={stateUrl}
        type='button'
      >
        Экспортировать данные
      </Button>
    </div>
  );
};

export default LoadButton;