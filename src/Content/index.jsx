import React, { Component } from 'react';
import './index.css';

const Transaction = ({ category, date, name, value, currency }) => {
    return (
        <React.Fragment>
            <span className='category'>{category}</span>
            <span className='transaction-description'>
                <h3 className='transaction-name'>
                    {name}
                </h3>
                <span className='transaction-date'>
                    {date}
                </span>
            </span>
            <span className='value'>{`${currency}${value}`}</span>
        </React.Fragment>
    );
}

const TransactionsList = () => {
    const name = 'Amazon';
    return (
        <div id="transactions-list">
            <h4 id="list-id">Top 10 smallest expenses</h4>
            <ul id="transactions">
                <li id={`transaction_${name}`}>
                    <Transaction
                        name={name}
                        category='shopping'
                        date='2019-02-27'
                        value={600}
                        currency='GBP'
                    />
                </li>
            </ul>
        </div>
    );
}

class Content extends Component {
    render() {
        return (
            <div className="content-container">
                <h1>Transactions</h1>
                <TransactionsList />
            </div>
        );
    }
}

export default Content;

