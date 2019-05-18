import React from 'react'
import ExportButton from "../components/LoadButton/ExportButton"
import Params from "../components/Params/container"

const ParamsPage = () => {
  return (
    <div className="params-page">
      <Params/>
      <ExportButton/>
    </div>
  );
};

export default ParamsPage;