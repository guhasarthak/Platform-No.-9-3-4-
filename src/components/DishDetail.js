import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap'
import { List } from 'reactstrap';
export default class DishDetail extends Component {

    constructor(props) {

        super(props);

    }

    renderDish(dish) {

        if (dish != null) {

            const comments = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                         <List type="unstyled">
                             <li>{comment.comment}</li>
                             <li> --{comment.author} , {comment.date}</li>
                         </List>  
                    </div>
                )
            });


            return (
                <div class="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        
                            <h4><strong>Comments</strong></h4>
                            {comments}
                    </div>
                </div>

            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {

        return (
            <div>
                {this.renderDish(this.props.dish)}
            </div>
        )
    }
}
