import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";
import UserProfile from "./UserProfile";
import EventList from './EventList.jsx';
import EventInsert from './EventInsert.jsx';
import EventUpdate from './EventUpdate.jsx';

const FriendsPage = () => {
    return <div>FriendsPage</div>;
};

const PostsPage = () => {
    return <div>PostsPage</div>;
};

const EventsPage = () => {
    return <div>EventsPage</div>;
};

const PhotosPage = () => {
    return <div>PhotosPage</div>;
};

const App = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={RegisterForm} />
                    <Route path="/profile" render={() => <UserProfile email='au8ujhikect@gmail'/>} />
                    <Route path="/friends" component={FriendsPage} />
                    <Route path="/posts" component={PostsPage} />
                    <Route path="/events/list" exact component={EventList} />
                    <Route path="/events/create" exact component={EventInsert} />
                    <Route
                        path="/events/update/:id"
                        exact
                        component={EventUpdate}
                    />
                    <Route path="/photos" component={PhotosPage} />
                </div>
            </BrowserRouter>


        </div>
    );
};

export default App;