import React from 'react';

const Cart = ({products}) => {
    console.log(products);
    return (
        <div className="feed">
            {
                products.map(product=>
                    <img 
                        key={product.id+200}
                        style={{width:'300px'}}
                        src={product.url} alt=""/>
                    )
            }
        </div>
    );
};

export default Cart;