import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Nav = (props) => {
    const menu = props.dishes.map((dish, id) => {
        return (
            <div kay={dish.id} className="col-12 col-md-5 mt-4">
                <Card onClick={() => props.onClick(dish.id)}>
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

export default Nav