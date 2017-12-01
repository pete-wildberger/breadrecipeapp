import * as React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

interface IAddState {
  name: string;
  directions: string;
  recipe: recipe;
}
interface recipe {
  flours: Array<ingredient>;
  liquid: Array<ingredient>;
  preferment: preferment;
  salt: number;
  other: Array<ingredient>;
}
interface ingredient {
  type: string;
  percentage: number;
}
interface preferment {
  flour: Array<ingredient>;
  liquid: Array<ingredient>;
  starter: number;
}

class AddState extends React.Component<IAddState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      directions: '',
      ingredients: []
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  // input event handlers
  handleNameChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        Home
        <input onChange={this.handleNameChange} />
      </div>
    );
  }
}
export default AddState;