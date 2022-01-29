import './clubChat.css'
import CloseButton from "react-bootstrap/CloseButton";

const InfoBar = (props) => (
  <div className="info-bar">
    {props.room}
    {props.cookiesUser && props.cookiesUser === props.clubCreator ? 
      <div style={{float:"right", marginRight:"5px"}}>
        <CloseButton onClick={props.clear}/>
      </div>
    : null}
  </div>
)

export default InfoBar
