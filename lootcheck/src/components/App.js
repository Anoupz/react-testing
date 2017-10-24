import React from "react";
import {Container, Header} from "semantic-ui-react";
import Wallet from './wallet';
import Loot from './Loot';

const App = () => {
  return (
    <Container>
      <Header as="h1">LootCheck</Header>
      <hr/>
      <Wallet/>
      <hr/>
      <Loot/>
    </Container>
  );
};

export default App;
