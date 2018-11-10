import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="icon-container">
                <div className="sprite icon logo-icon"></div>
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>
                <div style={{width:'20%'}}></div>
                <div className="sprite icon heart-empty"></div>
                <div className="sprite icon profile"></div>
            </div>
        </div>
    );
};

export default Header;