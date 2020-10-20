import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.inputUsername} value={props.name} />
        </div>
    )
}

export default UserInput;