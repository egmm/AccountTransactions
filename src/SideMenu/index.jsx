import React, { Component } from 'react';
import userLogo from '../assets/img/user-logo.png';
import './index.css';

const currencySymbol = { 'GBP': '£', 'USD': '$', 'EUR': '€' };

const SideElement = ({ name, children }) => {
    return (
        <div id={name} className='menu-element'>
            {children}
        </div>
    );
}

const MenuList = ({ active }) => {
    const items = ['balance', 'transactions', 'cards'];
    return (
        <ul id="menu-list">
            {
                items.map(i => (
                    <li
                        id={i}
                        key={i}
                        className={i === active ? 'active' : ''}
                    >
                        {i.charAt(0).toUpperCase() + i.slice(1)}
                    </li>
                ))
            }
        </ul>
    );
}

const SideMenu = () => {
    const symbol = currencySymbol['GBP'];
    return (
        <div id="side-menu-container">
            <SideElement name='user-info'>
                <img src={userLogo} alt="" />
                <span id="username">Ernesto</span>
            </SideElement>
            <SideElement name='balance' >
                <h5>Account balance</h5>
                <p>{`${symbol}${'2900'}`}</p>
            </SideElement>
            <SideElement name='menu-list'>
                <MenuList active='transactions' />
            </SideElement>
            <div id='logout'>Logout</div>
        </div>
    );
}

export default SideMenu;