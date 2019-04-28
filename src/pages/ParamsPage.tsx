import React from 'react'
import LoadButton from "../components/LoadButton/LoadButton"
import Params from "../components/Params/container"

const ParamsPage = () => {
  return (
    <div className="params-page">
      <Params/>
      <LoadButton/>
    </div>
  );
};

export default ParamsPage;