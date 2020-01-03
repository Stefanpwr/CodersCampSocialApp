import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import faker from 'faker';
import axios from 'axios';
import config from './config';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
        username: '',
        dateOfBirth: '',
        email: props.email,
        phoneNumber: '',
        relationship: '',
        cityOfOrigin: '',
        cityOfLiving: '',
        hobbies: '',
        work: '',
        education: ''
       }   
    }
  componentDidMount = async () => {
    this.getUserProfile(this.state.email);
  }  

  async getUserProfile (email) {
    axios.get(`${config.userApi}${email}`, {
        headers: {
            // 'access-control-allow-origin': '*'
            // 'Access-Control-Allow-Origin': '*'
        }
    }).then (response => {
        console.log('----yo: '+JSON.stringify(response));
        this.setState({
            username: response.data.username,
            dateOfBirth: response.data.dateOfBirth,
            email: response.data.email,
            phoneNumber: response.data.phoneNumber,
            relationship: response.data.relationStatus,
            cityOfOrigin: response.data.cityOfOrigin,
            cityOfLiving: response.data.cityOfLiving,
            hobbies: response.data.hobbies,
            work: response.data.work,
            education: response.data.education,
            userId: response.data._id
        })
    });
    }

render() {
//  getUserProfile('au8ujhikect@gmail');
return (
        <div className="ui container profile">
            <div className="profile">
                <div className="profile top">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>
                    <h1 className="name-header">{this.state.username}</h1>
                </div>
            <div className="button-area">
                <div><Link to="/friends">Friends</Link></div>
                <div><Link to="/posts">Posts</Link></div>
                <div><Link to="/events">Events</Link></div>
                <div><Link to="/photos">Photos</Link></div>
                
            </div>
            <div className="content">
                <div className="birthday">Birthday: {this.state.dateOfBirth}</div>
                <div className="email">E-mail: {this.state.email}</div>
                <div className="email">Phone Number: {this.state.PhoneNumber}</div>
                <div className="email">E-mail: {this.state.relationship}</div>
                <div className="email">Interests: {this.state.hobbies}</div>
                <div className="email">From: {this.state.cityOfOrigin}</div>
                <div className="email">Living in: {this.state.cityOfLiving}</div>
                <div className="email">Work: {this.state.work}</div>
                <div className="email">Education: {this.state.education}</div>
            </div>
            </div>
        </div>
    )

}
}
export default Profile;   