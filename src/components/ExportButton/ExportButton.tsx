import React from 'react';
import {Button} from "react-bootstrap";
import {stateUrl} from "../../store";
import './ExportButton.css';

interface IProps {
  ip: string;
}

class ExportButton extends React.PureComponent<IProps, {}> {
  private jsonpCallbackName = 'getExportJson'

  constructor(props: IProps) {
    super(props)
  }

  public componentDidMount() {
    (window as any)[this.jsonpCallbackName] = (exportObj: any) => {
      const exportName = 'export';
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
  }

  public render() {
    return (
      <div className='export-button'>
        <a
          onClick={this.download}
        >
          <Button
            variant="outline-secondary"
            type='button'
          >
            Экспортировать данные
          </Button>
        </a>
      </div>
    );
  }

  private download = () => {
    const {
      props: {
        ip
      }
    } = this

    // jsonp download
    const script = document.createElement("script");
    script.src = `${stateUrl}/${ip}.json?callback=${this.jsonpCallbackName}`;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default ExportButton;