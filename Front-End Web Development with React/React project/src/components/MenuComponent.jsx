import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

export default class Nav extends Component {

    constructor(props) {
        super(props)

        console.log(props)
        console.log('Menu component Constructor is invoked')
    }

    componentDidMount() {
        console.log('Menu component componentDidMount is invoked')

    }

    render() {

        console.log('Menu component render is invoked')

        const menu = this.props.dishes.map((dish, id) => {
            return (
                <div kay={dish.id} className="col-12 col-md-5 mt-4">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div >
            )
        });

        return (
            <div className="container" >
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}