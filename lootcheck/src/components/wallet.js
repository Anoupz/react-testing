import React, {Component} from 'react';
import {Segment, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {deposit, withDraw} from '../actions/balance';

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: undefined
    }
  }

  updateBalance = event => {
    this.setState({balance: parseInt(event.target.value, 10)});
  };

  makeDeposit = () => {
    this.props.deposit(this.state.balance);
  };

  withDrawFrom = () => {
    this.props.withDraw(this.state.balance);
  };

  render() {
    return (
      <Segment basic>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br/>
        <input type="text" className="input-wallet" onChange={this.updateBalance}/>
        <Button className="btn-deposit" onClick={this.makeDeposit}>Deposit</Button>
        <Button className="btn-withdraw" onClick={this.withDrawFrom}>WithDraw</Button>
      </Segment>
    )
  }
}

export default connect(state => {
  return {balance: state.balance};
}, {deposit, withDraw})(Wallet);