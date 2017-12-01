import * as React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

interface IAddState {
  name: string;
  directions: string;
  recipe: Recipe;
}
interface Recipe {
  flours: Array<Ingredient>;
  liquid: Array<Ingredient>;
  preferment: Preferment;
  salt: number;
  other: Array<Ingredient>;
}
interface Ingredient {
  type: string;
  percentage: number;
}
interface Preferment {
  flour: Array<Ingredient>;
  liquid: Array<Ingredient>;
  starter: number;
}

class AddState extends React.Component<IAddState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      directions: '',
      recipe: {}
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
  }
  // input event handlers
  handleNameChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: event.currentTarget.value });
  };
  handleDirectionChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    this.setState({ directions: event.currentTarget.value });
  };
  addIngredient = () => {
    return (
      <div>
        <input placeholder="ingredient" />
        <input placeholder="percent" />
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <input onChange={this.handleNameChange} />
            <textarea onChange={this.handleDirectionChange} />
          </div>
          <div className="col-9">
            <h3>Flours</h3>
            <button onClick={this.addIngredient} />
            <h3>Liquids</h3>
            <button onClick={this.addIngredient} />
            <h3>Salt</h3>
            <button onClick={this.addIngredient} />
            <h3>Other</h3>
            <button onClick={this.addIngredient} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button>Save</button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddState;
