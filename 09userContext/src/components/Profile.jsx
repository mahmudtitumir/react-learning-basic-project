import React from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { data } = React.useContext(UserContext);
    if (!data) {
        return <h1>Not logged in</h1>;
    }
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Wellcome {data.username}</p>
        </div>
    );
}

export default Profile;
