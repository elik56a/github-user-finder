import React from 'react';

const UserForm = ({ getUser }) => {
    return (
        <form onSubmit={getUser}>
            <input type="text" placeholder='Enter UserName Here' name='username' />
            <button>Submit!</button>
        </form>

    )


}

export default UserForm;