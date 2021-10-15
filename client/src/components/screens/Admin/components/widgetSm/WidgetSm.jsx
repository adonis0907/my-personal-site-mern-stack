import './widgetSm.css'
import avatar from './mohamad.jpg'
import {Visibility} from '@material-ui/icons'

export default function WidgetSm(){
  return(
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src={avatar} alt='' className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mohamad Siysinyuy</span>
              <span className="widgetSmUserTitle">Software Engineer</span>

            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src={avatar} alt='' className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mohamad Siysinyuy</span>
              <span className="widgetSmUserTitle">Software Engineer</span>

            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src={avatar} alt='' className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mohamad Siysinyuy</span>
              <span className="widgetSmUserTitle">Software Engineer</span>

            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src={avatar} alt='' className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mohamad Siysinyuy</span>
              <span className="widgetSmUserTitle">Software Engineer</span>

            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src={avatar} alt='' className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mohamad Siysinyuy</span>
              <span className="widgetSmUserTitle">Software Engineer</span>

            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
            </button>
          </li>
      </ul>
    </div>
  )
}
