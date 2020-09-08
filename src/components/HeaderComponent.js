import React, { Component } from 'react';
import { Navbar,Nav, NavItem, NavbarBrand,NavbarToggler,Collapse,Jumbotron,Media,Card,
Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';
const   img='/assets/images/pal2.png'
class Header extends Component {

constructor(props){
  super(props);
  this.state={
    isNavOpen: false,
    isModalOpen: false,
    isModal2Open: false,
  }
  this.toggleNav=this.toggleNav.bind(this)
  this.toggleModal=this.toggleModal.bind(this)
  this.toggleModal2=this.toggleModal2.bind(this)
  this.handleLogin=this.handleLogin.bind(this)
  this.handleSignUp=this.handleSignUp.bind(this)
}

toggleNav(){
  this.setState({
    isNavOpen: !this.state.isNavOpen
  });
}
toggleModal(){
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}
toggleModal2(){
  this.setState({
    isModal2Open: !this.state.isModal2Open
  });
}
handleLogin(event) {
  this.toggleModal();
  alert("email: " + this.email.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
  event.preventDefault();

}
handleSignUp(event) {
  this.toggleModal2();
  alert("firstname: " + this.firstname.value + " lastname: " +
   this.lastname.value +" email: " + this.email.value +" Password: " + this.password.value);
  event.preventDefault();

}
  render() {
    return(
    <React.Fragment>
           <Navbar    style={{backgroundColor:'#000000'}} expand="md" >
                <div className="container">
                  <NavbarToggler  onClick={this.toggleNav}>
                    <span className=" fa fa-bars"> List All</span>
                  </NavbarToggler>
                    <NavbarBrand className="title mr-auto"   href="/" >
                      <img src="/assets/images/pal2.png" width="100" height="100" alt="PalShop Store"/>
                        </NavbarBrand>
                         <Collapse isOpen={this.state.isNavOpen} navbar> 
                          <Nav navbar>
                            <NavItem>
                              <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-home fa-lg" > Home</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg" > About Us</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg" > Menu</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg" > Contact Us</span>
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <Nav className="ml-auto" navbar>
                            <NavItem>
                              <Button outline onClick={this.toggleModal}>
                              <span className="fa fa-sign-in fa-lg" > Log In</span>
                              </Button>
                              <Button outline onClick={this.toggleModal2}>
                              <span onClick={this.toggleModal2}className="fa fa-user-plus fa-lg" > Sign Up</span>
                              </Button>
                            </NavItem>
                          </Nav>
                          </Collapse> 
                </div>
            </Navbar>
      <Jumbotron>
               <div className="row">
                       <h1>Palestine Store</h1>
                       <p>Welcome to Palestinian largest website, Here you will find all what you need!!</p>
                   </div>
                   <div className="row">
                   <Nav navbar className="navbar-items">
                            <NavItem>
                              <NavLink className="nav-link" to="/markets">
                               <img className="icon-logo" src="/assets/images/icons/market.png"/>
                                <span className=" fa fa-lg">Markets</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="nav-link" to="/resturants">
                              <img className="icon-logo" src="/assets/images/icons/rest.png"/>
                                <span className="fa fa-lg">Resturants</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="nav-link" to="/fashions">
                              <img className="icon-logo" src="/assets/images/icons/fashion.png"/>
                                <span className="fa fa-lg">Fashion</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="nav-link" to="/halls">
                              <img className="icon-logo" src="/assets/images/icons/halls.png"/>
                                <span className="fa fa-lg">Wedding Halls</span>
                              </NavLink>
                            </NavItem>
                          </Nav>

                   </div>
       </Jumbotron>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
         <ModalHeader>Log In <span className="fa fa-sign-in fa-lg"/></ModalHeader>
           <ModalBody>
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="text" id="email" name="email"
                        innerRef={(input) => this.email = input} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                        innerRef={(input) => this.password = input}  />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="remember"
                        innerRef={(input) => this.remember = input}  />
                        Remember me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
           </Form>
           </ModalBody>
       </Modal>
       <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
         <ModalHeader>Sign Up <span className="fa fa-user-plus fa-lg"/> </ModalHeader>
         <ModalBody>
           <Form onSubmit={this.handleSignUp}>
           <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input type="text" id="firstname" name="firstname"
                        innerRef={(input) => this.firstname = input} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input type="text" id="lastname" name="lastname"
                        innerRef={(input) => this.lastname = input} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="text" id="email" name="email"
                        innerRef={(input) => this.email = input} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                        innerRef={(input) => this.password = input}  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Sign Up</Button>
           </Form>
         </ModalBody>
       </Modal>
    </React.Fragment>
    );
  }
}

export default Header;