import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail
                author = "Ross" 
                timeAgo = "Today at 5:00PM" 
                avatar = {faker.image.avatar()} 
                text = "nice" 
                />
            </ApprovalCard> 
            <ApprovalCard>  
                <CommentDetail 
                author = "Isaac" 
                timeAgo = "Today at 2:23PM" 
                avatar = {faker.image.avatar()} 
                text = "nice" 
            />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author = "Brendan" 
                timeAgo = "Yesterday at 9:00AM" 
                avatar = {faker.image.avatar()} 
                text = "nice" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author = "Rebecca" 
                timeAgo = "Yesterday at 9:00AM" 
                avatar = {faker.image.avatar()} 
                text = "Yeet" 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));