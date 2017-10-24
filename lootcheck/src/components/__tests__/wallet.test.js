import React from "react";
import {shallow} from "enzyme";
import {Wallet} from '../wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithDraw = jest.fn();
  const props = {balance: 20, deposit: mockDeposit, withDraw: mockWithDraw};
  const wallet = shallow(<Wallet {...props}/>);

  it('renders correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
  });

  it('creates an input to deposit into or withdraw from balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBeTruthy();
  });

  describe('when the user types into wallet input', () => {
    const userBalance = '25';
    beforeEach(() => {
      wallet.find('.input-wallet').simulate('change', {target: {value: userBalance}});
    });

    it('updates the local wallet balance in the state and it converts to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('user wants to make a deposit', () => {

      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click')
      });

      it('dispatches the deposit() it receives from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('user wants to make a withdrawal', () => {

      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click')
      });

      it('dispatches the withdraw() it receives from props with local balance', () => {
        expect(mockWithDraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });

});