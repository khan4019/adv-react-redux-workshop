import React from 'react';

const Header = ({cart}) => {
    const heartStyle = `sprite icon ${(cart.length)?'heart-filled':'heart-empty'}`
    const sizeStyle={
        display:cart.length?'inline':'none',
        fontWeight:700,
        color:'#e94949'
    }
    return (
        <div className="header">
            <div className="icon-container">
                <div className="sprite icon logo-icon"></div>
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>
                <div style={{width:'20%'}}></div>
                <div className={heartStyle}></div>
                <sup style={sizeStyle}>{cart.length}</sup>
                <div className="sprite icon profile"></div>
            </div>
        </div>
    );
};

export default Header;