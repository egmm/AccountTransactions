import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import SideMenu from './SideMenu';
import TransactionsList from './Content/TransactionsList';
import testData from './tests/testData.json';
import { smalestExpenses } from './tests/smalestExpenses';

Enzyme.configure({ adapter: new Adapter() });
const symbol = { 'GBP': '£', 'USD': '$', 'EUR': '€' };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Checking the side menu', () => {
  test('that shows the correct username, balance and symbol', () => {
    const { provider, balance } = testData;
    const wrapper = mount(
      <SideMenu
        provider={provider}
        balance={balance}
        symbol={symbol}
      />
    );
    const username = wrapper.find('#username');
    expect(username.text()).toBe(provider.title);

    const renderedBalance = wrapper.find('#balance>p');
    expect(renderedBalance.text())
      .toBe(`${symbol[balance.currency_iso]}${balance.amount}`);
  });

  describe('Checking the trasnsactions list', () => {
    test('it is showing the 10 smalest expenses', () => {
      const { transactions } = testData;
      const wrapper = mount(
        <TransactionsList
          data={transactions}
          symbol={symbol}
        />
      );
      // Get the transactions once rendered
      const rendered = wrapper.find('#transactions>li').map(t => {
        return {
          category_title: t.find('span.category').text(),
          description: t.find('span.transaction-description').find('h4').text(),
          date: t.find('span.transaction-description').find('span.transaction-date').text(),
          value: t.find('span.value').text()
        };
      });

      expect(rendered).toEqual(smalestExpenses);
    });
  });
});