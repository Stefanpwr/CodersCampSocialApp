import React  from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "../components/Navbar.js";
import RegisterForm from "../pages/RegisterForm.js";
import UserProfile from "../pages/UserProfile.js";

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
    return(
        <div>
            <Navbar/>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={RegisterForm} />
                    <Route path="/profile" render={() => <UserProfile email='au8ujhikect@gmail'/>} />
                    <Route path="/friends" component={FriendsPage} />
                    <Route path="/posts" component={PostsPage} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/photos" component={PhotosPage} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;