import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.inputUsername} />
        </div>
    )
}

export default UserInput;