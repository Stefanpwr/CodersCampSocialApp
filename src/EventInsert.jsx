
import React, { Component } from 'react';
import axios from 'axios';
import api from './api'
import Button from 'react-bootstrap/Button';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.handleChangeInputName = this.handleChangeInputName.bind(this);
        this.handleChangeInputPlace = this.handleChangeInputPlace.bind(this);
        this.handleChangeInputDate = this.handleChangeInputDate.bind(this);
        this.handleChangeInputDescription = this.handleChangeInputDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            place: '',
            date: '',
            description: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputPlace = async event => {
        const place = event.target.value
        this.setState({ place })
    }
    handleChangeInputDate = async event => {
        const date = event.target.value
        this.setState({ date })
    }
    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }


    onSubmit = async (e) => {
        e.preventDefault();

        const event = {
            name: this.state.name,
            place: this.state.place,
            date: this.state.date,
            description: this.state.description
        }

        console.log(event);

        await axios.post('/create', event)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            place: '',
            date: '',
            description: ''

        })
    }
    // handleIncludeEvent = async (e) => {
    //     e.preventDefault();
    //     const { name, place, date, description } = this.state
    //     const payload = { name, place, date, description }

    //     await api.insertEvent(payload).then(res => {
    //         window.alert(`Event inserted successfully`)
    //         this.setState({
    //             name: '',
    //             place: '',
    //             date: '',
    //             description: ''
    //         })
    //     })
    // }


    render() {
        return (
            <div>
                <h3>Create New Event</h3>
                <form >
                    <div className="form-group">
                        <label>Event name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChangeInputName}
                        />
                        <label>Event place: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.place}
                            onChange={this.handleChangeInputPlace}
                        />
                        <label>Event date: </label>
                        <input type="date"
                            required
                            className="form-control"
                            value={this.state.date}
                            onChange={this.handleChangeInputDate}
                        />
                        <label>Event description: </label>
                        <textarea
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleChangeInputDescription}
                        />
                    </div>
                    <div className="form-group">
                        <Button variant="primary" size="sm" onClick={this.onSubmit} block="block" type="submit">
                            Create Event
        </Button>

                        <Button variant="danger" size="sm" href={'/events'} block="block">
                            Back to Events
        </Button>
                    </div>
                </form>
            </div>
        )
    }
}