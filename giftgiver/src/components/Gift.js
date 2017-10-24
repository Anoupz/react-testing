import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      present: ''
    };
  }

  remove = () => {
    const { removeGift, gift: {id}} = this.props;
    removeGift(id);
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Person' placeholder='person' className="input-person"
                        onChange={event => this.setState({person: event.target.value})}/>
            <Form.Input label='Present' placeholder='present'
                        className="input-present" onChange={event => this.setState({present: event.target.value})}/>
            <Form.Button className="btn-remove" onClick={this.remove}>Remove</Form.Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Gift;
