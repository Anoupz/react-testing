import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('App', () => {
  const app = shallow(<App/>);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the add gift button', () => {
    const giftId = 1;
    beforeEach(() => {
      app.find('.button').simulate('click');
    });

    afterEach(() => {
      app.setState({gifts: []})
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{id: giftId}]);
    });

    it('add a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(giftId);
    });

    it('creates a gift component', () => {
      expect(app.find('Gift').exists()).toBeTruthy();
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(giftId);
      });

      it('removes the gift from state', () => {
        expect(app.state().gifts).toEqual([]);
      });
    })
  });
});
