import * as React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
interface Props {}
interface IAddState {
  name: string;
  directions: string;
  ingredients: Array<Ingredient>;
  preferment: Preferment;
  salt: number;
  inputName: string;
  inputType: string;
  inputPercentage: number;
}

interface Ingredient {
  name: string;
  type: string;
  percentage: number;
}
interface Preferment {
  flour: Array<Ingredient>;
  liquid: Array<Ingredient>;
  starter: number;
}

class AddState extends React.Component<Props, IAddState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      directions: '',
      ingredients: [],
      preferment: {
        flour: [],
        liquid: [],
        starter: 0
      },
      salt: 0,
      inputName: '',
      inputType: '',
      inputPercentage: 0
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this);
    this.handleIngredientTypeChange = this.handleIngredientTypeChange.bind(this);
    this.handleIngredientPercentageChange = this.handleIngredientPercentageChange.bind(this);
    this.saveIngredient = this.saveIngredient.bind(this);
  }
  // input event handlers
  handleNameChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: event.currentTarget.value });
  };
  handleDirectionChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    this.setState({ directions: event.currentTarget.value });
  };
  handleIngredientNameChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ inputName: event.currentTarget.value });
  };
  handleIngredientTypeChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ inputType: event.currentTarget.value });
  };
  handleIngredientPercentageChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ inputPercentage: (event.currentTarget as any).value });
  };

  saveIngredient = () => {
    let stateCopy = this.state;
    let ingredientArray: Array<Ingredient> = stateCopy.ingredients;
    ingredientArray.push({
      name: stateCopy.inputName,
      type: stateCopy.inputType,
      percentage: stateCopy.inputPercentage
    });
    this.setState({ ingredients: ingredientArray });
  };
  addIngredientInput = () => {
    return (
      <div>
        <input onChange={this.handleIngredientNameChange} placeholder="ingredient" />
        <input onChange={this.handleIngredientTypeChange} placeholder="ingredient type" />
        <input onChange={this.handleIngredientPercentageChange} type="number" placeholder="percent" />
        <button>Save</button>
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
            <button onClick={this.addIngredientInput} />
            <h3>Liquids</h3>
            <button onClick={this.addIngredientInput} />
            <h3>Salt</h3>
            <button onClick={this.addIngredientInput} />
            <h3>Other</h3>
            <button onClick={this.addIngredientInput} />
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
