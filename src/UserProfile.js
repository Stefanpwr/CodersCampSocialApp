import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import faker from 'faker';
import axios from 'axios';
import config from './config';


// class Profile extends React.Component {
  async function getUserProfile (email) {
    axios.get(`${config.userApi}${email}`, {
        headers: {
            'access-control-allow-origin': '*'
        }
    }).then (response => {
        console.log('----yo: '+JSON.stringify(response));
    });
    }
// }

const ProfileDetail = props => {
 getUserProfile('au8ujhikect@gmail');
return (
        <div className="ui container profile">
            <div className="profile">
                <div className="profile top">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>
                    <h1 className="name-header">{props.username}</h1>
                </div>
            <div className="button-area">
                <div><Link to="/friends">Friends</Link></div>
                <div><Link to="/posts">Posts</Link></div>
                <div><Link to="/events">Events</Link></div>
                <div><Link to="/photos">Photos</Link></div>
                
            </div>
            <div className="content">
                <div className="birthday">Birthday: {props.dateOfBirth}</div>
                <div className="email">E-mail: {props.email}</div>
                <div className="email">Phone Number: {props.PhoneNumber}</div>
                <div className="email">E-mail: {props.relationship}</div>
                <div className="email">Interests: {props.hobbies}</div>
                <div className="email">From: {props.cityOfOrigin}</div>
                <div className="email">Living in: {props.cityOfLiving}</div>
                <div className="email">Work: {props.work}</div>
                <div className="email">Education: {props.education}</div>
            </div>
            </div>
        </div>
    )


}
    export default ProfileDetail;

   