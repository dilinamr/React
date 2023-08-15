import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClipboardUser,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';
function Sidebar(){
    return(
<div id="side-container">
        <ul>
          <li>< FontAwesomeIcon icon={faUser} className="i"/><h4>STUDENTS</h4></li>
          <li><FontAwesomeIcon icon={faClipboardUser} className="i" /><h4>STAFF</h4></li>
          <li><FontAwesomeIcon icon={faGraduationCap} className="i" /><h4>EXAMS</h4></li>
        </ul>
      </div>
    );
}
export default Sidebar;