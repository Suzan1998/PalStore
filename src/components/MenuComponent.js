import React from "react";
import { Media, Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom'

    function RenderMenuItem({good})
    {
        return(
                <Card>
                    <Link to={`/menu/${good.id}`}>
                    <CardImg style={{height:350, borderRadius:10}}src={good.image} alt={good.name}/>
                    <CardImgOverlay>
                        <CardTitle className="cardTitle col-12  ">{good.name}<Media className="logo"object src={good.logo}/></CardTitle>
                    </CardImgOverlay>
                    </Link>
                </Card>);

    }
  

    const Menu=(props)=>{
        const menu = props.goods.map((good)=>{
            return(
                <div key={good.id} className="col-12  m-1">
                <RenderMenuItem good={good} />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                         <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                    </div>
                </div>
                <div className="row">
                        {menu}
                </div>
                
            </div>

         );

    }
     


export default Menu;