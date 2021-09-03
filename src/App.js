import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import {Component} from 'react';
import MenuComponent from './components/MenuComponent';
import { DISHES } from './shared/dishes';
class App extends Component
{
  constructor(props){
    super(props);

    this.state={
      dishes:DISHES
    };
  }


  render() {
  return (
    <div>

      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"><strong><bold>Platform No. 9<small><sup>3/4</sup></small></bold></strong></NavbarBrand>
        </div>
      </Navbar>


      <MenuComponent dishes={this.state.dishes} />

    </div>
  )
}
}

export default App;
