import React from 'react';

function UserCard(props){
    return (
        <div className = "user-card">
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
            <p>{props.user.id}</p>
        </div>
    )
}

export default UserCard;