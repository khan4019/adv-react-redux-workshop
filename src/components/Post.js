import React, { Component } from 'react';

class Post extends Component {

    render() {
        const {product, liked, toggleToCart} = this.props;
        const heartClass = `sprite icon ${liked ? 'heart-filled': 'heart-empty'}`
        return (
            <div className="post">
                <img 
                    style={{width:'300px'}}
                    src={product.url} alt=""/>
                <div className="icon-container">
                    <div 
                        className={heartClass}
                        onClick={
                            () =>toggleToCart(product.id)
                        }
                    ></div>
                    <div className="sprite icon comment"></div>
                </div>
            </div>
        );
    }
}

export default Post;