import React from 'react';

const UserOutput = (props) => {
    return (
        <div className='userOutput'>
            <p>{props.username1}</p>
            <p>{props.username2}</p>
        </div>
    )
}

export default UserOutput;