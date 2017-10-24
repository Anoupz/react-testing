import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import Gift from './Gift';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      gifts: []
    };
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({id: maxId + 1});
    this.setState({gifts});
  };

  removeGift = (id) => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({gifts});
  };

  render() {
    const {gifts} = this.state;
    return (
      <Container>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            )
          })}
        </div>
        <Button className="button" onClick={this.addGift}>
          Add Gifts
        </Button>
      </Container>
    )
  }
}

export default App;
