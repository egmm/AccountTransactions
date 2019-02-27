import React from 'react';
import userLogo from '../assets/img/user-logo.png';
import './index.css';


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

const SideMenu = ({ provider, balance, symbol }) => {
    return (
        <div id="side-menu-container">
            <SideElement name='user-info'>
                <img src={userLogo} alt="" />
                <span id="username">{provider.title}</span>
            </SideElement>
            <SideElement name='balance' >
                <h5>Account balance</h5>
                <p>{`${symbol[balance.currency_iso]}${balance.amount}`}</p>
            </SideElement>
            <SideElement name='menu-list'>
                <MenuList active='transactions' />
            </SideElement>
            <div id='logout'>Logout</div>
        </div>
    );
}

export default SideMenu;