import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {NavLink} from 'react-router-dom';

function RenderCard({item}) {

    return(
       
        <Card>
             <NavLink className="nav-link" to="/menu">
            <CardImg src={item.image} alt={item.name} />
            </NavLink>
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
      
    );

}

function Market(props){
    const market = props.markets.map((market)=>{
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={market} />
                </div>
            </div>
        </div>
    );})

    return(
        <div className="container">
                <div className="row">
                        {market}
                </div>    
            </div>
    );
}

export default Market;