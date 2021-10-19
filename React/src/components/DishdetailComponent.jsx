import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

export default class DishDetailComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const dish = this.props.dish;


        if (dish != null) {
            return (
                <div className="row">
                    <div kay={dish.id} className="col-12 col-md-5  m-1">
                        <Card >
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>
                                    {dish.name}
                                </CardTitle>
                                <p>{dish.description}</p>
                                {console.log(dish.comments)}
                            </CardBody>
                        </Card>
                    </div >
                    <div className='col-12 col-md-5 m-2'>
                        <h4> Comments </h4>
                        <ul >
                            {dish.comments.map((comment) => {
                                return (
                                    <li key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p> -- {comment.author},
                                            &nbsp;
                                            {new Intl.DateTimeFormat('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: '2-digit'
                                            }).format(new Date(comment.date))}
                                        </p>
                                    </li>)
                            })}
                        </ul>

                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
