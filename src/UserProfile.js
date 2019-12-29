import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import axios from 'axios';

class Profile extends React.Component {
    getUserProfile () {
    axios.get('http...', {

    });
}   
}

const ProfileDetail = props => {
 return(
        <div className="ui container profile">
            <div className="profile">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <h1 className="name-header">{props.username}</h1>
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
    )};

    export default ProfileDetail;

   