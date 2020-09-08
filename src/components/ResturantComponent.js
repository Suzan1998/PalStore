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

function Resturant(props){
    const resturant = props.resturants.map((resturant)=>{
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={resturant} />
                </div>
            </div>
        </div>
    );})

    return(
        <div className="container">
                <div className="row">
                        {resturant}
                </div>    
            </div>
    );
}

export default Resturant;