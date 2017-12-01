import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddRecipe from './components/AddRecipe';
import List from './components/List';
// import Display from './components/Display';
import './styles/main.min.css';

// 404 for people who get lost
const FourOhFour = () => <h1>Oh no 404</h1>;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/add" component={AddRecipe} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
