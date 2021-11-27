import React from 'react'
import Sidebar from './Sidebar'
import "./SidebarOptions.css"

function SidebarOptions({ title, Icon }) {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOptions_icon" />}
            {/* Can change style */}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )

}

export default SidebarOptions