import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Label, Col, CardImg, CardTitle, CardBody, Breadcrumb, ModalHeader, Modal, ModalBody, BreadcrumbItem, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    // handleSubmit() {
    //     alert('Current');
    // }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggleModal} color="secondary" outline><span className="fa fa-pencil mr-2"></span> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleCommentFormModal} >
                    <ModalHeader toggle={this.toggleCommentFormModal}> Submit Comment </ModalHeader>
                    <ModalBody>

                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            {/* rating */}
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12} >Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating"
                                        className="form-control"
                                        name="rating"
                                        id="rating"
                                        validators={{
                                            required
                                        }}
                                    >
                                        <option>Please Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>


                            {/* author */}
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}> Your Name </Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>




                            {/* comment */}
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>

                            </Row>

                            {/* submit button */}
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>

                    </ModalBody>
                </Modal>
            </React.Fragment>

        )
    }
}

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
                        <CommentForm />

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

