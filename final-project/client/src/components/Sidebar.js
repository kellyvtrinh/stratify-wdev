import React from "react";
import "./Sidebar.css"
import SidebarOptions from "./SidebarOptions";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';

function Sidebar() {
 
    return (
        <div className="sidebar">
            {/* TODO: replace this with logo */}
            <h1>Sidebar</h1>

            {/* TODO: add icons */}
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={AnalyticsIcon} title="Analytics" />

        </div>
    );
}

export default Sidebar;