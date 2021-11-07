import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    const menu = props.dishes.map((dish, id) => {
        return (
            <div kay={dish.id} className="col-12 col-md-5 mt-4">
                <Card >
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            </div >
        )
    });

    return (
        <div className="container" >
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={"/home"}>Home</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem active>
                        <Link to={"/menu"}>Menu</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Menu</h3>
                <br></br>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

export default Nav