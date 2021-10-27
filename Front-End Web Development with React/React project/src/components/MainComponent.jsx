import Menu from './MenuComponent'
import React from 'react';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import Contact from './ContactComponent'

import About from './AboutusComponent'
import { connect } from 'react-redux';

const mapStateToRedux = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {

    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };

    return (
      <React.Fragment >
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={() =>
            <HomeComponent
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
          } />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </React.Fragment>
    )
  }
}

export default withRouter(connect(mapStateToRedux)(MainComponent));