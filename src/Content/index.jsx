import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import './index.css';

const ErrorMessage = () => (
    <h2 className='error-msg'>
        There are not transactions to show
    </h2>
);

class Content extends Component {
    get transactionsList() {
        const { data, symbol } = this.props;
        return data.length ? <TransactionsList data={data} symbol={symbol} /> : <ErrorMessage />;
    }
    render() {
        return (
            <div className="content-container">
                <h1>Transactions</h1>
                {this.transactionsList}
            </div>
        );
    }
}

export default Content;

