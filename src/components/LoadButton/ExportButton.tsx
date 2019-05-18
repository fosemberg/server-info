import React from 'react';
import {Button} from "react-bootstrap";
import {stateUrl} from "../../store";
import './ExportButton.css';


const ExportButton = () => {
  return (
    <div className='export-button'>
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

export default ExportButton;