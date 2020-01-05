import React from "react";
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";
import UserProfile from "./UserProfile";
import Friends from "./Friends/app";
import Event from './Event.jsx';
import EventList from './EventList.jsx';
import EventInsert from './EventInsert.jsx';
import EventUpdate from './EventUpdate.jsx';

const PostsPage = () => {
    return <div > PostsPage </div>;
};


const PhotosPage = () => {
    return <div > PhotosPage </div>;
};

const App = () => {
    return ( <
        div style = {
            {
                backgroundColor: "#d0ecf0",
                minHeight: "100vh"
            }
        } >
        <
        Navbar / >
        <
        BrowserRouter >
        <
        div >
        <
        Route path = "/"
        exact component = {
            RegisterForm
        }
        /> <
        Route path = "/profile"
        render = {
            () => < UserProfile email = 'au8ujhikect@gmail' / >
        }
        /> <
        Route path = "/friends"
        component = {
            () => <Friends/>
        }
        /> <
        Route path = "/posts"
        component = {
            PostsPage
        }
        /> <
        Route path = "/events"
        exact component = {
            Event
        }
        /> <
        Route path = "/events/list"
        exact component = {
            EventList
        }
        /> <
        Route path = "/events/create"
        exact component = {
            EventInsert
        }
        /> <
        Route path = "/events/update/:id"
        exact component = {
            EventUpdate
        }
        /> <
        Route path = "/photos"
        component = {
            PhotosPage
        }
        /> <
        /div> <
        /BrowserRouter>


        <
        /div>
    );
};

export default App;


 
        