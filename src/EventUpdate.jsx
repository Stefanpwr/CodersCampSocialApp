import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EventUpdate extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            name: '',
            place: '',
            date: '',
            description: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/events/update/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    place: res.data.place,
                    date: res.data.date,
                    description: res.data.description
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangePlace(e) {
        this.setState({ place: e.target.value })
    }

    onChangeDate(e) {
        this.setState({ date: e.target.value })
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const eventObject = {
            name: this.state.name,
            place: this.state.place,
            date: this.state.date,
            description: this.state.description
        };

        axios.put('http://localhost:5000/events/update/' + this.props.match.params.id, eventObject)
            .then((res) => {
                console.log(res.data)
                console.log('Event successfully updated')
            }).catch((error) => {
                console.log(error)
            })

        // Redirect to Student List 
        this.props.history.push('/events')
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Place</Form.Label>
                    <Form.Control type="text" value={this.state.place} onChange={this.onChangePlace} />
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={this.state.date} onChange={this.onChangeDate} />
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" value={this.state.description} onChange={this.onChangeDescription} />
                </Form.Group>


                <Button variant="danger" size="lg" block="block" type="submit">
                    Update Event
        </Button>
            </Form>
        </div>);
    }
}