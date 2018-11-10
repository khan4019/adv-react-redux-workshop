import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {product} = this.props;
        return (
            <div className="post">
                <img 
                    style={{width:'300px'}}
                    src={product.url} alt=""/>
                <div className="icon-container">
                    <div className="sprite icon heart-empty"></div>
                    <div className="sprite icon comment"></div>
                </div>
            </div>
        );
    }
}

export default Post;