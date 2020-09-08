import React, { Fragment, useEffect, useStat,Component } from 'react';
import { Button, Media } from 'reactstrap';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Details from './DetailComponent';
import Market from './MarketsComponent';
import Resturant from './ResturantComponent';
import Hall from './HallsComponent';
import Fashion from './FashionComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { GOODS } from '../shared/goods';
import {RESTURANTS } from '../shared/resturants';
import { MARKETS } from '../shared/markets';
import { HALLS } from '../shared/halls';
import { FASHION } from '../shared/fashion';
import { LEADERS } from '../shared/leaders';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log("Main constructor")
    this.state = {
      goods: GOODS,
      resturants: RESTURANTS,
      halls: HALLS,
      markets: MARKETS,
      fashions: FASHION,
      leaders: LEADERS,

    };
  }

  render(){
    const MarketPage =()=>{
      return(
        <Market
         markets={this.state.markets}/>
      );
    }
    const FashionPage =()=>{
      return(
        <Fashion
        fashions={this.state.fashions}/>
      );
    }
    const ResturantPage =()=>{
      return(
        <Resturant
         resturants={this.state.resturants}/>
      );
    }


    const HallsPage =()=>{
      return(
        <Hall
         halls={this.state.halls}/>
      );
    }
    const GoodWithId =({match})=>{
      return(
        <Details good={this.state.goods.filter((good) => good.id === parseInt(match.params.goodId,10))[0]} />
      );
    }
    return (
        <div className="App">
          <Header className="col-12 m-1" />
            <Switch>
              <Route path="/markets" component={MarketPage} />
              <Route path="/halls" component={HallsPage} />
              <Route path="/fashions" component={FashionPage} />
              <Route path="/resturants" component={ResturantPage} />
              <Route path="/menu/:goodId" component={GoodWithId} />
              <Route exact path="/menu" component={() => <Menu goods={this.state.goods}/>}/>
              <Route exact path="/contactus" component={() => <Contact/>} />
              <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}/>} />
              <Redirect to="/menu" />
            </Switch>
          <Footer/>
       </div>
  
  );
  }

};

export default Main;