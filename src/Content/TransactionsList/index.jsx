import React from 'react';
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

const TransactionsList = ({ data: allData, symbol }) => {
    const data = allData.sort((a, b) => a.amount.value + b.amount.value);
    console.log(data);
    return (
        <div id="transactions-list">
            <h4 id="list-id">Top 10 smallest expenses</h4>
            <ul id="transactions">
                {
                    data.slice(0, 9).map(d => (
                        <li
                            id={`transaction_${d.description}`}
                            key={`transaction_${d.description}`}
                        >
                            <Transaction
                                name={d.description}
                                category={d.category_title}
                                date={d.date}
                                value={d.amount.value}
                                currency={symbol[d.amount.currency_iso]}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TransactionsList;
