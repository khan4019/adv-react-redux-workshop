import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
    cart:state
})

const HeaderWithProps = ({cart}) => (
    <Header cart={cart}></Header>
)

const HeaderContainer = connect(
    mapStateToPros
)(HeaderWithProps);

export default HeaderContainer;