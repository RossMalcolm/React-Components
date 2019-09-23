import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () =>{
    return (
        <div className = "ui container comments">
            <CommentDetail
            author = "Ross" 
            timeAgo = "Today at 5:00PM" 
            avatar = {faker.image.avatar()} 
            text = "nice" 
            />
            <CommentDetail 
            author = "Isaac" 
            timeAgo = "Today at 2:23PM" 
            avatar = {faker.image.avatar()} 
            text = "nice" 
            />
            <CommentDetail 
            author = "Brendan" 
            timeAgo = "Yesterday at 9:00AM" 
            avatar = {faker.image.avatar()} 
            text = "nice" 
            />
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));