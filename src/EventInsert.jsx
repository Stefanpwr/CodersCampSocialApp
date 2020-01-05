
import React, { Component } from 'react';
import axios from 'axios';
import api from './api'
import Button from 'react-bootstrap/Button';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);

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

    handleIncludeEvent = async (e) => {
        e.preventDefault();
        const { name, place, date, description } = this.state
        const payload = { name, place, date, description }

        await api.insertEvent(payload).then(res => {
            window.alert(`Event inserted successfully`)
            this.setState({
                name: '',
                place: '',
                date: '',
                description: ''
            })
        })
    }


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
                        <Button variant="primary" size="sm" onClick={this.handleIncludeEvent} block="block" type="submit">
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