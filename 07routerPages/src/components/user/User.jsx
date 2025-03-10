import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const userId = useParams().userId;
    return (
        <div className="bg-blue-400 text-white text-center text-2xl p-4">
            User: {userId}
        </div>
    );
}

export default User;
