import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liked:false
        }
    }

    toggleLike = () => {
        this.setState({liked:!this.state.liked})
    }
    
    render() {
        const {product, toggleToCart} = this.props;
        const liked = this.state.liked;
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
                            () => {
                                toggleToCart(product.id)
                                this.toggleLike()
                            }
                        }
                    ></div>
                    <div className="sprite icon comment"></div>
                </div>
            </div>
        );
    }
}

export default Post;