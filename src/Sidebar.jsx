import './Sidebar.css';
import { useState } from 'react';

const apps = [
    { title: "Dota 2", url: "https://cdn.simpleicons.org/dota2" },
    { title: "League of Legends", url: "https://cdn.simpleicons.org/leagueoflegends" },
    { title: "Valorant", url: "https://cdn.simpleicons.org/valorant" },
    { title: "PUBG", url: "https://cdn.simpleicons.org/pubg" },
    { title: "Counter Strike", url: "https://cdn.simpleicons.org/counterstrike" }
];


function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);


    const toggleCollapse = () => setCollapsed(prev => !prev);

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>

            <div className='sidebar-head'>
                <h2 className="title">Games</h2>
                <button onClick={toggleCollapse} className="toggle-button">
                    <img src="https://assets.website-files.com/60509a2bb55f3484764c0832/60509d3de156c83421f583d9_hamburger.svg" alt="ham" height={20} width={20} />
                </button>

            </div>
            <div className="apps">
                {apps.map((app, index) => (
                    <button key={index} className='app-button'>
                        <img src={app.url} alt={app.title} className="app-icon" />
                        { !collapsed &&<span className='app-title'>{app.title}</span>}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
