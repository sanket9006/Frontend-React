import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const DishDetailComponent = (props) => {

    const dish = props.dish;
    const comments = props.comments;

    console.log("Triggered")

    const renderComments = () => {
        return (
            <ul >
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p> -- {comment.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                            </p>
                        </li>)
                })}
            </ul>
        )
    }

    const renderImage = () => {
        return (<div kay={dish.id} className="col-12 col-md-5  m-1">
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
        </div >)
    }

    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to={"/menu"}>Menu</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <br></br>
                </div>

                <div className="row">
                    {renderImage()}
                    <div className='col-12 col-md-5 m-2'>
                        <h4> Comments </h4>
                        {renderComments()}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default DishDetailComponent;

