import React ,{ Component } from "react";
import { Media, Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom'

   

    function RenderDetailsComponent({good}){
        return(
            <Card id="detailsCard">
              <CardImg style={{width:500, height:400}}src={good.image} alt={good.name}/>
              <CardBody>
                <CardTitle>{good.name}</CardTitle>
                <CardText>{good.category}</CardText>
                <CardText>{good.description}</CardText>
              </CardBody>
            </Card>
        );
    }

    const Details = (props) =>{
        if(props.good.id!=null){
            return(
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                         <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                         <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.good.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3> {props.good.name}</h3>
                    </div>
                </div> 
                 <RenderDetailsComponent good={props.good}/>
                 </div>
                 );
           
        }
        else{
            return(
                <div></div>
            );

        }
    }
       
        
    



    
    


export default Details;