import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Content from './Content';
import './App.css';

const Loading = () => <h1 className='loading'>Loading</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null }
    this.symbol = { 'GBP': '£', 'USD': '$', 'EUR': '€' };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    return fetch('http://www.mocky.io/v2/5c62e7c33000004a00019b05')
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        this.setState({ data: response });
      });
  }
  get layout() {
    const { provider, balance, transactions } = this.state.data;
    return (
      <React.Fragment>
        <SideMenu provider={provider} balance={balance} symbol={this.symbol} />
        <Content data={transactions} symbol={this.symbol} />
      </React.Fragment>
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        {data !== null ? this.layout : <Loading />}
      </div>
    );
  }
}

export default App;
