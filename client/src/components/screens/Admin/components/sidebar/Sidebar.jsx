import React from 'react'
import './sidebar.css'
import {Link} from "react-router-dom"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  BarChart,
  AttachMoney

} from "@material-ui/icons"

export default function Sidebar(){
  return(
    <div className="sidebar">
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                  <Link to="/" className="link">
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebareIcon"/>
                    Home
                  </li>
                  </Link>
                  <li className="sidebarListItem">
                    <Timeline className="sidebareIcon"/>
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <TrendingUp className="sidebareIcon" />
                    Sales
                  </li>

              </ul>
          </div>


          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <Link to='/users' className="link" >
                  <li className="sidebarListItem ">
                    <PermIdentity className="sidebareIcon"/>
                    Users
                  </li>
                  </Link>
                  <Link to="/products" className="link">
                  <li className="sidebarListItem">
                    <Storefront className="sidebareIcon"/>
                    Products
                  </li>
                  </Link>
                  <li className="sidebarListItem">
                    <AttachMoney className="sidebareIcon" />
                    Transactions
                  </li>
                  <li className="sidebarListItem">
                    <BarChart className="sidebareIcon" />
                    Reports
                  </li>

              </ul>
          </div>


          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem ">
                    <MailOutline className="sidebareIcon"/>
                    mail
                  </li>
                  <li className="sidebarListItem">
                    <DynamicFeed className="sidebareIcon"/>
                    Feedback
                  </li>
                  <li className="sidebarListItem">
                    <ChatBubbleOutline className="sidebareIcon" />
                    Messages
                  </li>

              </ul>
          </div>


          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem ">
                    <WorkOutline className="sidebareIcon"/>
                    Manage
                  </li>
                  <li className="sidebarListItem">
                    <Timeline className="sidebareIcon"/>
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <Report className="sidebareIcon" />
                    Reports
                  </li>

              </ul>
          </div>



      </div>
    </div>
  )
}
