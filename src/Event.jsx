import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventInsert from "./EventInsert";
import EventUpdate from "./EventUpdate";
import EventList from "./EventList";
import Events from "./imgs/event.jpg"
const EventsPage = () => {
    return (
        <div>
            <div style={{ width: "60%", margin: "0 auto" }}>
                <img src={Events} alt="Events" style={{ width: "100%" }} />
                <Button variant="danger" size="sm" href={'/profile'} block="block">
                    Back to Profile
</Button>
            </div>
        </div>
    );
};

function Event() {
    return (<Router>
        <div className="App ">

            <Navbar bg="dark" variant="dark" >
                <Container className="justify-content-start">
                    <Navbar.Brand >
                        <Link to={"/events"} className="nav-link">
                            Event
              </Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav>
                            <Link to={"/events/create"} className="nav-link">
                                Create Event
                </Link>
                        </Nav>

                        <Nav>
                            <Link to={"/events/list"} className="nav-link">
                                Event List
                </Link>
                        </Nav>
                    </Nav>

                </Container>
            </Navbar>



            <Container >

                <Col  >
                    <div className="wrapper">
                        <Switch>
                            <Route exact path='/events/' component={EventsPage} />
                            <Route path="/events/create" component={EventInsert} />
                            <Route path="/events/list" component={EventList} />
                        </Switch>
                    </div>
                </Col>

            </Container>
        </div>
    </Router>);
}

export default Event;