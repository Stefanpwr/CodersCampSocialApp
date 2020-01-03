
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            place: '',
            date: '',
            description: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,

        })
    }
    onChangePlace(e) {
        this.setState({
            place: e.target.value

        })
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value

        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value

        })
    }


    onSubmit(e) {
        e.preventDefault();

        const event = {
            name: this.state.name,
            place: this.state.place,
            date: this.state.date,
            description: this.state.description
        }

        console.log(event);

        axios.post('http://10.0.0.2:5000/api/events/create', event)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            place: '',
            date: '',
            description: ''

        })
    }

    render() {
        return (
            <div>
                <h3>Create New Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Event name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                        <label>Event place: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.place}
                            onChange={this.onChangePlace}
                        />
                        <label>Event date: </label>
                        <input type="date"
                            required
                            className="form-control"
                            value={this.state.date}
                            onChange={this.onChangeDate}
                        />
                        <label>Event description: </label>
                        <textarea
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Event" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}