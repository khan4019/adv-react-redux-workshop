import React, { Component } from 'react';
import data from '../data/productData.json';
import Post from './Post.js';
import Header from './Header';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }
    
    componentDidMount() {
        this.setState({products:data})
    }
    

    render() {
        const {cart, products, toggleToCart} = this.props;
        console.log(this.props);
        return (
            <>
            <div className="feed">
                <h1>This is Feed</h1>
                {
                    products.map(product=>
                        <Post
                            key={product.id}
                            product={product}
                            toggleToCart = {toggleToCart}
                            liked={cart.includes(product.id)}
                            >{product.name}</Post>
                        )
                }
            </div>
            </>
        );
    }
}

export default Feed;