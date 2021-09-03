import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap'
import DishDetail from './DishDetail';
export default class MenuComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log("MenuComponent's constructor is being invoked.");
    }

    componentDidMount(){
        console.log("MenuComponent's componentDidMount is being invoked.");
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }



    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        console.log("MenuComponent's render is being invoked.");
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <DishDetail dish={this.state.selectedDish}/>
            </div>
        )
    }
}
