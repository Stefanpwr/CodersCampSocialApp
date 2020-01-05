import React  from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "../components/Navbar.js";
import RegisterForm from "../pages/RegisterForm.js";
import UserProfile from "../pages/UserProfile.js";
import Comments from '../pages/Comments';
import CommentsInsert from '../pages/CommentsInsert';
import CommentsList from '../pages/CommentsList';
import CommentsUpdate from '../pages/CommentsUpdate';

const FriendsPage = () => {
    return <div>FriendsPage</div>;
};

const PostsPage = () => {
    return <div>PostsPage</div>;
};

const CommentsPage = () => {
    return <div>CommentsPage</div>;
};

const PhotosPage = () => {
    return <div>PhotosPage</div>;
};

const App = () => {
    return ( 
        <div style = {{
            backgroundColor: "#d0ecf0",
            minHeight: "100vh"
        }}>
        <Navbar />
            <BrowserRouter >
                <div>
                    <Route path="/" exact component ={RegisterForm} />
                    <Route 
                    path="/profile"
                    render={ () => < UserProfile email='au8ujhikect@gmail' />}
                    />
                    <Route path="/friends" component={FriendsPage}/>
                    <Route path="/posts" component={PostsPage}/>
                    <Route path="/comments" exact component={Comments}/>
                    <Route path="/comments/list" exact component={CommentsList}/>
                    <Route path="/comments/create" exact component={CommentsInsert}/>
                    <Route path="/comments/update/:id" exact component={CommentsUpdate}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;