import Menu from './MenuComponent'
import React from 'react';
import dishes from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import { Switch, Redirect, Route } from 'react-router-dom'
import Contact from './ContactComponent'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutusComponent'
class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: dishes,
      selectedDish: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }

  render() {

    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };

    return (
      <React.Fragment >
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={() =>
            <HomeComponent
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
          } />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </React.Fragment>
    )
  }
}

export default MainComponent;