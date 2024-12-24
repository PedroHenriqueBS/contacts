import { Overlay } from "./styles";

import ReactDom from 'react-dom';

export default function Loader(){
  return ReactDom.createPortal(
    <Overlay>
     <div className="loader"></div>
    </Overlay>,
    document.getElementById('loader-root')
  );
}