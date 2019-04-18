import React from 'react';
import {stateUrl} from "../../store";
import './LoadButton.css';


const LoadButton = () => {
  return (
    <div className='load-button'>
      <a
        className='load-button_link'
        href={stateUrl}
        download={true}
        target="_blank"
      >Экспортировать данные</a>
    </div>
  );
};

export default LoadButton;