import React from "react";
import "./Sidebar.css"
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* TODO: replace this with logo */}
            <h1>Sidebar</h1>

            <SidebarOptions title="Home"></SidebarOptions>
            <SidebarOptions title="Analytics"></SidebarOptions>

        </div>
    );
}

export default Sidebar;